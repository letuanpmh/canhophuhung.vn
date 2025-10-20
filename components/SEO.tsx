import { site } from '@/lib/seo';
export default function SEO({ title, description }: { title?: string; description?: string }) {
  const t = title ? `${title} | ${site.name}` : site.name;
  const d = description || site.description;
  return (<>
    <title>{t}</title>
    <meta name="description" content={d} />
    <meta property="og:title" content={t} />
    <meta property="og:description" content={d} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={site.url} />
  </>);
}
