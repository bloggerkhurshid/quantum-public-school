import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import AcademicsPage from './pages/AcademicsPage/AcademicsPage';
import FacultyPage from './pages/FacultyPage/FacultyPage';
import NotificationsPage from './pages/NotificationsPage/NotificationsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AdmissionPopup from './components/AdmissionPopup/AdmissionPopup';
import QueryFormModal from './components/QueryFormModal/QueryFormModal';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ width: '100%', overflowX: 'hidden' }}>
      <ScrollToTop />
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/faculties" element={<FacultyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Admission Popup */}
      <AdmissionPopup />

      {/* Global Query Form Modal */}
      <QueryFormModal />
    </div>
  );
}

export default App;
