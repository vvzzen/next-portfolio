import React from "react";
import {BentoGrid, BentoGridItem} from "./BentoGrid";
import {gridItems} from "@/data";

const Grid = () => {
  return (
    <section id='about' className='pb-20'>
      <h1 className='heading mt-20 mb-10 text-3xl text-white font-bold text-center'>
        <span className='relative inline-block'> About{" "}
          <span className='text-blue-300'> Me</span>
          <img
            src='line.png'
            alt='path'
            className='w-[80px] h-[20px] absolute -bottom-6 z-0 '
          />
        </span>
      </h1>
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
