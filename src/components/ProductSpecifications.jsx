import React from 'react';

const ProductSpecifications = ({ specifications }) => {
  if (!specifications || Object.keys(specifications).length === 0) {
    return (
      <p className="text-gray-600">No specifications available for this product.</p>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
      
      <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="divide-y divide-gray-200">
            {Object.entries(specifications).map(([key, value], index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-normal">
                  {key}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-normal">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSpecifications;