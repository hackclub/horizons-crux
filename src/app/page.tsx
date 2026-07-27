import { ReactLenis } from "lenis/react";

import Nav from "@/components/site/nav";
import Hero from "@/components/site/hero";
import Sponsors from "@/components/site/sponsors";
import Footer from "@/components/site/footer";


const projects = [
  {
    title: "Lost Treasure Fever",
    description: "The crux of storytelling is shown in this game as the ability for storytelling decisions to impact the context of stories. The players are given the power to change the story by choosing the names of objects within the game world. The names of objects are embedded into the script to let players personalise the experience to their own stories.",
    image: "/lost-treasure-fever.png",
    demoLink: "https://lochi-makes-games.itch.io/lost-treasure-fever",
    repoLink: "https://github.com/Lochi-dot-JPEG/crux"
  },
  {
    title: "You Are Ostensibly Investigating Some Information Made Under Literal And Terribly, Inaccurately, Opposite Names",
    description: "Follow the story of a court case which seems straight forward -- he was spotted with the murder weapon, he was around the victim, his DNA was found at the scene of the crime. But something is off. Is that the whole truth? What secrets lurk beneath the surface of this case?",
    image: "/yaoi-sim.png",
    demoLink: "https://viywolf.itch.io/you-are-ostensibly-investigating-some-information-made-under-literal-and-terribl",
    repoLink: "https://github.com/Logabe/crux"
  },
  {
    title: "Islands of Memory",
    description: "A game about deciding your fate and looking into handling problems in life.",
    image: "/islands.png",
    demoLink: "https://sebashtioon.itch.io/islands-of-memory",
    repoLink: "https://github.com/PL00T00/crux-game"
  }
];

export default function Home() {
  return (
    <ReactLenis root>
      <Nav />
      <main>
        <Hero />
        <section className="py-20 px-6 max-w-6xl mx-auto w-full space-y-24">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center text-white tracking-tight">
              Check out what Hack Clubbers made
            </h1>
            <p className="text-[#8B949E] text-center max-w-2xl mx-auto mb-16 text-lg">
              The theme for this event was &quot;The Crux of Storytelling&quot;. After 48 hours of intense coding, here is what our attendees built!
            </p>
            
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center text-white">Top 3 Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {projects.map((project, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#161B22] border border-[#30363D] rounded-2xl overflow-hidden flex flex-col hover:border-[#8B949E] transition-colors group"
                  >
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-[#0D1117] border-b border-[#30363D] flex items-center justify-center overflow-hidden">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-[#8B949E]">Screenshot {idx + 1}</span>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF7AE2] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#8B949E] text-sm mb-6 grow">
                        {project.description}
                      </p>
                      <div className="flex gap-3 w-full mt-auto">
                        <a 
                          href={project.demoLink || "#"}
                          target="_blank" rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold bg-[#21262D] text-white hover:bg-[#30363D] transition-colors border border-[#30363D]"
                        >
                          View Project ↗
                        </a>
                        <a 
                          href={project.repoLink || "#"}
                          target="_blank" rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold bg-[#21262D] text-white hover:bg-[#30363D] transition-colors border border-[#30363D]"
                        >
                          View Repo ↗
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
        <Sponsors />
      </main>
      <Footer />
    </ReactLenis>
  );
}
