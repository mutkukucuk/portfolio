import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export type Project = {
    slug: string
    title: string
    description: string
    date: string
    tags: string[]
    image?: string
    githubUrl?: string
    liveUrl?: string
    content: string
    published?: boolean
}

export function getAllProjects(): Project[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(projectsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(projectsDirectory)
    const allProjectsData = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "")
            const fullPath = path.join(projectsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, "utf8")
            const { data, content } = matter(fileContents)

            return {
                slug,
                content,
                title: data.title ?? "Untitled",
                description: data.description ?? "",
                date: data.date ?? new Date().toISOString(),
                tags: data.tags ?? [],
                image: data.image,
                githubUrl: data.githubUrl,
                liveUrl: data.liveUrl,
                published: data.published !== false, // Default to true if not set
                ...data,
            } as Project
        })
        .filter((project) => project.published !== false) // Only show published projects

    return allProjectsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
}

export function getProjectBySlug(slug: string): Project | null {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
        if (!fs.existsSync(fullPath)) {
            return null
        }
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        return {
            slug,
            content,
            title: data.title ?? "Untitled",
            description: data.description ?? "",
            date: data.date ?? new Date().toISOString(),
            tags: data.tags ?? [],
            image: data.image,
            githubUrl: data.githubUrl,
            liveUrl: data.liveUrl,
            ...data,
        } as Project
    } catch (e) {
        return null
    }
}
