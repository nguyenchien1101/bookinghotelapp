import { groq } from "next-sanity";

export const getFeaturedRoomQuery = groq`*[_type == "hotelRoom" && isFeatured == true][0] {
    _id,
    description,
    discount,
    images,
    isFeatured,
    diemden,
    diachi,
    name,
    price,
    slug,
    coverImage
}`;
export const getRoomss = groq`*[_type == "hotelRoom"] {
    _id, 
    coverImage,
    description,
    dimension,
    isBooked,
    diemden,
    diachi,
    isFeatured,
    name,
    price,
    slug,
    type
}`;
export const getRoomm = groq`*[_type == "hotelRoom" && slug.current == $slug][0] {
    _id,
    coverImage,
    description,
    dimension,
    discount,
    diemden,
    diachi,
    images,
    isBooked,
    isFeatured,
    name,
    numberOfBeds,
    offeredAmenities,
    price,
    slug,
    specialNote,
    type
}`;
export const getUserBookingsQuery = groq`*[_type == 'booking' && user._ref == $userId] {
    _id,
    hotelRoom -> {
        _id,
        name,
        slug,
        price
    },
    checkinDate,
    checkoutDate,
    numberOfDays,
    adults,
    children,
    totalPrice,
    discount
}`;

export const getUserDataQuery = groq`*[_type == 'user' && _id == $userId][0] {
    _id,
    name,
    email,
    isAdmin,
    about,
    _createdAt,
    image,
}`;

export const getRoomReviewsQuery = groq`*[_type == "review" && hotelRoom._ref == $roomId] {
    _createdAt,
    _id,
    text,
    user -> {
        name
    },
    userRating
}`;
export const getlocation = groq`*[_type == "location"] {
    _id, 
    coverImage,
    Name,
}`;
export const getFeaturedRoomQuerynhieu = groq`*[_type == "hotelRoom" && isFeatured == true]{
    _id,
    description,
    discount,
    images,
    isFeatured,
    diemden,
    diachi,
    name,
    price,
    slug,
    coverImage
}`;
