'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans"});

// export const metadata: Metadata = {
//   title: siteConfig.name,
//   description: siteConfig.description,
//   metadataBase: new URL(process.env.PUBLIC_APP_URL ?? siteConfig.url)
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname()
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
     <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            {!/^\/map-\d+$/.test(pathName) ? <SiteHeader/> : null}
            <main className=" flex-1">{children}</main>
            {!/^\/map-\d+$/.test(pathName) ? <SiteFooter/> : null}
          </div>
        </Providers>
      </body>
    </html>
  );
}
