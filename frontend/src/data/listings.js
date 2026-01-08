import bedsitterImg from "../assets/bedsitter.jpg"
import singleRoomImg from "../assets/single-room.jpg"
import sharedRoomImg from "../assets/shared-room.jpg"

const listings = [
  {
    id: 1,
    title: "Modern Bedsitter Near Campus",
    price: 1600,
    type: "Bedsitter",
    image: bedsitterImg,
    lat: -14.2961,
    lng: 28.5562
  },
  {
    id: 2,
    title: "Affordable Single Room",
    price: 1200,
    type: "Single Room",
    image: singleRoomImg,
    lat: -14.2950,
    lng: 28.5541
  },
  {
    id: 3,
    title: "Shared Apartment for Students",
    price: 1300,
    type: "Shared",
    image: sharedRoomImg,
    lat: -14.2942,
    lng: 28.5570
  }
]

export default listings
