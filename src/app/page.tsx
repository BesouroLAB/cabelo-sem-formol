import Link from 'next/link';
import { ArrowRight, Shield, FlaskConical, Plug2, ShowerHead, Droplets, Trophy, X, ChevronRight, Mail, Home as HomeIcon, Search, User, Bookmark } from 'lucide-react';

export const metadata = {
  title: 'Cabelo Sem Formol: Análises Técnicas e Ranking de Alisamentos (2026)',
  description: 'O maior portal de reviews técnicos de progressivas. Testamos pH, temperatura de chapinhas e segurança de marcas como Fashion Gold, Lizze e Prohall.',
};

const siloCards = [
  {
    emoji: '🧪',
    title: 'Progressivas & Ácidos',
    icon: FlaskConical,
    microcopy: 'Ranking das melhores marcas sem formol aprovadas pela Anvisa.',
    link: '/categoria/progressivas-sem-formol',
    iconBg: 'bg-violet-100 text-violet-600',
  },
  {
    emoji: '🔌',
    title: 'Chapinhas & Secadores',
    icon: Plug2,
    microcopy: 'A engenharia térmica por trás do liso perfeito (Lizze, Taiff, MQ).',
    link: '/categoria/chapinhas-e-secadores',
    iconBg: 'bg-orange-100 text-orange-600',
  },
  {
    emoji: '🚿',
    title: 'No Chuveiro',
    icon: ShowerHead,
    microcopy: 'O que funciona e o que é mito nas progressivas de banho.',
    link: '/categoria/progressivas-de-chuveiro',
    iconBg: 'bg-sky-100 text-sky-600',
  },
  {
    emoji: '🧴',
    title: 'S.O.S Pós-Química',
    icon: Droplets,
    microcopy: 'Cronograma, Acidificação e Shampoos para durabilidade.',
    link: '/categoria/tratamento-pos-quimica',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
];

const myths = [
  {
    myth: '"Progressiva orgânica tem formol escondido."',
    truth: 'O ativo é ácido (glioxílico ou lático) e age no pH, não na capa do fio.',
    link: '/artigo/acido-glioxilico-vs-formol',
    linkText: 'Ler Artigo',
  },
  {
    myth: '"Pode usar qualquer chapinha."',
    truth: 'Chapinhas de cerâmica oscilam calor e mancham o liso. Você precisa de Titânio.',
    link: '/guia/melhor-chapinha-para-progressiva',
    linkText: 'Ler Guia',
  },
  {
    myth: '"Progressiva de chuveiro alisa cabelo crespo."',
    truth: 'Elas são para manutenção e redução de volume. Não caia em promessas milagrosas.',
    link: '/teste/progressiva-de-chuveiro-funciona',
    linkText: 'Ver Teste Real',
  },
];

export default function Home() {
  return (
    <>
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-center">
          <span className="font-bold text-sm tracking-tight text-gray-900">CabeloSemFormol.com.br</span>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 pb-28 space-y-8">
        {/* ========== HERO SECTION ========== */}
        <section className="text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-emerald-100">
            <Shield size={14} className="text-emerald-600" />
            <span>Análise Editorial Independente</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl font-bold font-heading text-gray-900 leading-tight tracking-tight">
            Alisamento Seguro Existe?{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              A Ciência Responde.
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base text-gray-600 leading-relaxed">
            Chega de medo do corte químico. Nossa equipe técnica analisou o{' '}
            <strong className="text-gray-800">pH</strong>, a{' '}
            <strong className="text-gray-800">composição</strong> e a{' '}
            <strong className="text-gray-800">temperatura</strong> de 50+ marcas para você não jogar dinheiro no ralo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <Link
              href="/ranking/2026"
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl text-base shadow-lg shadow-violet-200 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Ver o Ranking de 2026
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/metodologia"
              className="w-full text-gray-600 hover:text-gray-900 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              Entenda nossa Metodologia
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>

        {/* ========== NAVEGAÇÃO POR OBJETIVO (SILOS) ========== */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold font-heading text-gray-900">
            O que você está buscando?
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {siloCards.map((card) => (
              <Link
                key={card.title}
                href={card.link}
                className="group bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg hover:border-gray-200 transition-all duration-300 active:scale-[0.98]"
              >
                <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <card.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-violet-600 transition-colors leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {card.microcopy}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ========== DESTAQUE EDITORIAL (MONEY PAGES) ========== */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Trophy size={20} className="text-amber-500" />
            <h2 className="text-lg font-bold font-heading text-gray-900">
              O Pódio da Redação 2026
            </h2>
          </div>

          <div className="space-y-4">
            {/* Destaque 1 - A Melhor Química */}
            <article className="group relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl border border-amber-200/50 overflow-hidden">
              <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                🥇 OURO
              </div>
              <div className="p-5">
                <div className="w-full h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-gray-400 text-xs">Foto Fashion Gold</div>
                </div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">A Melhor Química</span>
                <h3 className="text-base font-bold text-gray-900 mt-1 mb-2 group-hover:text-amber-700 transition-colors">
                  Fashion Gold: A Única Nota 9.8
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Tecnologia de vetorização que alisa sem afinar as pontas. A favorita para loiras e gestantes.
                </p>
                <Link
                  href="/review/progressiva-fashion-gold"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow-md transition-all active:scale-95"
                >
                  Ler Review Técnico
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Destaque 2 - A Ferramenta Obrigatória */}
            <article className="group relative bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 rounded-2xl border border-gray-200/50 overflow-hidden">
              <div className="absolute top-3 right-3 bg-gradient-to-r from-slate-500 to-gray-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                💎 DIAMANTE
              </div>
              <div className="p-5">
                <div className="w-full h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-gray-400 text-xs">Foto Lizze Extreme</div>
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">A Ferramenta Obrigatória</span>
                <h3 className="text-base font-bold text-gray-900 mt-1 mb-2 group-hover:text-gray-700 transition-colors">
                  Lizze Extreme: O "Motor" do Alisamento
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Por que você precisa de 250°C constantes para ativar o ácido orgânico (e como não queimar o cabelo).
                </p>
                <Link
                  href="/analise/lizze-extreme-temperatura"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow-md transition-all active:scale-95"
                >
                  Ver Análise de Temperatura
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ========== VOCÊ SABIA? (EDUCAÇÃO/SNIPPET) ========== */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold font-heading text-gray-900">
            Mitos que estragam seu cabelo
          </h2>

          <div className="space-y-3">
            {myths.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X size={14} className="text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm mb-1">{item.myth}</p>
                    <p className="text-xs text-gray-600 mb-2">
                      <span className="text-emerald-600 font-medium">A Verdade:</span> {item.truth}
                    </p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 hover:text-violet-700 transition-colors"
                    >
                      {item.linkText}
                      <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== NEWSLETTER / LEAD ========== */}
        <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 rounded-2xl p-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-3 py-1.5 rounded-full text-xs font-medium mb-4 backdrop-blur-sm border border-white/20">
            <Mail size={14} />
            Newsletter VIP
          </div>
          <h2 className="text-xl font-bold text-white mb-2">
            Não perca o liso (nem o dinheiro).
          </h2>
          <p className="text-violet-100 text-sm mb-5 leading-relaxed">
            Receba alertas de promoções relâmpago da Fashion Gold e guias de cronograma capilar direto no seu e-mail.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg text-sm"
            />
            <button
              type="submit"
              className="w-full bg-white text-violet-700 font-bold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors shadow-lg active:scale-95 text-sm"
            >
              Quero Dicas VIP
            </button>
          </form>
          <p className="text-[10px] text-violet-200 mt-3">
            Sem spam. Cancelamento em 1 clique.
          </p>
        </section>

        {/* ========== FOOTER INFO (YMYL) ========== */}
        <section className="space-y-4 pt-4">
          <div className="bg-gray-50 rounded-xl p-4 space-y-4 text-xs text-gray-500">
            <div>
              <h3 className="text-gray-700 font-semibold mb-1">Sobre a Redação CSF</h3>
              <p>Somos um portal independente focado em análise técnica de cosméticos. Não temos vínculo empregatício com nenhuma marca citada.</p>
            </div>
            <div>
              <h3 className="text-gray-700 font-semibold mb-1">Aviso Legal</h3>
              <p>Participamos do Programa de Associados da Amazon. Compras via nossos links geram comissão sem custo extra para você.</p>
            </div>
            <div>
              <h3 className="text-gray-700 font-semibold mb-1">Isenção de Responsabilidade</h3>
              <p>As informações contidas neste site têm caráter informativo e não substituem o aconselhamento de um dermatologista ou tricologista.</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <Link href="/privacidade" className="hover:text-gray-600 transition-colors">Privacidade</Link>
            <span>•</span>
            <Link href="/termos" className="hover:text-gray-600 transition-colors">Termos</Link>
            <span>•</span>
            <Link href="/contato" className="hover:text-gray-600 transition-colors">Contato</Link>
          </div>
          <p className="text-center text-[10px] text-gray-400">
            © 2026 Cabelo Sem Formol. Todos os direitos reservados.
          </p>
        </section>
      </main>
    </>
  );
}
