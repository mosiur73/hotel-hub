import HeroSection from "@/components/HeroSection/HeroSection";
import HotelRoom from "@/components/HotelRoom/HotelRoom";
import PropertyBooking from "@/components/PropertyBooking/PropertyBooking";

export default function Home() {
  return (
   <div>
     <HeroSection></HeroSection>
     <PropertyBooking></PropertyBooking>
     <HotelRoom></HotelRoom>
   </div>
  );
}
