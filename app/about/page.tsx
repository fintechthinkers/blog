import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function AboutPage() {
  return (
    <div className="x-auto max-w-2xl py-10">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
        About
      </h1>
      <div className="prose dark:prose-invert text-lg">
        <p>
          <strong>Fintech Meetup Blog</strong> is a community-driven platform where we explore
          fintech topics from first principles. Our goal is to break down complex financial
          technology concepts into simple, foundational ideas that anyone can understand and
          discuss.
        </p>
        <p>
          The meetup and this blog were started by <strong>Satish Perala</strong> and{' '}
          <strong>Yuva K</strong>, passionate builders and first-principles thinkers in the fintech
          space. We believe in open discussion, learning by analogy, and sharing knowledge to help
          everyone in the community grow.
        </p>
        <p>
          Join us for our monthly meetups, read our blog posts, and be part of a growing group of
          fintech enthusiasts who love to learn and share from the ground up!
        </p>
      </div>
    </div>
  )
}
