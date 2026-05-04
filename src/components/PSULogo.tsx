import React from 'react';

interface PSULogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PSULogo({ size = 'md', className = '' }: PSULogoProps) {
  const sizeMap = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`${sizeMap[size]} rounded-full overflow-hidden bg-white flex-shrink-0 ${className}`}>
      <img
        src="/psu.png"
        alt="Pampanga State University Logo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
