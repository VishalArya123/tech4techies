import React from 'react';
import { Check } from 'lucide-react';

const ProductFeatures = ({ features }) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-1 mr-3">
              <Check size={16} className="text-blue-600" />
            </div>
            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;