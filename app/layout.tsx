import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme.provider";
import { RoutesContext } from "@/context/routes.context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Middle-Ai | AI That Seals the Deal, Safely.",
  description: "Your AI Middleman for Risk-Free Deals. Smart, Secure, and Seamless Transactions.",
};

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/", "/auth"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center`}
      >
        <RoutesContext
          protectedRoutes={protectedRoutes}
          publicRoutes={publicRoutes}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </RoutesContext>
      </body>
    </html>
  );
}
