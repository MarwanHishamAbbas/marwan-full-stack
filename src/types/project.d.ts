export type ProjectProps = {
  project: {
    title: string
    slug: string
    description: string
    coverImage: ImageMetadata
    images: ImageMetadata[]
    stack: string[]
    date: string
    preview: string
    client?: string
    content: JSX.Element
  }
}
