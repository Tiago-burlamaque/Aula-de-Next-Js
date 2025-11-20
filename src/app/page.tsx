import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
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

export const revalidate = 60; // 1 minuto

export default function Home() {

  const randomNumber = Math.random() * 10;

  return (
    <div>
      <h1>
        Pagina Home
      </h1>
      <h2>
        Número: {randomNumber}
      </h2>
    </div>
  )
}