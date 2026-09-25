import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Home() {
  const handleDownloadResume = () => {
    window.open("/Shane-Sheth-Resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen px-8 py-20">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Hero */}
        <section className="min-h-[78vh] flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-lg text-neutral-500">Welcome to Shane's Portfolio!</p>
              <div className="space-y-4">
                <h1 className="text-7xl tracking-tight">Shane Sheth</h1>
                <p className="text-2xl text-neutral-600">
                  Mechanical Engineering Student at USC Viterbi
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                  I design, build, and test aircraft, robotics systems, and other hardware projects, with a focus on turning early concepts into manufacturable systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/teams">
                  <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 text-white">
                    View Team Work
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline">
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://i.imgur.com/aS0Bgcc.jpeg"
                alt="Shane Sheth"
                className="w-full h-full object-cover scale-[1.3]"
                style={{ objectPosition: "60% 70%" }}
              />
            </div>
          </div>
        </section>

        {/* Engineering Photos */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl">Engineering Work</h2>
            <p className="text-lg text-neutral-600 max-w-3xl">
              A few snapshots from the aircraft, robotics, and manufacturing work featured throughout this portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/teams" className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src="https://i.imgur.com/3vK8WB5.jpg"
                  alt="USC AeroDesign Team aircraft"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-neutral-600">Aircraft Design & Integration</p>
            </Link>

            <Link to="/teams/cove-terra-labs" className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src="https://i.imgur.com/jejirMp.jpg"
                  alt="Cove robotic arm"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-neutral-600">Robotics & Electrical Systems</p>
            </Link>

            <Link to="/teams/terraport-terra-labs" className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src="https://i.imgur.com/LWyLFhF.jpg"
                  alt="Terraport manufacturing project"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-neutral-600">Manufacturing & Fabrication</p>
            </Link>
          </div>
        </section>

        {/* Currently Working On */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl">Currently Working On</h2>
            <p className="text-lg text-neutral-600 max-w-3xl">
              Projects and systems I am actively developing right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/teams/usc-aerodesign-2026-2027" className="rounded-2xl border border-neutral-200 bg-white p-7 space-y-3 hover:shadow-md transition-shadow">
              <p className="text-sm uppercase tracking-wide text-neutral-500">USC AeroDesign Team</p>
              <h3 className="text-2xl">Aircraft Configuration</h3>
              <p className="text-neutral-600 leading-relaxed">
                Leading aircraft-level configuration decisions and full-aircraft CAD integration for the 2026–2027 design cycle.
              </p>
            </Link>

            <Link to="/teams/cove-terra-labs" className="rounded-2xl border border-neutral-200 bg-white p-7 space-y-3 hover:shadow-md transition-shadow">
              <p className="text-sm uppercase tracking-wide text-neutral-500">Terra Labs</p>
              <h3 className="text-2xl">Cove Electrical Systems</h3>
              <p className="text-neutral-600 leading-relaxed">
                Developing power distribution, CAN communication, wiring, safety systems, and hardware integration for a 7-DOF robotic arm.
              </p>
            </Link>

            <Link to="/projects" className="rounded-2xl border border-neutral-200 bg-white p-7 space-y-3 hover:shadow-md transition-shadow">
              <p className="text-sm uppercase tracking-wide text-neutral-500">Independent / Team Testing</p>
              <h3 className="text-2xl">Composite Materials Testing</h3>
              <p className="text-neutral-600 leading-relaxed">
                Developing and refining testing methods for carbon-fiber structures and material characterization.
              </p>
            </Link>
          </div>
        </section>

        {/* Interests */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl">Interests</h2>
            <p className="text-lg text-neutral-600 max-w-3xl">
              Outside of engineering projects, these are some of the things I spend my time on.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Formula 1", "Running", "Surfing & Board Building", "Trivia", "Debate", "Learning New Things"].map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-neutral-700"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Resume */}
        <section className="space-y-8 pb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3">
              <h2 className="text-4xl">Resume</h2>
              <p className="text-lg text-neutral-600">
                A quick look at my experience, technical work, and current roles.
              </p>
            </div>
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 text-white w-fit"
            >
              <Download className="w-5 h-5 mr-2" />
              Open Resume
            </Button>
          </div>

          <div className="max-w-4xl mx-auto w-full aspect-[8.5/11] rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-lg">
            <iframe
              src="/Shane-Sheth-Resume.pdf#view=FitH"
              title="Shane Sheth Resume"
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
