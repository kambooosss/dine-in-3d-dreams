import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = {
  src: string;
  alt?: string;
  caption?: string;
  description?: string;
};

type WalkthroughModalProps = {
  open: boolean;
  onClose: () => void;
  slides: Slide[];
  startIndex?: number;
};

export default function WalkthroughModal({
  open,
  onClose,
  slides,
  startIndex = 0,
}: WalkthroughModalProps) {
  const [index, setIndex] = useState(startIndex);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    // prevent body scroll while open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
      aria-modal="true"
      role="dialog"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative z-10 max-w-5xl w-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
        {/* header */}
        <div className="flex items-center justify-between p-3 border-b">
          <div className="text-sm font-medium">
            Step {index + 1} of {slides.length}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={next}
              aria-label="Next"
              className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* body */}
        <div className="p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={slides[index].src}
              alt={slides[index].alt ?? `Step ${index + 1}`}
              className="max-h-[65vh] w-auto object-contain rounded"
            />
          </div>

          <aside className="md:w-96">
            <h3 className="text-lg font-semibold mb-2">
              {slides[index].caption ?? `Step ${index + 1}`}
            </h3>
            {slides[index].description && (
              <p className="text-sm text-muted-foreground mb-4">
                {slides[index].description}
              </p>
            )}

            {/* thumbnails */}
            <div className="flex flex-wrap gap-2">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-20 h-14 rounded overflow-hidden border ${
                    i === index ? "ring-2 ring-orange-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={s.src}
                    alt={s.alt ?? `thumb-${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* actions */}
            <div className="mt-4 flex gap-2">
              <Button
                onClick={prev}
                className="flex-1"
                variant="outline"
              >
                Previous
              </Button>
              <Button onClick={next} className="flex-1">
                Next
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
