"use client";
import { getRoom } from "@/libs/apis";
import { Room } from "@/models/room";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Search from "@/components/Search/Search";

import Loading from "../../loading";
import HotelPhotoGallery from "@/components/HotelPhotoGallery/HotelPhotoGallery";
import { MdOutlineCleaningServices } from "react-icons/md";
import { LiaFireAltSolid } from "react-icons/lia";
import { IoAtOutline } from "react-icons/io5";
import { GiSmokeBomb } from "react-icons/gi";
import BookRoomCtaa from "@/components/BookRoomCta/BookRoomCta";
import MapComponent from "@/components/MAP/map";
import toast from "react-hot-toast";
import axios from "axios";
import { getStripe } from "@/libs/stripe";
import RoomReview from "@/components/RoomReview/RoomReview";
const ROOMDEtail = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [noOfChildren, setNoOfChildren] = useState(0);
  const fetchData = async () => getRoom(slug);

  const { data: room, error, isLoading } = useSWR("/api/room", fetchData);
  if (error) throw new Error("Cannot fetch data");
  if (typeof room === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (!room) return <Loading />;
  const calcMinCheckoutDate = () => {
    if (checkinDate) {
      const nextDay = new Date(checkinDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    }
    return null;
  };
  const handleBookNowClick = async () => {
    if (!checkinDate || !checkoutDate)
      return toast.error("Bạn chưa chọn ngày checkin / checkout ");

    if (checkinDate > checkoutDate)
      return toast.error("bạn chưa cung cấp cho chúng tôi số lượng");

    const numberOfDays = calcNumDays();

    const hotelRoomSlug = room.slug.current;

    const stripe = await getStripe();

    try {
      const { data: stripeSession } = await axios.post("/api/stripe", {
        checkinDate,
        checkoutDate,
        adults,
        children: noOfChildren,
        numberOfDays,
        hotelRoomSlug,
      });

      if (stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: stripeSession.id,
        });

        if (result.error) {
          toast.error("thanh toán thất bại");
        }
      }
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Bạn chưa đăng nhập");
    }
  };
  const calcNumDays = () => {
    if (!checkinDate || !checkoutDate) return;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return noOfDays;
  };
  return (
    <div>
      <HotelPhotoGallery photos={room.images} />
      <div className="container mx-auto mt-20">
        <div className="md:grid md:grid-cols-12 gap-10 px-3">
          <div className="md:col-span-8 md:w-full">
            <div>
              <h2 className="font-bold text-left text-lg md:text-2xl">
                {room.name}
              </h2>
              <div className="flex my-11">
                {room.offeredAmenities &&
                  room.offeredAmenities.map((amenity) => (
                    <div
                      key={amenity._key}
                      className="md:w-44 w-fit text-center px-2 md:px-0 h-20 md:h-40 mr-3 bg-[#eff0f2] dark:bg-gray-800 rounded-lg grid place-content-center"
                    >
                      <i className={`fa-solid ${amenity.icon} md:text-2xl`}></i>
                      <p className="text-xs md:text-base pt-3">
                        {amenity.amenity}
                      </p>
                    </div>
                  ))}
              </div>
              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-2">Mô tả</h2>
                <p>{room.description}</p>
              </div>
              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-2">An Toàn Và Vệ Sinh</h2>
                <div className="grid grid-cols-2">
                  <div className="flex items-center my-1 md:my-0">
                    <MdOutlineCleaningServices />
                    <p className="ml-2 md:text-base text-xs">
                      Vệ sinh hàng ngày
                    </p>
                  </div>
                  <div className="flex items-center my-1 md:my-0">
                    <LiaFireAltSolid />
                    <p className="ml-2 md:text-base text-xs">Bình chữa cháy</p>
                  </div>
                  <div className="flex items-center my-1 md:my-0">
                    <IoAtOutline />
                    <p className="ml-2 md:text-base text-xs">
                      Thuốc khử trùng và khử trùng
                    </p>
                  </div>
                  <div className="flex items-center my-1 md:my-0">
                    <GiSmokeBomb />
                    <p className="ml-2 md:text-base text-xs">Máy báo cháy</p>
                  </div>
                </div>
              </div>
              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-2">Địa chỉ</h2>
                <p>{room.diachi}</p>
                <div style={{ width: "100%", height: "300px" }}>
                  <MapComponent address={room.diachi} />
                </div>
              </div>
              {/*review*/}
              <div className="shadow dark:shadow-white rounded-lg p-6">
                <div className="items-center mb-4">
                  <p className="md:text-lg font-semibold">
                    Phản hồi khách hàng
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <RoomReview roomId={room._id} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 rounded-xl shadow-lg dark:shadow dark:shadow-white sticky top-10 h-fit overflow-auto">
            <BookRoomCtaa
              discount={room.discount}
              price={room.price}
              specialNote={room.specialNote}
              checkinDate={checkinDate}
              setCheckinDate={setCheckinDate}
              checkoutDate={checkoutDate}
              setCheckoutDate={setCheckoutDate}
              calcMinCheckoutDate={calcMinCheckoutDate}
              adults={adults}
              setAdults={setAdults}
              noOfChildren={noOfChildren}
              setNoOfChildren={setNoOfChildren}
              isBooked={room.isBooked}
              handleBookNowClick={handleBookNowClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROOMDEtail;
