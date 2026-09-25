import { useParams, Link } from "react-router";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ADTYearDetail } from "@/app/components/ADTYearDetail";

interface TeamDetailData {
  id: string;
  title: "USC AeroDesign Team (ADT)" | "Cove [Terra Labs]" | "Terraport [Terra Labs]";
  description: string;
  fullDescription: string;
}

const teamDetails: Record<string, TeamDetailData> = {
  "usc-aerodesign": {
    id: "usc-aerodesign",
    title: "USC AeroDesign Team (ADT)",
    description: "Student-led engineering design team building RC aircraft for AIAA competition",
    fullDescription: "The USC AeroDesign Team is a student-led engineering design team that designs, builds, and flies radio-controlled aircraft for the annual AIAA Design/Build/Fly competition. The team provides a hands-on environment where students apply concepts from aerodynamics, structures, electronics, and systems integration to develop a fully functional aircraft over the course of an academic year. Members work through the complete engineering cycle—from conceptual design and analysis to manufacturing, testing, and flight operations—while collaborating across multiple engineering disciplines. The team has been active for over 25 years and has achieved multiple first-place finishes and consistent top placements in international competition.",
  },
  "cove-terra-labs": {
    id: "cove-terra-labs",
    title: "Cove [Terra Labs]",
    description: "A 'Jarvis'-like robotic arm with 7 degrees of freedom",
    fullDescription: "Cove is a 'Jarvis'-like robotic arm with 7 degrees of freedom (DOF) that autonomously serves drinks and small food items from its station. Designed to interact with guests through friendly, understandable gestures. Translates voice commands into smooth, safe arm motions ('voice-to-motion') for intuitive control.",
  },
  "terraport-terra-labs": {
    id: "terraport-terra-labs",
    title: "Terraport [Terra Labs]",
    description: "Mobile workstation for Terra Labs members",
    fullDescription: "Mobile workstation for Terra Labs members. It is a mini shipping container that unfolds on itself to reveal storage, tables, tools, machines, and seats.",
  },
};

export function TeamDetail() {
  const { teamId } = useParams<{ teamId: string }>();
  
  if (teamId === "usc-aerodesign-2026-2027") {
    return <ADTYearDetail year="2026-2027" />;
  }

  if (teamId === "usc-aerodesign-2025-2026") {
    return <ADTYearDetail year="2025-2026" />;
  }

  const team = teamId ? teamDetails[teamId] : null;

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl">Team Not Found</h1>
          <Link to="/teams">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Teams
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-32 px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <Link to="/teams">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Teams
          </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-5xl">
            {team.title}
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {team.fullDescription}
          </p>
        </div>

        {/* USC AeroDesign Team specific content */}
        {team.id === "usc-aerodesign" && (
          <>
            {/* Competition Report Section */}
            <div className="space-y-6">
              <h2 className="text-3xl">2025-2026 AIAA DBF Competition Report</h2>
              <div className="space-y-6">
                <div className="w-full aspect-[8.5/11] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://drive.google.com/file/d/1kAAH67B1RE1aVG333G9MxicMsPLXQ6i-/preview"
                    allowFullScreen
                    allow="fullscreen"
                    className="w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
                <div className="text-center">
                  <a 
                    href="https://drive.google.com/file/d/1kAAH67B1RE1aVG333G9MxicMsPLXQ6i-/view?usp=sharing"
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
            </div>

            {/* Experience Section */}
            <div className="space-y-8">
              <h2 className="text-3xl">Experience</h2>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Aircraft Design, Manufacturing, and Systems Integration</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Modeled multiple aircraft components in SolidWorks, including the motor mount, vertical stabilizer, rudder, winglets, fuselage formers, bulkheads, and wing and landing gear hardpoints in collaboration with the Structures and Configuration leads.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Assisted in construction of the competition aircraft by laser cutting ribs, spars, and assembly jigs for the wing, horizontal stabilizer, and vertical stabilizer.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Led fabrication processes including tail mold assembly, fiberglass–balsa layups, horizontal stabilizer mold assembly, and puck sleeve composite layups.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Participated in structural assembly of the aircraft including tail wiring integration, horizontal stabilizer jig assembly, and wing jig construction.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Avionics & Flight Testing</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Integrated avionics and telemetry systems prior to flight tests, configuring mission controller software and OBS-based on-screen display (OSD) for flight telemetry.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Served as lead data acquisition (DAQ) operator during multiple flight tests, monitoring telemetry and assisting with pre-flight system verification.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Learned full preflight avionics integration procedures, including control surface system checks and telemetry setup.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Payload Systems & Autonomous Recovery</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Designed a CAD-based rover chassis (Onshape) for an autonomous payload recovery system, integrating salvaged RC drivetrain components into a custom mobile platform.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Contributed to payload system development including parachute design for payload drops and the design of payload carriers.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Designed multiple test articles for the aircraft passenger restraint system used in payload safety validation.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Structures & Materials Testing</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Led carbon fiber materials testing in collaboration with the Structures Lead, researching ASTM testing standards and developing procedures to characterize composite material strength under multiple loading conditions.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span>Conducted validation testing of the passenger restraint system on a full-scale test bed, contributing testing methods and results to the 2026 AIAA Design/Build/Fly report.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Cove [Terra Labs] specific content */}
        {team.id === "cove-terra-labs" && (
          <>
            {/* Experience Section */}
            <div className="space-y-8">
              <h2 className="text-3xl">Experience</h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                As Power and Electrical Systems Lead, I am responsible for designing and integrating the wiring for the robotic arm as well as sizing the PSU based on power and current draw determined during testing, alongside a small team. The electrical hardware team is also responsible for collaborating with the Embedded Systems team to ensure that data is being transferred to and from the microcontroller and is communicating with the proper actuator. Our team has created a power, a CAN bus protocol, and an estop wiring diagram. We are currently testing for initial actuator movement in order to analyze actuator specs as well as determining which sensors will be needed on the end-affector, how they will relay data, and how they will fit into the limited space available.
              </p>
            </div>

            {/* Project Photos Section */}
            <div className="space-y-8">
              <h2 className="text-3xl">Project Photos & Videos</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                  <img
                    src="https://i.imgur.com/92RngGw.jpg"
                    alt="Cove project photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                  <video
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://i.imgur.com/DenVLk4.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <img 
                    src="https://i.imgur.com/12P5iFp.jpg" 
                    alt="Cove Project Photo 1"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <img 
                    src="https://i.imgur.com/krxvyDs.jpg" 
                    alt="Cove Project Photo 5"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <img 
                    src="https://i.imgur.com/DFdn3A9.jpg" 
                    alt="Cove Project Photo 3"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-8">
                  <img 
                    src="https://i.imgur.com/6slfthK.jpg" 
                    alt="Cove Project Photo 2"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <img 
                    src="https://i.imgur.com/Hk2Dpru.jpg" 
                    alt="Cove Project Photo 4"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Terraport [Terra Labs] specific content */}
        {team.id === "terraport-terra-labs" && (
          <>
            {/* Experience Section */}
            <div className="space-y-8">
              <h2 className="text-3xl">Experience</h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                CAD-ed with Onshape in a collaborative file with 5 other members to create this workstation. Designed upper level retractable work table and storage space. Sourced correct bolts for drivetrain assemblies. Learned welding, plasma cutting, and angle griding to manufacture the workstation.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h2 className="text-3xl">Skills</h2>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-neutral-700">Welding</span>
                <span className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-neutral-700">Plasma Cutter</span>
                <span className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-neutral-700">CNC Water Jet</span>
              </div>
            </div>

            {/* CAD Images Section */}
            <div className="space-y-6">
              <h2 className="text-3xl">CAD Images</h2>
              <div className="rounded-2xl border border-dashed border-neutral-300 p-10 text-center text-neutral-500">
                CAD images will be added here.
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}