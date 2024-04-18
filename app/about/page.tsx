import {posts} from "#site/content"

export default async function AboutPage() {
    const displayPosts = posts
    return <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4">
                <h1 className="inline-block font-black text-4xl lg:text-5xl">About me</h1>
                <p className="text-xl text-muted-foreground">
                </p>
            </div>
        </div>
        <hr className="mt-8"/>
        {displayPosts?.length > 0 ? (<ul className="flex flex-col">

        </ul>) : <p>Coming soon...</p>}
    </div>
}
