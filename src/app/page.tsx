import HeroSection from "@/components/HeroSection/HeroSection";
import HotelAvailability from "@/components/HotelAvailable/HotelAvailable";
import HotelPolicies from "@/components/HotelPolicy/HotelPolici";
import HotelRoom from "@/components/HotelRoom/HotelRoom";
import PropertyBooking from "@/components/PropertyBooking/PropertyBooking";
import PropertyDetails from "@/components/PropertyDetails/PropertyDetails";

export default function Home() {
  return (
   <div>
     <HeroSection></HeroSection>
     <PropertyBooking></PropertyBooking>
     <HotelAvailability></HotelAvailability>
     <PropertyDetails></PropertyDetails>
     <HotelPolicies></HotelPolicies>
     <HotelRoom></HotelRoom>
   </div>
  );
}
