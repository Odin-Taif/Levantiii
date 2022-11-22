import svg1 from "../public/Assets/SVG/svg1.svg";
import svg2 from "../public/Assets/SVG/svg5.svg";
import svg3 from "../public/Assets/SVG/svg4.svg";
import svg6 from "../public/Assets/SVG/svg1.svg";
import svg5 from "../public/Assets/SVG/svg2.svg";
import svg4 from "../public/Assets/SVG/svg3.svg";
import svg7 from "../public/Assets/SVG/svg7.svg";

import lev from "../public/Assets/webp/levantisk.png";

export const carouselData = {
  id: "1",
  title: "Our Services",
  cards: [
    {
      id: "1",
      cardIcon: lev,
      cardH1: "Launch your Mobile.App",
      descir: "Create your app on both IOS and Andriod",
    },
    {
      id: "2",
      cardIcon: lev,
      cardH1: "Launch your Websites",
      descir: "Create a Website with your disered functionalties",
    },
    {
      id: "3",
      cardIcon: lev,
      cardH1: "Digitial Art",
      descir: "It starts from Logo design to Ad making and more...",
    },
    {
      id: "4",
      cardIcon: lev,
      cardH1: "Online Markting",
      descir:
        "Markting is one of the main blocks that stregthen your business ",
    },
    {
      id: "5",
      cardIcon: lev,
      cardH1: "Technical Support",
      descir: "We help you with any digital burden that comes your way.",
    },
    {
      id: "6",
      cardIcon: lev,
      cardH1: "Vedio and Animation",
      descir: "From 3D animtaion to Dron Vediography.",
    },
    {
      id: "7",
      cardIcon: svg7,
      cardH1: "Tatto Design",
      descir: "We will design your own Tatto samples.",
    },
    {
      id: "8",
      cardIcon: svg6,
      cardH1: "Bussiness Consulting",
      descir: "create your app on both IOS and Andriod",
    },
  ],
};

export const people = [
  {
    id: 1,
    image: svg7,
    name: "maria ferguson",
    title: "office manager",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image: svg7,
    name: "john doe",
    title: "regular guy",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image: svg7,
    name: "peter smith",
    title: "product designer",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
  {
    id: 4,
    image: svg7,
    name: "susan andersen",
    title: "the boss",
    quote:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
  },
];

export const dishData = [
  {
    id: 1,
    name: "Icecream",
    decp: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: svg7,
  },
  {
    id: 2,
    name: "Strawberries",
    decp: "Fresh Strawberries",
    price: "10.25",
    imageSrc: svg7,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    decp: "Mixed Kebab Plate",
    price: "8.25",
    imageSrc: svg7,
  },
  {
    id: 4,
    name: "Fish Kebab",
    decp: "Mixed Fish Kebab",
    price: "5.25",
    imageSrc: svg7,
  },
];

export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
    cardIcon: svg6,
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
    cardIcon: svg6,
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
    cardIcon: svg6,
  },
  {
    id: 4,
    name: "Fish",
    urlParamName: "fish",
    cardIcon: svg6,
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
    cardIcon: svg6,
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
    cardIcon: svg6,
  },

  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
    cardIcon: svg6,
  },
];

import {
  BsGithub,
  BsLinkedin,
  BsSpotify,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsGlobe2,
} from "react-icons/bs";
import { SiCodewars } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
//-=-=-= The rel attribute defines the relationship between a linked resource and the current document.
const linkRelation = "noreferrer";
//-=-=-=-=-= new blank page will be opened-=-=-=-=-=-=
const linkTarget = "_blank";

export const socialMediaData = [
  {
    id: "1",
    name: "Mobile",
    href: "tel:0046739871260",
    target: linkTarget,
    rel: linkRelation,
    icon: <BiPhoneCall />,
  },
  {
    id: "2",
    name: "Email",
    href: "mailto:mjd.thif@icloud.com",
    target: linkTarget,
    rel: linkRelation,
    icon: <MdOutlineMailOutline />,
  },
  {
    id: "3",
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mjd-thif/",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsLinkedin />,
  },
  {
    id: "4",
    name: "Portfilio",
    href: "https://www.mjdwebstudio.com/",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsGlobe2 />,
  },
  {
    id: "5",
    name: "Mobile",
    href: "https://www.codewars.com/users/mjdthif",
    target: linkTarget,
    rel: linkRelation,
    icon: <SiCodewars />,
  },
  {
    id: "6",
    name: "Instagram",
    href: "https://www.instagram.com/hammuarabi/",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsInstagram />,
  },
  {
    id: "7",
    name: "Pinterest",
    href: "https://www.pinterest.se/mjdreklam/_created/",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsPinterest />,
  },
  {
    id: "8",
    name: "Github",
    href: "https://github.com/mjdthif",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsGithub />,
  },
  {
    id: "9",
    name: "Spotify",
    href: "",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsSpotify />,
  },
  {
    id: "10",
    name: "Twitter",
    href: "https://twitter.com/DJohanberg",
    target: linkTarget,
    rel: linkRelation,
    icon: <BsTwitter />,
  },
];
