import React from 'react'

interface ProjectTypes {
    src: string;
}

export const Project = ({ src }: ProjectTypes) => {
  return (
    <div className="basis-1/3 flex-1">
    <img
      className="rounded-lg object-cover"
      width={"80%"}
      height={"80%"}              
      src={src}
    />
  </div>
  )
}
