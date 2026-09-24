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
                Hi! I'm Shane Sheth, a Mechanical Engineering student at the University of Southern California's Viterbi School of Engineering. Through my academic work, I've developed experience in CAD-based design, robotics, and advanced manufacturing. I enjoy challenges that require both technical reasoning and creative problem solving and I'm always eager to learn new skills and technologies.
              </p>

              <p className="text-neutral-700 leading-relaxed text-lg mt-8">
                I'm drawn to aerospace, robotics, and other mechanical focused fields that involve complex systems and real tradeoffs. I'm interested in mechanisms, structures, electronics, sensing and actuation, and how individual subsystems interact at a higher system level.
              </p>

              <p className="text-neutral-700 leading-relaxed text-lg mt-8">
                Outside of engineering, I'm interested in Formula One (Forza Ferrari Sempre) and in studying history, especially ancient Greece, Rome, and the Napoleonic era. I also enjoy playing table tennis and always keep a paddle on hand in case I find a table to play on. I believe that a well-rounded perspective is essential for tackling complex engineering challenges.
              </p>

              <p className="text-neutral-700 leading-relaxed text-lg mt-8">
                I'm actively seeking opportunities to contribute to challenging projects in mechanical engineering, aerospace engineering, or robotics. Whether through clubs, research labs, or working in industry, I'm eager to apply what I've learned while continuing to grow as an engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}