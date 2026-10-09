import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArticleOperationalCost } from './articles/ArticleOperationalCost';
import { ArticleBeforeYouAddAI } from './articles/ArticleBeforeYouAddAI';
import { ArticleConnectedWorkflows } from './articles/ArticleConnectedWorkflows';
import { CtaSection } from '../components/CtaSection';

interface BlogDetailPageProps {
  forcedSlug?: string;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ forcedSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const effectiveSlug = forcedSlug || slug;

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Find post by slug or handle legacy IDs
  let currentPost = blogPosts.find(p => p.slug === effectiveSlug);
  if (!currentPost) {
    if (effectiveSlug === 'blog-detail-2' || effectiveSlug === 'before-you-add-ai') {
      currentPost = blogPosts[1];
    } else if (effectiveSlug === 'blog-detail-3' || effectiveSlug === 'connected-workflows') {
      currentPost = blogPosts[2];
    } else {
      currentPost = blogPosts[0];
    }
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setToastMessage('Article link copied to clipboard!');
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const relatedPosts = blogPosts.filter(p => p.slug !== currentPost?.slug);

  const renderArticleContent = () => {
    if (currentPost?.slug === blogPosts[1].slug) {
      return <ArticleBeforeYouAddAI />;
    }
    if (currentPost?.slug === blogPosts[2].slug) {
      return <ArticleConnectedWorkflows />;
    }
    return <ArticleOperationalCost />;
  };

  return (
    <div className="blog-detail-page-container">
      {toastMessage && (
        <div className="copy-toast show" id="copyToast" role="status">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Article Header */}
      <header className="article-header">
        <div className="section-container">
          <div className="article-header-meta">
            <Link to="/blog" className="article-back-link">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              All Insights
            </Link>
            <span className="article-header-separator">&bull;</span>
            <span className="article-header-category">{currentPost.category}</span>
            <span className="article-header-separator">&bull;</span>
            <span className="article-header-date">{currentPost.date}</span>
            <span className="article-header-separator">&bull;</span>
            <span className="article-header-read">{currentPost.readTime}</span>
          </div>

          <h1 className="article-title">{currentPost.title}</h1>
          <p className="article-lead">{currentPost.excerpt}</p>

          <div className="article-author-row">
            <div className="article-author-info">
              <div className="author-name">{currentPost.author.name}</div>
              <div className="author-role">{currentPost.author.role}</div>
            </div>
            <div className="article-actions-share">
              <button
                type="button"
                className="article-share-btn"
                onClick={handleShare}
                aria-label="Share this article"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                Share
              </button>
            </div>
          </div>

          <div className="article-featured-media">
            <img
              src={currentPost.image}
              alt={currentPost.imageAlt}
              className="article-featured-img"
            />
            <p className="article-img-caption">
              Figure 1.0: Educational reference architecture developed for Australian operations teams.
            </p>
          </div>
        </div>
      </header>

      {/* Main Article Content & Sidebar */}
      <section className="article-content-section">
        <div className="section-container article-layout-grid">
          {renderArticleContent()}
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-container" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>
          Related Insights
        </h3>
        <div className="blog-grid">
          {relatedPosts.map(post => (
            <article key={post.slug} className="blog-card card-spotlight">
              <Link to={`/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-card-img-wrap">
                  <img src={post.image} alt={post.imageAlt} className="blog-card-img" loading="lazy" />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{post.date}</span>
                    <span className="blog-card-separator">&bull;</span>
                    <span className="blog-card-read">{post.readTime}</span>
                  </div>
                  <h4 className="blog-card-title">{post.title}</h4>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};
