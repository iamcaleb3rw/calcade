import { ModeToggle } from '@/components/ui/toggle'
import Image from 'next/image'
import React from 'react'
import IconLogo from '@/public/iconlogo.png'
import FullLogo from '@/public/fulllogo.png'
import { NavigationMenu } from '@/components/ui/navigation-menu'
import { NavigationMenuDemo } from './navMenu'
import { Button } from '@/components/ui/button'
import { AlignJustifyIcon, SquareArrowOutUpRight } from 'lucide-react'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import Link from 'next/link'
  

  

export default function Navbar() {
  return (
    <div className='px:-[25px] lg:px-[30px] py-[12px] flex justify-between items-center'>
        <div>
           <Link href="/">
            <Image
            alt='logo'
            src={FullLogo}
            width={160}
            className='hidden md:block'></Image>
            <Image
            alt='small logo'
            src={IconLogo}
            width={40}
            height={40}
            className='md:hidden'
            ></Image>
           </Link>
           
        </div>
        <div>
          <NavigationMenuDemo />
        </div>
        <div className='flex gap-2'>
            <div>
                <ModeToggle />
            </div>
           {/* <div>
                <Drawer>
                        <DrawerTrigger className='border p-2 rounded-md'>
                            <AlignJustifyIcon />
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className='grid grid-cols-1 md:grid-cols-2 text-left'>
                                <div className='flex flex-col gap-4 border p-5 rounded-lg hover:bg-primary-foreground'>
                                 <DrawerTitle className='flex items-center gap-1'><Link href="/projects">All our apps</Link><span><SquareArrowOutUpRight size={15}/></span></DrawerTitle>
                                 <DrawerDescription>
                                    <ul>
                                        <li>Calcade AI</li>
                                        <li>studyTime</li>
                                        <li>Aurora Audio</li>
                                    </ul>
                                 </DrawerDescription>
                                </div>

                                <div className='flex flex-col border p-5 bg-background rounded-lg hover:bg-primary-foreground'>
                                 <DrawerTitle className='flex items-center gap-1'><Link href="/projects">Our services</Link><span><SquareArrowOutUpRight size={15}/></span></DrawerTitle>
                                 <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                </div>

                                <div className='flex flex-col border p-5 bg-background rounded-lg hover:bg-primary-foreground'>
                                 <DrawerTitle className='flex items-center gap-1'><Link href="/projects">The team</Link><span><SquareArrowOutUpRight size={15}/></span></DrawerTitle>
                                 <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                </div>

                                <div className='flex flex-col border p-5 bg-background rounded-lg hover:bg-primary-foreground'>
                                 <DrawerTitle className='flex items-center gap-1'><Link href="/projects">Media</Link><span><SquareArrowOutUpRight size={15}/></span></DrawerTitle>
                                 <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                </div>
                                
                                
                            
                            
                            
                            </DrawerHeader>
                            <DrawerFooter>
                            <DrawerClose>
                                <Button>Close</Button>
                            </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                </Drawer>
           </div> */}
        </div>
        
    </div>
  )
}
