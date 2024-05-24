"use client";
import { getRooms } from "@/libs/apis";
import { Room } from "@/models/room";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Search from "@/components/Search/Search";
import RoomCard from "@/components/RoomCard/RoomCard";
const Rooms = () => {
  const [roomtype, setroomtype] = useState("");
  const [search, setsearch] = useState("");
  const searchParams = useSearchParams();
  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const roomTypee = searchParams.get("roomType");
    if (roomTypee) setroomtype(roomTypee);
    if (searchQuery) setsearch(searchQuery);
  }, []);
  async function fetchData() {
    return getRooms();
  }
  const { data, error, isLoading } = useSWR("get/hotelRooms", fetchData);
  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  const filterRooms = (rooms: Room[]) => {
    return rooms.filter((room) => {
      if (
        roomtype &&
        roomtype.toLowerCase() !== "all" &&
        room.type.toLowerCase() !== roomtype.toLowerCase()
      ) {
        return false;
      }
      if (
        search &&
        !room.diemden.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };
  const fillerdRooms = filterRooms(data || []);

  return (
    <div className="container mx-auto pt-10">
      <Search
        roomTypeFilter={roomtype}
        searchQuery={search}
        setRoomTypeFilter={setroomtype}
        setSearchQuery={setsearch}
      />
      <div className="flex mt-20 justify-between flex-wrap">
        {fillerdRooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
