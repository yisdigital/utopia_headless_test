import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 py-8 md:px-12 lg:px-24">
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="flex items-center space-x-6 text-xs font-bold text-gray-500">
          <p>© 2024 UTOPIA MARKETING</p>
          <Link href="#" className="hover:text-black">TERMS</Link>
        </div>
        
        <div className="flex space-x-2">
          {['FACEBOOK', 'TWITTER', 'YELP', 'INSTAGRAM'].map((social) => (
            <Link 
              key={social} 
              href="#"
              className="bg-black px-4 py-2 text-[10px] font-bold tracking-wider text-white transition hover:bg-[#f26d5b]"
            >
              {social}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}