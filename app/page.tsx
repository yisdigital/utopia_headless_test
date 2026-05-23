import Hero from "./components/sections/Hero";
import Badges from "./components/sections/Badges";
import Services from "./components/sections/Services";
import Studios from "./components/sections/Studios";
import Blog from "./components/sections/Blog";
import PreFooterImages from "./components/sections/PreFooterImages";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <Badges />
      <Services /> {/* Make sure to keep the code from the previous response here */}
      <Studios />  {/* Make sure to keep the code from the previous response here */}
      <Blog />
      <PreFooterImages />
    </main>
  );
}