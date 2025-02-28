import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
    return (
        <div className='w-full flex justify-center my-14'>
            <div className="container flex items-center flex-col text-justify py-14 border ">
                <h1 className="max-w-5xl text-4xl md:text-7xl lg:text-8xl font-bold py-4 text-center glow flex-wrap flex-1">
                    Build world class websites at middle ai
                </h1>
                <p className='max-w-5xl font-medium text-lg text-center text-muted-foreground'>
                    Access an ever-growing collection of premium, meticulously crafted templates and component packs. Save time and focus on what matters—building standout websites that captivate your audience.
                </p>
                <div className='py-10 flex gap-5 items-center'>
                    <Button className="p-5 border border-white bottom-1" variant={"outline"}>
                        Task to founders
                    </Button>
                    <Button className="p-5" variant={"default"}>
                        Try it now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero