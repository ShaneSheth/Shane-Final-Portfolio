import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function ArcReactorDetail() {
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
          <p className="text-sm uppercase tracking-wide text-neutral-500">2025</p>
          <h1 className="text-5xl">Tony Stark Arc Reactor Prop</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            I designed and built a wearable arc reactor prop for a Tony Stark costume, combining CAD, 3D printing, soldering, and basic circuit design into a compact illuminated assembly.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl">My Contribution</h2>
          <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed">
            <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Modeled the prop geometry in CAD and prepared the components for 3D printing.</span></li>
            <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Printed, assembled, and finished the physical arc reactor in-house.</span></li>
            <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Designed and soldered the LED lighting circuit using 12 LEDs arranged in four parallel branches of three LEDs with resistors.</span></li>
            <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Integrated the electronics and 9 V battery into the final wearable prop.</span></li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl">Design & Fabrication</h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            The project required packaging the visual geometry and lighting hardware into a compact part that could be worn as part of a costume. CAD and 3D printing made it possible to iterate the shape and produce the detailed geometry without relying on purchased prop components.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl">Electronics</h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            The lighting system uses 12 LEDs wired as four parallel branches of three LEDs, with resistors and a 9 V battery. Building the circuit gave me my first hands-on experience with soldering and basic electronics integration.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl">Results</h2>
          <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed">
            <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Produced a complete illuminated wearable prop using only in-house CAD, printing, assembly, and electronics work.</span></li>
            <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Successfully integrated the mechanical housing and electrical system into a finished costume component.</span></li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl">Project Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "https://i.imgur.com/Lg59IRX.jpeg",
              "https://i.imgur.com/HfZpGjt.jpeg",
              "https://i.imgur.com/SjeTZqe.jpeg",
              "https://i.imgur.com/lsZtc5V.jpeg",
            ].map((src, index) => (
              <div key={src} className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                <ImageWithFallback src={src} alt={`Arc Reactor project photo ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl">What I Learned</h2>
          <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed">
            <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Learned practical soldering and basic circuit construction through a project with an immediate physical result.</span></li>
            <li className="flex gap-3"><span className="text-neutral-900 mt-1">•</span><span>Learned to think about mechanical packaging and electronics together when designing a compact assembly.</span></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
