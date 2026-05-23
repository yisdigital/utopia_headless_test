import Link from "next/link";

export default function Studios() {
  const services = [
    {
      title: "Product Photography",
      description: "High-quality, professional shots that highlight the details and quality of your products, perfect for eCommerce and catalogs.",
      action: "Learn More"
    },
    {
      title: "Headshots",
      description: "Professional and approachable headshots for corporate profiles, acting portfolios, and personal branding.",
      action: "Learn More"
    },
    {
      title: "Studio Rental",
      description: "Fully equipped studio space available for rent. Perfect for freelance photographers and videographers needing a professional setup.",
      action: "Book Now"
    }
  ];

  return (
    <section className="w-full bg-[#3eb4a6] px-6 pb-24 text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl border-t border-teal-400 pt-20">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-wider text-black">Get Noticed. To Us.</p>
          <h2 className="text-5xl font-bold text-[#f26d5b]">Utopia Photo Studios<br/>Miami</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6">
              <h3 className="text-xl font-bold text-black">{service.title}</h3>
              <p className="text-sm leading-relaxed flex-grow">{service.description}</p>
              <Link 
                href="#"
                className="rounded-full border-2 border-black px-6 py-2 text-sm font-bold text-black transition hover:bg-black hover:text-[#3eb4a6]"
              >
                {service.action}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}