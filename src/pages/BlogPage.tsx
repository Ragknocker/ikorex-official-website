import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { CtaSection } from '../components/CtaSection';

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'strategy' | 'ai' | 'connected'>('all');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory =
        selectedCategory === 'all' || post.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="blog-page-container">
      {/* Blog index */}
      <section className="page-hero blog-index" id="blog">
        <div className="section-container">
          <div className="section-head center">
            <div className="custom-badge">
              <span className="badge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" className="badge-svg" aria-hidden="true">
                  <path d="M3 3 L21 12 L8 12 L3 9 Z" fill="#00a2ff" />
                  <path d="M3 21 L21 12 L8 12 L3 15 Z" fill="#0062d6" />
                </svg>
              </span>
              <span className="badge-text">Insights</span>
            </div>
            <h1 className="page-title">
              Practical thinking on <span className="text-gradient">intelligent automation.</span>
            </h1>
            <p className="page-lead">
              Notes from our team on where automation and AI actually pay off, and how to get there
              without adding complexity.
            </p>
          </div>

          {/* Interactive Blog Controls */}
          <div className="blog-controls-wrap">
            <div className="blog-search-box">
              <svg
                className="blog-search-icon"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="search"
                id="blogSearch"
                className="blog-search-input"
                placeholder="Search insights and automation articles..."
                aria-label="Search insights"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="blog-categories-nav" role="tablist" aria-label="Article Categories">
              <button
                className={`blog-filter-btn ${selectedCategory === 'all' ? 'is-active' : ''}`}
                type="button"
                onClick={() => setSelectedCategory('all')}
              >
                All Insights
              </button>
              <button
                className={`blog-filter-btn ${selectedCategory === 'strategy' ? 'is-active' : ''}`}
                type="button"
                onClick={() => setSelectedCategory('strategy')}
              >
                Operational Strategy
              </button>
              <button
                className={`blog-filter-btn ${selectedCategory === 'ai' ? 'is-active' : ''}`}
                type="button"
                onClick={() => setSelectedCategory('ai')}
              >
                AI Workflows
              </button>
              <button
                className={`blog-filter-btn ${selectedCategory === 'connected' ? 'is-active' : ''}`}
                type="button"
                onClick={() => setSelectedCategory('connected')}
              >
                Connected Workflows
              </button>
            </div>
          </div>

          <div className="blog-grid blog-grid-page">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <article key={post.slug} className="blog-card card-spotlight">
                  <Link to={`/blog/${post.slug}`} className="blog-card-link">
                    <div className="blog-card-img-wrap">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="blog-card-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <span className="blog-card-category">{post.category}</span>
                        <span className="blog-card-separator">&bull;</span>
                        <span className="blog-card-date">{post.date}</span>
                        <span className="blog-card-separator">&bull;</span>
                        <span className="blog-card-read">{post.readTime}</span>
                      </div>
                      <h2 className="blog-card-title">{post.title}</h2>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <span className="blog-card-more">
                        Read article <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))
            ) : (
              <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '40px 0' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                  No articles matched your search query. Try searching for "invoices", "AI", or "workflows".
                </p>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '16px' }}
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>

          <p className="footnote" style={{ textAlign: 'center', marginTop: '36px' }}>
            * Sample Editorial Insights: These articles represent educational guides and reference
            architectures developed for Australian operations teams.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};
