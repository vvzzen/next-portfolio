import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import NormalButton from './ui/NormalButton'

const Hero = () => {
  return (
    <div className='mt-20 md:mt-20 pb-20 flex flex-col w-full items-center'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        {/* Floating Memojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl animate-bounce delay-0">👋</div>
          <div className="absolute top-32 right-20 text-5xl animate-bounce delay-1000">💻</div>
          <div className="absolute top-60 left-20 text-4xl animate-bounce delay-2000">🚀</div>
          <div className="absolute top-80 right-10 text-5xl animate-bounce delay-3000">⚡</div>
          <div className="absolute bottom-40 left-1/4 text-4xl animate-bounce delay-4000">🎯</div>
          <div className="absolute bottom-60 right-1/3 text-5xl animate-bounce delay-5000">💡</div>
        </div>

        <div className='flex relative my-4 z-10 flex-col px-8 max-w-4xl'>
            <div className='flex flex-col items-center justify-center text-center'>
                <div className="mb-8">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white via-blue-300 to-purple bg-clip-text text-transparent">
                            Hello!
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-6">
                        I'm <span className="text-blue-300 font-semibold">Alvin</span>, a Software Engineer
                    </p>
                </div>

                <TextGenerateEffect 
                    className='text-center text-[28px] md:max-w-3xl md:text-[36px] mb-8'
                    words="Building innovative solutions that bridge technology and impact"
                />

                <p className='text-center lg:tracking-wider lg:text-lg mb-8 max-w-2xl text-gray-400'>
                    Passionate about creating scalable software solutions and leading technical teams to deliver exceptional products that solve impactful problems.
                </p>
                
                <div className='flex gap-8'>
                    <a href='#projects'>
                        <NormalButton title="View Work" />
                    </a>
                    <a href='#contact'>
                        <ShimmerButton title="Contact"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero