import bedsitterImg from "../assets/bedsitter.jpg"
import singleRoomImg from "../assets/single-room.jpg"
import sharedRoomImg from "../assets/shared-room.jpg"

const listings = [
  {
    id: 1,
    title: "Modern Bedsitter Near Campus",
    location: "Near White House",
    price: 1600,
    type: "Bedsitter",
    image: bedsitterImg
  },
  {
    id: 2,
    title: "Affordable Single Room",
    location: "Waterworks",
    price: 1200,
    type: "Single Room",
    image: singleRoomImg
  },
  {
    id: 3,
    title: "Shared Apartment for Students",
    location: "Next to Nalochi Resort",
    price: 1300,
    type: "Shared",
    image: sharedRoomImg
  }
]

export default listings
