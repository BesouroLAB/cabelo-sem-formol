import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAffiliateUrl } from './data/afiliados';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Intercepta apenas rotas que começam com /go/
  if (url.pathname.startsWith('/go/')) {
    const slug = url.pathname.replace('/go/', '');
    const refId = url.searchParams.get('refId') || undefined;
    
    const targetUrl = getAffiliateUrl(slug, refId);

    // Aqui poderíamos disparar um fetch em background para o GA4 via Measurement Protocol se necessário,
    // Mas o mais simples para SEO é fazer o redirect 302 direto.
    // O 302 indica que é um redirect temporário, preservando link juice.
    return NextResponse.redirect(targetUrl, 302);
  }

  return NextResponse.next();
}

export const config = {
  // Roda o middleware apenas nas rotas de saída de afiliado
  matcher: '/go/:path*',
};
