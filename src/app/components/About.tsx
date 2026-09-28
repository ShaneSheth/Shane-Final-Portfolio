import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="min-h-screen py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl mb-16">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Images */}
          <div className="space-y-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-200 shadow-xl">
              {/* TO INSERT YOUR OWN PORTRAIT: Replace the src URL below with your image URL */}
              <ImageWithFallback
                src="https://i.imgur.com/W9SSwoA.png"
                alt="Shane Sheth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-700 leading-relaxed text-lg">
                Hi! I'm Shane Sheth, an undergraduate Mechanical Engineering student at the University of Southern California's Viterbi School of Engineering (FIGHT ON!!).
              </p>

              <p className="text-neutral-700 leading-relaxed text-lg mt-8">
                I like working on projects where I can take something from an early idea all the way through design, CAD, manufacturing, testing, and iteration. A lot of my experience has been in aircraft, robotics, and hands-on hardware, but I generally just enjoy figuring out how things work and trying to make them better.
              </p>

              <p className="text-neutral-700 leading-relaxed text-lg mt-8">
                Outside of classes, I spend a lot of my time working with USC AeroDesign and Terra Labs or building personal projects. I especially enjoy work that forces me to balance different constraints rather than optimize one thing in isolation.
              </p>

              <p className="text-neutral-700 leading-relaxed text-lg mt-8">
                When I'm not doing engineering stuff, I'm probably watching Formula 1 or hockey, surfing, snowboarding, playing table tennis, doing trivia, or going down some random rabbit hole about mythology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}