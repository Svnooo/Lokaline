import React from 'react';
import clsx from 'clsx';

const Badge = ({ children, variant = 'default', className }) => {
  const badgeStyles = clsx(
    'inline-block px-2 py-1 rounded-full text-xs font-semibold',
    {
      'bg-gray-200 text-gray-800': variant === 'default',
      'bg-blue-500 text-white': variant === 'primary',
      'bg-green-500 text-white': variant === 'success',
      'bg-red-500 text-white': variant === 'danger',
      'bg-yellow-500 text-white': variant === 'warning',
      'bg-indigo-500 text-white': variant === 'info',
    },
    className
  );

  return (
    <span className={badgeStyles}>
      {children}
    </span>
  );
};

export default Badge;
