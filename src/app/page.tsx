import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { Contents } from "@/components/Contents";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Masthead } from "@/components/Masthead";
import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <Contents />
        <Profile />
        <Skills />
        <Career />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
