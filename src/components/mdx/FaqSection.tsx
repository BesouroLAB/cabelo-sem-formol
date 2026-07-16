import { FaqItem } from '@/lib/mdx';

/**
 * Seção de FAQ visível — renderizada automaticamente no fim de todo artigo
 * que declarar `faq:` no frontmatter. Usa os MESMOS dados do schema FAQPage
 * (getFaqSchema), garantindo o espelhamento exato que o Google exige.
 */
export function FaqSection({ faq }: { faq: FaqItem[] }) {
  return (
    <section aria-labelledby="faq-heading" className="mt-12 pt-8 border-t border-gray-200">
      <h2 id="faq-heading" className="text-2xl font-serif font-bold text-[#1A1A1A] mb-6">
        Perguntas Frequentes
      </h2>
      <div className="space-y-3">
        {faq.map((item, i) => (
          <details
            key={i}
            className="group border border-gray-200 rounded-lg bg-white overflow-hidden"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-bold text-[#1A1A1A] flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
              {item.q}
              <span className="text-[#C2A878] shrink-0 transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden>
                +
              </span>
            </summary>
            <div className="px-5 pb-4 text-gray-700 leading-relaxed">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
