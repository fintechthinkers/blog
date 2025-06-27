import Link from '@/components/Link'

const upcomingEvent = {
  date: '2024-07-27',
  title: 'Identity in Fintech: Beyond KYC',
  location: 'Online',
  link: '#',
  description:
    'Join us for a deep dive into how identity is managed in fintech, with real-world scenarios and open discussion.',
}

const previousTalks = [
  {
    date: '2024-06-29',
    speaker: 'Satish',
    topic: 'KYC from First Principles',
    blogSlug: 'first-principles-meetup-kyc',
  },
]

export default function EventsPage() {
  return (
    <div className="x-auto max-w-3xl py-10">
      <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
        Events
      </h1>
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
    </div>
  )
}
