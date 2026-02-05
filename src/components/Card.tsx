import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = false }: CardProps) {
    return (
        <div
            className={`
        glass rounded-xl overflow-hidden
        ${hoverEffect ? 'glass-hover transition-all duration-300 hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
