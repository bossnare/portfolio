"use client";

import { personalInfo } from '@/src/data/abouts';
import Image from 'next/image';
import {motion} from 'motion/react'
import {useReveal} from '@/src/hooks/use-reveal'

export const PersonalInformation = () => {
  const {ref, isInView} = useReveal({amount: 0.9})

  return (
    <section className="flex flex-col items-start justify-center w-full min-h-screen gap-10 md:gap-10 md:items-center">
      <h3 className="max-w-md text-3xl">Personal Information</h3>
      <div className="flex flex-col md:flex-row gap-10 w-full">
        <div className="overflow-hidden shrink-0 w-full bg-muted dark:bg-muted/40 h-60 md:h-80 md:w-[50%]">
          <Image
          src="/images/profile.png"
          alt="christo-profile"
          width={1200}
          height={1200}
          className="object-cover"
        />
        </div>
        <div className="flex flex-col gap-8 grow">
          <div className="space-y-2">
            <span>Christo Razafimanga</span>
            <p className="text-muted-foreground text-sm">Full-stack web developer and designer</p>
          </div>
          <p className="text-">
            I am Razafimanga Gervais Christo, professionally known as Christo Razafimanga, a Malagasy full-stack web developer based in Antananarivo, Madagascar. Born on December 9, 2003, I speak Malagasy and English and am passionate about technology, software development, design.
          </p>
          <div className="flex mt-40 md:mt-auto">
            {Array.from({length:10}).map((box, i) => (
              <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: (i + 1) * 0.4 }}
              key={i} style={{marginTop: i % 2 ? '-50px' : '0px'}} className="bg-foreground size-12" />
            ))}
          </div>

        </div>
        </div>
      {/* <div className="flex flex-col justify-center gap-6 sm:gap-8 p-4 border divide-y rounded bg-background md:items-center md:divide-x md:divide-y-0 md:flex-row divide-border border-border">
        <Image
          src="/images/id_photo.jpg"
          alt="id_photo"
          width={1200}
          height={1200}
          className="h-auto w-35 sm:w-45 grayscale hover:grayscale-0 transition-[filter] duration-300"
        />
        <div className="grid justify-between gap-8 pb-8 md:gap-12 md:pr-8 md:pb-0">
          {personalInfo.name.map((nameInfo) => (
            <div key={nameInfo.label} className="flex flex-col gap-3">
              <span className="text-muted-foreground text-sm">
                {nameInfo.label}
              </span>
              <span>{nameInfo.value}</span>
            </div>
          ))}
        </div>
        <div className="grid justify-between grid-cols-2 gap-8 md:gap-12">
          {personalInfo.info.map((info) => (
            <div className="flex flex-col gap-3" key={info.value}>
              <span className="text-muted-foreground text-sm">
                {info.label}
              </span>
              <span>{info.value}</span>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};
