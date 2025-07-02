"use client";

import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  Link,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Star,
} from "@mui/icons-material";

export default function Testimonial() {
  const reviews = [
    {
      id: 1,
      title: "Breathtaking Views and Luxury Comfort!",
      content:
        "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, impeccably clean, and the service was right on point. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
      rating: 5,
      guestName: "Sofia B.",
      location: "France",
      date: "23.10.2024",
    },
    {
      id: 2,
      title: "Exceptional Stay with Excellent Amenities",
      content:
        "The Executive Suite provided an exceptional experience. The room was immaculate, equipped with everything you could need. The rooftop bathroom with its bathtub overlooking the city was truly magnificent. The location is perfect for exploring the city, and the staff truly made our stay memorable.",
      rating: 5,
      guestName: "Youssef R.",
      location: "Morocco",
      date: "",
    },
    {
      id: 3,
      title: "Absolutely Wonderful Experience",
      content:
        "I loved every moment at the hotel. The staff were polite and helpful, the food was amazing, and the views were incredible. Highly recommend for anyone visiting Algiers!",
      rating: 4,
      guestName: "Lina T.",
      location: "Algeria",
      date: "01.11.2024",
    },
    {
      id: 4,
      title: "Perfect Stay for Business",
      content:
        "As a business traveler, the Executive Suite was perfect for me. Fast internet, quiet environment, and a comfortable bed after long meetings. Definitely coming back.",
      rating: 4,
      guestName: "Marco D.",
      location: "Italy",
      date: "",
    },
    {
      id: 5,
      title: "An Oasis of Relaxation",
      content:
        "Beautiful modern decor, breathtaking sea views, and a wonderful spa. A perfect place to unwind. Five stars from me!",
      rating: 5,
      guestName: "Emily P.",
      location: "UK",
      date: "12.09.2024",
    },
  ];

  // Pagination
  const itemsPerPage = 2;
  const [page, setPage] = React.useState(0);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const paginatedReviews = reviews.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const StarRating = ({ rating }: { rating: number }) => (
    <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          sx={{
            fontSize: 20,
            color: index < rating ? "#fbbf24" : "#e5e7eb",
          }}
        />
      ))}
    </Box>
  );

  return (
    <div className="w-full mx-auto p-6 bg-white">
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "#1f2937" }}
        >
          What Our Guests Say
        </Typography>
        <Link
          href="#"
          sx={{
            color: "#3b82f6",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          See All...
          <ArrowForwardIos sx={{ fontSize: 12 }} />
        </Link>
      </Box>

      {/* Navigation and Reviews Container */}
      <Box sx={{ position: "relative" }}>
        {/* Left Arrow */}
        <IconButton
          onClick={handlePrev}
          disabled={page === 0}
          sx={{
            position: "absolute",
            left: -20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "#f3f4f6",
            "&:hover": {
              backgroundColor: "#e5e7eb",
            },
            width: 40,
            height: 40,
          }}
        >
          <ArrowBackIos sx={{ fontSize: 16, color: "#6b7280" }} />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          disabled={page === totalPages - 1}
          sx={{
            position: "absolute",
            right: -20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "#f3f4f6",
            "&:hover": {
              backgroundColor: "#e5e7eb",
            },
            width: 40,
            height: 40,
          }}
        >
          <ArrowForwardIos sx={{ fontSize: 16, color: "#6b7280" }} />
        </IconButton>

        {/* Reviews Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 3,
            px: 2,
          }}
        >
          {paginatedReviews.map((review) => (
            <Card
              key={review.id}
              sx={{
                borderRadius: 2,
                boxShadow:
                  "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                border: "1px solid #e5e7eb",
                height: "fit-content",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* Review Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: "#1f2937",
                    fontSize: "16px",
                    lineHeight: 1.4,
                  }}
                >
                   &quot;{review.title}&quot;
                </Typography>

                {/* Review Content */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6b7280",
                    lineHeight: 1.6,
                    mb: 3,
                    fontSize: "14px",
                  }}
                >
                 &quot;{review.content}&quot;
                </Typography>

                {/* Star Rating */}
                <StarRating rating={review.rating} />

                {/* Guest Info */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, color: "#1f2937" }}
                  >
                    — {review.guestName}, {review.location}
                  </Typography>
                  {review.date && (
                    <Typography
                      variant="caption"
                      sx={{ color: "#6b7280" }}
                    >
                      {review.date}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
}
