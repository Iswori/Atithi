import React from 'react';

interface AmenityItemProps {
  children: React.ReactNode; // Use React.ReactNode for children
}

const AmenityItem: React.FC<AmenityItemProps> = ({ children }) => {
  return ( 
    <div className="flex items-center gap-2">
      {children}
    </div>
  );
}

export default AmenityItem;