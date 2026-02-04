import React, { useState } from "react";
import {
  BookOpen,
  Calendar,
  Clock,
  Search,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  medium_url?: string;
  substack_url?: string;
  linkedin_url?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Health Matters More Than Anything",
    excerpt: `Hey ! you must have heard this saying "Health is wealth" although it sounds very clich'e — but this saying holds a lot of truth as I have experienced it myself that unless you are not healthy — nothing matters. The body is a magnificient machine that would`,
    image:
      "https://images.unsplash.com/photo-1765795019773-3330d68f238a?auto=format&fit=crop&w=800&q=80",
    date: "Jan 4, 2026",
    readTime: "8 min read",
    category: "Health & Wellness",
    author: "Dt. Palak M. Acharya",
    medium_url:
      "https://medium.com/@nutriipal/why-health-matters-more-than-anything-1b1c00908166",
    substack_url:
      "https://open.substack.com/pub/nutriipal/p/my-healthy-learnings-in-2025?utm_campaign=post-expanded-share&utm_medium=post%20viewer",
    linkedin_url:
      "https://www.linkedin.com/posts/palak-acharya-8108551a6_my-first-substack-post-httpslnkdin-activity-7413576221529296896-ZJWi",
  },
  {
    id: 2,
    title: "Things to Remember Before Using Continuous Glucose Monitor",
    excerpt:
      "Continuous Glucose Monitors (CGMs) have revolutionized diabetes management by providing real-time insights into blood sugar levels. However, before you start using one, there are several important considerations to keep in mind to ensure you get the most accurate and useful data.",
    image:
      "https://as1.ftcdn.net/v2/jpg/14/40/46/08/1000_F_1440460840_8CZBEiKiMUsix54LwNVfuZGSMmOiuwuB.jpg",
    date: "Feb 4, 2026",
    readTime: "7 min read",
    category: "Diabetes",
    author: "Dt. Palak M. Acharya",
    substack_url:
      "https://nutriipal.substack.com/p/things-to-remember-before-using-continuous",
  },
];

const categories: string[] = [
  "All",
  "Health & Wellness",
  "Diabetes",
  "Nutrition",
];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleReadArticle = (url?: string): void => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handlePlatformClick = (e: React.MouseEvent, url?: string): void => {
    e.stopPropagation();
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Helper function to get primary URL for card click
  const getPrimaryUrl = (post: BlogPost): string | undefined => {
    return post.medium_url || post.substack_url || post.linkedin_url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden pt-16 sm:pt-24 pb-20">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl sm:text-8xl">🥬</div>
        <div className="absolute top-40 right-20 text-5xl sm:text-7xl">🥕</div>
        <div className="absolute bottom-32 left-32 text-7xl sm:text-9xl">
          🥗
        </div>
        <div className="absolute top-1/3 right-1/4 text-4xl sm:text-6xl">
          🥑
        </div>
        <div className="absolute bottom-20 right-40 text-5xl sm:text-7xl">
          🍅
        </div>
        <div className="absolute top-2/3 left-20 text-6xl sm:text-8xl">📚</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            NutriiPal Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            Expert insights on diabetes reversal, nutrition science, and healthy
            living
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 sm:mb-12">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-base sm:text-lg bg-white/80 backdrop-blur transition-all"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition-all text-sm sm:text-base ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                    : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                transform:
                  hoveredId === post.id
                    ? "translateY(-10px) scale(1.02)"
                    : "translateY(0) scale(1)",
                transition: "all 0.3s ease",
              }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-green-100 hover:border-green-300 transition-all cursor-pointer"
              onClick={() => handleReadArticle(getPrimaryUrl(post))}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  style={{
                    transform:
                      hoveredId === post.id ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.5s ease",
                  }}
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 transition-colors"
                  style={{
                    color: hoveredId === post.id ? "#059669" : "#111827",
                  }}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author and CTA */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                  <span className="text-xs sm:text-sm text-gray-600">
                    By{" "}
                    <span className="font-semibold text-emerald-600">
                      {post.author}
                    </span>
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-600 font-semibold text-sm">
                      Read More
                    </span>
                    <div className="flex items-center gap-2">
                      {post.medium_url && (
                        <button
                          onClick={(e) =>
                            handlePlatformClick(e, post.medium_url)
                          }
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-emerald-100 flex items-center justify-center transition-all hover:scale-110"
                          title="Read on Medium"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-5 h-5"
                          >
                            <path d="M465.4 96C508.8 96 544 131.2 544 174.6L544 258.4C542.1 258.3 540.2 258.2 538.3 258.2L537.9 258.2C527.9 258.2 515.6 260.6 506.8 265C496.8 269.6 488.1 276.5 480.8 285.6C469 300.2 461.9 319.9 460.2 342C460.1 342.7 460.1 343.3 460 344C459.9 344.7 459.9 345.2 459.9 345.9C459.8 347.1 459.8 348.3 459.8 349.5C459.8 351.4 459.7 353.3 459.8 355.3C461 405.4 488 445.5 536.1 445.5C538.8 445.5 541.4 445.4 544 445.1L544 465.5C544 508.9 508.8 544.1 465.4 544.1L174.6 544C131.2 544 96 508.8 96 465.4L96 174.6C96 131.2 131.2 96 174.6 96L465.4 96zM178.3 202.9L178.6 203C191.8 206 198.4 210.4 198.4 226.4L198.4 413.6C198.4 429.6 191.7 434 178.5 437L178.2 437.1L178.2 439.9L231 439.9L231 437.1L230.7 437C217.5 434 210.8 429.6 210.8 413.6L210.8 237.3L296.9 439.8L301.8 439.8L390.4 231.6L390.4 418.2C389.3 430.8 382.6 434.7 370.7 437.4L370.4 437.5L370.4 440.2L462.3 440.2L462.3 437.5L462 437.4C450.1 434.7 443.3 430.8 442.1 418.2L442 226.4L442.1 226.4C442.1 210.4 448.8 206 462 203L462.3 202.9L462.3 200.2L390.1 200.2L323.1 357.6L256.1 200.2L178.3 200.2L178.3 202.9zM544 404.3C518.9 396.9 501 369.2 502.8 336.5L502.8 336.5L543.9 336.5L543.9 404.3zM537.6 268.7C539.9 268.7 542 269 544 269.6L544 327L503.8 327C505.3 293.4 517.4 269.1 537.6 268.7z" />
                          </svg>
                        </button>
                      )}
                      {post.substack_url && (
                        <button
                          onClick={(e) =>
                            handlePlatformClick(e, post.substack_url)
                          }
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-emerald-100 flex items-center justify-center transition-all hover:scale-110"
                          title="Read on Substack"
                        >
                          <img
                            src="https://cdn.simpleicons.org/substack/FF6719"
                            alt="Substack"
                            width="20"
                            height="20"
                          />
                        </button>
                      )}
                      {post.linkedin_url && (
                        <button
                          onClick={(e) =>
                            handlePlatformClick(e, post.linkedin_url)
                          }
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-emerald-100 flex items-center justify-center transition-all hover:scale-110"
                          title="Read on LinkedIn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#0A66C2"
                            className="w-5 h-5"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl sm:text-6xl mb-4">📭</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-br from-emerald-500 via-green-500 to-green-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Never Miss an Update
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto">
            Subscribe to get our latest articles on diabetes reversal and
            nutrition delivered to your inbox
          </p>
          <button
            onClick={() =>
              window.open("https://substack.com/@nutriipal", "_blank")
            }
            className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 hover:scale-105"
          >
            Subscribe on Substack
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Platform Links */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Follow us on
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap px-4">
            <a
              href="https://medium.com/@nutriipal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-5 h-5"
              >
                <path d="M465.4 96C508.8 96 544 131.2 544 174.6L544 258.4C542.1 258.3 540.2 258.2 538.3 258.2L537.9 258.2C527.9 258.2 515.6 260.6 506.8 265C496.8 269.6 488.1 276.5 480.8 285.6C469 300.2 461.9 319.9 460.2 342C460.1 342.7 460.1 343.3 460 344C459.9 344.7 459.9 345.2 459.9 345.9C459.8 347.1 459.8 348.3 459.8 349.5C459.8 351.4 459.7 353.3 459.8 355.3C461 405.4 488 445.5 536.1 445.5C538.8 445.5 541.4 445.4 544 445.1L544 465.5C544 508.9 508.8 544.1 465.4 544.1L174.6 544C131.2 544 96 508.8 96 465.4L96 174.6C96 131.2 131.2 96 174.6 96L465.4 96zM178.3 202.9L178.6 203C191.8 206 198.4 210.4 198.4 226.4L198.4 413.6C198.4 429.6 191.7 434 178.5 437L178.2 437.1L178.2 439.9L231 439.9L231 437.1L230.7 437C217.5 434 210.8 429.6 210.8 413.6L210.8 237.3L296.9 439.8L301.8 439.8L390.4 231.6L390.4 418.2C389.3 430.8 382.6 434.7 370.7 437.4L370.4 437.5L370.4 440.2L462.3 440.2L462.3 437.5L462 437.4C450.1 434.7 443.3 430.8 442.1 418.2L442 226.4L442.1 226.4C442.1 210.4 448.8 206 462 203L462.3 202.9L462.3 200.2L390.1 200.2L323.1 357.6L256.1 200.2L178.3 200.2L178.3 202.9zM544 404.3C518.9 396.9 501 369.2 502.8 336.5L502.8 336.5L543.9 336.5L543.9 404.3zM537.6 268.7C539.9 268.7 542 269 544 269.6L544 327L503.8 327C505.3 293.4 517.4 269.1 537.6 268.7z" />
              </svg>
              <span className="font-semibold text-gray-700 text-sm sm:text-base">
                Medium
              </span>
            </a>
            <a
              href="https://substack.com/@nutriipal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200 hover:scale-105"
            >
              <img
                src="https://cdn.simpleicons.org/substack/FF6719"
                alt="Substack"
                width="20"
                height="20"
              />
              <span className="font-semibold text-gray-700 text-sm sm:text-base">
                Substack
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
