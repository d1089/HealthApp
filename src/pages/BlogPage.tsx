// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   BookOpen,
//   Calendar,
//   Clock,
//   ArrowRight,
//   ExternalLink,
//   Search,
//   Tag,
// } from "lucide-react";

// interface BlogPost {
//   id: number;
//   title: string;
//   excerpt: string;
//   image: string;
//   date: string;
//   readTime: string;
//   category: string;
//   platform: "medium" | "substack";
//   url: string;
//   author: string;
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "Understanding Diabetes: A Complete Guide to Blood Sugar Management",
//     excerpt:
//       "Learn the fundamentals of diabetes management, from understanding HbA1c levels to making sustainable dietary changes that support long-term health.",
//     image:
//       "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
//     date: "Dec 28, 2024",
//     readTime: "8 min read",
//     category: "Diabetes",
//     platform: "medium",
//     url: "https://medium.com/@nutriipal/diabetes-guide",
//     author: "Dr. Sarah Johnson",
//   },
//   {
//     id: 2,
//     title: "5 Indian Superfoods That Help Reverse Diabetes Naturally",
//     excerpt:
//       "Discover traditional Indian ingredients backed by modern science that can help stabilize blood sugar and support your diabetes reversal journey.",
//     image:
//       "https://images.unsplash.com/photo-1596040033229-a0b44d1d0633?auto=format&fit=crop&w=800&q=80",
//     date: "Dec 25, 2024",
//     readTime: "6 min read",
//     category: "Nutrition",
//     platform: "substack",
//     url: "https://nutriipal.substack.com/superfoods",
//     author: "Priya Sharma",
//   },
//   {
//     id: 3,
//     title: "The Truth About Carbs: Why Dal-Rice Can Be Diabetes-Friendly",
//     excerpt:
//       "Breaking myths about carbohydrates and teaching you how to enjoy traditional meals while managing blood sugar effectively.",
//     image:
//       "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
//     date: "Dec 22, 2024",
//     readTime: "7 min read",
//     category: "Nutrition",
//     platform: "medium",
//     url: "https://medium.com/@nutriipal/carbs-truth",
//     author: "Rajesh Kumar",
//   },
//   {
//     id: 4,
//     title: "Medicine-Free Living: Success Stories from Our Community",
//     excerpt:
//       "Real stories of individuals who reversed their diabetes and achieved medication-free lives through our holistic nutrition program.",
//     image:
//       "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
//     date: "Dec 20, 2024",
//     readTime: "10 min read",
//     category: "Success Stories",
//     platform: "substack",
//     url: "https://nutriipal.substack.com/success-stories",
//     author: "NutriiPal Team",
//   },
//   {
//     id: 5,
//     title: "Sleep & Stress: The Hidden Factors Affecting Your Blood Sugar",
//     excerpt:
//       "Understanding the crucial connection between sleep quality, stress management, and diabetes control beyond just diet and exercise.",
//     image:
//       "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
//     date: "Dec 18, 2024",
//     readTime: "9 min read",
//     category: "Lifestyle",
//     platform: "medium",
//     url: "https://medium.com/@nutriipal/sleep-stress",
//     author: "Dr. Amit Patel",
//   },
//   {
//     id: 6,
//     title: "How to Read Food Labels: A Diabetic's Essential Guide",
//     excerpt:
//       "Master the art of reading nutrition labels to make informed choices at the grocery store and avoid hidden sugars.",
//     image:
//       "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80",
//     date: "Dec 15, 2024",
//     readTime: "5 min read",
//     category: "Education",
//     platform: "substack",
//     url: "https://nutriipal.substack.com/food-labels",
//     author: "Meera Reddy",
//   },
// ];

// const categories = [
//   "All",
//   "Diabetes",
//   "Nutrition",
//   "Success Stories",
//   "Lifestyle",
//   "Education",
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const BlogPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredPosts = blogPosts.filter((post) => {
//     const matchesCategory =
//       selectedCategory === "All" || post.category === selectedCategory;
//     const matchesSearch =
//       post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden pt-24 pb-20">
//       {/* Fresh Vegetables Background Pattern */}
//       <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
//         <div className="absolute top-10 left-10 text-8xl">🥬</div>
//         <div className="absolute top-40 right-20 text-7xl">🥕</div>
//         <div className="absolute bottom-32 left-32 text-9xl">🥗</div>
//         <div className="absolute top-1/3 right-1/4 text-6xl">🥑</div>
//         <div className="absolute bottom-20 right-40 text-7xl">🍅</div>
//         <div className="absolute top-2/3 left-20 text-8xl">📚</div>
//       </div>

//       {/* Animated gradient blobs */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
//         <motion.div
//           className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply"
//           animate={{
//             scale: [1, 1.2, 1],
//             x: [0, 30, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply"
//           animate={{
//             scale: [1, 1.1, 1],
//             x: [0, -40, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <div className="flex justify-center mb-6">
//             <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center shadow-2xl">
//               <BookOpen className="w-10 h-10 text-white" />
//             </div>
//           </div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
//             NutriiPal Blog
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
//             Expert insights on diabetes reversal, nutrition science, and healthy
//             living
//           </p>
//         </motion.div>

//         {/* Search and Filter Section */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-12"
//         >
//           {/* Search Bar */}
//           <div className="max-w-2xl mx-auto mb-8">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search articles..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-lg bg-white/80 backdrop-blur transition-all"
//               />
//             </div>
//           </div>

//           {/* Category Filter */}
//           <div className="flex flex-wrap justify-center gap-3">
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`px-6 py-2 rounded-full font-semibold transition-all ${
//                   selectedCategory === category
//                     ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
//                     : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200"
//                 }`}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Blog Posts Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selectedCategory + searchQuery}
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {filteredPosts.map((post, index) => (
//               <motion.article
//                 key={post.id}
//                 variants={fadeUp}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-green-100 hover:border-green-300 transition-all group"
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden h-48">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-700">
//                     {post.platform === "medium" ? "📝 Medium" : "✉️ Substack"}
//                   </div>
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   {/* Meta Info */}
//                   <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       <span>{post.date}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock className="w-4 h-4" />
//                       <span>{post.readTime}</span>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
//                     {post.title}
//                   </h2>

//                   {/* Excerpt */}
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
//                     {post.excerpt}
//                   </p>

//                   {/* Author */}
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                     <span className="text-sm text-gray-600">
//                       By{" "}
//                       <span className="font-semibold text-emerald-600">
//                         {post.author}
//                       </span>
//                     </span>
//                     <motion.a
//                       href={post.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
//                     >
//                       Read More
//                       <ExternalLink className="w-4 h-4" />
//                     </motion.a>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* No Results */}
//         {filteredPosts.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20"
//           >
//             <div className="text-6xl mb-4">📭</div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">
//               No articles found
//             </h3>
//             <p className="text-gray-600">
//               Try adjusting your search or filter criteria
//             </p>
//           </motion.div>
//         )}

//         {/* Newsletter CTA */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mt-20 bg-gradient-to-br from-emerald-500 via-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
//         >
//           <div className="absolute inset-0 opacity-10 pointer-events-none">
//             <motion.div
//               className="absolute top-10 left-10 text-6xl"
//               animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
//               transition={{ duration: 5, repeat: Infinity }}
//             >
//               📚
//             </motion.div>
//             <motion.div
//               className="absolute bottom-10 right-10 text-6xl"
//               animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
//               transition={{ duration: 6, repeat: Infinity }}
//             >
//               ✍️
//             </motion.div>
//           </div>

//           <div className="relative z-10">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Never Miss an Update
//             </h2>
//             <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
//               Subscribe to get our latest articles on diabetes reversal and
//               nutrition delivered to your inbox
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
//             >
//               Subscribe to Newsletter 📧
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  X,
  Search,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  platform: "medium" | "substack";
  author: string;
  content: string; // Full content for modal view
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Diabetes: A Complete Guide to Blood Sugar Management",
    excerpt:
      "Learn the fundamentals of diabetes management, from understanding HbA1c levels to making sustainable dietary changes.",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    category: "Diabetes",
    platform: "medium",
    author: "Dr. Sarah Johnson",
    content: `
      <h2>What is Diabetes?</h2>
      <p>Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). Understanding the basics is the first step toward effective management.</p>
      
      <h3>Types of Diabetes</h3>
      <p>There are three main types of diabetes: Type 1, Type 2, and Gestational diabetes. Type 2 diabetes is the most common, accounting for about 90% of all diabetes cases.</p>
      
      <h3>Understanding HbA1c</h3>
      <p>HbA1c is a crucial marker that shows your average blood sugar levels over the past 2-3 months. A level below 5.7% is considered normal, while 5.7-6.4% indicates prediabetes, and 6.5% or higher suggests diabetes.</p>
      
      <h3>Dietary Management</h3>
      <p>The key to managing diabetes through diet is understanding how different foods affect your blood sugar. Complex carbohydrates, lean proteins, and healthy fats should form the foundation of your meals.</p>
      
      <h3>Key Takeaways</h3>
      <ul>
        <li>Monitor your blood sugar regularly</li>
        <li>Focus on whole, unprocessed foods</li>
        <li>Stay physically active</li>
        <li>Work with healthcare professionals</li>
        <li>Make sustainable lifestyle changes</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "5 Indian Superfoods That Help Reverse Diabetes Naturally",
    excerpt:
      "Discover traditional Indian ingredients backed by modern science that can help stabilize blood sugar.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a0b44d1d0633?auto=format&fit=crop&w=800&q=80",
    date: "Dec 25, 2024",
    readTime: "6 min read",
    category: "Nutrition",
    platform: "substack",
    author: "Priya Sharma",
    content: `
      <h2>Harnessing the Power of Indian Superfoods</h2>
      <p>India has a rich tradition of using food as medicine. These five superfoods have been used for centuries and are now backed by modern scientific research.</p>
      
      <h3>1. Bitter Gourd (Karela)</h3>
      <p>Bitter gourd contains compounds that act similarly to insulin, helping lower blood sugar levels. Studies show it can reduce fasting blood glucose by up to 25%.</p>
      
      <h3>2. Fenugreek Seeds (Methi)</h3>
      <p>Rich in soluble fiber, fenugreek seeds slow down digestion and absorption of carbohydrates, leading to better blood sugar control.</p>
      
      <h3>3. Turmeric (Haldi)</h3>
      <p>Curcumin in turmeric has powerful anti-inflammatory properties and can improve insulin sensitivity.</p>
      
      <h3>4. Amla (Indian Gooseberry)</h3>
      <p>High in Vitamin C and chromium, amla helps regulate carbohydrate metabolism and has been shown to lower blood sugar levels.</p>
      
      <h3>5. Cinnamon (Dalchini)</h3>
      <p>Just half a teaspoon daily can improve insulin sensitivity and lower blood sugar levels by up to 29%.</p>
    `,
  },
  {
    id: 3,
    title: "The Truth About Carbs: Why Dal-Rice Can Be Diabetes-Friendly",
    excerpt:
      "Breaking myths about carbohydrates and teaching you how to enjoy traditional meals while managing blood sugar.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    date: "Dec 22, 2024",
    readTime: "7 min read",
    category: "Nutrition",
    platform: "medium",
    author: "Rajesh Kumar",
    content: `
      <h2>Carbohydrates: Friend or Foe?</h2>
      <p>The common belief that all carbs are bad for diabetes is a myth. The key is understanding which carbs to eat and how to combine them.</p>
      
      <h3>The Dal-Rice Combination</h3>
      <p>Dal (lentils) and rice is a staple in Indian cuisine, and with the right approach, it can be part of a diabetes-friendly diet.</p>
      
      <h3>Why Dal is Your Friend</h3>
      <p>Lentils are rich in protein and fiber, which slow down the digestion of rice and prevent blood sugar spikes. They also have a low glycemic index.</p>
      
      <h3>Smart Rice Choices</h3>
      <p>Opt for brown rice, unpolished rice, or mix white rice with quinoa. Portion control is key – stick to 1/2 to 3/4 cup of cooked rice per meal.</p>
      
      <h3>The Perfect Ratio</h3>
      <p>Use a 2:1 ratio of dal to rice. Add vegetables to increase fiber content and further slow down glucose absorption.</p>
      
      <h3>Timing Matters</h3>
      <p>Have your dal-rice meal earlier in the day when your body is better at processing carbohydrates.</p>
    `,
  },
];

const categories = [
  "All",
  "Diabetes",
  "Nutrition",
  "Success Stories",
  "Lifestyle",
  "Education",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// DESIGN 1: Full-Screen Modal with Sidebar
const Design1 = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-8 text-center">
          NutriiPal Blog
        </h1>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-white/80"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer border-2 border-green-100 hover:border-green-300 transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-xs text-emerald-600 font-bold mb-2">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30 }}
              className="ml-auto w-full md:w-2/3 bg-white overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center z-10">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                  <span className="font-bold text-gray-900">Reading Mode</span>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="max-w-3xl mx-auto p-8">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
                  {selectedPost.category}
                </div>
                <h1 className="text-4xl font-bold mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
                  <span>By {selectedPost.author}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {selectedPost.readTime}
                  </span>
                </div>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// DESIGN 2: Expanding Cards (Accordion Style)
const Design2 = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-12 text-center">
          NutriiPal Blog
        </h1>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              layout
              className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-green-100"
            >
              {/* Preview */}
              <div
                onClick={() =>
                  setExpandedId(expandedId === post.id ? null : post.id)
                }
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex gap-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-32 object-cover rounded-2xl flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="text-xs text-emerald-600 font-bold mb-2">
                      {post.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === post.id ? 90 : 0 }}
                    className="flex-shrink-0"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedId === post.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 overflow-hidden"
                  >
                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
                      <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// DESIGN 3: Split View with Navigation
const Design3 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPost = blogPosts[selectedIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-12 text-center px-4">
          NutriiPal Blog
        </h1>

        <div className="grid md:grid-cols-12 gap-6 px-4 pb-20">
          {/* Left Sidebar - Article List */}
          <div className="md:col-span-4 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                onClick={() => setSelectedIndex(index)}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-2xl cursor-pointer transition-all ${
                  selectedIndex === index
                    ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex gap-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h4
                      className={`font-bold line-clamp-2 mb-1 ${
                        selectedIndex === index ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {post.title}
                    </h4>
                    <p
                      className={`text-xs ${
                        selectedIndex === index
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      {post.readTime}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-3xl p-8 shadow-2xl max-h-[calc(100vh-200px)] overflow-y-auto"
              >
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
                  {selectedPost.category}
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
                  <span>By {selectedPost.author}</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-8 border-t">
                  <button
                    onClick={() =>
                      setSelectedIndex(
                        (prev) =>
                          (prev - 1 + blogPosts.length) % blogPosts.length
                      )
                    }
                    className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setSelectedIndex((prev) => (prev + 1) % blogPosts.length)
                    }
                    className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component with Design Selector
const BlogPage = () => {
  const [selectedDesign, setSelectedDesign] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-8 text-center">
            NutriiPal Blog
          </h1>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-white/80"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer border-2 border-green-100 hover:border-green-300 transition-all"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-xs text-emerald-600 font-bold mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full Screen Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex"
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30 }}
                className="ml-auto w-full md:w-2/3 bg-white overflow-y-auto"
              >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center z-10">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-emerald-600" />
                    <span className="font-bold text-gray-900">
                      Reading Mode
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto p-8">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />
                  <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
                    {selectedPost.category}
                  </div>
                  <h1 className="text-4xl font-bold mb-4">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
                    <span>By {selectedPost.author}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {selectedPost.readTime}
                    </span>
                  </div>
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;
