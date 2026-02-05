import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Cabelo Sem Formol',
        short_name: 'Cabelo Sem Formol',
        description: 'Guia definitivo de alisamento seguro e cronograma capilar.',
        start_url: '/',
        display: 'standalone',
        background_color: '#f6f5f8',
        theme_color: '#895af6',
        icons: [
            {
                src: '/icon-192.png', // Assuming existing assets or placeholders
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
