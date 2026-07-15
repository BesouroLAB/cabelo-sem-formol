import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAffiliateUrl } from './data/afiliados';

export function proxy(request: NextRequest) {
  const url = request.nextUrl;

  // Intercepta apenas rotas que começam com /go/
  if (url.pathname.startsWith('/go/')) {
    const slug = url.pathname.replace('/go/', '');
    const refId = url.searchParams.get('refId') || undefined;

    const targetUrl = getAffiliateUrl(slug, refId);

    // 302 (temporário): correto para links de afiliado — não passa autoridade
    // e permite trocar o destino (ASIN/loja) sem esperar o Google reindexar.
    return NextResponse.redirect(targetUrl, 302);
  }

  return NextResponse.next();
}

export const config = {
  // Roda o proxy apenas nas rotas de saída de afiliado
  matcher: '/go/:path*',
};
