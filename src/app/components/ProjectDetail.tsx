import { useParams, Link } from "react-router";
import { ArrowLeft, Upload, FileText } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArcReactorDetail } from "@/app/components/projects/ArcReactorDetail";

interface TechnicalSection {
  title: string;
  body: string;
}

interface ProjectDetailData {
  id: string;
  title: string;
  year: string;
  overview: string;
  contributions: string[];
  technicalSections: TechnicalSection[];
  results: string[];
  learnings: string[];
  mediaType: "synesthesia" | "band" | "bridge" | "turtle" | "firefighting" | "placeholder";
}

const projectDetails: Record<string, ProjectDetailData> = {
  "experience-synesthesia": {
    id: "experience-synesthesia",
    title: "Experience Synesthesia",
    year: "2025–2026",
    overview: "Experience Synesthesia was a large interactive engineering and art installation developed for the Artscape Art Show in collaboration with the USC Performing Arts Committee. The project combined structural fabrication, interactive DJ podiums, lighting, and projected visuals into a public installation designed to blend auditory and visual experiences.",
    contributions: [
      "Helped design and manufacture a large S-shaped central structure approximately 26 ft tip-to-tip and 15 ft wide using 14 plywood panels.",
      "Designed manufacturing documentation for three interactive podium heights — 3.5 ft, 4 ft, and 4.5 ft — to support users of different heights.",
      "Worked through fabrication, transportation, setup, and deinstallation constraints for a large installation that had to move across campus and be assembled on a short schedule.",
      "Supported the integration of structural, visual, and interactive elements into a single public-facing installation."
    ],
    technicalSections: [
      {
        title: "Structural Design & Fabrication",
        body: "The central structure used a double-arc, S-shaped geometry built from plywood panels. The design had to balance visual form with manufacturability, handling, repeated transportation, and outdoor loading."
      },
      {
        title: "Deployment & Installation",
        body: "The installation was designed around a setup and deinstallation window of less than 24 hours with limited manpower. Transportation, panelization, wiring access, and assembly order therefore became part of the engineering problem rather than afterthoughts."
      }
    ],
    results: [
      "Installed as part of a public festival attended by more than 3,000 people.",
      "Successfully combined structural fabrication, interactive controls, lighting, and visual media in a large deployable installation."
    ],
    learnings: [
      "Large public installations need to be designed around transportation and assembly just as much as final geometry.",
      "Manufacturing documentation and repeatable assembly methods become increasingly important as a build grows in size and number of contributors."
    ],
    mediaType: "synesthesia",
  },
  "band-together": {
    id: "band-together",
    title: "Band Together",
    year: "2025–2026",
    overview: "Band Together was an interactive engineering and art installation built for a public festival. The installation used a guitar-shaped layout divided into five instrument zones, allowing visitors to move through the space and trigger separate layers of music and lighting.",
    contributions: [
      "Helped develop the physical layout and integration of a five-zone, guitar-shaped installation within an 18 ft × 18 ft footprint.",
      "Integrated 10 photoelectric sensor elements, arranged as emitter/receiver pairs, to detect visitors moving through each instrument zone.",
      "Worked on electronics and audio integration connecting the sensing system to layered music playback, lighting, and three speakers.",
      "Supported wiring management and installation planning for a high-traffic public environment."
    ],
    technicalSections: [
      {
        title: "System Architecture",
        body: "Each of the five sections represented a different instrument layer. When a visitor crossed a section, a photoelectric through-beam sensor detected the interruption and triggered that section's lighting and audio. Multiple active zones combined into a fuller musical composition."
      },
      {
        title: "Physical Layout & Integration",
        body: "The guitar-shaped floor plan connected the physical layout to the musical concept. Packaging sensors, speakers, lighting, and wiring into the footprint required balancing accessibility, reliable triggering, and trip-hazard mitigation."
      }
    ],
    results: [
      "Installed as part of a public festival attended by more than 3,000 people.",
      "Created a working interaction where visitors could build up a musical composition by moving through different instrument zones."
    ],
    learnings: [
      "Interactive installations work best when mechanical layout, electronics, user behavior, and installation logistics are treated as one system.",
      "Public-facing hardware needs robust sensing and safe cable routing in addition to basic functionality."
    ],
    mediaType: "band",
  },
  "firefighting-aircraft": {
    id: "firefighting-aircraft",
    title: "Fixed-Wing Radio-Controlled Firefighting Aircraft Concept",
    year: "2024",
    overview: "During Northrop Grumman's Global Summit Internship, I worked on a 10-person team modifying a purchased 59-inch-span twin-motor RC aircraft for a firefighting mission. The aircraft had to carry and release a fire-suppressant payload while remaining within practical weight, stability, landing-gear, and integration constraints.",
    contributions: [
      "Designed payload mounting and aircraft interfaces in Onshape to integrate the fire-suppressant delivery system.",
      "Analyzed results from four or more flight tests to identify weight, landing-gear, and payload-integration problems.",
      "Supported weight-reduction changes including removing nonstructural foam and the nose-wheel servo.",
      "Co-authored flight-test findings and design changes and presented the final Critical Design Review to Northrop Grumman leadership."
    ],
    technicalSections: [
      {
        title: "Flight Testing & Iteration",
        body: "Flight testing exposed issues that were not obvious from the initial concept, particularly aircraft weight, landing-gear behavior, and payload integration. Those results drove changes to the aircraft rather than treating the original configuration as fixed."
      },
      {
        title: "Weight & Aircraft Integration",
        body: "The team worked toward a lower-mass configuration by removing unnecessary hardware and nonstructural material while preserving the mission hardware. Weight reduction was especially important because the projected configuration was approximately 7.0 lb with a wing loading of 1.172 g/cm², compared with a 5.5 lb target and 0.921 g/cm² target wing loading."
      }
    ],
    results: [
      "Completed multiple flight-test iterations and used the data to justify aircraft changes.",
      "Presented the integrated aircraft concept, test findings, and design updates at a formal Critical Design Review."
    ],
    learnings: [
      "Flight testing is most useful when each issue is translated into a concrete design change.",
      "Aircraft integration decisions can couple strongly across weight, stability, landing gear, payload packaging, and structural interfaces."
    ],
    mediaType: "firefighting",
  },
  "surfboard-design": {
    id: "surfboard-design",
    title: "Surfboard Design",
    year: "2024–2025",
    overview: "I designed and built two hard-top surfboards from EPS foam, taking both boards from raw foam through shaping, fiberglass layup, hardware installation, finishing, and water testing. The second board was used as an opportunity to deliberately correct manufacturing issues from the first.",
    contributions: [
      "Transferred board templates to EPS foam and shaped the outline, rocker, rails, nose, tail, and bottom contours using hand tools and sanding.",
      "Completed fiberglass layups on the top and bottom surfaces and integrated fins, leash hardware, paint, and finishing layers.",
      "Checked symmetry throughout shaping and adjusted the rail profile and board geometry as the shape developed.",
      "Used lessons from the first board to improve fiberglass conformity, reduce trapped air, improve symmetry, and produce cleaner rails on the second."
    ],
    technicalSections: [
      {
        title: "Shaping Process",
        body: "The shaping process moved from rough outline cutting into rocker development, rail bands, and bottom contouring. Because small geometric differences are easy to introduce by hand, symmetry checks and gradual material removal were important throughout the process."
      },
      {
        title: "Composite Layup & Finishing",
        body: "After shaping, the boards were fiberglassed and finished with attention to rail wrapping, relief cuts, bubbles, hardware integration, and watertightness. The second build focused heavily on improving process quality rather than simply repeating the first."
      }
    ],
    results: [
      "Completed two functional, watertight surfboards.",
      "Improved rail conformity, symmetry, fiberglass quality, and finish quality from the first board to the second."
    ],
    learnings: [
      "Hand-shaped parts benefit from frequent symmetry checks because errors become harder to remove later in the process.",
      "Composite quality depends heavily on preparation, relief cuts, surface conformity, and controlling trapped air during layup."
    ],
    mediaType: "placeholder",
  },
  "bridge-design": {
    id: "bridge-design",
    title: "Bridge Design and Structural Analysis",
    year: "2025",
    overview: "This project challenged our team to design and 3D print a bridge within specified dimensional and weight constraints while maximizing the point load it could support. The design process combined parametric CAD and finite element analysis before physical fabrication.",
    contributions: [
      "Developed bridge geometry in Onshape within the project dimensional and mass constraints.",
      "Used finite element analysis to compare design behavior under the required point loading.",
      "Evaluated maximum displacement and von Mises stress alongside load capacity rather than optimizing for a single metric.",
      "Iterated the CAD based on the analysis before committing to the printed design."
    ],
    technicalSections: [
      {
        title: "CAD & Parametric Design",
        body: "The bridge geometry was built parametrically so dimensions and structural features could be adjusted without rebuilding the model from scratch. This made it easier to compare design changes while staying inside the project envelope."
      },
      {
        title: "Finite Element Analysis",
        body: "FEA was used to estimate stress and displacement under the required point load. The analysis was used comparatively to identify weaker regions and guide design iteration before printing."
      }
    ],
    results: [
      "Produced a manufacturable bridge design that could be evaluated against the project's load, displacement, stress, size, and mass criteria.",
      "Created a documented analysis process captured in the project report."
    ],
    learnings: [
      "Simulation is most valuable when used to compare design alternatives rather than treated as a perfect prediction of the physical result.",
      "Structural optimization usually requires balancing multiple competing metrics rather than minimizing only stress or displacement."
    ],
    mediaType: "bridge",
  },
  "project-turtle": {
    id: "project-turtle",
    title: "Project Turtle: Slow and Steady Engineering",
    year: "2025",
    overview: "Project Turtle was an autonomous Arduino-controlled vehicle designed to climb an inclined ramp, detect when it reached the top using a gyroscope, stop autonomously, and hold position near the center while another team's vehicle approached from the opposite side.",
    contributions: [
      "Contributed to the design and construction of the autonomous vehicle around the ramp-climbing and stopping requirements.",
      "Integrated sensing and control logic so the vehicle could identify the top of the ramp and stop without driver input.",
      "Worked through mechanical and controls tradeoffs that affected climbing ability, stability, and final stopping position.",
      "Tested and iterated the system before the final competition."
    ],
    technicalSections: [
      {
        title: "Autonomous Control",
        body: "The core controls problem was converting gyroscope data into a reliable state change from climbing to stopping. The vehicle needed to distinguish the ramp transition well enough to stop close to the center without manual input."
      },
      {
        title: "Mechanical Integration",
        body: "The vehicle also had to generate enough traction and torque to climb the incline while remaining stable near the top. Mechanical layout and control behavior therefore had to be developed together."
      }
    ],
    results: [
      "Built a working autonomous vehicle capable of attempting the full climb-and-stop task.",
      "Documented the design and testing process in the project report and captured the final vehicle behavior on video."
    ],
    learnings: [
      "Autonomous behavior depends as much on repeatable mechanical behavior as it does on sensor logic.",
      "Testing edge cases around the transition point is critical when a control decision depends on noisy or changing sensor data."
    ],
    mediaType: "turtle",
  },
  "strata-rocketry": {
    id: "strata-rocketry",
    title: "Strata Rocketry",
    year: "2022–2025",
    overview: "Strata Rocketry was my high-school aerospace club's competition program for the American Rocketry Challenge. I competed on a select 10-member team during junior and senior year, later served as Vice President, and also led a secondary competition rocket.",
    contributions: [
      "Contributed to motor sizing, mass distribution, and stability analysis for competition rockets.",
      "Used physics and calculus to estimate flight performance and apogee during design work.",
      "Supported fabrication, launch testing, and design iteration across multiple competition cycles.",
      "Led a secondary competition rocket while also helping newer members learn basic aerospace design and build practices."
    ],
    technicalSections: [
      {
        title: "Performance & Stability",
        body: "Rocket design required balancing motor selection, total mass, mass distribution, and stability so the vehicle could meet the competition flight profile rather than simply maximize altitude."
      },
      {
        title: "Build, Test, Iterate",
        body: "Launch results fed back into the next design cycle. Fabrication quality, actual mass, and flight behavior all influenced the next round of calculations and hardware changes."
      }
    ],
    results: [
      "Competed in the American Rocketry Challenge on a select 10-member team.",
      "Progressed from team member into a leadership role while continuing to contribute technically."
    ],
    learnings: [
      "Simple analytical models become much more useful when they are repeatedly checked against real flight results.",
      "Leading technical work also means making the analysis understandable enough for newer members to use."
    ],
    mediaType: "placeholder",
  },
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="text-neutral-900 mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();

  if (projectId === "arc-reactor") {
    return <ArcReactorDetail />;
  }

  const project = projectId ? projectDetails[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl">Project Not Found</h1>
          <Link to="/projects">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-32 px-8">
      <div className="max-w-5xl mx-auto space-y-14">
        <Link to="/projects">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        <header className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-neutral-500">{project.year}</p>
          <h1 className="text-5xl">{project.title}</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">{project.overview}</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl">My Contribution</h2>
          <BulletList items={project.contributions} />
        </section>

        {project.technicalSections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-3xl">{section.title}</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">{section.body}</p>
          </section>
        ))}

        <section className="space-y-6">
          <h2 className="text-3xl">Results</h2>
          <BulletList items={project.results} />
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl">Project Media</h2>

          {project.mediaType === "synesthesia" && (
            <div className="space-y-8">
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.canva.com/design/DAG3-GsJSmM/ljoLu37qaFLgkXKBqq8IlA/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  ["https://i.imgur.com/R15MZB5.jpg", "Experience Synesthesia project photo 1"],
                  ["https://i.imgur.com/Tnr0fQV.jpg", "Experience Synesthesia project photo 2"],
                  ["https://i.imgur.com/7EGVKoY.jpg", "Experience Synesthesia project photo 3"],
                  ["https://i.imgur.com/AUYI3lk.jpg", "Experience Synesthesia project photo 4"],
                ].map(([src, alt]) => (
                  <ImageWithFallback key={src} src={src} alt={alt} className="w-full h-auto rounded-lg shadow-md" />
                ))}
              </div>
            </div>
          )}

          {project.mediaType === "band" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                <ImageWithFallback src="https://i.imgur.com/AuFMNKy.png" alt="Band Together installation" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] rounded-xl border border-dashed border-neutral-300 flex items-center justify-center text-neutral-500 text-center px-8">
                Additional system, fabrication, and installation photos can be added here.
              </div>
            </div>
          )}

          {project.mediaType === "bridge" && (
            <div className="space-y-6">
              <div className="w-full aspect-[8.5/11] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://drive.google.com/file/d/1rpybQ7PZo2lQlzM89t88GdJyEcQlrGq0/preview"
                  allowFullScreen
                  allow="fullscreen"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="text-center">
                <a href="https://drive.google.com/file/d/1rpybQ7PZo2lQlzM89t88GdJyEcQlrGq0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Open PDF in New Tab
                  </Button>
                </a>
              </div>
            </div>
          )}

          {project.mediaType === "turtle" && (
            <div className="space-y-8">
              <div className="w-full aspect-[8.5/11] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://drive.google.com/file/d/1Jo6gPPeBpnndVFFwni-1lNV_JCJHUHE6/preview"
                  allowFullScreen
                  allow="fullscreen"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="text-center">
                <a href="https://drive.google.com/file/d/1Jo6gPPeBpnndVFFwni-1lNV_JCJHUHE6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Open PDF in New Tab
                  </Button>
                </a>
              </div>
              <div className="w-full rounded-xl overflow-hidden shadow-lg bg-black">
                <video controls className="w-full" src="https://i.imgur.com/8n9Cru1.mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

          {project.mediaType === "firefighting" && (
            <div className="space-y-6">
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://docs.google.com/presentation/d/1OVMVdvU-Fw1L9kVUNmVG5Ck1vXLusX4f/embed?start=false&loop=false&delayms=3000"
                  allowFullScreen
                  allow="fullscreen"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="text-center">
                <a href="https://docs.google.com/presentation/d/1OVMVdvU-Fw1L9kVUNmVG5Ck1vXLusX4f/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Open Presentation in New Tab
                  </Button>
                </a>
              </div>
            </div>
          )}

          {project.mediaType === "placeholder" && (
            <div className="rounded-2xl border border-dashed border-neutral-300 p-12 text-center text-neutral-500">
              Project photos, CAD, and additional documentation can be added here.
            </div>
          )}
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl">What I Learned</h2>
          <BulletList items={project.learnings} />
        </section>
      </div>
    </div>
  );
}
