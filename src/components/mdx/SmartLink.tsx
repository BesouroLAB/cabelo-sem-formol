import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

/**
 * Substitui o <a> padrão dentro do MDX com as regras de SEO corretas:
 * - Links de afiliado (/go/...): rel="sponsored nofollow noopener" (exigência do Google
 *   para links de comissão — evita penalidade de link scheme) + abre em nova aba.
 * - Links externos: rel="noopener noreferrer" + nova aba.
 * - Links internos: <Link> do Next.js (prefetch e navegação client-side).
 */
export function SmartLink({ href = '', children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isAffiliate = href.startsWith('/go/');
  const isExternal = /^https?:\/\//.test(href);

  if (isAffiliate) {
    return (
      <a href={href} rel="sponsored nofollow noopener" target="_blank" {...rest}>
        {children}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
