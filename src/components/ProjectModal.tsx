import React, { useState, useCallback } from 'react';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Image as ImageIcon } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    demoUrl?: string;
    features: string[];
    challenges: string;
    gallery?: string[];
  };
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const getImageName = (url: string) => {
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    // Remove file extension and replace hyphens with spaces
    return filename.split('.')[0].replace(/-/g, ' ');
  };

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? (project.gallery?.length || 1) - 1 : prev - 1
    );
    setIsZoomed(false);
  }, [project.gallery?.length]);

  const handleNextImage = useCallback(() => {
    const nextIndex = currentImageIndex === (project.gallery?.length || 1) - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
    setIsZoomed(false);
    
    if (project.gallery?.[nextIndex]) {
      const img = new Image();
      img.src = project.gallery[nextIndex];
      img.onload = () => {
        setLoadedImages((prev) => new Set([...prev, nextIndex]));
      };
    }
  }, [currentImageIndex, project.gallery]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'Escape') {
      if (isZoomed) {
        setIsZoomed(false);
      } else {
        setShowGallery(false);
      }
    }
  }, [handlePrevImage, handleNextImage, isZoomed]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  }, [isZoomed]);

  React.useEffect(() => {
    if (showGallery) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [showGallery, handleKeyDown]);

  const ProjectGallery = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative w-full h-full">
        <button
          onClick={() => setShowGallery(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white z-50"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>
        
        {/* Image Name Display */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
          <h3 className="text-white text-lg sm:text-xl font-medium px-4 py-2 bg-black/50 rounded-lg">
            {project.gallery?.[currentImageIndex] ? getImageName(project.gallery[currentImageIndex]) : ''}
          </h3>
        </div>

        <div 
          className="relative h-full flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          {project.gallery?.[currentImageIndex] && (
            <div className={`
              relative w-full h-full flex items-center justify-center
              ${isZoomed ? 'cursor-zoom-out overflow-hidden' : 'cursor-zoom-in'}
            `}>
              <img
                src={project.gallery[currentImageIndex]}
                alt={`Project image ${currentImageIndex + 1}`}
                className={`
                  max-h-[85vh] sm:max-h-[90vh] w-auto object-contain transition-transform duration-300
                  ${isZoomed ? 'scale-[2.5] sm:scale-[2]' : 'scale-100'}
                `}
                style={isZoomed ? {
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                } : undefined}
                loading={loadedImages.has(currentImageIndex) ? 'eager' : 'lazy'}
              />
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 order-2 sm:order-1">
              <span className="text-white text-sm">
                {currentImageIndex + 1} / {project.gallery?.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
                className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white"
              >
                {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </button>
            </div>

            <div className="flex items-center gap-4 order-1 sm:order-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="hidden sm:flex justify-center mt-4 gap-2">
            {project.gallery?.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                  setIsZoomed(false);
                }}
                className={`relative ${
                  currentImageIndex === index ? 'ring-2 ring-blue-500' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-40 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-3 sm:p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-3 sm:p-4 md:p-6">
          <div className="relative group">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg mb-4 sm:mb-6"
            />
            {project.gallery && project.gallery.length > 0 && (
              <button
                onClick={() => setShowGallery(true)}
                className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-black/50 text-white rounded-lg opacity-100 group-hover:opacity-100 transition-opacity"
              >
                <ImageIcon size={18} />
                <span className="text-sm sm:text-base">View Gallery</span>
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Description</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Technologies</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 sm:px-3 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Challenges & Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{project.challenges}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm sm:text-base"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
                <span>View on GitHub</span>
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                >
                  <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {showGallery && <ProjectGallery />}
    </div>
  );
}