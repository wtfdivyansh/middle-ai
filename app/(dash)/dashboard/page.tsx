import { CustomLineChart } from '@/components/custom/line-chart'
import OnboardingPopUp from '@/components/custom/onboarding/pop-up'
import React from 'react'

export default function page() {
  return (
    <div>
      <OnboardingPopUp/>
      <CustomLineChart />
      {/* <ActivityDashboard/> */}
    </div>
  )
}
