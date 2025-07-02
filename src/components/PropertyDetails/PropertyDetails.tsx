"use client";

import React from "react";
import { Typography, Box, Card, Link } from "@mui/material";
import { Restaurant, ShoppingBag, Pool, DirectionsTransit } from "@mui/icons-material";
import Image from "next/image";
import map from "../../../public/images/map.png";

export default function PropertyDetails() {
  const areaData = {
    restaurants: [
      { name: "Blue Cafe", distance: "1.4 km" },
      { name: "Red Bistro", distance: "1.2 km" },
      { name: "Green Dine", distance: "2.1 km" },
    ],
    shops: [
      { name: "Central Mall", distance: "1.4 km" },
      { name: "Market Square", distance: "1.8 km" },
      { name: "City Bazaar", distance: "2.5 km" },
    ],
    beaches: [
      { name: "Les Dunes Beach", distance: "1.4 km" },
      { name: "Palm Beach", distance: "2.2 km" },
      { name: "Blue Lagoon", distance: "3.0 km" },
    ],
    transport: [
      { name: "Train - Riverside Station", distance: "1.4 km" },
      { name: "Metro - Citylane Hub", distance: "2.1 km" },
      { name: "Bus Stop - Main Street", distance: "0.9 km" },
    ],
  };

  const CategorySection = ({
    title,
    icon,
    items,
  }: {
    title: string;
    icon: React.ReactNode;
    items: Array<{ name: string; distance: string }>;
  }) => (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        {icon}
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#1f2937" }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ ml: 4 }}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              {item.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              {item.distance}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* About this property */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 3, color: "#1f2937" }}
        >
          About this property
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#4b5563", lineHeight: 1.6 }}
        >
          The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious
          and spacious experience tailored for both business and leisure
          travelers. With its modern design and panoramic views of the
          Mediterranean Sea, the suite combines comfort, elegance, and
          functionality.
        </Typography>
      </Box>

      {/* Explore the Area - FLEX layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column", // on mobile, stack vertically
            md: "row",    // on desktop, side by side
          },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        {/* LEFT: Text sections */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, mb: 4, color: "#1f2937" }}
          >
            Explore the Area
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            <Box sx={{ flex: "1 1 300px" }}>
              <CategorySection
                title="Restaurants & cafes"
                icon={
                  <Restaurant sx={{ color: "#6b7280", fontSize: 20 }} />
                }
                items={areaData.restaurants}
              />
              <CategorySection
                title="Beaches"
                icon={<Pool sx={{ color: "#6b7280", fontSize: 20 }} />}
                items={areaData.beaches}
              />
            </Box>
            <Box sx={{ flex: "1 1 300px" }}>
              <CategorySection
                title="Shops & Markets"
                icon={
                  <ShoppingBag sx={{ color: "#6b7280", fontSize: 20 }} />
                }
                items={areaData.shops}
              />
              <CategorySection
                title="Public transport"
                icon={
                  <DirectionsTransit
                    sx={{ color: "#6b7280", fontSize: 20 }}
                  />
                }
                items={areaData.transport}
              />
            </Box>
          </Box>
        </Box>

        {/* RIGHT: Map image */}
        <Card
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            height: "fit-content",
            flexShrink: 0,
            width: {
              xs: "100%",
              md: 400,
            },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image
              src={map}
              alt="Area Map"
              width={400}
              height={300}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                right: 16,
              }}
            >
              <Link
                href="#"
                sx={{
                  color: "#3b82f6",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Explore the Area
              </Link>
            </Box>
          </Box>
        </Card>
      </Box>
    </div>
  );
}
