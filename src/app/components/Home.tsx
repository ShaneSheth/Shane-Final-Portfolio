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
        <section className="min-h-[82vh] relative pt-6">
          <p className="absolute top-0 left-0 text-5xl md:text-6xl text-neutral-900">
            Welcome to Shane's Portfolio!
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-28">
            <div className="space-y-7 pt-2">
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

              <div className="pt-3 space-y-3">
                <p className="text-sm uppercase tracking-wide text-neutral-500">Resume</p>
                <div className="max-w-lg w-full aspect-[8.5/11] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-md">
                  <iframe
                    src="/Shane-Sheth-Resume.pdf#view=FitH"
                    title="Shane Sheth Resume"
                    className="w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="w-fit"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Open Resume
                </Button>
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
              These projects are still in progress and evolving as I work through new design decisions, testing, and integration. If any of them catch your interest, ask me about them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/projects" className="rounded-2xl border border-neutral-200 bg-white p-7 space-y-3 hover:shadow-md transition-shadow">
              <p className="text-sm uppercase tracking-wide text-neutral-500">MATLAB Optimization</p>
              <h3 className="text-2xl">Aircraft Balancing Trade Program</h3>
              <p className="text-neutral-600 leading-relaxed">
                Developing a MATLAB tool to trade aircraft component layouts and identify configurations that meet target center-of-gravity and static-margin requirements while allowing nose length to vary and minimizing required ballast.
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
            {["Formula 1 (Vamos Checo!)", "Surfing, Skateboarding & Snowboarding", "Trivia", "Greek & Other Mythology", "Table Tennis", "Learning New Things"].map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-neutral-700"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
