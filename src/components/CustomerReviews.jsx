import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

const CustomerReviews = ({ reviews, productRating }) => {
  // Rating distribution (this would come from API in a real app)
  const ratingDistribution = {
    5: reviews.filter(r => Math.round(r.rating) === 5).length,
    4: reviews.filter(r => Math.round(r.rating) === 4).length,
    3: reviews.filter(r => Math.round(r.rating) === 3).length,
    2: reviews.filter(r => Math.round(r.rating) === 2).length,
    1: reviews.filter(r => Math.round(r.rating) === 1).length
  };
  
  const totalReviews = reviews.length;
  
  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No Reviews Yet</h3>
        <p className="text-gray-600 mb-6">Be the first to review this product</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Write a Review
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Overall rating summary */}
        <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">{productRating.toFixed(1)}</div>
            <div className="flex justify-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < Math.floor(productRating) ? "currentColor" : "none"}
                  className={i < Math.floor(productRating) ? "" : "text-gray-300"}
                />
              ))}
            </div>
            <p className="text-gray-600">{totalReviews} reviews</p>
          </div>
          
          {/* Rating distribution bars */}
          <div className="mt-6 space-y-2">
            {[5, 4, 3, 2, 1].map(rating => {
              const percentage = totalReviews > 0 
                ? (ratingDistribution[rating] / totalReviews) * 100 
                : 0;
                
              return (
                <div key={rating} className="flex items-center">
                  <div className="flex items-center w-12">
                    <span className="text-sm text-gray-700">{rating}</span>
                    <Star size={14} className="text-yellow-400 ml-1" fill="currentColor" />
                  </div>
                  <div className="flex-grow mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-8 text-right text-xs text-gray-600">
                    {ratingDistribution[rating]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Customer reviews */}
        <div className="md:w-2/3">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Customer Reviews</h3>
            <button className="text-blue-600 hover:text-blue-800">
              Write a Review
            </button>
          </div>
          
          <div className="space-y-6">
            {reviews.map(review => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex justify-between mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(review.rating) ? "currentColor" : "none"}
                        className={i < Math.floor(review.rating) ? "" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                
                <h4 className="font-medium text-gray-900 mb-1">{review.title}</h4>
                <p className="text-sm text-gray-600 mb-2">by {review.username}</p>
                <p className="text-gray-700 mb-3">{review.comment}</p>
                
                <button className="flex items-center text-sm text-gray-500 hover:text-blue-600">
                  <ThumbsUp size={14} className="mr-1" />
                  Helpful ({review.helpful})
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;