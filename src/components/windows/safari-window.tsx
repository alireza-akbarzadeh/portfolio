import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from 'lucide-react'
import { useState } from 'react'
import { WindowWrapper } from '../window-wrapper'
import { blogPosts } from '@/constants'

export function SafariWindow() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.date.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const featuredPost = filteredPosts[0] || blogPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  return (
    <WindowWrapper
      windowType="safari"
      title="Articles"
      defaultWidth={900}
      defaultHeight={600}
      minWidth={700}
      minHeight={500}
      headerContent={
        <>
          <PanelLeft className="ml-2 w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          <div className="flex items-center gap-1">
            <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            <ChevronRight className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          </div>
          <div className="flex-1 flex items-center gap-3">
            <ShieldHalf className="w-5 h-5 text-gray-600" />
            <div className="flex-1 flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-300">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 ml-3">
            <Share className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            <Plus className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            <Copy className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          </div>
        </>
      }
    >
      <div className="h-full overflow-y-auto bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <div className="relative bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">
              Developer Insights
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Exploring modern web development, best practices, and the latest
              technologies shaping the future of the web.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-gray-50 to-transparent" />
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="max-w-5xl mx-auto px-8 py-4">
            <p className="text-gray-600 dark:text-gray-400">
              Found{' '}
              <span className="font-semibold">{filteredPosts.length}</span>{' '}
              {filteredPosts.length === 1 ? 'article' : 'articles'} matching "
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {searchQuery}
              </span>
              "
            </p>
          </div>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <div className="max-w-5xl mx-auto px-8 -mt-12 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {searchQuery ? 'Match' : 'Featured'}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                    {featuredPost.date}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    Dive deep into the world of TypeScript and discover why it's
                    become the go-to choice for modern developers building
                    scalable applications.
                  </p>
                  <a
                    href={featuredPost.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group/link"
                  >
                    Read Full Article
                    <MoveRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {searchQuery && filteredPosts.length === 0 && (
          <div className="max-w-5xl mx-auto px-8 py-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12">
              <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We couldn't find any articles matching "
                <span className="font-semibold text-blue-600">
                  {searchQuery}
                </span>
                "
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}

        {/* Latest Articles Section */}
        {remainingPosts.length > 0 && (
          <div className="max-w-5xl mx-auto px-8 pb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {searchQuery ? 'More Results' : 'Latest Articles'}
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-8 h-0.5 bg-linear-to-r from-blue-600 to-purple-600" />
                <span>{filteredPosts.length} Posts</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {remainingPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {post.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm hover:gap-3 transition-all group/link mt-2"
                    >
                      Continue Reading
                      <MoveRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter CTA */}
            {!searchQuery && (
              <div className="mt-12 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">
                    Stay Updated with Latest Posts
                  </h3>
                  <p className="text-blue-100 mb-6 max-w-2xl">
                    Get the latest articles, tutorials, and development insights
                    delivered straight to your inbox.
                  </p>
                  <div className="flex gap-3 max-w-md">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </WindowWrapper>
  )
}
