"use client"

import { Typography, Box, Divider, Link } from "@mui/material"

export default function HotelPolicies() {
  const policies = [
    {
      title: "Check-in",
      content: (
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
            Available 24 hours
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b7280", lineHeight: 1.5 }}>
            Guests are required to show a photo identification and credit card upon check-in. You'll need to let the
            property know in advance what time you'll arrive.
          </Typography>
        </Box>
      ),
    },
    {
      title: "Check-out",
      content: (
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Available 24 hours
        </Typography>
      ),
    },
    {
      title: "Cancellation/ prepayment",
      content: (
        <Box>
          <Typography variant="body2" sx={{ color: "#6b7280", lineHeight: 1.5, mb: 1 }}>
            Cancellation and prepayment policies vary according to accommodation type. Please check what{" "}
            <Link href="#" sx={{ color: "#3b82f6", textDecoration: "underline" }}>
              conditions
            </Link>{" "}
            may apply to each option when making your selection.
          </Typography>
        </Box>
      ),
    },
    {
      title: "Children and beds",
      content: (
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
            Child policies
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b7280", lineHeight: 1.5, mb: 1 }}>
            Children of any age are welcome.
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b7280", lineHeight: 1.5, mb: 1 }}>
            Children 12 years and above will be charged as adults at this property.
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b7280", lineHeight: 1.5, mb: 2 }}>
            To see correct prices and occupancy information, please add the number of children in your group and their
            ages to your search.
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
            Cot and extra bed policies
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b7280", lineHeight: 1.5, mb: 1 }}>
            The number of extra beds allowed is dependent on the option you choose. Please check your selected option
            for more information.
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b7280", lineHeight: 1.5, mb: 1 }}>
            There are no cots available at this property.
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b7280", lineHeight: 1.5 }}>
            All extra beds are subject to availability.
          </Typography>
        </Box>
      ),
    },
    {
      title: "No age restriction",
      content: (
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          There is no age requirement for check-in.
        </Typography>
      ),
    },
    {
      title: "Pets",
      content: (
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          Pets are not allowed.
        </Typography>
      ),
    },
    {
      title: "Cash only",
      content: (
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          This property only accepts cash payments.
        </Typography>
      ),
    },
  ]

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: "#1f2937" }}>
        Policies
      </Typography>

      <Box>
        {policies.map((policy, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                py: 3,
                gap: 4,
                alignItems: "flex-start",
              }}
            >
              {/* Policy Title */}
              <Box sx={{ minWidth: 200, flexShrink: 0 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    color: "#1f2937",
                  }}
                >
                  {policy.title}
                </Typography>
              </Box>

              {/* Policy Content */}
              <Box sx={{ flex: 1 }}>{policy.content}</Box>
            </Box>

            {/* Divider between policies */}
            {index < policies.length - 1 && <Divider sx={{ borderColor: "#e5e7eb" }} />}
          </Box>
        ))}
      </Box>
    </div>
  )
}
