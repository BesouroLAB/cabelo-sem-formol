/**
 * Injeta dados estruturados (schema.org) na página.
 * Sanitiza "<" para evitar XSS via JSON.stringify, conforme guia oficial do Next.js.
 * Uso: <JsonLd data={schemaObject} /> dentro de qualquer Server Component.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
