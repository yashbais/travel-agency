import {
  servicesCardTypes,
  destinationCardTypes,
  companiesImagesTypes,
  bookingCardTypes
} from "../types/types";

export const servicesCard: servicesCardTypes[] = [
  {
    title: "Calculated Weather",
    content: "Built Wicket longer admire do barton vanity itself do in it.",
    iconImage: "./sattellite.svg",
  },
  {
    title: "Best Flights",
    content: "Engrossed listening. Park gate sell they west hard for the.",
    iconImage: "./airoplane.svg",
  },
  {
    title: "Local Events",
    content:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    iconImage: "./mic.svg",
  },
  {
    title: "Customization",
    content: "We deliver outsourced aviation services for military customers",
    iconImage: "./setting.svg",
  },
];

export const destinationCard: destinationCardTypes[] = [
  {
    country: "Rome, Italty",
    amount: "$5,42k",
    Image: "./Italy-cropped.svg",
    Trip: "10 Days Trip",
  },
  {
    country: "London, UK",
    amount: "$4.2k",
    Image: "./London-cropped.svg",
    Trip: "12 Days Trip",
  },
  {
    country: "Full Europe",
    amount: "$15k",
    Image: "./Europe-cropped.svg",
    Trip: "28 Days Trip",
  },
];

export const companiesImages: companiesImagesTypes[] = [
  {
    companyImage: "./axon.svg",
  },
  {
    companyImage: "./jetStar.svg",
  },
  {
    companyImage: "./expedia.svg",
  },
  {
    companyImage: "./qantas.svg",
  },
  {
    companyImage: "./litalia.svg",
  },
];

export const bookingCard: bookingCardTypes[] = [
  {
    title: "Choose Destination",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    iconImage: "./yellow-icon.svg",
  },
  {
    title: "Make Payment",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    iconImage: "./orange-icon.svg",
  },
  {
    title: "Reach Airport on Selected Date",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    iconImage: "./green-icon.svg",
  }
];
