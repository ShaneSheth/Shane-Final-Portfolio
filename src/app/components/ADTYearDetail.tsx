import { Link, useParams } from "react-router";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/app/components/ui/button";

type YearKey = "2026-2027" | "2025-2026";

const yearData: Record<YearKey, {
  yearLabel: string;
  role: string;
  intro: string;
}> = {
  "2026-2027": {
    yearLabel: "2026–2027",
    role: "Configurations Lead",
    intro: "For the current design cycle, I lead aircraft-level configuration decisions and full-aircraft CAD integration, balancing aerodynamic, structural, payload, performance, landing-gear, and manufacturing constraints as the aircraft architecture develops.",
  },
  "2025-2026": {
    yearLabel: "2025–2026",
    role: "Structures Engineer",
    intro: "During the 2025–2026 design cycle, I worked across structures, manufacturing, testing, and aircraft integration, with major contributions to the empennage, composite fabrication, passenger-restraint validation, and materials testing.",
  },
};

export function ADTYearDetail() {
  const { year } = useParams<{ year: string }>();
  const validYear = year === "2026-2027" || year === "2025-2026" ? year as YearKey : null;

  if (!validYear) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl">Year Not Found</h1>
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

  const data = yearData[validYear];

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
          <h1 className="text-5xl">{data.yearLabel}</h1>
          <h2 className="text-2xl text-neutral-700">{data.role}</h2>
          <p className="text-xl text-neutral-600 leading-relaxed">{data.intro}</p>
        </div>

        <div className="flex flex-wrap gap-3 border-b border-neutral-200 pb-6">
          <Link to="/teams/usc-aerodesign/2026-2027">
            <Button variant={validYear === "2026-2027" ? "default" : "outline"}>
              2026–2027
            </Button>
          </Link>
          <Link to="/teams/usc-aerodesign/2025-2026">
            <Button variant={validYear === "2025-2026" ? "default" : "outline"}>
              2025–2026
            </Button>
          </Link>
        </div>

        {validYear === "2026-2027" && (
          <>
            <section className="space-y-6">
              <h2 className="text-3xl">Current Work</h2>
              <div className="space-y-5 text-neutral-600 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Aircraft Configuration</h3>
                  <p>Leading aircraft-level downselects for architecture, wing position, payload layout, propulsion, tail configuration, and fuselage configuration while coordinating inputs from each subsystem.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Full-Aircraft CAD & Integration</h3>
                  <p>Owning the full-aircraft SolidWorks assembly and integrating subsystem geometry into a common aircraft layout that can be released for structural design, tooling, and manufacturing.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Mass Properties & Layout</h3>
                  <p>Working through internal component placement, center-of-gravity targets, static margin requirements, and packaging constraints as the configuration matures.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl">CAD Models</h2>
              <div className="rounded-2xl border border-dashed border-neutral-300 p-10 text-center text-neutral-500">
                Current-year CAD models and design documentation will be added here as the aircraft develops.
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl">2026–2027 Competition Report</h2>
              <div className="rounded-2xl border border-dashed border-neutral-300 p-10 text-center text-neutral-500">
                The competition report will be added here once it is available.
              </div>
            </section>
          </>
        )}

        {validYear === "2025-2026" && (
          <>
            <section className="space-y-8">
              <h2 className="text-3xl">Work</h2>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Aircraft Design, Manufacturing, and Systems Integration</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li>• Modeled aircraft components in SolidWorks, including the motor mount, vertical stabilizer, rudder, winglets, fuselage formers, bulkheads, and wing and landing gear hardpoints.</li>
                    <li>• Assisted in construction of the competition aircraft by laser cutting ribs, spars, and assembly jigs for the wing and empennage.</li>
                    <li>• Led fabrication processes including tail mold assembly, fiberglass–balsa layups, horizontal stabilizer mold assembly, and puck sleeve composite layups.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Empennage Design</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li>• Redesigned the empennage from three separate components into a single structure mounted to the tail boom at two locations.</li>
                    <li>• Improved load transfer through fiberglass-plywood sandwich hardpoints and extended vertical-stabilizer spars into the horizontal-stabilizer root rib.</li>
                    <li>• Incorporated a 4° horizontal-stabilizer angle of incidence and tail fairing while reducing empennage weight through lighter structure and fewer integration components.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Testing & Validation</h3>
                  <ul className="space-y-2 text-neutral-600 leading-relaxed">
                    <li>• Conducted full-scale passenger-restraint validation testing and contributed testing methods and results to the competition report.</li>
                    <li>• Led carbon-fiber materials testing with the Structures Lead, researching ASTM methods and developing procedures for multiple loading conditions.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl">2025–2026 AIAA DBF Competition Report</h2>
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
            </section>
          </>
        )}
      </div>
    </div>
  );
}
