import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[90vh] w-full flex-col items-center justify-center text-center">
      {/* Background Video */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="h-full w-full object-cover opacity-80"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>

      <div className="z-10 mt-20 px-4">
        <h1 className="mb-6 text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#f26d5b] to-[#ffb88c] md:text-9xl drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Utopia<br />Marketing
        </h1>
        <p className="mb-10 text-lg font-medium text-gray-200 md:text-2xl drop-shadow-md max-w-2xl mx-auto">
          Your Marketing Needs Met In The City That Never Sleeps.
        </p>
        <Link 
          href="#contact"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#f26d5b] px-10 py-4 text-base font-bold text-white shadow-[0_0_40px_-10px_rgba(242,109,91,0.8)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(242,109,91,1)]"
        >
          <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#ff8c7a] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span className="relative">Get In</span>
        </Link>
      </div>
    </section>
  );
}