import { Suspense } from "react";
import { PostInfo } from "./_components/post";
// import { PostProps } from "../page";

export default async function DetailsPost({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;
    return (
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
                Detalhes do post {id}
            </h1>  
            <Suspense fallback={<p>Carregando detalhes do post...</p>}>
                <PostInfo id={id} />
            </Suspense>
        </div>
    )
}