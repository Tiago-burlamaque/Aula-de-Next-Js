import "./globals.css";
import { Header } from "../components/header"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero com Sujeito Programador!',
  openGraph: {
    title: 'Aprendendo Next JS com Sujeito No Youtube!',
    description: 'Aprendendo Next JS do zero com Sujeito Programador!',
    // images: ['https://sujeitoProgramador.com/steve.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        {/* <h1>
          teste teste
        </h1> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
