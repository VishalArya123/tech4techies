import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  getAllCategories, 
  getAllBrands, 
  getProductsByCategory, 
  searchProducts 
} from './data/products';
import { useWishlist } from './context/WishlistContext';
import { useCart } from './context/CartContext';
import { ShoppingCart, Heart, ChevronRight, ChevronLeft, Star, Filter } from 'lucide-react';

const RoboticsShopPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Get query parameters
  const queryCategory = searchParams.get('category');
  const searchQuery = searchParams.get('q');
  
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState(queryCategory ? [queryCategory] : []);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [availability, setAvailability] = useState(null);
  const [ratings, setRatings] = useState(null);
  const [discounts, setDiscounts] = useState([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Fetch data on component mount
  useEffect(() => {
    // Fetch all categories and brands
    setCategories(getAllCategories());
    setBrands(getAllBrands());
    
    // Fetch products based on query parameters
    let fetchedProducts;
    if (searchQuery) {
      fetchedProducts = searchProducts(searchQuery);
    } else if (queryCategory) {
      fetchedProducts = getProductsByCategory(queryCategory);
    } else {
      // Assuming there's a function to get all products
      fetchedProducts = getProductsByCategory(); // This will return all products
    }
    
    setAllProducts(fetchedProducts);
  }, [queryCategory, searchQuery]);

  // Toggle category selection
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Toggle brand selection
  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Toggle discount selection
  const toggleDiscount = (discount) => {
    if (discounts.includes(discount)) {
      setDiscounts(discounts.filter(d => d !== discount));
    } else {
      setDiscounts([...discounts, discount]);
    }
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Handle product click to navigate to product details
  const handleProductClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  // Apply filters to products
  const filteredProducts = allProducts.filter(product => {
    // Price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
    
    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    
    // Availability filter
    if (availability === 'inStock' && !product.inStock) return false;
    if (availability === 'outOfStock' && product.inStock) return false;
    
    // Rating filter
    if (ratings === 5 && product.rating < 5) return false;
    if (ratings === 4 && product.rating < 4) return false;
    if (ratings === 3 && product.rating < 3) return false;
    
    // Discount filter
    if (discounts.length > 0) {
      // Handle potential undefined discount value
      const productDiscount = product.discount || 0;
      if (!discounts.includes(productDiscount)) return false;
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'priceLowToHigh':
        return a.price - b.price;
      case 'priceHighToLow':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'new':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  // Pagination
  const productsPerPage = 8;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#fffffa]">
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm mb-6 font-montserrat text-[#0B1726]">
          <Link to="/" className="text-[#6FA5C8] hover:text-[#4A90E2] transition-colors">Home</Link> &gt; <span className="font-semibold">Shop</span>
          {queryCategory && (
            <> &gt; <span className="font-semibold">{queryCategory}</span></>
          )}
          {searchQuery && (
            <> &gt; <span className="font-semibold">Search: {searchQuery}</span></>
          )}
        </div>
        
        {/* Mobile Filters Toggle */}
        <div className="md:hidden mb-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-[#1F1F1F] text-white py-2 px-4 rounded-lg font-montserrat flex items-center justify-center"
          >
            <Filter size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block md:w-1/4 lg:w-1/5 space-y-6`}>
            {/* Categories */}
            <div className="bg-[#1F1F1F] rounded-lg border border-[#4A90E2] p-4 shadow-md">
              <h3 className="font-orbitron text-[#6FA5C8] mb-3">Categories</h3>
              <div className="space-y-2 font-rajdhani text-gray-300">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="mr-2 accent-[#6FA5C8]"
                    />
                    <label htmlFor={`category-${category}`} className="cursor-pointer hover:text-white transition-colors">{category}</label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div className="bg-[#1F1F1F] rounded-lg border border-[#4A90E2] p-4 shadow-md">
              <h3 className="font-orbitron text-[#6FA5C8] mb-3">Price Range</h3>
              <div className="px-2 font-rajdhani text-gray-300">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#FFB900]"
                />
                <div className="flex justify-between text-sm mt-2 font-montserrat text-[#FFB900]">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            {/* Brand Selection */}
            <div className="bg-[#1F1F1F] rounded-lg border border-[#4A90E2] p-4 shadow-md">
              <h3 className="font-orbitron text-[#6FA5C8] mb-3">Brand</h3>
              <div className="space-y-2 font-rajdhani text-gray-300">
                {brands.map(brand => (
                  <div key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="mr-2 accent-[#6FA5C8]"
                    />
                    <label htmlFor={`brand-${brand}`} className="cursor-pointer hover:text-white transition-colors">{brand}</label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Availability */}
            <div className="bg-[#1F1F1F] rounded-lg border border-[#4A90E2] p-4 shadow-md">
              <h3 className="font-orbitron text-[#6FA5C8] mb-3">Availability</h3>
              <div className="space-y-2 font-rajdhani text-gray-300">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="inStock"
                    name="availability"
                    checked={availability === 'inStock'}
                    onChange={() => setAvailability('inStock')}
                    className="mr-2 accent-[#6FA5C8]"
                  />
                  <label htmlFor="inStock" className="cursor-pointer hover:text-white transition-colors">In Stock</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="outOfStock"
                    name="availability"
                    checked={availability === 'outOfStock'}
                    onChange={() => setAvailability('outOfStock')}
                    className="mr-2 accent-[#6FA5C8]"
                  />
                  <label htmlFor="outOfStock" className="cursor-pointer hover:text-white transition-colors">Out of Stock</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="both"
                    name="availability"
                    checked={availability === null}
                    onChange={() => setAvailability(null)}
                    className="mr-2 accent-[#6FA5C8]"
                  />
                  <label htmlFor="both" className="cursor-pointer hover:text-white transition-colors">Both</label>
                </div>
              </div>
            </div>
            
            {/* Customer Ratings */}
            <div className="bg-[#1F1F1F] rounded-lg border border-[#4A90E2] p-4 shadow-md">
              <h3 className="font-orbitron text-[#6FA5C8] mb-3">Customer Ratings</h3>
              <div className="space-y-2 font-rajdhani text-gray-300">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="5stars"
                    name="ratings"
                    checked={ratings === 5}
                    onChange={() => setRatings(5)}
                    className="mr-2 accent-[#6FA5C8]"
                  />
                  <label htmlFor="5stars" className="cursor-pointer hover:text-white transition-colors">
                    <span className="text-[#FFB900]">★★★★★</span> (5 Stars & Up)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="4stars"
                    name="ratings"
                    checked={ratings === 4}
                    onChange={() => setRatings(4)}
                    className="mr-2 accent-[#6FA5C8]"
                  />
                  <label htmlFor="4stars" className="cursor-pointer hover:text-white transition-colors">
                    <span className="text-[#FFB900]">★★★★</span>☆ (4 Stars & Up)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="3stars"
                    name="ratings"
                    checked={ratings === 3}
                    onChange={() => setRatings(3)}
                    className="mr-2 accent-[#6FA5C8]"
                  />
                  <label htmlFor="3stars" className="cursor-pointer hover:text-white transition-colors">
                    <span className="text-[#FFB900]">★★★</span>☆☆ (3 Stars & Up)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="allRatings"
                    name="ratings"
                    checked={ratings === null}
                    onChange={() => setRatings(null)}
                    className="mr-2 accent-[#6FA5C8]"
                  />
                  <label htmlFor="allRatings" className="cursor-pointer hover:text-white transition-colors">All Ratings</label>
                </div>
              </div>
            </div>
            
            {/* Discount Offers */}
            <div className="bg-[#1F1F1F] rounded-lg border border-[#4A90E2] p-4 shadow-md">
              <h3 className="font-orbitron text-[#6FA5C8] mb-3">Discount Offers</h3>
              <div className="space-y-2 font-rajdhani text-gray-300">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="discount10"
                    checked={discounts.includes(10)}
                    onChange={() => toggleDiscount(10)}
                    className="mr-2 accent-[#6FA5C8]"
                  />
                  <label htmlFor="discount10" className="cursor-pointer hover:text-white transition-colors">10% Off</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="discount20"
                    checked={discounts.includes(20)}
                    onChange={() => toggleDiscount(20)}
                    className="mr-2 accent-[#6FA5C8]"
                  />
                  <label htmlFor="discount20" className="cursor-pointer hover:text-white transition-colors">20% Off</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="discount25"
                    checked={discounts.includes(25)}
                    onChange={() => toggleDiscount(25)}
                    className="mr-2 accent-[#6FA5C8]"
                  />
                  <label htmlFor="discount25" className="cursor-pointer hover:text-white transition-colors">25% Off</label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Products */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 font-montserrat">
              <p className="text-[#0B1726] mb-2 sm:mb-0">{filteredProducts.length} products found</p>
              <div className="flex items-center">
                <label htmlFor="sortBy" className="mr-2 text-[#0B1726]">Sort by:</label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#1F1F1F] text-white border border-[#4A90E2] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#6FA5C8]"
                >
                  <option value="popularity">Popularity</option>
                  <option value="priceLowToHigh">Price: Low to High</option>
                  <option value="priceHighToLow">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="new">New Arrivals</option>
                </select>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-[#1F1F1F] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#4A90E2] cursor-pointer transform hover:-translate-y-1"
                  onClick={() => handleProductClick(product.slug)}
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-white flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-40 object-contain p-4 transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {product.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-[#0B1726] text-[#FFB900] text-xs font-bold px-2 py-1 rounded font-montserrat">
                        {product.discount}% OFF
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-bold font-montserrat">Out of Stock</span>
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isInWishlist(product.id)) {
                          removeFromWishlist(product.id);
                        } else {
                          addToWishlist(product);
                        }
                      }}
                      className="absolute top-2 left-2 p-1 rounded-full bg-[#1F1F1F] text-white hover:text-[#FFB900] transition-colors"
                      aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart size={18} fill={isInWishlist(product.id) ? "#FFB900" : "none"} />
                    </button>
                  </div>
                  
                  <div className="p-4 text-white">
                    <h3 className="font-orbitron text-lg mb-2 text-[#6FA5C8] hover:text-white transition-colors">{product.name}</h3>
                    
                    <div className="flex items-center mb-2 text-[#FFB900]">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < Math.round(product.rating) ? "#FFB900" : "none"} 
                          className={i < Math.round(product.rating) ? "text-[#FFB900]" : "text-gray-400"}
                        />
                      ))}
                      <span className="text-sm text-gray-300 ml-1 font-rajdhani">({product.rating})</span>
                    </div>
                    
                    <div className="flex items-baseline mb-4">
                      <span className="text-lg font-bold text-[#FFB900] font-montserrat">₹{product.price.toFixed(2)}</span>
                      {product.originalPrice > product.price && (
                        <span className="ml-2 text-sm text-gray-400 line-through font-rajdhani">
                          ₹{product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <button
                        className={`py-2 px-4 rounded text-sm font-montserrat flex items-center transition-all duration-300 ${
                          product.inStock 
                            ? 'bg-gradient-to-r from-[#FFB900] to-[#FF8C00] text-white hover:shadow-md' 
                            : 'bg-gray-700 text-gray-300 cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (product.inStock) {
                            addToCart(product, 1);
                            alert("Added to cart!");
                          }
                        }}
                        aria-label="Add to cart"
                      >
                        <ShoppingCart size={16} className="mr-1" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                      <a 
                        href={`/product/${product.slug}`}
                        className="text-[#6FA5C8] hover:text-white text-sm font-montserrat transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          handleProductClick(product.slug);
                        }}
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* No products found message */}
            {currentProducts.length === 0 && (
              <div className="text-center py-12 bg-[#1F1F1F] text-white rounded-lg border border-[#4A90E2] p-8">
                <h3 className="text-xl font-semibold text-[#6FA5C8] mb-2 font-orbitron">No products found</h3>
                <p className="text-gray-300 font-rajdhani">Try adjusting your filters or search criteria</p>
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2 font-montserrat">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-lg flex items-center ${currentPage === 1 
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                      : 'bg-[#1F1F1F] text-[#6FA5C8] hover:bg-[#0B1726] hover:text-white border border-[#4A90E2] transition-colors'}`}
                  >
                    <ChevronLeft size={16} className="mr-1" />
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-3 py-1 rounded-lg ${currentPage === index + 1 
                        ? 'bg-gradient-to-r from-[#FFB900] to-[#FF8C00] text-white' 
                        : 'bg-[#1F1F1F] text-[#6FA5C8] hover:bg-[#0B1726] hover:text-white border border-[#4A90E2] transition-colors'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-lg flex items-center ${currentPage === totalPages 
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                      : 'bg-[#1F1F1F] text-[#6FA5C8] hover:bg-[#0B1726] hover:text-white border border-[#4A90E2] transition-colors'}`}
                  >
                    Next
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoboticsShopPage;