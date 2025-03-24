import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductHighlight from './components/ProductHighlight';
import AboutUs from './components/AboutUs';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/TestimonialsSection';
import FeaturedBrands from './components/FeaturedBrandsSection';
import ContactForm from './components/ContactFormSection';
import Footer from './components/Footer';
import RoboticsShopPage from './components/RoboticsShopPage';
import ProductPage from './components/ProductPage';
import ProfilePage from './components/profile/ProfilePage'; // Ensure this import is correct
import { AuthProvider } from './components/context/AuthContext';
import { CartProvider } from './components/context/CartContext';
import { WishlistProvider } from './components/context/WishlistContext';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductHighlight />
      <AboutUs />
      <FeaturedProducts />
      <Testimonials />
      <FeaturedBrands />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<RoboticsShopPage />} />
                  <Route path="/product/:slug" element={<ProductPage />} />
                  <Route path="/profile" element={<ProfilePage />} /> {/* Profile route */}
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;