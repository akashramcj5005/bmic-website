"use client";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Filter,
  Thermometer,
  Snowflake,
  Wind,
  Building2,
} from "lucide-react";
import { GalleryGrid } from "@/components/gallery-grid";
import { DuctingImage, ductingImages } from "@/utils/ductingObjects";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useRouter } from "next/navigation";

type ProjectType = "all" | "insulation" | "safety" | "ducting";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const filteredProjects =
    activeFilter === "all"
      ? ductingImages
      : ductingImages.filter((p) => p.type === activeFilter);

  const router = useRouter();

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? filteredProjects.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === filteredProjects.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  };
  const onBackToHome = () => router.push("/");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-20% from-[#d0e0d4] via-[#c9dcce]/90 to-[#fffff] to-70% py-16">
        <div className="container mx-auto px-4 relative">
          <Button onClick={onBackToHome}
            variant="outline" className="mb-8 !bg-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-6">
              Our <span className="text-primary"> Project Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              Explore our comprehensive portfolio of completed and ongoing
              projects across thermal insulation, safety, and HVAC ducting
              systems. Each project demonstrates our commitment to quality,
              innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pt-20 pb-10 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <Filter className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm text-gray-600">Filter by Type:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                {
                  value: "all",
                  label: "All Projects",
                  icon: <Building2 className="h-4 w-4" />,
                },
                {
                  value: "insulation",
                  label: "Thermal Insulation",
                  icon: <Thermometer className="h-4 w-4" />,
                },
                {
                  value: "safety",
                  label: "Safety",
                  icon: <Snowflake className="h-4 w-4" />,
                },
                {
                  value: "ducting",
                  label: "HVAC & Ducting",
                  icon: <Wind className="h-4 w-4" />,
                },
              ].map((option) => (
                <Button
                  key={option.value}
                  variant={
                    activeFilter === option.value ? "default" : "outline"
                  }
                  onClick={() => setActiveFilter(option.value as ProjectType)}
                  className={
                    activeFilter === option.value
                      ? "!bg-primary text-white !border-primary/30 !border"
                      : "!border-primary/30 !border text-primary"
                  }
                >
                  {option.icon}
                  <span className="ml-2">{option.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <GalleryGrid
            items={filteredProjects as DuctingImage[]}
            onImageClick={(idx) => setSelectedIndex(idx)}
          />
        </div>
      </section>

      {/* Lightbox Modal */}
      {mounted && (
        <Dialog
          open={selectedIndex !== null}
          onOpenChange={() => setSelectedIndex(null)}
        >
          <DialogOverlay className="fixed inset-0 bg-black/70" />
          <DialogContent className="max-w-4xl w-full bg-transparent shadow-none border-none p-0">
            {selectedIndex !== null && (
              <div className="relative flex items-center justify-center">
                <VisuallyHidden>
                  <DialogTitle>
                    {filteredProjects[selectedIndex].name} enlarged view
                  </DialogTitle>
                </VisuallyHidden>

                <img
                  src={filteredProjects[selectedIndex].src}
                  alt={filteredProjects[selectedIndex].name}
                  className="max-h-[80vh] rounded-md object-contain"
                />

                {/* Close */}
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white"
                  onClick={() => setSelectedIndex(null)}
                >
                  <X className="h-6 w-6" />
                </button>
                {/* Prev */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white"
                  onClick={handlePrev}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                {/* Next */}
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
