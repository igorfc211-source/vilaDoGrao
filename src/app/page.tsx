import Hero from "../components/sections/hero";
import Header from "../components/sections/header";
import Experience from "../components/sections/experience";
import Locations from "../components/sections/locations";
import Footer from "../components/sections/footer";
import Menu from "../components/sections/menu";
import Reviews from "../components/sections/reviews";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
    <Analytics />
      <Header />
      <main>
        <Hero />
        <Reviews />
        <Experience />
        <Locations />
        <Menu />
      </main>
      <Footer />
    </>
  );
}
