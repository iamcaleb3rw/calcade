import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='bg-primary-foreground border-t p-3 flex justify-between'>
        <div>
            <h1>Built by <Link href="https://instagram.com/iamcaleb3rw" target='blank' className='underline text-purple-300'>Ganza Caleb</Link></h1>
            <h1 className='text-muted-foreground'>icaleb130@gmail.com</h1>
        </div>
        <div>
            <h1 className='text-muted-foreground'>Calcade Inc.</h1>
        </div>
    </div>
  )
}

export default Footer