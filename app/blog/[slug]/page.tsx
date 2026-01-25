import { Container } from "@/components/layout/container"
import { getPostBySlug } from "@/lib/posts"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: PostPageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) {
        return {}
    }
    return {
        title: `${post.title} - Utku Kucuk`,
        description: post.excerpt,
    }
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <Container className="py-24">
            <div className="mx-auto max-w-3xl">
                <Link
                    href="/blog"
                    className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
                <article className="prose prose-lg dark:prose-invert max-w-none 
                    prose-headings:font-bold prose-headings:tracking-tight 
                    prose-code:text-primary prose-code:bg-muted prose-code:rounded prose-code:px-1 prose-code:before:content-[''] prose-code:after:content-['']
                    prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80
                    prose-img:rounded-xl prose-img:border prose-img:border-border">
                    <div className="mb-8">
                        <time className="text-sm text-muted-foreground" dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString()}
                        </time>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
                    </div>
                    <MDXRemote source={post.content} />
                </article>
            </div>
        </Container>
    )
}
