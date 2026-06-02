import Image from "next/image";
import Hero from "../components/sections/hero";
import Header from "../components/sections/header";
import Experience from "../components/sections/experience";
import Locations from "../components/sections/locations";

export default function Home() {
  return (
  
        <>
        <Header />
        <Hero />
        <Experience />
        <Locations />
        </>
     
  );
}
