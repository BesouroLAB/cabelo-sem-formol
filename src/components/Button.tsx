'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'premium';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export default function Button({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20',
        secondary: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm',
        outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5',
        ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900',
        premium: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:brightness-110 border border-purple-400/30',
    };

    const sizes = {
        sm: 'text-xs px-3 py-1.5 gap-1.5',
        md: 'text-sm px-5 py-2.5 gap-2',
        lg: 'text-base px-8 py-4 gap-3',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="animate-spin" size={size === 'sm' ? 14 : 18} />}
            {!isLoading && leftIcon}
            {children}
            {!isLoading && rightIcon}
        </motion.button>
    );
}
