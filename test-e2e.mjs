import { spawn } from 'node:child_process';
import http from 'node:http';

const PORT = 4173;
const HOST = '127.0.0.1';
const BASE_URL = `http://${HOST}:${PORT}`;

const routesToTest = [
  // Core SPA routes
  { path: '/', expectedStatus: 200, isHtml: true, desc: 'Home Page' },
  { path: '/services', expectedStatus: 200, isHtml: true, desc: 'Services Page' },
  { path: '/solutions', expectedStatus: 200, isHtml: true, desc: 'Solutions Page' },
  { path: '/about', expectedStatus: 200, isHtml: true, desc: 'About Page' },
  { path: '/contact', expectedStatus: 200, isHtml: true, desc: 'Contact Page' },
  { path: '/blog', expectedStatus: 200, isHtml: true, desc: 'Blog Index Page' },
  { path: '/blog/the-smallest-tasks-can-become-your-biggest-operational-cost', expectedStatus: 200, isHtml: true, desc: 'Blog Article 1' },
  { path: '/blog/before-you-add-ai-fix-the-engine', expectedStatus: 200, isHtml: true, desc: 'Blog Article 2' },
  { path: '/blog/connected-workflows-over-isolated-tools', expectedStatus: 200, isHtml: true, desc: 'Blog Article 3' },
  { path: '/privacy', expectedStatus: 200, isHtml: true, desc: 'Privacy Policy Page' },

  // Backward compatibility legacy routes (should load SPA and be handled by React Router aliases)
  { path: '/index.html', expectedStatus: 200, isHtml: true, desc: 'Legacy index.html' },
  { path: '/services.html', expectedStatus: 200, isHtml: true, desc: 'Legacy services.html' },
  { path: '/solutions.html', expectedStatus: 200, isHtml: true, desc: 'Legacy solutions.html' },
  { path: '/about.html', expectedStatus: 200, isHtml: true, desc: 'Legacy about.html' },
  { path: '/contact.html', expectedStatus: 200, isHtml: true, desc: 'Legacy contact.html' },
  { path: '/blog.html', expectedStatus: 200, isHtml: true, desc: 'Legacy blog.html' },
  { path: '/blog-detail.html', expectedStatus: 200, isHtml: true, desc: 'Legacy blog-detail.html' },
  { path: '/privacy.html', expectedStatus: 200, isHtml: true, desc: 'Legacy privacy.html' },

  // Static assets
  { path: '/logo.png', expectedStatus: 200, isHtml: false, desc: 'Logo PNG' },
  { path: '/logo_stacked.png', expectedStatus: 200, isHtml: false, desc: 'Stacked Logo PNG' },
  { path: '/services_globe.png', expectedStatus: 200, isHtml: false, desc: 'Globe Asset' },
  { path: '/robots.txt', expectedStatus: 200, isHtml: false, desc: 'Robots.txt' },
  { path: '/sitemap.xml', expectedStatus: 200, isHtml: false, desc: 'Sitemap.xml' },
  { path: '/assets/images/rpa-workflow.mp4', expectedStatus: 200, isHtml: false, desc: 'RPA Workflow Video' }
];

function fetchUrl(urlPath) {
  return new Promise((resolve, reject) => {
    const req = http.get(`${BASE_URL}${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });
    req.on('error', (err) => reject(err));
    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timed out'));
    });
  });
}

async function waitForServer(maxAttempts = 30, intervalMs = 500) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetchUrl('/');
      if (res.statusCode === 200) {
        return true;
      }
    } catch {
      // server not ready yet
    }
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  return false;
}

async function run() {
  console.log('🚀 Starting Vite preview server...');
  const isWindows = process.platform === 'win32';
  const npmCmd = isWindows ? 'npm.cmd' : 'npm';
  
  const server = spawn(npmCmd, ['run', 'preview', '--', '--port', String(PORT), '--host', HOST], {
    stdio: 'pipe',
    shell: isWindows
  });

  server.stdout.on('data', (data) => {
    // console.log(`[Preview Server]: ${data.toString().trim()}`);
  });

  server.stderr.on('data', (data) => {
    // console.error(`[Preview Server Err]: ${data.toString().trim()}`);
  });

  try {
    const ready = await waitForServer();
    if (!ready) {
      throw new Error(`Server failed to start on ${BASE_URL} within timeout.`);
    }
    console.log(`✅ Vite preview server active at ${BASE_URL}\n`);

    console.log('🧪 Executing Route & Asset Verification Suite...');
    console.log('─'.repeat(75));

    let passed = 0;
    let failed = 0;

    for (const test of routesToTest) {
      try {
        const res = await fetchUrl(test.path);
        const statusMatch = res.statusCode === test.expectedStatus;
        let contentValid = true;

        if (test.isHtml) {
          contentValid = res.body.includes('<div id="root">') && res.body.includes('<!DOCTYPE html>');
        } else {
          contentValid = res.body.length > 0;
        }

        if (statusMatch && contentValid) {
          console.log(`  ✓ PASS: [${res.statusCode}] ${test.desc.padEnd(28)} -> ${test.path}`);
          passed++;
        } else {
          console.error(`  ✗ FAIL: [${res.statusCode}] ${test.desc.padEnd(28)} -> ${test.path} (statusMatch=${statusMatch}, contentValid=${contentValid})`);
          failed++;
        }
      } catch (err) {
        console.error(`  ✗ FAIL: ${test.desc.padEnd(28)} -> ${test.path} (${err.message})`);
        failed++;
      }
    }

    console.log('─'.repeat(75));
    console.log(`\n📊 Test Results: ${passed} Passed, ${failed} Failed out of ${routesToTest.length} total tests.\n`);

    if (failed > 0) {
      process.exitCode = 1;
    } else {
      console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
    }
  } finally {
    console.log('🛑 Shutting down preview server...');
    if (isWindows) {
      spawn('taskkill', ['/pid', server.pid.toString(), '/f', '/t']);
    } else {
      server.kill('SIGTERM');
    }
  }
}

run().catch((err) => {
  console.error('Fatal error during test execution:', err);
  process.exit(1);
});
