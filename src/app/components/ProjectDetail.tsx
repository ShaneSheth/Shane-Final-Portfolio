import { useParams, Link } from "react-router";
import { ArrowLeft, Upload, FileText, Video, Image as ImageIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArcReactorDetail } from "@/app/components/projects/ArcReactorDetail";

interface ProjectDetailData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  mediaType: 'slideshow' | 'pdf' | 'mixed' | 'images';
}

const projectDetails: Record<string, ProjectDetailData> = {
  "experience-synesthesia": {
    id: "experience-synesthesia",
    title: "Experience Synesthesia",
    description: "Interactive art installation blending auditory and visual senses",
    fullDescription: "An engineering and art installation exploring how we can blend auditory and visual senses for the Artscape Art Show in collaboration with the USC Performing Arts Committee (PAC). Designed interactive DJ podiums where audiences could alter music in real time while generating evolving projected artwork. Kerf bent ACX wood exterior provides organic shape, adding to the immersive experience. This project integrated dynamic lighting, engraved tactile surfaces, and multi-station interaction to create an experience inspired by synesthetic perception.",
    mediaType: 'slideshow',
  },
  "bridge-design": {
    id: "bridge-design",
    title: "Bridge Design and Structural Analysis",
    description: "3D printed bridge with FEA optimization",
    fullDescription: "The Bridge project challenged our team to design and 3D print a bridge that fits a certain dimension and weight boundary, but can hold the most amount of point load force possible. This required a CAD program such as Onshape to design a parametric bridge and test it using finite element analysis (FEA). Success required a higher point load, a lower maximum displacement, and a lower von mises stress.",
    mediaType: 'pdf',
  },
  "project-turtle": {
    id: "project-turtle",
    title: "Project Turtle: Slow and Steady Engineering",
    description: "Autonomous arduino-controlled vehicle",
    fullDescription: "The objective of this project was to design and construct a fully autonomous arduino-controlled vehicle capable of climbing an inclined ramp (\"hill\"). The vehicle was also required to autonomously stop at the top of the ramp using a gyroscope and maintain its position as close as possible to the center while competing against an opposing team's vehicle that approaches from the other side of the hill.",
    mediaType: 'mixed',
  },
  "firefighting-aircraft": {
    id: "firefighting-aircraft",
    title: "Fixed-Wing Firefighting RC Aircraft Concept",
    description: "RC aircraft concept for wildfire suppression",
    fullDescription: "Participated in Northrop Grumman's Global Summit Internship, a team-based engineering program simulating coordinated wildfire suppression. Worked on the Firebomber team to design a fixed-wing RC aircraft concept for targeted fire suppressant delivery, collaborating with high school and college interns across multiple functional teams including Surveillance, Drop, and Rover. Applied aerospace, mechanical, and electrical engineering principles to evaluate aircraft configuration, payload delivery constraints, and system-level tradeoffs. Contributed to concept development and technical justification, culminating in a Critical Design Review presented to Northrop Grumman leadership.",
    mediaType: 'mixed',
  },
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Handle custom detail pages
  if (projectId === 'arc-reactor') {
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
      <div className="max-w-5xl mx-auto space-y-12">
        <Link to="/projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-5xl">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Media Upload Section */}
        <div className="space-y-6">
          <h2 className="text-3xl">{project.mediaType === 'pdf' ? 'Project Report' : 'Project Media'}</h2>
          
          {project.mediaType === 'slideshow' && (
            <div className="space-y-8">
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.canva.com/design/DAG3-GsJSmM/ljoLu37qaFLgkXKBqq8IlA/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
              
              {/* Project Media Photos */}
              <div className="space-y-6">
                <h3 className="text-3xl">Project Photos</h3>
                <div className="grid grid-cols-2 gap-6">
                  <ImageWithFallback
                    src="https://i.imgur.com/R15MZB5.jpg"
                    alt="Experience Synesthesia Project Photo 1"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <ImageWithFallback
                    src="https://i.imgur.com/Tnr0fQV.jpg"
                    alt="Experience Synesthesia Project Photo 2"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <ImageWithFallback
                    src="https://i.imgur.com/7EGVKoY.jpg"
                    alt="Experience Synesthesia Project Photo 3"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <ImageWithFallback
                    src="https://i.imgur.com/AUYI3lk.jpg"
                    alt="Experience Synesthesia Project Photo 4"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          )}

          {project.mediaType === 'pdf' && (
            <div className="space-y-6">
              <div className="w-full aspect-[8.5/11] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://drive.google.com/file/d/1rpybQ7PZo2lQlzM89t88GdJyEcQlrGq0/preview"
                  allowFullScreen
                  allow="fullscreen"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
              <div className="text-center">
                <a 
                  href="https://drive.google.com/file/d/1rpybQ7PZo2lQlzM89t88GdJyEcQlrGq0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Open PDF in New Tab
                  </Button>
                </a>
              </div>
            </div>
          )}

          {project.mediaType === 'mixed' && (
            <div className="space-y-6">
              {/* PDF Upload */}
              {project.id === 'project-turtle' && (
                <div className="space-y-6">
                  <div className="w-full aspect-[8.5/11] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://drive.google.com/file/d/1Jo6gPPeBpnndVFFwni-1lNV_JCJHUHE6/preview"
                      allowFullScreen
                      allow="fullscreen"
                      className="w-full h-full"
                      style={{ border: 'none' }}
                    />
                  </div>
                  <div className="text-center">
                    <a 
                      href="https://drive.google.com/file/d/1Jo6gPPeBpnndVFFwni-1lNV_JCJHUHE6/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Open PDF in New Tab
                      </Button>
                    </a>
                  </div>
                </div>
              )}

              {/* Slideshow Upload */}
              {project.id === 'firefighting-aircraft' && (
                <div className="space-y-6">
                  <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://docs.google.com/presentation/d/1OVMVdvU-Fw1L9kVUNmVG5Ck1vXLusX4f/embed?start=false&loop=false&delayms=3000"
                      allowFullScreen
                      allow="fullscreen"
                      className="w-full h-full"
                      style={{ border: 'none' }}
                    />
                  </div>
                  <div className="text-center">
                    <a 
                      href="https://docs.google.com/presentation/d/1OVMVdvU-Fw1L9kVUNmVG5Ck1vXLusX4f/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        <Upload className="w-4 h-4 mr-2" />
                        Open Presentation in New Tab
                      </Button>
                    </a>
                  </div>
                </div>
              )}

              {/* Video Upload */}
              {project.id === 'project-turtle' && (
                <div className="space-y-6">
                  <div className="w-full rounded-xl overflow-hidden shadow-lg bg-black">
                    <video 
                      controls 
                      className="w-full"
                      src="https://i.imgur.com/8n9Cru1.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}