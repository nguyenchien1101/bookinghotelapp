import Link from "next/link";
import ClientComponent from "./ClientComponent";
import { heading1, section2 } from "./ServerComponent";

const HeroSection = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover text-white h-[600px] flex justify-center items-center">
      <center>
        <h1 className="font-heading mb-6">We Find the best hotel for you</h1>
        <p className="dark:text-[#ffffffea] mb-12 max-w-lg">
          Experience an Exquisite Hotel Immersed in Rich History and Timeless
          Elegance.
        </p>
        <Link href="/rooms">
          <button className="btn-toi">Get Started</button>
        </Link>
      </center>
    </div>
  );
};

export default HeroSection;
