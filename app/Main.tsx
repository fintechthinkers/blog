import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

// Dummy events data for now
const events = [
  { date: '2024-07-10', title: 'Intro to DeFi', location: 'Online', link: '#' },
  { date: '2024-08-05', title: 'Payments from First Principles', location: 'NYC', link: '#' },
]

// Dummy data for the next upcoming event
const upcomingEvent = {
  date: '2024-07-27',
  title: 'Identity in Fintech: Beyond KYC',
  location: 'Online',
  link: '#',
  description:
    'Join us for a deep dive into how identity is managed in fintech, with real-world scenarios and open discussion.',
}

// Previous talks data
const previousTalks = [
  {
    date: '2025-04-26',
    speaker: 'Satish',
    topic: 'KYC from First Principles',
    blogSlug: 'first-principles-meetup-kyc',
  },
]

export default function Home({ posts }) {
  // Only show the user's blog
  const userBlog = posts.find((post) => post.slug === 'first-principles-meetup-kyc')

  return (
    <>
      {/* Upcoming Event Section */}
      <div className="bg-primary-100 dark:bg-primary-900 mb-12 rounded-lg p-6 shadow">
        <h2 className="text-primary-700 dark:text-primary-300 mb-2 text-2xl font-bold">
          Upcoming Event
        </h2>
        <div className="mb-1 text-lg font-semibold">{upcomingEvent.title}</div>
        <div className="mb-1 text-gray-700 dark:text-gray-300">{upcomingEvent.description}</div>
        <div className="mb-1 text-sm text-gray-500">
          {upcomingEvent.date} &middot; {upcomingEvent.location}
        </div>
        <a
          href={upcomingEvent.link}
          className="bg-primary-600 hover:bg-primary-700 mt-2 inline-block rounded px-4 py-2 text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Event Details
        </a>
      </div>

      {/* Blog Section */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
          Fintech Meetup Blog
        </h1>
        <p className="mb-8 text-lg text-gray-500 dark:text-gray-400">{siteMetadata.description}</p>
        {userBlog ? (
          <div className="mb-12">
            <div className="mb-2 text-base text-gray-500 dark:text-gray-400">
              {formatDate(userBlog.date, siteMetadata.locale)}
            </div>
            <h2 className="mb-2 text-2xl font-bold">
              <Link href={`/blog/${userBlog.slug}`} className="text-gray-900 dark:text-gray-100">
                {userBlog.title}
              </Link>
            </h2>
            <div className="mb-2 flex flex-wrap gap-2">
              {userBlog.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary-200 text-primary-800 dark:bg-primary-800 dark:text-primary-200 rounded px-2 py-1 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-2 text-gray-700 dark:text-gray-300">{userBlog.summary}</div>
            <Link
              href={`/blog/${userBlog.slug}`}
              className="text-primary-500 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              aria-label={`Read more: "${userBlog.title}"`}
            >
              Read more &rarr;
            </Link>
          </div>
        ) : (
          <div>No posts found.</div>
        )}
      </div>

      {/* Previous Talks Table */}
      <div className="mt-16">
        <h2 className="mb-4 text-2xl font-bold">Previous Talks</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Speaker</th>
                <th className="px-4 py-2 text-left">Topic</th>
              </tr>
            </thead>
            <tbody>
              {previousTalks.map((talk, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2">{talk.date}</td>
                  <td className="px-4 py-2">{talk.speaker}</td>
                  <td className="px-4 py-2">
                    <Link href={`/blog/${talk.blogSlug}`} className="text-primary-500 underline">
                      {talk.topic}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
