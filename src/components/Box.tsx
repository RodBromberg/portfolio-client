import React from 'react'

interface BoxProps {
    image: string,
    header: string,
    color: string,
    tools: string[],
}

export const Box = ({ image, header, tools, color}: BoxProps ) => {
  return (
    <div className="flex-col text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
            <img className='mx-auto w-60' src={image} />
            <h3 className={`text-lg font-medium pt-8 pb-2 text-blue-900`}>
              {header}
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Tools I Use</h4>
            {tools.map(tool => (
                <p>{tool}</p>
            ))}
      
          </div>
  )
}
