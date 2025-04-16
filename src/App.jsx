import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
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
import ProfilePage from './components/profile/ProfilePage';
import { CartProvider } from './components/context/CartContext';
import { WishlistProvider } from './components/context/WishlistContext';
import { OrdersProvider } from './components/context/OrdersContext';
import ProtectedRoute from './components/ProtectedRoute';

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
  // Replace these with your Auth0 credentials
  const domain = "dev-ijgror6h4kgau83q.us.auth0.com";
  const clientId = "41tmoe9ikIOldgIYLTpqNVKJhFJ3qaAc";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <CartProvider>
        <WishlistProvider>
          <OrdersProvider>
            <Router>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<RoboticsShopPage />} />
                    <Route path="/product/:slug" element={<ProductPage />} />
                    <Route path="/profile" element={
                      <ProtectedRoute>
                        <ProfilePage />
                      </ProtectedRoute>
                    } />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
          </OrdersProvider>
        </WishlistProvider>
      </CartProvider>
    </Auth0Provider>
  );
}

export default App;