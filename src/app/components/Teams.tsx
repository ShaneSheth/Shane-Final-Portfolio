import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Teams() {
  return (
    <div className="min-h-screen py-32 px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        <h1 className="text-5xl">Teams</h1>

        {/* USC AeroDesign Team */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl">USC AeroDesign Team (ADT)</h2>
              <p className="text-neutral-600 leading-relaxed text-lg">
                The USC AeroDesign Team (ADT) is a student-led organization that designs, builds, and flies radio-controlled aircraft for the annual AIAA Design/Build/Fly (DBF) competition. My work has progressed from structures and manufacturing into aircraft-level design and configuration.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-200">
              <ImageWithFallback
                src="https://i.imgur.com/3vK8WB5.jpg"
                alt="USC AeroDesign Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-neutral-200 p-8 space-y-4 bg-white">
              <p className="text-sm uppercase tracking-wide text-neutral-500">2026–2027</p>
              <h3 className="text-2xl">Configurations Lead</h3>
              <p className="text-neutral-600 leading-relaxed">
                Leading high-level aircraft configuration decisions for the current design cycle, including aircraft architecture, wing and payload positioning, propulsion, tail, and fuselage configuration. I also own full-aircraft CAD integration and work across subsystem constraints to develop a manufacturable aircraft layout.
              </p>
              <Link to="/teams/usc-aerodesign/2026-2027">
                <Button variant="outline">See More</Button>
              </Link>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-8 space-y-4 bg-white">
              <p className="text-sm uppercase tracking-wide text-neutral-500">2025–2026</p>
              <h3 className="text-2xl">Structures Engineer</h3>
              <p className="text-neutral-600 leading-relaxed">
                Worked on structural design, manufacturing, testing, and aircraft integration for the 2026 competition aircraft, including empennage redesign, composite fabrication, passenger-restraint testing, and materials characterization.
              </p>
              <Link to="/teams/usc-aerodesign/2025-2026">
                <Button variant="outline">See More</Button>
              </Link>
            </div>
          </div>

        </section>

        {/* Terra Labs */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl">Terra Labs</h2>
            <p className="text-neutral-600 leading-relaxed text-lg max-w-4xl">
              Terra Labs is a student engineering organization focused on building ambitious hardware projects. My work has included electrical systems development for Cove and mechanical design and manufacturing for Terraport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src="https://i.imgur.com/jejirMp.jpg"
                  alt="Cove robotic arm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-wide text-neutral-500">Cove</p>
                <h3 className="text-2xl">Electrical Systems Co-Lead</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Developing electrical architecture for a 7-DOF autonomous robotic arm, including power distribution, CAN communication, wiring, connector and fuse sizing, and hardware emergency-stop integration.
                </p>
                <Link to="/teams/cove-terra-labs">
                  <Button variant="outline">See More</Button>
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src="https://i.imgur.com/LWyLFhF.jpg"
                  alt="Terraport mobile workstation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-wide text-neutral-500">Terraport</p>
                <h3 className="text-2xl">Mechanical Design</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Contributed to the design and manufacturing of a mobile workstation that unfolds into storage, work surfaces, tools, and seating, using collaborative CAD and hands-on fabrication.
                </p>
                <Link to="/teams/terraport-terra-labs">
                  <Button variant="outline">See More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
