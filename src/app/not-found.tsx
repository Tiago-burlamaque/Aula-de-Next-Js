import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl">
                Pagina não encontrada
            </h1>
            <p>
                Está pagina que você está tentando acessar não existe
            </p>
            <Link href='/'>
                Voltar para Home
            </Link>
        </div>
    )
}