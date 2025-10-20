import '@/styles/globals.css'
import type { Metadata } from 'next'
import { site } from '@/lib/seo'
export const metadata: Metadata = {
  title: site.name, description: site.description,
  openGraph: { title: site.name, description: site.description, url: site.url }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="vi"><body className="min-h-screen">{children}</body></html>)
}
