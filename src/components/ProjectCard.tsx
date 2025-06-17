import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  onClick: () => void;
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  demoUrl,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:scale-[1.02] cursor-pointer relative animated-border-card w-full"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 sm:h-48 object-fill transition-transform group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm transition-colors group-hover:bg-blue-50 group-hover:text-blue-700 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 sm:gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} className="sm:w-5 sm:h-5" />
            <span>GitHub</span>
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} className="sm:w-5 sm:h-5" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
