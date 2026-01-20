import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import CSFScoreBox from '@/components/CSFScoreBox';
import ProsConsTable from '@/components/ProsConsTable';
import HardwarePairWidget from '@/components/HardwarePairWidget';
import ChemicalTable from '@/components/ChemicalTable';
import SafetyBadge from '@/components/SafetyBadge';
import InternalLink from '@/components/InternalLink';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Typography
        h1: ({ children }) => (
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-4 mt-8 first:mt-0">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 mb-3 mt-8">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-lg font-bold font-heading text-gray-900 mb-2 mt-6">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="text-gray-700 leading-relaxed mb-4">
                {children}
            </p>
        ),
        strong: ({ children }) => (
            <strong className="font-semibold text-gray-900">{children}</strong>
        ),
        em: ({ children }) => (
            <em className="italic text-gray-600">{children}</em>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
        ),
        a: ({ href, children }) => (
            <Link
                href={href || '#'}
                className="text-violet-600 hover:text-violet-700 underline underline-offset-2 decoration-violet-300 hover:decoration-violet-500 font-medium transition-colors"
            >
                {children}
            </Link>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-violet-300 pl-4 py-2 my-4 bg-violet-50 rounded-r-lg italic text-gray-700">
                {children}
            </blockquote>
        ),
        hr: () => (
            <hr className="my-8 border-t border-gray-200" />
        ),
        code: ({ children }) => (
            <code className="bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono text-violet-700">
                {children}
            </code>
        ),

        // Custom Components
        CSFScoreBox,
        ProsConsTable,
        HardwarePairWidget,
        ChemicalTable,
        SafetyBadge,
        InternalLink,

        ...components,
    };
}
