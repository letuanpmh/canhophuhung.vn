import "@/styles/globals.css";
import type { Metadata } from "next";
import { site } from "@/lib/seo";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    images: [site.ogImage],
  },
};