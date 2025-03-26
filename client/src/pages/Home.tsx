import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Technology } from "@/components/Technology";
import { Impact } from "@/components/Impact";
import { Gallery } from "@/components/Gallery";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Technology />
        <Impact />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
