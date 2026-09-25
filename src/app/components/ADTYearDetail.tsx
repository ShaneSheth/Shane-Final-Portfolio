import { Link } from "react-router";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/app/components/ui/button";

type YearKey = "2026-2027" | "2025-2026";

export function ADTYearDetail({ year }: { year: YearKey }) {
  const isCurrent = year === "2026-2027";

  return (
    <div className="min-h-screen py-32 px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <Link to="/teams">
          <Button variant="ghost">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Teams
          </Button>
        </Link>

        <div className="space-y-5">
          <p className="text-sm uppercase tracking-wide text-neutral-500">USC AeroDesign Team (ADT)</p>
          <h1 className="text-5xl">{isCurrent ? "2026–2027" : "2025–2026"}</h1>
          <h2 className="text-2xl text-neutral-700">{isCurrent ? "Configurations Lead" : "Structures Engineer"}</h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {isCurrent
              ? "For the current design cycle, I lead aircraft-level configuration decisions and full-aircraft CAD integration, balancing aerodynamic, structural, payload, performance, landing-gear, and manufacturing constraints as the aircraft architecture develops."
              : "During the 2025–2026 competition year, I worked across structures, manufacturing, avionics, payload systems, and testing/integration for the aircraft."}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 border-b border-neutral-200 pb-6">
          <Link to="/teams/usc-aerodesign-2026-2027">
            <Button variant={isCurrent ? "default" : "outline"}>2026–2027</Button>
          </Link>
          <Link to="/teams/usc-aerodesign-2025-2026">
            <Button variant={!isCurrent ? "default" : "outline"}>2025–2026</Button>
          </Link>
        </div>

        {isCurrent ? (
          <>
            <section className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-neutral-500">Summer Plane</p>
              <h2 className="text-4xl">SunSCreen</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                The work below documents my configuration, integration, and mass-properties work on the 2026 summer aircraft. Future V1 and later aircraft work will be added as the 2026–2027 design cycle progresses.
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl">Current Work</h2>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Aircraft Configuration & Airframe Design</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Lead high-level aircraft configuration downselects for a 30+ member design team, determining aircraft architecture, wing and payload positioning, and propulsion, tail, and fuselage configuration.</span></li>
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Designed the aircraft outer mold line by balancing aerodynamic, structural, performance, landing-gear, and payload requirements, and determining tradeoffs to blend competing subsystem constraints into a single manufacturable airframe.</span></li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Full-Aircraft CAD & Integration</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Owned full-aircraft CAD integration through the complete design cycle, assembling 7 aircraft subsystems in SolidWorks and translating finalized geometry into build drawings, laser-cut documents, and molds for manufacturing.</span></li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Mass Properties & Layout</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Working through internal component placement, center-of-gravity targets, static margin requirements, and packaging constraints as the configuration matures.</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl">SunSCreen CAD</h2>
                <p className="text-neutral-600 leading-relaxed">
                  2026–2027 summer aircraft CAD showing the current full-aircraft configuration and major external geometry.
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white">
                  <img
                    src="https://i.imgur.com/b9DJywJ.png"
                    alt="SunSCreen aircraft CAD isometric view"
                    className="w-full h-auto"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white">
                    <img
                      src="https://i.imgur.com/yBcBEt1.png"
                      alt="SunSCreen aircraft CAD top view"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white">
                    <img
                      src="https://i.imgur.com/803jKZf.png"
                      alt="SunSCreen aircraft CAD front view"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl">Configuration Downselects</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Representative trade studies used to compare major aircraft configuration decisions during the summer design process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  ["https://i.imgur.com/pS7SzYx.png", "SunSCreen configuration downselect 1"],
                  ["https://i.imgur.com/YrYSEcv.png", "SunSCreen configuration downselect 2"],
                  ["https://i.imgur.com/q2p5kA5.png", "SunSCreen configuration downselect 3"],
                  ["https://i.imgur.com/gndaWNg.png", "SunSCreen configuration downselect 4"],
                  ["https://i.imgur.com/jK1EaGP.png", "SunSCreen configuration downselect 5"],
                ].map(([src, alt], index) => (
                  <div
                    key={src}
                    className={`rounded-xl overflow-hidden border border-neutral-200 bg-white ${index === 4 ? "md:col-span-2" : ""}`}
                  >
                    <img src={src} alt={alt} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl">Mass Properties & Balancing</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Balancing spreadsheet used to track component masses and locations, center of gravity, and static margin as the aircraft configuration developed.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white">
                <img
                  src="https://i.imgur.com/2TiR2jq.png"
                  alt="SunSCreen aircraft balancing spreadsheet"
                  className="w-full h-auto"
                />
              </div>
            </section>

          </>
        ) : (
          <>
            <section className="space-y-8">
              <h2 className="text-3xl">Experience</h2>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Structures</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Led 10 validation tests for a passenger restraint system on a 1:1 testbed with a FoS of 1.5, by deriving an 8 G maximum load factor from flight-test data and comparing multiple restraint designs to recommend the final configuration, verifying zero measurable passenger displacement required for aircraft acceptance during competition technical inspection.</span></li>
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Co-authored 2 sections in the 1st place 2026 AIAA Design/Build/Fly competition report detailing payload design decisions, testing methodologies, and experimental results.</span></li>
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Redesigned the empennage from 3 separate components into a singular structure mounted to the tail boom at 2 locations, simplifying aircraft integration and improving load transfer through fiberglass-plywood sandwich hardpoints and extended vertical stabilizer spars adhering into the horizontal stabilizer root rib. Incorporated a 4° horizontal stabilizer AoI and tail fairing to minimize interference drag. Reduced empennage weight by 9.5% on aircraft highly sensitive to empty weight by designing structurally determined weight cutouts, minimizing integration hardware, and replacing CF D-box skin with 1/32” balsa.</span></li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Aircraft Design, Manufacturing, and Systems Integration</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Modeled multiple aircraft components in SolidWorks, including the motor mount, vertical stabilizer, rudder, winglets, fuselage formers, bulkheads, and wing and landing gear hardpoints in collaboration with the Structures and Configuration leads.</span></li>
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Assisted in construction of the competition aircraft by laser cutting ribs, spars, and assembly jigs for the wing, horizontal stabilizer, and vertical stabilizer.</span></li>
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Led fabrication processes including tail mold assembly, fiberglass–balsa layups, horizontal stabilizer mold assembly, and puck sleeve composite layups.</span></li>
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Participated in structural assembly of the aircraft including tail wiring integration, horizontal stabilizer jig assembly, and wing jig construction.</span></li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Avionics & Flight Testing</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Integrated avionics and telemetry systems prior to flight tests, configuring mission controller software and OBS-based on-screen display (OSD) for flight telemetry.</span></li>
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Served as lead data acquisition (DAQ) operator during multiple flight tests, monitoring telemetry and assisting with pre-flight system verification.</span></li>
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Learned full preflight avionics integration procedures, including control surface system checks and telemetry setup.</span></li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Payload Systems & Autonomous Recovery</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Designed a CAD-based rover chassis (Onshape) for an autonomous payload recovery system, integrating salvaged RC drivetrain components into a custom mobile platform.</span></li>
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Contributed to payload system development including parachute design for payload drops and the design of payload carriers.</span></li>
                    <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Designed multiple test articles for the aircraft passenger restraint system used in payload safety validation.</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl">2025-2026 AIAA DBF Competition Report</h2>
              <div className="space-y-6">
                <div className="w-full aspect-[8.5/11] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://drive.google.com/file/d/1kAAH67B1RE1aVG333G9MxicMsPLXQ6i-/preview"
                    allowFullScreen
                    allow="fullscreen"
                    className="w-full h-full"
                    style={{ border: "none" }}
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
            </section>
          </>
        )}
      </div>
    </div>
  );
}
