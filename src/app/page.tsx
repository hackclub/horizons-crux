import Nav from "@/components/site/nav";
import HackClubBadge from "@/components/site/hack-club-badge";
import Hero from "@/components/site/hero";
import About from "@/components/site/about";
import Footer from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <HackClubBadge />
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}
