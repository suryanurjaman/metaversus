'use client';

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[500px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png" alt="people" className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute bottom-[31%] left-[21%] w-[196px] h-[150px] p-[6px] rounded-[10%] bg-[#5D6680]/50">
          <img src="card-01.png" alt="people" className="w-full h-full" />

          <img src="people-06.png" alt="people" className="absolute bottom-[35%] left-[24%] w-[30px] h-[30px]" />

          <img src="people-05.png" alt="people" className="absolute bottom-[35%] left-[17%] w-[30px] h-[30px]" />

          <img src="people-04.png" alt="people" className="absolute bottom-[35%] left-[10%] w-[30px] h-[30px]" />
          
          <span className="absolute text-white text-[18px] font-bold bottom-[14%] left-[12%] ">The Upside Down</span>

          <span className="absolute text-white text-[12px] bottom-[38%] left-[42%] ">+ 264 has joined</span>
          
        </div>

        <div className="absolute top-[3%] right-[21%] w-[196px] h-[150px] p-[6px] rounded-[10%] bg-[#5D6680]/50">
          <img src="card-02.png" alt="people" className="w-full h-full" />

          <img src="people-06.png" alt="people" className="absolute bottom-[35%] left-[24%] w-[30px] h-[30px]" />

          <img src="people-05.png" alt="people" className="absolute bottom-[35%] left-[17%] w-[30px] h-[30px]" />

          <img src="people-04.png" alt="people" className="absolute bottom-[35%] left-[10%] w-[30px] h-[30px]" />
          
          <span className="absolute text-white text-[18px] font-bold bottom-[14%] left-[12%] ">Hawkins Labs</span>

          <span className="absolute text-white text-[12px] bottom-[38%] left-[42%] ">+ 264 has joined</span>
          
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
