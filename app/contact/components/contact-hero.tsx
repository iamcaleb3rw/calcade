import { Instagram, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'

function ContactHero() {
  return (
    <div className='min-h-[80vh] flex justify-center items-center p-5 flex-col gap-6'>
        <div>
            <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl text-center'>Contact our friendly <br /> team</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full h-[200px]'>
            <div className='border bg-primary-foreground flex p-5 rounded-lg'>
                <div>
                    <div className='border w-[fit-content] p-3 rounded-xl bg-background'>
                        <Phone />
                    </div>
                    <h1 className='font-bold text-xl'>Phone call</h1>
                    <h1 className='border-2 bg-purple-300 border-purple-400 p-2 rounded-3xl text-xl font-semibold'>(+250) 788 511 561</h1>
                </div>
            </div>
            <div className='border bg-primary-foreground flex flex-col p-5 rounded-lg'>
            <div>
                <div className='border w-[fit-content] p-3 rounded-xl bg-background'>
                    <Mail />
                </div>
                <h1 className='font-bold text-xl'>E-mail</h1>
                <h1 className='border-2 bg-orange-200 border-orange-400 p-2 rounded-3xl text-xl font-semibold'>icaleb130@gmail.com</h1>
                </div>
            </div>
            <div className='border bg-primary-foreground flex flex-col p-5 rounded-lg'>
            <div>
                    <div className='border w-[fit-content] p-3 rounded-xl bg-background'>
                        <Instagram />
                    </div>
                    <h1 className='font-bold text-xl'>DM</h1>
                    <h1 className='border-2 bg-pink-200 border-pink-400 p-2 rounded-3xl text-2xl font-semibold'>@iamcaleb3rw</h1>
                </div>
            </div>
            <div className='border bg-primary-foreground flex flex-col p-5 rounded-lg'>
            <div>
                    <div className='border w-[fit-content] p-3 rounded-xl bg-background'>
                        <Twitter />
                    </div>
                    <h1 className='font-bold text-xl text-primary'>Twitter</h1>
                    <h1 className='border-2 bg-blue-200 border-blue-400 p-2 rounded-3xl text-2xl font-semibold'>@caleb.ganza</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactHero