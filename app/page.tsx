import { buttonVariants } from "@/components/ui/button";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import {posts} from "#site/content"
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0,5)
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="containter flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
            Hi, I'm Dang.
          </h1>
          <span className="text-muted-foreground">
            (But you can call me Damiens :P I got it from a character in 1 of my favorite mangas <i>"Innocent"</i>)
          </span>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Welcome to my blog website
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link href="/blog" className={cn(buttonVariants({size: "lg"}), "w-full sm:w-fit")}>
              View my blog
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-7 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="mb-5 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map(post=> <li key={post.slug} className="first:border-t first:border-border">
             <PostItem slug={post.slug} title={post.title} description={post.description} date={post.date}/>
          </li>)}
        </ul>
      </section>
    </>
  );
}
