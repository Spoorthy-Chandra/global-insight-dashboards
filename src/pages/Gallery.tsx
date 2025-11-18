import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import dashboard1 from "@/assets/dashboard1.jpg";
import dashboard2 from "@/assets/dashboard2.jpg";
import dashboard3 from "@/assets/dashboard3.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const dashboards = [
    { id: 1, title: "Global Income Distribution Overview", image: dashboard1 },
    { id: 2, title: "Inequality Trends Over Time", image: dashboard2 },
    { id: 3, title: "Country-Level Inequality Deep Dive", image: dashboard3 },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? dashboards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === dashboards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dashboard Gallery
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse through all dashboards with auto-slide carousel
            </p>
          </div>

          {/* Carousel */}
          <div className="glass rounded-2xl p-8 card-shadow animate-scale-in">
            <div className="relative">
              {/* Main Image */}
              <div className="relative group">
                <img
                  src={dashboards[currentIndex].image}
                  alt={dashboards[currentIndex].title}
                  className="w-full rounded-lg transition-transform duration-300"
                />
                <button
                  onClick={() => setFullscreenOpen(true)}
                  className="absolute top-4 right-4 p-2 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Maximize2 size={20} />
                </button>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full hover:bg-primary/20 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Title and Counter */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {dashboards[currentIndex].title}
                </h3>
                <p className="text-muted-foreground">
                  {currentIndex + 1} / {dashboards.length}
                </p>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {dashboards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {dashboards.map((dashboard, index) => (
              <button
                key={dashboard.id}
                onClick={() => setCurrentIndex(index)}
                className={`glass rounded-xl overflow-hidden transition-all hover:scale-105 ${
                  index === currentIndex ? "ring-2 ring-primary" : ""
                }`}
              >
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm font-semibold">{dashboard.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Dialog open={fullscreenOpen} onOpenChange={setFullscreenOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <div className="relative">
            <img
              src={dashboards[currentIndex].image}
              alt={dashboards[currentIndex].title}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setFullscreenOpen(false)}
              className="absolute top-4 right-4 p-2 glass rounded-lg"
            >
              <X size={20} />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
