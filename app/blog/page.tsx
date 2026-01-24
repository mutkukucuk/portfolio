import Link from "next/link"
import { Container } from "@/components/layout/container"
import { getAllPosts } from "@/lib/posts"
import { formatDate } from "@/lib/utils"

export const metadata = {
    title: "Blog - Utku Kucuk",
    description: "Thoughts on software development, design, and more.",
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <Container className="py-24">
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
                    <p className="mt-4 text-muted-foreground">
                        Thoughts on software development, design, and more.
                    </p>
                </div>
                <div className="grid gap-10 sm:grid-cols-2">
                    {posts.map((post) => (
                        <article key={post.slug} className="group relative flex flex-col space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                            </div>
                            <Link href={`/blog/${post.slug}`} className="block">
                                <h2 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-primary/80">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-muted-foreground">{post.excerpt}</p>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-sm font-medium underline underline-offset-4"
                            >
                                Read more
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </Container>
    )
}
