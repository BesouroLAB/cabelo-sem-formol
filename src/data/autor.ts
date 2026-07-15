import { absoluteUrl } from '@/lib/site';

export const AUTOR_TIAGO = {
  name: "Tiago Fernandes",
  role: "Curador e Pesquisador Chefe",
  bioCurta: "Com 16 anos de experiência roteirizando reviews e testes de produtos para o Magalu, Tiago traz seu rigor investigativo do varejo de tecnologia para desmistificar os cosméticos capilares, cruzando fórmulas químicas com avaliações reais.",
  bioLonga: `Redator Publicitário, Especialista em UX Writing e Roteirista de Conteúdo. 
  
Há 16 anos, atua no desenvolvimento de roteiros para vídeos de produtos, unboxings e reviews do Magazine Luiza, sendo peça fundamental na evolução da voz da marca personificada pela Lu.

Acostumado a decupar promessas de marketing de inúmeras marcas e tecnologias, Tiago fundou o Cabelo Sem Formol para aplicar esse mesmo rigor investigativo aos alisamentos capilares. Em vez de "achismos", ele cruza a lista INCI (fórmula oficial) dos produtos com centenas de avaliações de consumidoras reais para entregar uma curadoria honesta e segura.

Além de sua forte atuação no varejo e UX, é desenvolvedor e criador do BesouroLAB e Estúdio & Sabor.`,
  linkedin: "https://www.linkedin.com/in/tiagofernand9s/",
  fotoUrl: "/autor/tiago-perfil.jpg",
  linksSecundarios: [
    "https://www.besourolab.com.br",
    "https://www.estudiosabor.com.br"
  ]
};

/**
 * Retorna o JSON-LD de Person Schema para injetar autoridade nas páginas
 */
export function getAutorSchema() {
  return {
    "@type": "Person",
    "name": AUTOR_TIAGO.name,
    "jobTitle": AUTOR_TIAGO.role,
    "url": absoluteUrl('/sobre'),
    "sameAs": [
      AUTOR_TIAGO.linkedin,
      ...AUTOR_TIAGO.linksSecundarios
    ],
    "description": AUTOR_TIAGO.bioCurta,
    "image": absoluteUrl(AUTOR_TIAGO.fotoUrl)
  };
}
