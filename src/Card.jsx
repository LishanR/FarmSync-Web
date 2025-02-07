import React from 'react';

export function Card({ children, className }) {
  return <div className={`bg-white rounded-lg p-4 shadow-md ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={`font-bold ${className}`}>{children}</h2>;
}