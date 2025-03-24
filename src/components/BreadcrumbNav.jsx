import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const BreadcrumbNav = ({ paths }) => {
  return (
    <nav className="flex items-center text-sm mb-8">
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={16} className="mx-2 text-gray-400" />}
          {index === paths.length - 1 ? (
            <span className="font-medium text-gray-900">{path.name}</span>
          ) : (
            <Link 
              to={path.url} 
              className="text-gray-600 hover:text-blue-600 hover:underline"
            >
              {path.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BreadcrumbNav;