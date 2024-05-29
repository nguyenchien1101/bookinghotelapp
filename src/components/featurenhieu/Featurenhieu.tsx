"use client";

import { FC } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Room, Loaction } from "@/models/room";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  phongnhieu: Room[];
};

const Featurenhieu: FC<Props> = (props) => {
  const { phongnhieu } = props;

  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-2  py-6 md:pt-10 px-10"
    >
      <div className="flex max-w-[58rem] mb-10 flex-col items-start space-y-2 text-center">
        <h2 className="text-xl font-bold leading-[1.1] sm:text-3xl md:text-2xl">
          Các khách sạn nổi bật không kém
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
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="w-full h-auto relative"
      >
        {phongnhieu && phongnhieu.length > 0 && (
          <>
            {phongnhieu.slice(1).map((diemDen, index) => (
              <SwiperSlide
                key={`loai-${index + 1}`}
                className="h-full relative mb-16 overflow-visible"
              >
                <Link key={diemDen._id} href={`/rooms/${diemDen.slug.current}`}>
                  <div className="w-[95%] h-[510px] rounded overflow-hidden shadow-lg bg-white p-4 rounded-lg">
                    <img
                      className="w-full h-[50%] object-cover rounded-lg"
                      src={diemDen.coverImage.url}
                      alt={diemDen.name}
                    />
                    <div className="px-6 py-4 h-[50%] flex flex-col justify-between">
                      <div>
                        <div className="font-bold text-xl mb-2">
                          {diemDen.name}
                        </div>
                        <p className="text-gray-700 text-base">
                          {diemDen.diachi}
                        </p>
                      </div>
                      <div className="flex mb-3 md:mb-0">
                        <div className="flex gap-3 flex-col items-center justify-center mr-4">
                          <p className="text-xs lg:text-xl text-center">
                            Price
                          </p>
                          <p className="md:font-bold flex font-medium text-lg xl:text-2xl">
                            $ {diemDen.price}
                          </p>
                        </div>
                        <div className="flex gap-3 flex-col items-center justify-center mr-4">
                          <p className="text-xs lg:text-xl text-center">
                            Discount
                          </p>
                          <p className="md:font-bold flex font-medium text-lg xl:text-2xl">
                            $ {diemDen.discount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </section>
  );
};

export default Featurenhieu;
