import React from 'react';
import { FlaskConical, Plug2, ShowerHead, Sparkles } from 'lucide-react';

const categories = [
    { name: 'Química', icon: FlaskConical, color: 'bg-primary/10 text-primary', link: '#' },
    { name: 'Ferramentas', icon: Plug2, color: 'bg-orange-100 text-orange-600', link: '#' },
    { name: 'Chuveiro', icon: ShowerHead, color: 'bg-science/10 text-science', link: '#' },
    { name: 'Tratamento', icon: Sparkles, color: 'bg-pink-100 text-pink-600', link: '#' },
];

export default function SiloNavigation() {
    return (
        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
            <div className="grid grid-cols-2 gap-3 sm:flex sm:justify-between sm:gap-4 md:grid-cols-4 min-w-[300px]">
                {categories.map((cat) => (
                    <a
                        key={cat.name}
                        href={cat.link}
                        className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gray-200 transition-all active:scale-95 group"
                    >
                        <div className={`p-3 rounded-full mb-3 ${cat.color} group-hover:scale-110 transition-transform`}>
                            <cat.icon size={24} strokeWidth={2} />
                        </div>
                        <span className="font-medium text-gray-700 text-sm">{cat.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
