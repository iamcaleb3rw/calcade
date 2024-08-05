import React from 'react'
import { GridBeam } from '@/components/GridBeam'
import  BlurIn from '@/components/magicui/blur-in'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import HeroImage from '@/public/map.png'
import SparklesText from '@/components/magicui/sparkles-text'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import AvatarCircles from '@/components/magicui/avatar-circles'
import maskSvg from '../public/mask.svg'
import { GlobeDemo } from './components/GlobeDemo'
import { GlowingStarsBackgroundCard, GlowingStarsTitle } from '@/components/ui/glowing-stars'
const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export default function Hero() {
  return (
    <div className=''>
        <GridBeam className="sm:pl-16 px-[20px] py-[100px] flex flex-col items-start gap-7 sm:items-center  lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4">
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                  )}
                >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ | Introducing Calcade solutions</span>
                  <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
               </div>
                <BlurIn word={<div>Websites that <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text'>elevate</span> <br /> your online <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text'>presence</span></div>} className="text-2xl sm:text-3xl md:text-4xl lg:5xl font-semibold text-primary mb-4"/>
                <BlurIn word={<p>Reach out the our team our web developers <br /> for professional looking websites</p>} className='text-muted-foreground' />
                <div className='flex gap-1'>
                    <Button >Get a website</Button>
                    <Button variant="outline">Our team</Button>
                </div>

            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            
          </div>
          <div className='flex flex-col items-center'>
            <div>
             <GlobeDemo />
            </div>

              
            <div className='-translate-y-2'>
              <GlowingStarsBackgroundCard className='max-w-[300px] min-w-[270px]'>
                <GlowingStarsTitle>Yooooo</GlowingStarsTitle>
              </GlowingStarsBackgroundCard>
            </div>
            
          </div>
        </GridBeam>
      
    </div>
   
  )
}
