import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import Location from "@/components/Location/Location";
import LoaiPhong from "@/components/LoaiPhong/LoaiPhong";

import Image from "next/image";
import {
  getFeaturedRoom,
  getFeaturedRoomnhieu,
  getLocaTion,
} from "@/libs/apis";
import Featurenhieu from "@/components/featurenhieu/Featurenhieu";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();
  const diadiem = await getLocaTion();
  const phongnhieu = await getFeaturedRoomnhieu();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <Location diadiem={diadiem} />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Featurenhieu phongnhieu={phongnhieu} />
      <LoaiPhong  />
      <Gallery />
      <NewsLetter />
    </>
  );
};
export default Home;
