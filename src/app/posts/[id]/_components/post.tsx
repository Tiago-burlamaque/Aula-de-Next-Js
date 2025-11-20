import Link from "next/link"
import { PostProps } from "../../page"

export async function PostInfo({ id }: { id: string }) {

    await new Promise(resolve => setTimeout(resolve, 100))

    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: PostProps = await response.json()

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <Link href='/posts' className="text-blue-500 hover:underline hover:underline-offset-8 transition">
                Voltar
            </Link>
        </div>
    )
}