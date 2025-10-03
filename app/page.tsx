import Link from "next/link";
import Header from "../src/components/header";
import Hero from "../src/components/hore";
import Boxes from "../src/components/boxs";

export default function Home() {
  return (
    <main className="bg-[#0B1623] min-h-screen text-white">
      <Header />
      <Hero />
      <Boxes />
    </main>
  );
}