import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { MoveRight } from 'lucide-react'
import React from 'react'

export default function OnboardingPopUp() {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <Card className='rounded-none py-5 w-full bg-sidebar border border-border'>
        <CardContent className='flex flex-col items-start justify-center gap-3'>
        <h1 className='text-xl font-bold'>Complete your Onboarding Process</h1>
            <span className=' text-muted-foreground'>Continue to complete your onboarding process to access all features instantly.Continue to complete your onboarding process to access all features instantly.</span>
        </CardContent>
        <CardFooter className='py-0 gap-5'>
            <Button size={"lg"}>Continue Now
                <MoveRight/>
            </Button>
            <Button size={"lg"} variant={"secondary"}>I&apos;ll do Later
            </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
