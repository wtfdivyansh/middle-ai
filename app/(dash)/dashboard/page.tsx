import ActivityDashboard from '@/components/custom/activity-dashboard'
import OnboardingPopUp from '@/components/custom/onboarding/pop-up'
import React from 'react'

export default function page() {
  return (
    <div>
      <OnboardingPopUp/>
      <ActivityDashboard/>
    </div>
  )
}
