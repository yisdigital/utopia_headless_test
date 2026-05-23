import Image from "next/image";

export default function PreFooterImages() {
  return (
    <section className="flex w-full flex-col md:flex-row h-[50vh] md:h-[60vh]">
      {/* Left Image Block */}
      <div className="relative h-full w-full md:w-1/2 overflow-hidden bg-gray-200">
        <Image 
          src="/5.avif" 
          alt="Portfolio Setup Left" 
          fill 
          className="object-cover"
        /> 
      </div>
      
      {/* Right Image Block */}
      <div className="relative h-full w-full md:w-1/2 overflow-hidden bg-gray-300">
        <Image 
          src="/6.avif" 
          alt="Portfolio Setup Right" 
          fill 
          className="object-cover"
        /> 
      </div>
    </section>
  );
}