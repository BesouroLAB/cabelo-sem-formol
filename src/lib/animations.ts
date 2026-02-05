export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: 'spring', stiffness: 260, damping: 20 },
};

export const slideUp = {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
    transition: { type: 'spring', damping: 25, stiffness: 500 },
};
