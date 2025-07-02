"use client"

import { Button, Card, CardContent } from "@mui/material"
import { Wifi, UtensilsCrossed, Waves, Snowflake, Dumbbell } from "lucide-react"

export default function PropertyBooking() {
  const features = [
    { icon: Wifi, label: "Wifi" },
    { icon: UtensilsCrossed, label: "Dining" },
    { icon: Waves, label: "Swimming Pool" },
    { icon: Snowflake, label: "Air Conditioning" },
    { icon: Dumbbell, label: "Gym" },
  ]

  return (
    <div className="w-full mx-auto p-6 bg-gray-50 h-fit lg:pr-20">
      {/* Navigation Tabs */}
      <div className="flex items-center gap-6 mb-8">
        <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">Over View</button>
        <button className="text-gray-600 hover:text-gray-900 pb-2">Features</button>
        <button className="text-gray-600 hover:text-gray-900 pb-2">Reviews</button>
        <Button
          variant="contained"
          className="ml-auto"
          sx={{
            backgroundColor: "#2563eb",
            "&:hover": { backgroundColor: "#1d4ed8" },
            borderRadius: "9999px",
            textTransform: "none",
            paddingX: 3,
            paddingY: 1,
          }}
        >
          Message
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Property Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Property Type Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Property Type</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700">Resorts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700">12000 sqft</span>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Features</h2>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-center gap-3">
                    {/* <div className="w-2 h-2 bg-gray-400 rounded-full"></div> */}
                    <IconComponent className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{feature.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <Card
            sx={{
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              borderRadius: "16px",
              border: "none",
            }}
          >
            <CardContent sx={{ padding: 3 }}>
              <div className="space-y-4">
                {/* Booking Details */}
                <div className="text-gray-700 text-sm">1 week, 2 adults, 1 child</div>

                {/* Price */}
                <div className="text-2xl font-bold text-gray-900">USD $6,112</div>

                {/* Reserve Button */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#2563eb",
                    "&:hover": { backgroundColor: "#1d4ed8" },
                    borderRadius: "8px",
                    textTransform: "none",
                    paddingY: 1.5,
                    fontWeight: 500,
                  }}
                >
                  Reserve
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
