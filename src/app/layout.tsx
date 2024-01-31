import "@/styles/globals.css";

import { Noto_Sans_JP } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
});

const title = "Portfolio - fumiya";
const description =
  "Fumiya created a portfolio site using a text channel with a server on Discord as the data source.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://portfolio-smdhnz.vercel.app",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`font-sans ${notoSansJp.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
