import basket_icon from "./basket_icon.png";
import logo from "./logo.png";
import header_img from "./header_img.png";
import search_icon from "./search_icon.png";
import menu_1 from "./menu_1.jpg";
import menu_2 from "./menu_2.jpg";
import menu_3 from "./menu_3.jpg";
import menu_4 from "./menu_4.jpg";
import menu_5 from "./menu_5.jpg";
import menu_6 from "./menu_6.jpg";
import menu_7 from "./menu_7.jpg";
import menu_8 from "./menu_8.jpg";

import fur_1 from "./fur_1.png";
import fur_2 from "./fur_2.png";
import fur_3 from "./fur_3.png";
import fur_4 from "./fur_4.png";
import fur_5 from "./fur_5.png";
import fur_6 from "./fur_6.png";
import fur_7 from "./fur_7.png";
import fur_8 from "./fur_8.png";
// import fur_9 from "./fur_9.jpg";
// import fur_10 from "./fur_10.jpg";
// import fur_11 from "./fur_11.jpg";
// import fur_12 from "./fur_12.jpg";
// import fur_13 from "./fur_13.jpg";
// import fur_14 from "./fur_14.jpg";
// import fur_15 from "./fur_15.jpg";
// import fur_16 from "./fur_16.jpg";
// import fur_17 from "./fur_17.jpg";
// import fur_18 from "./fur_18.jpg";
// import fur_19 from "./fur_19.jpg";
// import fur_20 from "./fur_20.jpg";
// import fur_21 from "./fur_21.jpg";
// import fur_22 from "./fur_22.jpg";
// import fur_23 from "./fur_23.jpg";
// import fur_24 from "./fur_24.jpg";

import rating_stars from "./rating_stars.png";
import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import linkedin_icon from "./linkedin_icon.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import cross_icon from "./cross_icon.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";

export const assets = {
  basket_icon,
  logo,
  header_img,
  search_icon,
  rating_stars,
  add_icon_white,
  add_icon_green,
  remove_icon_red,
  facebook_icon,
  twitter_icon,
  linkedin_icon,
  app_store,
  play_store,
  cross_icon,
  logout_icon,
  bag_icon,
  profile_icon,
  parcel_icon,
};

export const menu_list = [
  {
    menu_name: "Sofa",
    menu_image: menu_1,
  },
  {
    menu_name: "Table",
    menu_image: menu_2,
  },
  {
    menu_name: "Bed",
    menu_image: menu_3,
  },
  {
    menu_name: "Bookshelf",
    menu_image: menu_1,
  },
  {
    menu_name: "Dresser",
    menu_image: menu_2,
  },
  {
    menu_name: "Chair",
    menu_image: menu_3,
  },
  {
    menu_name: "TV Stand",
    menu_image: menu_1,
  },
  {
    menu_name: "Lamp",
    menu_image: menu_2,
  },
];

export const furniture_list = [
  {
    _id: "1",
    name: "Syltherine",
    image: fur_1,
    price: 100,
    description: "Stylish cafe chair",
    category: "Chair",
  },
  {
    _id: "2",
    name: "Leviosa",
    image: fur_2,
    price: 200,
    description: "Stylish cafe chair",
    category: "Chair",
  },
  {
    _id: "3",
    name: "Lolito",
    image: fur_3,
    price: 1000,
    description: "Luxury big sofa",
    category: "Sofa",
  },
  {
    _id: "4",
    name: "Respira",
    image: fur_4,
    price: 500,
    description: "Outdoor bar table and stool",
    category: "Table",
  },
  {
    _id: "5",
    name: "Grifo",
    image: fur_5,
    price: 50,
    description: "Night lamp",
    category: "Lamp",
  },
  {
    _id: "6",
    name: "Muggo",
    image: fur_6,
    price: 1200,
    description: "Small mug",
    category: "Sofa",
  },
  {
    _id: "7",
    name: "Pingky",
    image: fur_7,
    price: 700,
    description: "Cute bed set",
    category: "Bed",
  },
  {
    _id: "8",
    name: "Potty",
    image: fur_8,
    price: 900,
    description: "Minimalist flower pot",
    category: "Sofa",
  },
  // {
  //   _id: "9",
  //   name: "Pingky",
  //   image: fur_9,
  //   price: 400,
  //   description: "Cute table set",
  //   category: "Table",
  // },
  // {
  //   _id: "10",
  //   name: "Potty",
  //   image: fur_10,
  //   price: 400,
  //   description: "Minimalist flower pot",
  //   category: "Table",
  // },
  // {
  //   _id: "11",
  //   name: "Pingky",
  //   image: fur_11,
  //   price: 600,
  //   description: "Cute bed set",
  //   category: "Bed",
  // },
  // {
  //   _id: "12",
  //   name: "Potty",
  //   image: fur_12,
  //   price: 1300,
  //   description: "Minimalist flower pot",
  //   category: "Bed",
  // },
  // {
  //   _id: "13",
  //   name: "Potty",
  //   image: fur_13,
  //   price: 500,
  //   description: "Minimalist bookshelf",
  //   category: "Bookshelf",
  // },
  // {
  //   _id: "14",
  //   name: "Pingky",
  //   image: fur_14,
  //   price: 400,
  //   description: "Cute bed set",
  //   category: "Bookshelf",
  // },
  // {
  //   _id: "15",
  //   name: "Potty",
  //   image: fur_15,
  //   price: 500,
  //   description: "Minimalist flower pot",
  //   category: "Bookshelf",
  // },
  // {
  //   _id: "16",
  //   name: "Potty",
  //   image: fur_16,
  //   price: 400,
  //   description: "Minimalist flower pot",
  //   category: "Dresser",
  // },
  // {
  //   _id: "17",
  //   name: "Pingky",
  //   image: fur_17,
  //   price: 400,
  //   description: "Cute bed set",
  //   category: "Dresser",
  // },
  // {
  //   _id: "18",
  //   name: "Potty",
  //   image: fur_18,
  //   price: 600,
  //   description: "Minimalist flower pot",
  //   category: "Dresser",
  // },
  // {
  //   _id: "19",
  //   name: "Potty",
  //   image: fur_19,
  //   price: 100,
  //   description: "Minimalist flower pot",
  //   category: "Chair",
  // },
  // {
  //   _id: "20",
  //   name: "Pingky",
  //   image: fur_20,
  //   price: 400,
  //   description: "Cute bed set",
  //   category: "TV Stand",
  // },
  // {
  //   _id: "21",
  //   name: "Potty",
  //   image: fur_21,
  //   price: 500,
  //   description: "Minimalist flower pot",
  //   category: "TV Stand",
  // },
  // {
  //   _id: "22",
  //   name: "Potty",
  //   image: fur_22,
  //   price: 350,
  //   description: "Minimalist flower pot",
  //   category: "TV Stand",
  // },
  // {
  //   _id: "23",
  //   name: "Pingky",
  //   image: fur_23,
  //   price: 150,
  //   description: "Cute bed set",
  //   category: "Lamp",
  // },
  // {
  //   _id: "24",
  //   name: "Potty",
  //   image: fur_24,
  //   price: 200,
  //   description: "Minimalist flower pot",
  //   category: "Lamp",
  // },
];
