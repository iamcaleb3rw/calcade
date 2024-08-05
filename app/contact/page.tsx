import React from 'react'
import Navbar from '../components/navbar'
import ContactHero from './components/contact-hero'
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import FAQ from './components/FAQ'



function page() {
  return (
    <div>
        <div className='w-full min-h-[500px]'>
            <Navbar />
            <ContactHero />
            <AnimatedGridPattern
            numSquares={25}
            maxOpacity={0.04}
            duration={3}
            repeatDelay={1}
            className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%]",
            )}
           />
        </div>
    </div>
  )
}

export default page