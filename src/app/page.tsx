import HeroSection from "@/components/HeroSection/HeroSection";
import HotelAvailability from "@/components/HotelAvailable/HotelAvailable";
import HotelPolicies from "@/components/HotelPolicy/HotelPolici";
import HotelRoom from "@/components/HotelRoom/HotelRoom";
import PropertyBooking from "@/components/PropertyBooking/PropertyBooking";
import PropertyDetails from "@/components/PropertyDetails/PropertyDetails";
import GuestReviews from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
   <div>
     <HeroSection></HeroSection>
     <PropertyBooking></PropertyBooking>
     <HotelAvailability></HotelAvailability>
     <PropertyDetails></PropertyDetails>
     <GuestReviews></GuestReviews>
     <HotelPolicies></HotelPolicies>
     <HotelRoom></HotelRoom>
   </div>
  );
}
