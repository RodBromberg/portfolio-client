import React from 'react';

interface ProjectProps {
  src: string;
}

export const Project = ({ src }: ProjectProps) => {
  return (
    <div className="basis-1/3 flex-1">
      <img
        className="rounded-lg object-cover w-full h-full"
        src={src}
        alt=""
      />
    </div>
  );
}