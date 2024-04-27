import { Metadata } from "next";
import dynamic from "next/dynamic";

// default SEO settings for each page
export const metadata: Metadata = {
    title: "Map 2",
    description: "Information about me"
}

const JumpingGame = dynamic(() => import('@/components/scenes/jumping-game'), {
    loading: () => <div className="flex flex-col text-center h-1/2 items-center justify-center">
        <span>holdup</span>
    </div>,
    ssr: false
})

export default async function Map2() {
    return <div className=" bg-amber-800 aspect-square max-w-full flex flex-col">
        <JumpingGame/>
    </div>
}
