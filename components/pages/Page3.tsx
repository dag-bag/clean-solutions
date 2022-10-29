/** @format */

import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentModalAtom, modalState } from "../../atoms/modalAtom";
import Card2 from "../cards/Card2";
import Section from "../Section";
import Flex from "../utils/Flex";

type Props = {};
const page3Data = [
  {
    title: "HAND SANITIZER",
    description:
      "VeriSan can be used to deactivate germs on hands, or for use on lesions, scratches, and wound sites while protecting your cells and tissue.",
    modalText:
      "Use VeriSan for convenience, versatility, and to ensure sterility! ClO2 is a size-selective antimicrobial agent, which means it can not penetrate deeply into living tissues. Dermatologist-recommended, no chemical scents or harmful residue left behind leaving skin odor-free.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
    ],
  },
  {
    title: "BODY DEODORANT",
    description:
      "Our solutions meet USDA, EPA, and AMA standards as a sanitizer. Kill germs, bacteria, and fungi on skin and eliminate odor at the source.      ",
    modalText:
      "Our solutions meet USDA, EPA, and AMA standards as a sanitizer and can be used to kill germs, bacteria, and fungi on skin and eliminate odor at the source.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
    ],
  },
  {
    title: "HAIR AND FUR SANITIZER ",
    description:
      "Use ClO2 to rapidly eliminate microorganisms on hair. Spray or soak with our solution to eliminate strong odors like smoke, urine, and skunk.      ",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
    ],
  },
  {
    title: "SKIN INFECTIONS",
    description:
      "Bacterial, fungal, and yeast infections on skin, and scalps, like ringworm, athlete’s foot, cold sores, or candida embedded in nail beds.      ",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
    ],
  },
  {
    title: "DENTAL & ORAL CARE",
    description:
      "Used in healthcare such as veterinary, hospital, and dental environments, an oral rinse, to reduce plaque, and much more.",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
    ],
  },
  {
    title: "HYGIENIC UTENSILS",
    description:
      "Sterilize personal items such as combs, tooth -brushes, dental instruments, bottles, pacifiers, baby toys, respirators, or CPAP machines.      ",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
    ],
  },
];

function Page3({}: Props) {
  return <Section data={page3Data} />;
}

export default Page3;
