import React from 'react'
import SectionIcon from '@/public/features.png'
import FastImage from '@/public/fast.png'
import Image from 'next/image'
import { BorderBeam } from '@/components/magicui/border-beam'
import { Zap } from 'lucide-react'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { DockDemo } from './DockDemo'
import DotPattern from '@/components/magicui/dot-pattern'
import GrowthImage from '@/public/growth.png'
import { cn } from '@/lib/utils'
import Ripple from '@/components/magicui/ripple'

function GridSection() {
  return (
      <div className='bg-backgrounds min-h-screen text-primary flex flex-col items-center py-16 gap-4 px-16 mb-20'>
          <div className='rounded-2xl relative border w-[fit-content]'>
            <Image alt='icon feature' src={SectionIcon} className='w-14'/>
            <BorderBeam size={250} duration={5} delay={9} />
          </div>

          <div className='text-4xl font-bold'>Our DNA</div>

          <div className='w-full'>
            <div className='border border-dashed border-t-0 border-b-0 h-8'></div>
            <div className='relative grid grid-cols-1 md:grid-cols-2 before:border before:border-border before:border-dashed before:content-[""] before:absolute before:w-8 before:h-0 before:-top-[1px] before:-left-8 after:border after:border-border after:border-dashed after:content-[""] after:absolute after:w-8 after:h-0 after:-top-[1px] after:-right-8'>

              <div className=' relative border-dashed border border-r-0 flex flex-col items-center justify-center p-5'>
                <div className='bg-accent w-[fit-content] p-1 border rounded-xl z-20'>
                  <Image width={40} src={FastImage} alt='fast'></Image>
                </div>
                <div>
                  <div className='text-2xl font-semibold z-20'>We use <span className='bg-gradient-to-br from-[#00FF40] to to-green-600 bg-clip-text text-transparent'> Modern </span>frameworks</div>
                </div>
                <div>
                  <DockDemo />
                </div>

                <DotPattern
                  className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                  )}
                />
              </div>


              <div className='relative border border-dashed overflow-hidden flex items-center justify-center text-2xl font-bold min-h-44'>
                <p>Low prices</p>
                <Ripple />
              </div>
            </div>
            <div className='border border-dashed border-t-0 text-center p-3 text-xl font-semibold'>Augmented user traffic and intercations</div>
            <div className='relative border border-dashed border-t-0 p-3 flex items-center justify-center overflow-hidden'>
              <div className='absolute top-14 left-10'>
                <h1 className='text-muted-foreground text-2xl font-semibold'>We develop websites that <br /> drive growth and brand-trust</h1>
              </div>
              <div>
                <Image src={GrowthImage} alt='growth' className='max-w-[700px]'/>
              </div>
            </div>
          </div>
      </div>
  )
}

export default GridSection