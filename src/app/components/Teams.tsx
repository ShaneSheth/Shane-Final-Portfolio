import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface Team {
  id: string;
  title: string;
  description: string;
  image: string;
  hasDetail?: boolean;
}

const teams: Team[] = [
  {
    id: "usc-aerodesign",
    title: "USC AeroDesign Team (ADT)",
    description: "The USC AeroDesign Team is a student-led engineering design team that designs, builds, and flies radio-controlled aircraft for the annual AIAA Design/Build/Fly competition. The team provides a hands-on environment where students apply concepts from aerodynamics, structures, electronics, and systems integration to develop a fully functional aircraft over the course of an academic year. Members work through the complete engineering cycle—from conceptual design and analysis to manufacturing, testing, and flight operations—while collaborating across multiple engineering disciplines. The team has been active for over 25 years and has achieved multiple first-place finishes and consistent top placements in international competition.",
    image: "https://i.imgur.com/3vK8WB5.jpg",
    hasDetail: true,
  },
  {
    id: "cove-terra-labs",
    title: "Cove [Terra Labs]",
    description: "A 'Jarvis'-like robotic arm with 7 degrees of freedom (DOF) that autonomously serves drinks and small food items from its station. Designed to interact with guests through friendly, understandable gestures. Translates voice commands into smooth, safe arm motions ('voice-to-motion') for intuitive control.",
    image: "https://i.imgur.com/jejirMp.jpg",
    hasDetail: true,
  },
  {
    id: "terraport-terra-labs",
    title: "Terraport [Terra Labs]",
    description: "Mobile workstation for Terra Labs members. It is a mini shipping container that unfolds on itself to reveal storage, tables, tools, machines, and seats.",
    image: "https://i.imgur.com/LWyLFhF.jpg",
    hasDetail: true,
  },
];

export function Teams() {
  return (
    <div className="min-h-screen py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl mb-16">My Teams</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teams.map((team) => (
            <div key={team.id} className="space-y-4">
              <h2 className="text-2xl">
                {team.title}
              </h2>
              
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src={team.image}
                  alt={team.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-neutral-600 leading-relaxed">
                {team.description}
              </p>
              
              {team.hasDetail && (
                <Link to={`/teams/${team.id}`}>
                  <Button variant="outline" className="mt-2">
                    See More
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}