import { useEffect } from "react";
import { Card, CardContent } from "./Components/ui/card";
import { Button } from "./Components/ui/button";
import { motion } from "framer-motion";

export default function CargoStyleLanding() {
  useEffect(() => {
    document.title = "Relic Marketplace";
  }, []);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0C0C0C] font-sans">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">Relic</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight"
        >
          Celebrating Human-Made Art in a Digital World
        </motion.h2>
        <p className="mt-6 text-lg max-w-xl text-[#666]">
          Relic is an NFT marketplace honoring the real, the raw, and the handmade. Join the movement.
        </p>
        <Button className="mt-10 bg-[#EF4B3C] text-white px-6 py-3 text-lg rounded-2xl shadow-md hover:bg-[#e34333]">
          Explore Marketplace
        </Button>
      </section>

      <section id="projects" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20">
        {[1,2,3,4,5,6].map(i => (
          <Card key={i} className="hover:scale-105 transition-transform duration-300 ease-in-out">
            <CardContent className="h-60 bg-gray-200 flex items-center justify-center text-2xl font-semibold">
              Project {i}
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center py-10 text-sm text-[#666]">
        © 2025 Relic Marketplace — All rights reserved.
      </footer>
    </main>
  );
}
