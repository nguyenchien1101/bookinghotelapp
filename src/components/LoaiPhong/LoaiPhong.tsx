"use client";

import { FC } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Room, Loaction } from "@/models/room";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const LoaiPhong: FC = () => {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-2 py-6 md:pt-10 px-10"
    >
      <div className="flex max-w-[58rem] mb-10 flex-col items-start space-y-2 text-center">
        <h2 className="text-xl font-bold leading-[1.1] sm:text-3xl md:text-2xl">
          Các Loại Phòng
        </h2>
      </div>
      <Swiper
        style={
          {
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-color": "#000000",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-width": "10px",
            "--swiper-pagination-bullet-height": "10px",
          } as React.CSSProperties
        }
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="w-full h-auto relative"
      >
        <SwiperSlide
          key="loai-basic"
          className="h-full relative mb-16 overflow-visible"
        >
          <Link href={`/rooms?roomType=Basic&searchQuery=`}>
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-xl mx-auto mt-5 h-[300px] lg:w-37 lg:h-[300px]">
              <img
                src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Phòng Basic"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">Basic</h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                Banana booking
              </div>
            </article>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          key="loai-luxury"
          className="h-full relative mb-16 overflow-visible"
        >
          <Link href={`/rooms?roomType=Luxury&searchQuery=`}>
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-xl mx-auto mt-5 h-[300px] lg:w-37 lg:h-[300px]">
              <img
                src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Phòng Luxury"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                Luxury
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                Banana booking
              </div>
            </article>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          key="loai-suite"
          className="h-full relative mb-16 overflow-visible"
        >
          <Link href={`/rooms?roomType=Suite&searchQuery=`}>
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-xl mx-auto mt-5 h-[300px] lg:w-37 lg:h-[300px]">
              <img
                src="https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Phòng Suite"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white">Suite</h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                Banana booking
              </div>
            </article>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default LoaiPhong;
