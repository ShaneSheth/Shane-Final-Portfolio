import { Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Home() {
  const handleDownloadResume = () => {
    window.open("/Shane-Sheth-Resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-20 relative">
      <div className="absolute top-8 left-8">
        <p className="text-5xl text-neutral-900 text-center">
          Welcome to Shane's Portfolio!
        </p>
      </div>
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-7xl tracking-tight">
              Shane Sheth
            </h1>
            <p className="text-2xl text-neutral-600">
              Mechanical Engineering Student at USC Viterbi
            </p>
          </div>
          
          <Button
            onClick={handleDownloadResume}
            size="lg"
            className="bg-neutral-900 hover:bg-neutral-800 text-white w-fit"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
        
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
          {/* TO INSERT YOUR OWN PHOTO: Replace the src URL below with your image URL */}
          <ImageWithFallback
            src="https://i.imgur.com/aS0Bgcc.jpeg"
            alt="Shane Sheth"
            className="w-full h-full object-cover scale-[1.3]"
            style={{ objectPosition: '60% 70%' }}
          />
        </div>
      </div>
    </div>
  );
}