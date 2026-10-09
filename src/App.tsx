import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

// Navigation & Global UI
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { Preloader } from './components/Preloader';
import { BackToTop } from './components/BackToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Marketing Pages
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Authentication Pages
import { LoginPage } from './pages/auth/LoginPage';
import { SignupPage } from './pages/auth/SignupPage';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';

// Authenticated Application Dashboard
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DashboardOverviewPage } from './pages/dashboard/DashboardOverviewPage';
import { DashboardSettingsPage } from './pages/dashboard/DashboardSettingsPage';
import { DashboardBillingPage } from './pages/dashboard/DashboardBillingPage';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <>
      <ScrollToTop />
      {!isDashboardRoute && <ScrollProgress />}
      {!isDashboardRoute && <Preloader />}
      {!isDashboardRoute && <Navbar />}

      <main id="main-content" style={{ minHeight: isDashboardRoute ? '100vh' : 'auto' }}>
        <Routes>
          {/* Marketing Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />

          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/features.html" element={<FeaturesPage />} />

          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/pricing.html" element={<PricingPage />} />

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

          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/privacy.html" element={<PrivacyPage />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login.html" element={<LoginPage />} />

          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup.html" element={<SignupPage />} />

          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/forgot-password.html" element={<ForgotPasswordPage />} />

          {/* Authenticated Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardOverviewPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/settings"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardSettingsPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/billing"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardBillingPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isDashboardRoute && <Footer />}
      {!isDashboardRoute && <BackToTop />}
    </>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <AppContent />
          </Router>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
