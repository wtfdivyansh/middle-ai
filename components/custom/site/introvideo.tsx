import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import React from 'react'
import videoImage from '@/public/images/prev.png'

export default function IntroVideo() {
    return (
        <div className='w-full flex justify-center my-8'>
            <div className="container flex items-center flex-col text-justify py-10 border relative">
                <h1 className="max-w-5xl text-4xl md:text-7xl lg:text-8xl font-bold py-4 text-center glow flex-wrap flex-1">
                    What is Middle AI?
                </h1>
                <div className='flex max-w-5xl w-full justify-center gap-5 p-3 overflow-hidden'>
                    <div className="w-full max-w-3xl">
                        <HeroVideoDialog
                            className="block dark:hidden w-full aspect-video"
                            animationStyle="from-center"
                            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                            thumbnailSrc={videoImage.src}
                            thumbnailAlt="Hero Video"
                        />
                        <HeroVideoDialog
                            className="hidden dark:block w-full aspect-video"
                            animationStyle="from-center"
                            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                            thumbnailSrc={videoImage.src}
                            thumbnailAlt="Hero Video"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
