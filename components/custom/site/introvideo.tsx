import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import React from 'react'
import videoImage from '@/public/images/prev.png'

export default function IntroVideo() {
    return (
        <div className='w-full flex justify-center my-4'>
            <div className="container flex items-center flex-col text-justify relative">
                <div className='flex w-full justify-center gap-5 overflow-hidden'>
                    <div className="min-w-full max-w-3xl">
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
