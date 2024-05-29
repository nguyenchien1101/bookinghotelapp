import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Toast from "@/components/Toast/Toast";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hotel Managemnet app",
  description: "discover the best hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          <Toast />
          <ClientWrapper>
            <main className="font-normal bg-[#EDF1D6]">
              <Header />
              {children}
              <Footer />
            </main>
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
