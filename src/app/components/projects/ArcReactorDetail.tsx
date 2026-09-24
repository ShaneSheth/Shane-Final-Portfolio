import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function ArcReactorDetail() {
  return (
    <div className="min-h-screen py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/projects">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        <h1 className="text-5xl mb-8">Arc Reactor Costume</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl mb-4">Project Overview</h2>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Built an arc reactor for a Tony Stark costume this last halloween. CAD modeling, 3d printing, 
              and building all performed in-house. Lighting system consists of 12 leds wired in 4 parallel 
              series of 3 with resistors and run on a 9 volt battery. Learned soldering and basic electronics 
              from this project.
            </p>
          </section>

          <section>
            <h2 className="text-3xl mb-6">Project Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Placeholder for photos - ready for you to add your own */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src="https://i.imgur.com/Lg59IRX.jpeg"
                  alt="Arc Reactor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src="https://i.imgur.com/HfZpGjt.jpeg"
                  alt="Arc Reactor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src="https://i.imgur.com/SjeTZqe.jpeg"
                  alt="Arc Reactor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src="https://i.imgur.com/lsZtc5V.jpeg"
                  alt="Arc Reactor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl mb-4">Technical Details</h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed text-lg">
              <div>
                <h3 className="text-xl text-neutral-900 mb-2">Design & Fabrication</h3>
                <p>All CAD modeling, 3D printing, and assembly performed in-house.</p>
              </div>
              <div>
                <h3 className="text-xl text-neutral-900 mb-2">Electronics</h3>
                <p>
                  Lighting system consists of 12 LEDs wired in 4 parallel series of 3 with resistors, 
                  powered by a 9 volt battery.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-neutral-900 mb-2">Skills Developed</h3>
                <p>Learned soldering and basic electronics through hands-on experience.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}