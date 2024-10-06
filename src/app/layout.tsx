"use client";

import { SessionProvider } from "next-auth/react";
import { Inter } from 'next/font/google';
import "./globals.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark flex flex-col">
        <SessionProvider>
          <NavBar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
