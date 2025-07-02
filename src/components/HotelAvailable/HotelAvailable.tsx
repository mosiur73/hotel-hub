"use client"

import {
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Box,
} from "@mui/material"
import { CalendarToday, Person, AcUnit, Bathtub, Tv, Wifi, Bed, Home, KeyboardArrowDown } from "@mui/icons-material"

export default function HotelAvailability() {
  const roomData = [
    {
      id: 1,
      name: "Twin Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      guests: 2,
      price: 282,
      amenities: ["Air condition", "Bathroom", "TV", "WIFI"],
      breakfast: true,
      roomsLeft: 4,
    },
    {
      id: 2,
      name: "Deluxe Double Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      guests: 2,
      price: 282,
      amenities: ["Air condition", "Bathroom", "TV", "WIFI"],
      breakfast: true,
      roomsLeft: 4,
    },
    {
      id: 3,
      name: "Deluxe Double Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      guests: 2,
      price: 282,
      amenities: ["Air condition", "Bathroom", "TV", "WIFI"],
      breakfast: true,
      roomsLeft: 4,
    },
  ]

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Air condition":
        return <AcUnit sx={{ fontSize: 16, color: "#6b7280" }} />
      case "Bathroom":
        return <Bathtub sx={{ fontSize: 16, color: "#6b7280" }} />
      case "TV":
        return <Tv sx={{ fontSize: 16, color: "#6b7280" }} />
      case "WIFI":
        return <Wifi sx={{ fontSize: 16, color: "#6b7280" }} />
      default:
        return null
    }
  }

  return (
    <div className="w-full mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Availability Header */}
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: "#1f2937" }}>
        Availability
      </Typography>

      {/* Search Form */}
      <Card sx={{ mb: 4, borderRadius: 2, boxShadow: 1 }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
            {/* Check-in */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 200 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: "#3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CalendarToday sx={{ fontSize: 16, color: "white" }} />
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: "#6b7280", display: "block" }}>
                  Check-in
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Tue 23 June 2024
                </Typography>
              </Box>
            </Box>

            {/* Check-out */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 200 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: "#3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CalendarToday sx={{ fontSize: 16, color: "white" }} />
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: "#6b7280", display: "block" }}>
                  Check-out
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Sat 29 June 2024
                </Typography>
              </Box>
            </Box>

            {/* Room & Guest */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 250 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: "#3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Person sx={{ fontSize: 16, color: "white" }} />
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: "#6b7280", display: "block" }}>
                  Room & Guest
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  2 Adults - 0 Children - 1 Room
                </Typography>
              </Box>
            </Box>

            {/* Search Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3b82f6",
                "&:hover": { backgroundColor: "#2563eb" },
                borderRadius: 2,
                textTransform: "none",
                px: 4,
                py: 1.5,
                ml: "auto",
              }}
            >
              Search
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Results Table */}
      <TableContainer component={Card} sx={{ borderRadius: 2, overflow: "hidden" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#3b82f6" }}>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 2 }}>Room type</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 2 }}>Number of guests</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 2 }}>Price for 1 week</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 2 }}>Your choices</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 2 }}>Select rooms</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 2 }}>Your choices</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roomData.map((room, index) => (
              <TableRow key={room.id} sx={{ "&:nth-of-type(even)": { backgroundColor: "#f9fafb" } }}>
                {/* Room Type */}
                <TableCell sx={{ py: 3, minWidth: 200 }}>
                  <Typography variant="body2" sx={{ color: "#3b82f6", fontWeight: 600, mb: 1, cursor: "pointer" }}>
                    {room.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Bed sx={{ fontSize: 16, color: "#6b7280" }} />
                    <Typography variant="caption" sx={{ color: "#6b7280" }}>
                      {room.beds}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <Home sx={{ fontSize: 16, color: "#6b7280" }} />
                    <Typography variant="caption" sx={{ color: "#6b7280" }}>
                      Room
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#6b7280", ml: 2 }}>
                      {room.size}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {room.amenities.map((amenity, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        {getAmenityIcon(amenity)}
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {amenity}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </TableCell>

                {/* Number of Guests */}
                <TableCell sx={{ py: 3 }}>
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    {Array.from({ length: room.guests }).map((_, idx) => (
                      <Person key={idx} sx={{ fontSize: 20, color: "#6b7280" }} />
                    ))}
                  </Box>
                </TableCell>

                {/* Price */}
                <TableCell sx={{ py: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    ${room.price}
                  </Typography>
                </TableCell>

                {/* Your Choices */}
                <TableCell sx={{ py: 3 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Breakfast included
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ef4444", fontWeight: 500 }}>
                    Only {room.roomsLeft} rooms left
                  </Typography>
                </TableCell>

                {/* Select Rooms */}
                <TableCell sx={{ py: 3 }}>
                  <FormControl size="small" sx={{ minWidth: 80 }}>
                    <Select value={0} displayEmpty sx={{ backgroundColor: "white" }} IconComponent={KeyboardArrowDown}>
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>

                {/* Reserve Button */}
                <TableCell sx={{ py: 3 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#3b82f6",
                      "&:hover": { backgroundColor: "#2563eb" },
                      borderRadius: 1,
                      textTransform: "none",
                      px: 3,
                    }}
                  >
                    Reserve
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
