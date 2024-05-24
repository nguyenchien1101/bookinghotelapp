import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import Location from "@/components/Location/Location";

import Image from "next/image";
import { getFeaturedRoom, getLocaTion } from "@/libs/apis";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();
  const diadiem = await getLocaTion();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <Location diadiem={diadiem} />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <NewsLetter />
    </>
  );
};
export default Home;
