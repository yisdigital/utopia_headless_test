import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    { id: 7, title: "Optimizing Your Funnel", img: "/7.avif", category: "Strategy" },
    { id: 8, title: "The Power of Local SEO", img: "/8.avif", category: "SEO" },
    { id: 9, title: "Building a Brand Identity", img: "/9.avif", category: "Design" },
  ];

  return (
    <section className="w-full bg-gray-50 px-6 py-24 text-black md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">Latest Insights</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#f26d5b]"></div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href="#" className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
              <div className="relative aspect-video w-full overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <Image 
                  src={post.img} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-600 uppercase tracking-wider">{post.category}</span>
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-[#f26d5b]">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}