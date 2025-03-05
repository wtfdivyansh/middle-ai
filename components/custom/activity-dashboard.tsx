/* eslint-disable @next/next/no-img-element */
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"

// Updated recentActivities
const recentActivities = [
  {
    id: 1,
    type: "New Deal",
    description: "MacBook Pro",
    date: "Nov 12, 2024 11:34 PM",
    amount: "$2,499 USD",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    id: 3,
    type: "New Deal",
    description: "Tesla Model 3",
    date: "Nov 10, 2024 11:34 PM",
    amount: "$42,990 USD",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    id: 2,
    type: "Sent Payment",
    description: "iPhone 15 Pro",
    date: "Nov 28, 2024 11:34 PM",
    amount: "$999 USD",
    img: "https://avatar.vercel.sh/john",
  },
  {
    id: 4,
    type: "Sent Payment",
    description: "Gaming PC Setup",
    date: "Nov 12, 2024 11:34 PM",
    amount: "$3,499 USD",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    id: 6,
    type: "Sent Payment",
    description: "Samsung TV",
    date: "Nov 12, 2019 11:34 PM",
    amount: "$1,299 USD",
    img: "https://avatar.vercel.sh/james",
  },
  {
    id: 5,
    type: "New Deal",
    description: "iPad Air",
    date: "Sept 04, 2024 11:34 PM",
    amount: "$599 USD",
    img: "https://avatar.vercel.sh/jack",
  }
]

export default function ActivityDashboard() {
  return (
    <div className="w-full text-white py-3">
      <div className="flex flex-col lg:flex-row gap-3">
        <Card className="w-full lg:w-1/3 bg-black border rounded-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between group p-1 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Avatar className={`size-12 shadow-md`}>
                    <img className="rounded-full" alt="" src={activity.img} />
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">{activity.type}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                </div>
                <div className="text-right md:pr-3">
                  <p className="font-medium text-white">{activity.amount}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="w-full lg:w-2/3 bg-black rounded-none">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-bold">Balance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="text-sm">Total Deals</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1"> $42,980 USD</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-red-300" />
                  <span className="text-sm">Total Sent</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1"> $42,980 USD</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

