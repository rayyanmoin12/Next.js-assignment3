import Image from "next/image";
import Navbar from "@/app/components/navbar"
import Hero from "@/app/components/hero"
import Work from "@/app/components/work";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Work/>
    </div>
  );
}
