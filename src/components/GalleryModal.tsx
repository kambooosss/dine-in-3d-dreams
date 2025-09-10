// // src/components/GalleryModal.tsx
// import { X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// interface GalleryModalProps {
//   open: boolean;
//   onClose: () => void;
//   images: string[];
// }

// const GalleryModal = ({ open, onClose, images }: GalleryModalProps) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           className="fixed inset-0 bg-black/90 z-50 flex flex-col"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           {/* Close Button */}
//           <button
//             className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 transition"
//             onClick={onClose}
//           >
//             <X className="h-6 w-6" />
//           </button>

//           {/* Collage Grid */}
//           <div className="flex-1 overflow-y-auto p-6">
//             <div className="columns-2 md:columns-3 gap-4 space-y-4">
//               {images.map((src, idx) => (
//                 <motion.img
//                   key={idx}
//                   src={src}
//                   alt={`gallery-${idx}`}
//                   className="w-full rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: idx * 0.05 }}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default GalleryModal;
// src/components/GalleryModal.tsx
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryModalProps {
  open: boolean;
  onClose: () => void;
  images: string[];
}

const GalleryModal = ({ open, onClose, images }: GalleryModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Container */}
          <motion.div
            className="relative bg-background rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] overflow-hidden flex flex-col"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Collage Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((src, idx) => (
                  <motion.img
                    key={idx}
                    src={src}
                    alt={`gallery-${idx}`}
                    className="w-full rounded-xl shadow-md hover:scale-[1.02] transition-transform"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
