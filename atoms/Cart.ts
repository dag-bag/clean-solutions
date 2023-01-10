/** @format */

import { selector, atom } from "recoil";
import { find } from "lodash";
import { recoilPersist } from "recoil-persist";
import { ICart } from "../types/cart";

const { persistAtom } = recoilPersist();

export const cartAtom = atom({
  key: "cartAtom",
  default: [
    {
      id: 1,
      title: "16oz reusable trigger sprayer",
      href: "/clean",
      price: "$32.00",
      category: "SANITIZER",
      size: "Large",
      imageSrc:
        "https://cleansolutions.tech/wp-content/uploads/2021/06/16oz-768x768.png",
      imageAlt: "Front of men's Basic Tee in black.",
    },
  ],
});

// export const cartSelector = selector({
//   key: "cardSelector",
//   get: ({ get }) => {
//     let cardItems = get(cartAtom);
//     if (cardItems.length > 0) null;
//     // let localCardItems = JSON.parse(localStorage.getItem("cardItems"));
//     return cardItems;
//   },
//   set: ({ set, get }, newValue) => {
//     const cardItems = get(cartAtom);
//     const alreadyExists = find(cardItems, { uni: newValue.uni });
//     if (alreadyExists) {
//       let newCardItems = cardItems.map((i: any) => {
//         if (i.id === newValue.id) {
//           return {
//             ...i,
//             qty: i.qty + 1,
//           };
//         } else {
//           return i;
//         }
//       });
//       set(cartAtom, newCardItems);
//     } else {
//       set(cartAtom, [...cardItems, newValue]);
//     }
//   },
// });

// export const cartTotal = selector({
//   key: "cartTotal",
//   get: ({ get }) => {
//     const cartItems = get(cartAtom);
//     let total = 0;
//     cartItems.map((i: any) => {
//       total += i.price * i.qty;
//     });
//     return total;
//   },
// });

// export const cartQty = selector({
//   key: "cartQty",
//   get: ({ get }) => {
//     const cartItems = get(cartAtom);
//     let total = 0;
//     cartItems.map((i: any) => {
//       total += i.qty;
//     });
//     return total;
//   },
// });

// export const removeCart = selector({
//   key: "removeCart",
//   get: ({ get }) => {
//     const cartItems = get(cartAtom);
//     return cartItems;
//   },
//   set: ({ set, get }, newValue) => {
//     const cartItems = get(cartAtom);
//     let newCartItems = cartItems.filter((i: any) => i.uni !== newValue.uni);
//     set(cartAtom, newCartItems);
//   },
// });
