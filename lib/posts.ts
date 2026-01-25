import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "posts")

export type Post = {
    slug: string
    title: string
    date: string
    excerpt: string
    content: string
    status?: "✅ Published" | "🔴 Draft"
}

export function getAllPosts(): Post[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "")
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, "utf8")
            const { data, content } = matter(fileContents)

            return {
                slug,
                content,
                title: data.title ?? "Untitled",
                date: data.date ?? new Date().toISOString(),
                excerpt: data.excerpt ?? "",
                status: data.status ?? "✅ Published", // Default to Published if not set
                ...data,
            } as Post
        })
        .filter((post) => post.status !== "🔴 Draft") // Only show non-draft posts

    return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`)
        if (!fs.existsSync(fullPath)) {
            return null
        }
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        return {
            slug,
            content,
            title: data.title ?? "Untitled",
            date: data.date ?? new Date().toISOString(),
            excerpt: data.excerpt ?? "",
            ...data,
        } as Post
    } catch (e) {
        return null
    }
}
