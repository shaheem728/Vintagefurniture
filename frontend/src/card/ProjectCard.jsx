import React from "react";

const ProjectCard = ({ image, title }) => {
  return (
    <div className="relative w-full group overflow-hidden">
      
      {/* Overlay - Hidden by default, shows on hover */}
      <div className="absolute inset-0 bg-amber-400/70
                      flex justify-center items-center 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300">
 
        <button className="text-white text-sm border-2 border-white p-4">
          VIEW MORE
        </button>
      </div>
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full md:h-72 object-cover"
      />

      {/* Title */}
      <div className="absolute bottom-0 w-full py-3 text-center">
        <p className="text-white uppercase tracking-wide text-sm font-semibold">
          {title}
        </p>
      </div>

    </div>
  );
};

export default ProjectCard;
