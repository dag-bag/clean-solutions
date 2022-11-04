/** @format */

import { flattenDeep } from "lodash";
import { atom, selector, selectorFamily } from "recoil";
import { allPageDataAtom } from "./data";
import { deepStateAtom } from "./innterStages";
interface Question {
  question: string;
  value: string | number;
  options?: string[];
  type?: "input" | "select";
}
export interface ALLData {
  title: string;
  svgs: string[];
  description: string;
  modalText: string;
  questions: Question[];
}
interface QuizData {
  slug: string;
  data: ALLData[];
}
export const selectionDataAtom = atom<QuizData[]>({
  key: "selectionDataAtomKey",
  default: [
    {
      slug: "skin-contact",
      data: [
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
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              type: "input",
              value: "",
            },
            {
              question:
                "How long would you like your hand sanitizer supply to last?",
              type: "select",
              value: "",
              options: [
                "1 month",
                "2 months",
                "3 months",
                "4 months",
                "5 months",
                "6 months",
                "7 months",
                "8 months",
              ],
            },
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
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
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
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
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
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
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
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
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
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
      ],
    },
    {
      slug: "water-treatment",
      data: [
        {
          title: "WATER TREATMENT",
          description:
            "Whether in an emergency, traveling, camping, prepping or home water disinfection, our solutions are a convenient option for water disinfection.      ",
          modalText:
            "Use VeriSan for convenience, versatility, and to ensure sterility! ClO2 is a size-selective antimicrobial agent, which means it can not penetrate deeply into living tissues. Dermatologist-recommended, no chemical scents or harmful residue left behind leaving skin odor-free.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "LIVESTOCK, PETS & ANIMALS ",
          description:
            "Ensure healthy livestock by keeping water supplies fresh and clean. Deactivate harmful pathogens that can disrupt health and production.        ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "WATER RETENTION & STORAGE ",
          description:
            "Sanitize and deodorize water in non-potable water retention basins and other water containment devices for decontamination or preservation.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "SHOCK TREATMENT ",
          description:
            "Contaminated systems regularly require a deep clean to kill bacteria, mold, and other pathogens. Kill microorganisms in water and on surfaces.       ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "RECIRCULATING WATER SYSTEMS     ",
          description:
            "For spas, and pools, cooling towers and servers, pasteurizers, bottling, or canning systems. industrial process water, wastewater, and rinse water.      ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "DIP TOOLS & EQUIPMENT  ",
          description:
            "Disinfect or pre-clean tools and equipment. Keep water tanks, machines, and appliances sanitized at all times to avoid cross-contamination.      ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
      ],
    },
    {
      slug: "home-and-garden",
      data: [
        {
          title: "GROCERIES & PERISHABLE FOODS    ",
          description:
            "Expect longer shelf or fridge life by eliminating fungi, viruses, and bacteria on raw foods,  fruits, vegetables, eggs, poultry, seafood, and meat.      ",
          modalText:
            "Use VeriSan for convenience, versatility, and to ensure sterility! ClO2 is a size-selective antimicrobial agent, which means it can not penetrate deeply into living tissues. Dermatologist-recommended, no chemical scents or harmful residue left behind leaving skin odor-free.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "FOOD SURFACES & PACKAGES    ",
          description:
            "Use in the kitchen while cleaning and preparing food, in dining areas before and after eating, and on surfaces where food is stored like the refrigerator, pantry, cellar, or shelves.       ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "HARD SURFACES & APPLIANCES     ",
          description:
            "  Our eco-friendly solutions make it easy to sanitize, deodorize and disinfect every inch of your home. Use when soaking, spraying, wiping, or mopping surfaces.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "SOFT SURFACE SANITIZER     ",
          description:
            "Safe on soft, porous materials, fabrics, and surfaces including baby clothing, toys, shoes, furniture, couches, bedding, curtains, rugs, luggage, and more.      ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "LAUNDRY DISINFECTION",
          description:
            "Don’t mask bacteria-causing odor, mold, or mildew with chemicals and fragrances. Control your environment to eliminate germs and odor right at the source.      ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "SPRAY OR FOG ROOMS & CARPET     ",
          description:
            "Improve the air quality in your home. Disinfect and deodorize every inch of your house. Use on mold, dust, allergens, and pollutants in air or carpet.     ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
      ],
    },
    {
      slug: "travel-and-leisure",
      data: [
        {
          title: "ADVENTURE & SURVIVAL PREPARATION",
          description:
            "Keep yourself and your friends prepared for every expedition. Go further, go harder, stay longer and hopefully avoid unnecessary emergencies.",
          modalText:
            "Use VeriSan for convenience, versatility, and to ensure sterility! ClO2 is a size-selective antimicrobial agent, which means it can not penetrate deeply into living tissues. Dermatologist-recommended, no chemical scents or harmful residue left behind leaving skin odor-free.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "COMMUTING & TRAVEL LODGING          ",
          description:
            "Have peace of mind on the road. With our compact solutions. Create a hospital-clean environment and relax knowing your space is odor and germ-free.      ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "SPRAY OR FOG ROOMS & VEHICLES",
          description:
            "Easily sanitize germs and eliminate strong odors like smoke or sweat. Use in any room, or transport to reach every crack and crevice. ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "GYMS, SPAS, CLUBS, & LOCKER ROOMS",
          description:
            "There isn’t a resort, gym, or club that hasn’t had issues with odor, bacteria, fungi, or other contagious microorganisms on floors or equipment.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "BOAT, AIRCRAFT, & RV WATER STORAGE",
          description:
            "Treat water systems to kill and prevent contamination, bacteria, algae, biofilm, or mold in recreational and other vehicles to preserve your water.  ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "SANITIZER & DEODORANT  ",
          description:
            "Use on skin, or scalp, to deodorize underarms, feet, or the air. Eliminate smoke or pet odors in rooms or vehicles for a fresh, clean environment.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
      ],
    },
    {
      slug: "professional-use",
      data: [
        {
          title: "OFFICES & INSTITUTIONS ",
          description:
            "Germs can keep us from everyday tasks. Apply our solutions to nearly any surface to kill germs or spray into the air to eliminate odor or allergens.",
          modalText:
            "Use VeriSan for convenience, versatility, and to ensure sterility! ClO2 is a size-selective antimicrobial agent, which means it can not penetrate deeply into living tissues. Dermatologist-recommended, no chemical scents or harmful residue left behind leaving skin odor-free.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "FOOD ESTABLISHMENTS",
          description:
            "Expect longer shelf and fridge life for raw foods by eliminating microorganisms. Be GMP compliant. One of the industries most effective disinfectants.            ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "BOTTLING EQUIPMENT & FACILITIES",
          description:
            "USDA cleared for disinfecting and deodorizing food contact surfaces and equipment in food handling facilities leaving no harmful residue behind.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "BIO-TRAUMA REMEDIATION ",
          description:
            "For exposure to chemicals, viruses, sewage, biohazards, or other hazardous materials. Use for trauma cleanup involving blood, or other biohazards.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "HVAC, FOGGING, & TRANSPORTATION",
          description:
            "Indoor pollution is blown around through air ducts, filters, furnaces, and ventilation providing a breeding environment for pollutants and allergens.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "SANITIZER & DEODORANT  ",
          description:
            "Use on skin, or scalp, to deodorize underarms, feet, or the air. Eliminate smoke or pet odors in rooms or vehicles for a fresh, clean environment.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
      ],
    },
    {
      slug: "farm-and-ranch",
      data: [
        {
          title: "HORTICULTURE & AGRICULTURE TOOLS",
          description:
            "We are dedicated to improving health and commercial productivity. Disinfect where plants and animals are farmed for a higher quality commodity.",
          modalText:
            "Use VeriSan for convenience, versatility, and to ensure sterility! ClO2 is a size-selective antimicrobial agent, which means it can not penetrate deeply into living tissues. Dermatologist-recommended, no chemical scents or harmful residue left behind leaving skin odor-free.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "POTABLE WATER FOR ANIMALS ",
          description:
            "Skip the harsh chemicals. Decontaminate microbial growth, and maintain freshness in potable water and storage systems for pets and livestock..            ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "FOG TO DEODORIZE & FUMIGATE",
          description:
            "Eliminate conditions where pests, insects, or diseases breed or grow. Destroy mold, allergens, larva, eggs, pollutants and bacteria-causing odor.            ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "RAW PRODUCE, MEAT, EGGS & FISH ",
          description:
            "Enhance shelf or fridge life of agricultural commodities. Sanitize produce, eggs, poultry, seafood, and meat. Reduce contamination, rot, or spoilage.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "GREENHOUSE & GARDENS ",
          description:
            "Stop contamination in grow rooms or the field. Infections decrease productivity and put entire crops at risk. Protect your seeds, plants, and soil.             ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "LIVESTOCK HYGIENE & SANITIZER",
          description:
            "Disinfect hair, skin, and fur leaving animals feeling soft and odor-free. Inactivate viruses, and kill, or repel ticks, fleas, mice, and insects.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
      ],
    },
  ],
});

export const singlePageDataSelector = selectorFamily({
  key: "singlePageDataSelector",
  get:
    (slug) =>
    ({ get }) => {
      const data = get(selectionDataAtom);
      return data.find((item) => item.slug === slug);
    },
});
export const allQuestionsAtom = atom({
  key: "allQuestionsAtom",
  default: [],
});

export const allQuestionsSelector = selector({
  key: "allQuestionsAtom",
  get: ({ get }) => {
    const data = get(allPageDataAtom);
    let q = data.page3.data.map((i) => {
      let question = i.questions;

      return question.map((i) => {
        return i;
      });
    });

    const questions = flattenDeep(q);
    return questions;

    // const questions = flattenDeep(q);
  },
  set: ({ set, get }, newValue) => {
    const data = get(allPageDataAtom);
    let q = data.page3.data.map((i) => {
      let question = i.questions;

      return question.map((i) => {
        return i;
      });
    });
    const questions = flattenDeep(q);
  },
});
