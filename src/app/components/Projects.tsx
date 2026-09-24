import { Link } from "react-router";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  inProgress?: boolean;
  hasDetail?: boolean;
}

const projects: Project[] = [
  {
    id: "aerodesign-materials",
    title: "AeroDesign Team Materials Testing",
    description: "Leading a material characterization study of carbon fiber composites intended for fuselage panels in collaboration with the Structures Lead for the AeroDesign Team (ADT). Designed and executed ASTM-aligned coupon-level testing to quantify key mechanical properties, including in-plane tensile and compressive strength, shear strength, flexural (bending) modulus and strength, open-hole tensile performance, and bearing stress at fastener locations. Data was analyzed to determine material allowables, assess failure modes (fiber rupture, delamination, kink banding, bearing failure), and inform preliminary fuselage structural design. Developing documentation detailing the research, testing process, and results to create a reproducible methodology for future composite testing.",
    image: "https://i.imgur.com/mT5ptf7.png",
    inProgress: true,
  },
  {
    id: "experience-synesthesia",
    title: "Experience Synesthesia",
    description: "An engineering and art installation exploring how we can blend auditory and visual senses for the Artscape Art Show in collaboration with the USC Performing Arts Committee (PAC). Designed interactive DJ podiums where audiences could alter music in real time while generating evolving projected artwork. Kerf bent ACX wood exterior provides organic shape, adding to the immersive experience. This project integrated dynamic lighting, engraved tactile surfaces, and multi-station interaction to create an experience inspired by synesthetic perception.",
    image: "https://i.imgur.com/X4Z9FhY.png",
    hasDetail: true,
    inProgress: true,
  },
  {
    id: "band-together",
    title: "Band Together",
    description: "An engineering and art installation that breaks down the composition of music into the individual instruments. Viewers can walk through 5 different sections in a guitar shaped layout corresponding to a separate instrument. We designed a system of photoelectric through-beam sensors connected to esc that, when tripped, activates the lighting and music for that section.",
    image: "https://i.imgur.com/AuFMNKy.png",
    inProgress: true,
  },
  {
    id: "bridge-design",
    title: "Bridge Design and Structural Analysis",
    description: "The Bridge project challenged our team to design and 3D print a bridge that fits a certain dimension and weight boundary, but can hold the most amount of point load force possible. This required a CAD program such as Onshape to design a parametric bridge and test it using finite element analysis (FEA). Success required a higher point load, a lower maximum displacement, and a lower von mises stress.",
    image: "https://i.imgur.com/Li9mxWk.jpeg",
    hasDetail: true,
  },
  {
    id: "arc-reactor",
    title: "Arc Reactor Costume",
    description: "Built an arc reactor for a Tony Stark costume this last halloween. CAD modelling, 3d printing, and building all performed in-house. Lighting system consists of 12 leds wired in 4 parallel series of 3 with resistors and run on a 9 volt battery. Learned soldering and basic electronics from this project.",
    image: "https://i.imgur.com/lsZtc5V.jpeg",
    hasDetail: true,
  },
  {
    id: "project-turtle",
    title: "Project Turtle: Slow and Steady Engineering",
    description: "The objective of this project was to design and construct a fully autonomous arduino-controlled vehicle capable of climbing an inclined ramp (\"hill\"). The vehicle was also required to autonomously stop at the top of the ramp using a gyroscope and maintain its position as close as possible to the center while competing against an opposing team's vehicle that approaches from the other side of the hill.",
    image: "https://i.imgur.com/pSjby1U.png",
    hasDetail: true,
  },
  {
    id: "firefighting-aircraft",
    title: "Fixed-Wing Firefighting RC Aircraft Concept",
    description: "Participated in Northrop Grumman's Global Summit Internship, a team-based engineering program simulating coordinated wildfire suppression. Worked on the Firebomber team to design a fixed-wing RC aircraft concept for targeted fire suppressant delivery, collaborating with high school and college interns across multiple functional teams including Surveillance, Drop, and Rover. Applied aerospace, mechanical, and electrical engineering principles to evaluate aircraft configuration, payload delivery constraints, and system-level tradeoffs. Contributed to concept development and technical justification, culminating in a Critical Design Review presented to Northrop Grumman leadership.",
    image: "https://i.imgur.com/VAZULCY.jpeg",
    hasDetail: true,
  },
  {
    id: "strata-rocketry",
    title: "Strata Rocketry",
    description: "Member of my high school Aerospace Club beginning sophomore year, later serving as Vice President. The club's primary focus was competition in the American Rocketry Challenge, the largest student rocketry competition in the United States. Competed on a select 10-member team during junior and senior years, contributing to motor selection calculations, mass distribution analysis, and stability considerations for competition rockets. Also served as team lead for a secondary competition rocket, coordinating fabrication, testing, and iteration while supporting logistics and mentoring newer members in fundamental aerospace design and build practices.",
    image: "https://i.imgur.com/NqXC3X9.jpeg",
  },
];

export function Projects() {
  return (
    <div className="min-h-screen py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl mb-16">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl">
                  {project.title}
                </h2>
                {project.inProgress && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    In Progress
                  </Badge>
                )}
              </div>
              
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                {/* TO INSERT YOUR OWN PROJECT PHOTO: Replace the src URL below */}
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover ${project.id === 'arc-reactor' ? 'scale-[1.2]' : ''}`}
                />
              </div>
              
              <p className="text-neutral-600 leading-relaxed">
                {project.description}
              </p>
              
              {project.hasDetail && (
                <Link to={`/projects/${project.id}`}>
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