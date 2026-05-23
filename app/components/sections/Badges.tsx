import Image from "next/image";

export default function Badges() {
  return (
    <div className="w-full bg-black py-4 px-6 md:px-12">
      <div className="flex items-center justify-start space-x-6">
        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-700">
          <Image src="/2.avif" alt="Badge 1" fill className="object-cover" />
        </div>
        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-700">
          <Image src="/3.avif" alt="Badge 2" fill className="object-cover" />
        </div>
        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-700">
          <Image src="/4.avif" alt="Badge 3" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}