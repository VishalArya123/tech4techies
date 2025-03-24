import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from './data/products';
import { Star, ShoppingCart, CreditCard, TruckIcon, RotateCcw, ChevronRight, ChevronLeft, Heart, Share2 } from 'lucide-react';
import BreadcrumbNav from './BreadcrumbNav';
import ImageCarousel from './ImageCarousel';
import ProductInfo from './ProductInfo';
import ProductFeatures from './ProductFeatures';
import ProductSpecifications from './ProductSpecifications';
import CustomerReviews from './CustomerReviews';
import RelatedProducts from './RelatedProducts';
import NotFound from './NotFound';

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    // Simulate API call with a small delay
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // In a real app, this would be an API call
        const productData = getProductBySlug(slug);
        if (productData) {
          setProduct(productData);
          // Get related products
          if (productData.id) {
            const related = getRelatedProducts(productData.id);
            setRelatedProducts(related);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return <NotFound message="Product not found" />;
  }

  // Data for each component
  const breadcrumbData = {
    paths: [
      { name: 'Home', url: '/' },
      { name: 'Shop', url: '/shop' },
      { name: product.category, url: `/shop/category/${product.category.toLowerCase().replace(/\s+/g, '-')}` },
      { name: product.name, url: `#` }
    ]
  };

  const productInfoData = {
    name: product.name,
    price: product.price,
    originalPrice: product.originalPrice,
    discount: product.discount,
    brand: product.brand,
    rating: product.rating,
    inStock: product.inStock,
    description: product.description,
  };

  const shopPolicies = [
    { icon: <TruckIcon size={20} />, title: "Free Shipping", text: "On orders over $100" },
    { icon: <RotateCcw size={20} />, title: "30-Day Returns", text: "Hassle-free returns" },
    { icon: <CreditCard size={20} />, title: "Secure Payment", text: "SSL encrypted checkout" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <BreadcrumbNav paths={breadcrumbData.paths} />

      {/* Product Display Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left side - Image Carousel */}
        <ImageCarousel images={product.images || [product.image]} productName={product.name} />

        {/* Right side - Product Info */}
        <ProductInfo data={productInfoData} />
      </div>

      {/* Tabs for Description, Specifications, Reviews */}
      <div className="mb-12">
        <div className="border-b">
          <div className="flex overflow-x-auto">
            <button 
              className={`px-4 py-2 font-medium text-sm mr-4 ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`px-4 py-2 font-medium text-sm mr-4 ${activeTab === 'specifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button 
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
        </div>

        <div className="py-6">
          {activeTab === 'description' && (
            <div>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <ProductFeatures features={product.features} />
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <ProductSpecifications specifications={product.specifications} />
          )}
          
          {activeTab === 'reviews' && (
            <CustomerReviews reviews={product.reviews || []} productRating={product.rating} />
          )}
        </div>
      </div>

      {/* Shop Policies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 bg-gray-50 p-6 rounded-lg">
        {shopPolicies.map((policy, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-4 text-blue-600">
              {policy.icon}
            </div>
            <div>
              <h4 className="font-medium">{policy.title}</h4>
              <p className="text-sm text-gray-600">{policy.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts.length ? relatedProducts : []} />
    </div>
  );
};

export default ProductPage;