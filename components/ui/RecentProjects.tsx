import {projects} from "@/data";
import React from "react";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div id='projects' className='pt-20'>
      <h1 className='heading mt-5 text-3xl text-white font-bold text-center'>
        Some of my
        <br className='sm:hidden block' />{" "}
        <span className='relative inline-block'>
          <span className='text-blue-300'>projects</span>
          <img
            src='line.png'
            alt='path'
            className='w-[186px] h-[20px] absolute -bottom-6 z-0 '
          />
        </span>
      </h1>

      <div className='w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto px-4'>
        {projects.map(({id, title, des, img, iconLists}) => (
          <Link key={id} href={`/projects/${id}`}>
            <div className='border border-white/[0.2] rounded-3xl p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:border-blue-300/30 cursor-pointer group'>
              {/* Project Image */}
              <div className='relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-[#13162d]'>
                <img
                  src='bg.png'
                  alt='bg-img'
                  className='w-full h-full object-cover'
                />
                <img
                  src={`${img}`}
                  alt={title}
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full max-w-full object-contain'
                />
              </div>

              {/* Project Title */}
              <h2 className='font-bold text-xl md:text-2xl text-white mb-4 line-clamp-1 group-hover:text-blue-300 transition-colors'>
                {title}
              </h2>

              {/* Description */}
              <p className='text-gray-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-3'>
                {des}
              </p>

              {/* Tech Stack */}
              <div className='flex items-center gap-3 mb-4 flex-wrap'>
                <span className='text-sm text-gray-400'>Tech:</span>
                {iconLists.slice(0, 5).map((icon, index) => (
                  <div
                    key={index}
                    className='w-8 h-8 rounded-full bg-gray-700 border border-white/20 flex justify-center items-center'
                  >
                    <img src={`${icon}`} alt={icon} className='w-4 h-4' />
                  </div>
                ))}
                {iconLists.length > 5 && (
                  <span className='text-xs text-gray-400'>
                    +{iconLists.length - 5}
                  </span>
                )}
              </div>

              {/* View Details Link */}
              <div className='flex items-center justify-center'>
                <span className='text-blue-300 text-sm group-hover:text-blue-200 transition-colors'>
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
