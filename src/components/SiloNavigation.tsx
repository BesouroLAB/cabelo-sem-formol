import Link from 'next/link';
import { Sparkles, Zap, Droplets, PlusCircle } from 'lucide-react';

const categories = [
    {
        name: 'Progressivas',
        icon: Sparkles,
        color: 'text-emerald-400',
        borderColor: 'border-emerald-500/30',
        iconBg: 'bg-emerald-900/40',
        link: '/categoria/progressivas-sem-formol'
    },
    {
        name: 'Chapinhas',
        icon: Zap,
        color: 'text-amber-400',
        borderColor: 'border-amber-500/30',
        iconBg: 'bg-amber-900/40',
        link: '/categoria/chapinhas-e-secadores'
    },
    {
        name: 'Chuveiro',
        icon: Droplets,
        color: 'text-cyan-400',
        borderColor: 'border-cyan-500/30',
        iconBg: 'bg-cyan-900/40',
        link: '/categoria/progressivas-de-chuveiro'
    },
    {
        name: 'Fios & Saúde',
        icon: PlusCircle,
        color: 'text-white',
        borderColor: 'border-white/20',
        iconBg: 'bg-white/5',
        link: '/categoria/tratamento-pos-quimica'
    },
];

export default function SiloNavigation() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                    <Link
                        key={cat.name}
                        href={cat.link}
                        className={`relative group cursor-pointer aspect-square rounded-2xl overflow-hidden glass border ${cat.borderColor} flex flex-col justify-end p-5 transition-all active:scale-95 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 duration-300`}
                    >
                        <div className={`absolute top-5 left-5 size-12 rounded-xl ${cat.iconBg} flex items-center justify-center border border-white/5 shadow-inner`}>
                            <Icon className={cat.color} size={24} />
                        </div>
                        <p className={`text-base font-black font-heading leading-tight ${cat.color}`}>{cat.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}
