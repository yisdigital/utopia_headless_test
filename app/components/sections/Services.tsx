export default function Services() {
  const features = [
    { title: "Social Media Optimization (SMO)", desc: "Enhance your online presence and engage directly with your audience. We build strategies that foster community and brand loyalty." },
    { title: "PPC / SEO", desc: "Climb the search rankings and get immediate visibility with targeted ad campaigns. We optimize your content for both users and algorithms." },
    { title: "Social Media Advertisements", desc: "Convert scrollers into customers. Our ad campaigns are precisely targeted to ensure maximum ROI for your business." },
  ];

  return (
    <section className="w-full bg-[#3eb4a6] px-6 py-24 text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-light uppercase tracking-widest text-black/80 drop-shadow-sm">
            Build Your Brand's <br /> <span className="text-[#f26d5b] font-extrabold drop-shadow-md">Perfect World</span>
          </h2>
          <p className="mx-auto max-w-2xl text-2xl font-medium leading-relaxed text-white">
            Transform your brand into a <span className="text-[#f26d5b] font-bold underline decoration-wavy decoration-[#f26d5b] underline-offset-4">unicorn</span> with our all-in-one digital marketing team.
          </p>
        </div>

        {/* Interactive Grid Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-24">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group cursor-pointer rounded-2xl bg-[#2fa395] p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:bg-[#288f82] hover:shadow-2xl border border-teal-400/30"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f26d5b]/20 text-[#f26d5b] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                ✦
              </div>
              <h4 className="mb-3 font-bold text-xl text-black group-hover:text-white transition-colors">{feature.title}</h4>
              <p className="text-sm leading-relaxed text-gray-100">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}