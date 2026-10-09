import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { Preloader } from './components/Preloader';
import { BackToTop } from './components/BackToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <ScrollProgress />
        <Preloader />
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/index.html" element={<HomePage />} />

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services.html" element={<ServicesPage />} />

            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions.html" element={<SolutionsPage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/about.html" element={<AboutPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact.html" element={<ContactPage />} />

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog.html" element={<BlogPage />} />

            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route
              path="/blog-detail"
              element={
                <BlogDetailPage forcedSlug="the-smallest-tasks-can-become-your-biggest-operational-cost" />
              }
            />
            <Route
              path="/blog-detail.html"
              element={
                <BlogDetailPage forcedSlug="the-smallest-tasks-can-become-your-biggest-operational-cost" />
              }
            />
            <Route
              path="/blog-detail-2"
              element={
                <BlogDetailPage forcedSlug="before-you-add-ai-to-a-workflow-ask-one-question" />
              }
            />
            <Route
              path="/blog-detail-2.html"
              element={
                <BlogDetailPage forcedSlug="before-you-add-ai-to-a-workflow-ask-one-question" />
              }
            />
            <Route
              path="/blog-detail-3"
              element={
                <BlogDetailPage forcedSlug="ai-alone-wont-transform-your-business-connected-workflows-will" />
              }
            />
            <Route
              path="/blog-detail-3.html"
              element={
                <BlogDetailPage forcedSlug="ai-alone-wont-transform-your-business-connected-workflows-will" />
              }
            />

            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/privacy.html" element={<PrivacyPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </Router>
    </ThemeProvider>
  );
};

export default App;
