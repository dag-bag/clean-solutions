/** @format */

import { page1DataAtom } from "./data";
/** @format */

import { motion } from "framer-motion";
/** @format */

import { flattenDeep, values } from "lodash";
import { atom, selector, selectorFamily } from "recoil";
import { allPageDataAtom } from "./data";
import { deepStateAtom } from "./innterStages";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export interface Question {
  question: string;
  value: string | number | string[];
  options?: string[];
  type?: "input" | "select" | "options" | "mix";
  r?: string;
  ml?: number;
  f?: string | number;
  uni?: string;
  Q?: string;
  max?: number;
  min?: number;
}
export interface ALLData {
  title: string;
  svgs: string[] | any;
  description: string;
  modalText: string;
  questions: Question[];
}
interface QuizData {
  slug: string;
  data: ALLData[];
}
let r = [
  "skin-contact",
  "water-treatment",
  "home-and-garden",
  "food-and-beverage",
  "personal-use",
  "farm-and-ranch",
];
let monthOptions: string[] = [
  "1 month",
  "6 months",
  "1 years",
  "2 years",
  "5 years",
];

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
            "https://cleansolutions.tech/wp-content/uploads/2022/03/wash-your-hands.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
          ],
          questions: [
            {
              question: "How many times per day do you apply skin sanitizer?",
              type: "input",
              value: 0,
              r: r[0],
              ml: 0,
              f: 30,
            },
            {
              question:
                "How long would you like your hand sanitizer supply to last?",
              type: "select",
              value: 0,
              options: [
                "1 month",
                "3 months",
                "6 months",
                "1 year",
                "2 year",
                "5 year",
              ],
              r: r[0],
              ml: 0,
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
            "https://cleansolutions.tech/wp-content/uploads/2022/09/mosquito-1.png",
            "./official/spray-bottle.svg",
            "https://cleansolutions.tech/wp-content/uploads/2022/09/flea.png",
          ],
          questions: [
            {
              question: "How many times per week do you apply deodorant ?",
              type: "input",
              value: 0,
              r: r[0],
              ml: 0,
              f: 30,
            },
            {
              question: "How long would you like a body deodorant to last ?",
              type: "select",
              value: 0,
              options: [
                "1 month",
                "3 months",
                "6 months",
                "1 years",
                "2 years",
                "5 years",
              ],
              r: r[0],
              ml: 0,
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
            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
            "./pngicons/spray.png",
            "./pngicons/hair.png",
          ],
          questions: [
            {
              question: "What length is your hair ?",
              type: "select",
              value: 0,
              options: ["A) Short", "B) Medium", "C) Long", "D) Extra long"],
            },
            {
              question:
                " How many animals do you have, and would you use sanitizer as a spray or soak?",
              type: "select",
              value: 0,
              options: ["Cats", "Dogs"],
            },
            {
              question: "How many gallons do they typically require to wash? ",
              type: "input",
              value: 0,
            },
            {
              question: "How long would you like a hair sanitizing supply?",
              type: "select",
              value: 0,
              options: monthOptions,
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
            "./official/hair-follicle.svg",
            "./official/nails.svg",
            "./pngicons/massage.png",
          ],
          questions: [
            {
              question:
                "How many times a month do you spray or soak fungi, yeast, or bacteria that can cause contamination or infectious diseases on skin?",
              value: 0,
              type: "input",
            },
            {
              question:
                "How long would you like to have a disinfection supply?",
              type: "select",
              value: 0,
              options: monthOptions,
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
            "./pngicons/infection.png",
            "https://cleansolutions.tech/wp-content/uploads/2022/03/mouth-1.png",
            "./pngicons/dentist-tools.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              Q: "Choose all that apply",
              value: [],
              type: "options",
              options: [
                "1) Combs & Brushes",
                "2) Nail Tech Tools",
                "3) Respirators & CPAP Parts",
                "4) Pacifiers & Bottles",
                "5) Baby & Child Toys",
                "6) Toothbrushes",
                "7) Retainers & Dentures",
                "8) Other Dental Instruments",
                "9) Mouth Rinse or Gargle",
              ],
            },
            {
              question:
                "How frequently do you sanitize hygienic utensils or perform an oral routine?",
              value: 0,
              type: "select",
              options: [
                "1-9",
                "Twice a day",
                "Daily",
                "Twice a week",
                "Weekly",
                "Monthly",
              ],
            },
            {
              question:
                "How long would you like to have a sanitizer for dental & oral care?",
              value: [],
              type: "select",
              options: monthOptions,
            },
          ],
        },
        {
          title: "LAUNDRY DISINFECTION",
          description:
            "Sterilize personal items such as combs, tooth -brushes, dental instruments, bottles, pacifiers, baby toys, respirators, or CPAP machines.      ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "./pngicons/washing-machine.png",
            "./pngicons/clean-clothes.png",
            "./pngicons/laundry-room.png",
          ],
          questions: [
            {
              question: "Select all that apply ",
              value: [],
              type: "options",
              options: [
                "1) Everyday, Bodily Fluids Sweat, & Urine  ",
                "2) Soiled, Heavy Bacteria, & Activewear ",
                "3) Fungi, Mold, & Mildew ",
                "4) Lice, Ticks, & Bedbugs",
              ],
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
            "Whether in an emergency, traveling, camping, prepping or managing home water systems, our solutions are a convenient option for water disinfection.",
          modalText:
            "Use VeriSan for convenience, versatility, and to ensure sterility! ClO2 is a size-selective antimicrobial agent, which means it can not penetrate deeply into living tissues. Dermatologist-recommended, no chemical scents or harmful residue left behind leaving skin odor-free.",
          svgs: [
            "./pngicons/drink-water.png",
            "./pngicons/oil.png",
            "./pngicons/water-tank.png",
          ],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
            {
              question:
                "How many times a month do you want to be prepared with safe drinking water?",
              value: "",
            },
            {
              question:
                "How long would you like to have a drinking water supply?                ",
              value: "",
              type: "select",
              options: monthOptions,
            },
          ],
        },
        {
          title: "LIVESTOCK, PETS & ANIMALS ",
          description:
            "Ensure healthy animals by keeping water supplies fresh and clean. Deactivate harmful pathogens that can disrupt health and production.  ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "./pngicons/storage-tank.png",
            "./pngicons/livestock.png",
            "./pngicons/trough.png",
          ],
          questions: [
            {
              question:
                "How much water do all of your pets and animals consume weekly?                ",
              value: "",
            },
            {
              question:
                "How long would you like to have an animal drinking water supply ?",
              value: "",
              type: "select",
              options: monthOptions,
            },
          ],
        },
        {
          title: "WATER RETENTION & STORAGE ",
          description:
            "Sanitize and deodorize water in non-potable water retention basins and other water containment devices for decontamination or preservation.             ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "./pngicons/water-tank.png",
            "./pngicons/basin.png",
            "./pngicons/pool.png",
          ],
          questions: [
            {
              question:
                "How many gallons do each of your water retention or storage containment devices hold?",
              value: [],
              type: "options",
              options: [
                "1) Ponds, Reservoirs, & Retention Basins",

                "2) Once-through Water Cooling Systems ",

                "3) Aircraft, RV, Boat Tanks & Lines ",

                "4) Other Non-Potable Water Storage",
              ],
            },
            {
              question:
                "How many times per month do you want to sanitize water containment?",
              value: "",
              type: "input",
            },
            {
              question:
                "How long would you like a water storage sanitizer supply to last?",
              value: "",
              type: "select",
              options: monthOptions,
            },
          ],
        },
        {
          title: "RECIRCULATING &  SHOCK",
          description:
            "Control and suppress the growth of biofilm, algae, and microorganisms  in water systems like irrigation systems, tanks, reservoirs, pipes, tubing, and transfer lines.            ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: ["./pngicons/data-server.png", "./pngicons/hydrotherapy.png"],
          questions: [
            {
              question:
                "On average, how many times per day do you use skin sanitizer?",
              value: "",
            },
          ],
        },
        {
          title: "WASTEWATER TREATMENT",
          description:
            "Eco-friendly alternative to  remove both hydrogen sulfide and the sulfide reducing bacteria that cause odor and corrosion in wastewater and sewage.",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "./pngicons/toilet.png",
            "./pngicons/vomit.png",
            "./pngicons/biohazard.png",
          ],
          questions: [
            {
              question:
                "How many times per month do you sanitize water systems?",
              type: "input",
              max: 5,
              value: "",
            },
            {
              question:
                "How long would you like a recirculating water system disinfectant  supply?",
              type: "select",
              value: "",
              options: monthOptions,
            },
            {
              question: "How much water can each system hold?",
              max: 3,
              type: "input",
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
          svgs: ["./pngicons/watering-system.png", "./pngicons/rain.png"],
          questions: [
            {
              question:
                "On an average week, how much water do you require to… ",
              value: "",
              type: "mix",
              options: [
                "1 ) Sanitize tools and equipment? (Light)",

                "2 ) Disinfect tools and equipment? (Moderate)",

                "3 ) Kill viruses, fungi, or mold on tools and equipment? (Heavy)",
              ],
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
            "Expect longer shelf or fridge life by eliminating fungi, viruses, and bacteria on raw foods, fruits, vegetables, eggs, red meat, poultry, and more.       ",
          modalText:
            "EPA approves use for pre and post-harvest, in-production, before, during, and after food preparation. Also for thawing, transporting, storing, and rinsing raw meat, like; beef, poultry, pork, crustaceans, and fish. Soak eggs without disrupting the membrane to keep them fresh much longer than conventionally washed eggs. Prevent spoilage and rotting on goods and commodities. ",
          svgs: [
            "./pngicons/vegetable.png",
            "./pngicons/meat.png",
            "./pngicons/eggs.png",
          ],
          questions: [
            {
              question:
                "Pick which foods your household eats, and how you typically disinfect each selection.",
              value: "",
            },
          ],
        },
        {
          title: "FOOD SURFACES & PACKAGES    ",
          description:
            "Use in the kitchen while cleaning and preparing foods, in dining areas before and after eating, and on surfaces where food is stored or refrigerated.      ",
          modalText:
            "The National Organic Standards Board Program lists chlorine dioxide as an approved substance on organic foods, surfaces, and packaged goods. Use our multipurpose solution to eliminate odors and disinfect contaminated food-contact surfaces, metal, wood, enamel, stone, plastic, stainless steel, cast iron, and food packages, like Tupperware or store-bought containers.",
          svgs: [
            "./pngicons/pantry.png",
            "./pngicons/kitchenware.png",
            "./pngicons/rubber-gloves.png",
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
            "  Our eco-friendly solutions make it easy to sanitize, deodorize and disinfect every inch of your home. Use when soaking, spraying, wiping, or mopping. ",
          modalText:
            "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
          svgs: [
            "./pngicons/clean.png",
            "./pngicons/mop.png",
            "./pngicons/smartphone.png",
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
            "Don’t mask odor, mold, or mildew with harsh chemicals and fragrances. For soft, porous surfaces eliminate germs and odor right at the source.      ",
          modalText:
            "Use for daily surface sanitizing, deep-cleaning, for tough jobs to ensure the most thorough surface disinfection. Gentle, fragrance-free, and hypoallergenic for all skin types including babies and animals. Our formulas are safe on dyed fabrics, linens, baby clothing, toys, shoes, furniture, couches, bedding, comforters, pillows, mattress pads, curtains, rugs, luggage, backpacks, purses, wool, rugs, and other textiles. In some of the most extreme cases used as a fumigant to exterminate insects like bed bugs and achieve 99.99% mortality",
          svgs: [
            "./pngicons/rug.png",
            "./pngicons/laundry-room.png",
            "./pngicons/clothes.png",
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
          title: "GREENHOUSE & GARDEN",
          description:
            "Stop contamination in grow rooms or the field. Infections decrease productivity and put entire crops at risk. Protect your seeds, plants, and soil.             ",
          modalText:
            "International Federation of Organic Agriculture Movements (IFOAM) Norms “Indicative List of Equipment Cleansers and Equipment Disinfectants,” and is effective in humid, wet, and dry environments. Spray mushroom beds, potting soil, flowers, and plant flats. Control mites, mold, and biofilm, and control and suppress bacteria and algae (pre-and post-casing.) Eliminate biofilm from non-potable water, irrigation systems holding tanks, mixing tanks, and containment vessels, including heating and cooling systems. ",
          svgs: [
            "./pngicons/plants.png",
            "./pngicons/gardening-tools.png",
            "./pngicons/greenhouse.png",
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
          title: "FOG ROOMS & CARPETING  ",
          description:
            "Improve air quality in your home. Disinfect and deodorize every inch of your house. Use on mold, dust, allergens, and pollutants in air or carpet.              ",
          modalText:
            "The EPA has found that indoor air is around five times more polluted than outside air, with some buildings having as much as 100 times more pollution. Disinfect rooms and carpets in animal facilities and houses to control odors, bacteria, fungi, contamination, and biomatter like, pet dander, vomit, urine, and feces. Our solutions are made in the USA, fragrance-free and hypoallergenic. Sanitize turf used in residential landscaping, for dog patches, decorative strips, or fields.",
          svgs: [
            "./pngicons/smoke.png",
            "./pngicons/air-conditioner.png",
            "./pngicons/furnace.png",
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
          title: "POTABLE WATER PREPARATION",
          description:
            "Keep yourself and your friends prepared for every expedition. Go further, go harder, stay longer and hopefully avoid unnecessary emergencies.",
          modalText:
            "            Take our compact and lightweight solutions anywhere with a lack of fresh, clean drinking water. Kill microorganisms in water and on surfaces used for water storage to make drinking water safe from bacteria and parasites like Giardia, Legionella, and Cryptosporidium in flowing or stagnant water, such as streams, rivers, and stored water jugs. Take camping, backpacking, hiking, mountaineering, climbing, rafting, fishing, picnics, and on other recreational adventures. ",
          svgs: [
            "./pngicons/river.png",
            "./pngicons/water-jug.png",
            "./pngicons/water-tank.png",
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
          title: "COMMUTING & LODGING SPRAY",
          description:
            "Have peace of mind on the road by eliminating germs, and odor as strong as smoke. Use in any room or vehicle to reach every crack and crevice.   ",
          modalText:
            "Create a hospital-clean environment and relax knowing our solutions are eco-friendly, hypoallergenic, and fragrance-free. Countermeasures against viruses remain time-consuming even in today's era of modern medical science and technology. Prevent contagious viruses, and always maintain a resort-quality standard for clean space and sanitized air. Use when going on vacation, visiting friends, and family, staying in a hotel, on the subway, airplanes, trains, buses, fleets, rentals, or taxis. ",
          svgs: [
            "./pngicons/hotel.png",
            "./pngicons/tent.png",
            "./pngicons/limousine.png",
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
            "There isn’t a resort, gym, or club that hasn’t had issues with odor, bacteria, fungi, or other conta-gious microorganisms on floors or equipment.",
          modalText:
            "Ensure a sanitized cooking and food-prep environment for all food-contact surfaces like metal, wood, enamel, stone, plastic, stainless steel, cast iron, food packages, Tupperware, and containers. Use the same simple EPA approved solution before, during, and after food preparation. Prevent spoilage and rotting on raw fruits and vegetables. Thawing, transporting, storing, and rinsing raw meat and fish. Soak eggs without disrupting the membrane to keep them fresh much longer than conventionally washed eggs.             ",
          svgs: [
            "./pngicons/locker.png",
            "./pngicons/sauna.png",
            "./pngicons/mat.png",
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
          title: "CAMPING, HUNTING & SCENT ELIMINATOR",
          description:
            "Prevent cross-contamination, foodborne bacteria, parasites, viruses, toxins, blood and bio-matter on raw food, kitchenware, and food contact surfaces.",
          modalText:
            "Ensure a sanitized cooking and food-prep environment for all food-contact surfaces like metal, wood, enamel, stone, plastic, stainless steel, cast iron, food packages, Tupperware, and containers. Use the same simple EPA approved solution before, during, and after food preparation. Prevent spoilage and rotting on raw fruits and vegetables. Thawing, transporting, storing, and rinsing raw meat and fish. Soak eggs without disrupting the membrane to keep them fresh much longer than conventionally washed eggs.             ",
          svgs: [
            "./pngicons/knives.png",
            "./pngicons/hose.png",
            "./pngicons/kitchenware.png",
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
            "Treat water systems to kill and prevent contamina-tion, bacteria, algae, biofilm, or mold in recreational and other vehicles to preserve your water. ",
          modalText:
            "Used as a shock treatment to control sludge, slime, biofilms, or bacterial and fungal growth in freshwater holding tanks, gray water tanks, transfer lines, or water irrigation systems, This service is recommended twice per year. Maintain concentrated levels in the system for 12 hours followed by a thorough rinse. Use continuously at lower concentrations to ensure clean water year-round. For use in any plastic water storage tank. RVs, planes, ships, boats, or water vessels. Use with plastic, rubber, stainless steel, or glass.            ",
          svgs: [
            "./pngicons/boat.png",
            "./pngicons/airplane.png",
            "./pngicons/toilet.png",
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
          title: "Body Sanitizer and Deodorant  ",
          description:
            "Use on skin, scalp, underarms, or feet with no harmful residue left behind. Repel insects and sterilize bites leaving skin soft and fragrance-free",
          modalText:
            "Many things can cause a bad odor when traveling. Lack of access to toiletries like body wipes, and deodorant, dehydration, sweat, drinking too much coffee, alcohol, or even skipping meals. Being surrounded by germ factories of sick people in high-traffic areas is stressful. Give yourself the freedom in life you deserve without giving pause. Use in place of, or with repellents, dry-shampoos; to deodorize and disinfect shoes, and sanitize other skin regions.  ",
          svgs: [
            "./pngicons/massage.png",
            "./official/spray-bottle.svg",
            "https://cleansolutions.tech/wp-content/uploads/2022/09/flea.png",
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
            "Germs can keep us from everyday tasks. Apply our solutions to nearly any surface to kill germs or spray into the air to eliminate odor or allergens. ",
          modalText:
            "Cleaner air can directly translate to happier and more productive people.  Use our military-strength, hospital-grade disinfectant for deep cleaning or routine surface decontamination. It can be used in nearly every industry whether commercial, retail, medical, first-responders. lab, or office setting. Our solutions are effective and diverse on surfaces in bathrooms, dumpsters, counters, showers, toilets, animal kennels, for HVAC, and on fabrics like carpeting and furniture that can hold mold, environmental pollutants, allergens, bacteria odor.",
          svgs: [
            "./pngicons/toys.png",
            "./pngicons/workplace.png",
            "./pngicons/church.png",
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
            "Expect longer shelf and fridge life for raw foods by eliminating microorganisms. Be GMP compliant. One of the industry's most effective disinfectants.            ",
          modalText:
            "Use in grocery stores, restaurants, processing, manufacturing, or storage facilities. FDA & EPA cleared for use as an antimicrobial treatment on food-contact surfaces, metal, wood, enamel, stone, plastic, stainless steel, cast iron, and food packaging. Use before, during, and after food production. For processing, thawing, transporting, storing, and rinsing produce or raw meat, like; beef, poultry, pork, crustaceans, and fish. Soak eggs without disrupting the membrane to keep fresh much longer than conventionally washed eggs. Used as a soak for produce, as a surface sanitizer to rinse soil and debris. In addition, it is recognized by the U.S. FDA as a food additive & preservative.",
          svgs: [
            "./pngicons/eggs.png",
            "./pngicons/seeds.png",
            "./pngicons/meat.png",
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
            "Use in bottling facilities as a sterilant and sanitizer. Appliances, bottles, cans, plastic containers, glassware, water systems, freezers, tanks, lines, recirculating equipment, hydro coolers, pasteurizers, bottling, or canning systems. Disinfect industrial process water, wastewater, and rinse water. For deactivation of parasites e.g. Legionella, and other pathogens. Use on a variety of other industrial or commercial beverage surfaces without the need for rinsing. Eliminate odors with lower corrosivity on equipment and less environmental impact than conventional alternatives.             ",
          svgs: [
            "./pngicons/jar.png",
            "./pngicons/boxes.png",
            "./pngicons/delivery-truck.png",
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
            "Accidents involving blood or biohazards present major safety hazards. Improper blood cleanup or forensic waste can lead to serious consequences including disease outbreaks or cross-contamination. Our products do not produce carcinogenic, or chlorinated byproducts like chlorine bleach or HTH and are less caustic, less corrosive, and gentler than bleach or other antiseptics. ",
          svgs: [
            "./pngicons/biohazard.png",
            "./pngicons/vomit.png",
            "./pngicons/test-tube.png",
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
            "Indoor pollution is blown around through air ducts, filters, furnaces, and ventilation providing a breeding environment for pollutants and allergens",
          modalText:
            "  For use in buildings or vehicle air circulation systems. Use to control environmental toxins, contamination, virus outbreak response, insect or pest outbreak, and establishing clean air following construction. Control mites, bedbugs, ticks, fleas, cockroaches, and their eggs. Include air handling systems, penetrate through HEPA filters, navigate turns and bends of the ductwork, and stop microorganism growth. Excellent compatibility with HEPA components constructed of aluminum or stainless steel.",
          svgs: [
            "./pngicons/boat.png",
            "./pngicons/airplane.png",
            "./pngicons/furnace.png",
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
          title: "WATER SYSTEMS, BASINS & STORAGE ",
          description:
            "ClO2 is a powerful oxidizing agent used in various industries, including food service, healthcare, and many other industrial production making.            ",
          modalText:
            "      It is a gas that can be dissolved in water to form a liquid, which makes it an economical and smart choice for professional sanitation needs. Use in tanks, ponds, decorative non-potable displays, and once-through water systems. If the tank system is cleaned frequently, then consider the level of contamination low to moderate. Continuously apply at lower concentrations to control microbial growth, and odor-causing bacteria in the water, and on water contact surfaces controlling pathogens independent of pH fluctuations.",
          svgs: [
            "./pngicons/basin.png",
            "./pngicons/storage-tank.png",
            // "./pngicons/pond.png",
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
            "We are dedicated to improving health and commercial productivity. Disinfect where plants and animals are farmed for a higher quality",
          modalText:
            "Disinfect and rinse debris or pesticides on equipment for farming before, during, and after harvest. Use on pots, trays, incubators, loading docs, tractor trailers, shelves, racks, drop down hoses, cutting tools, indoor growing rooms, waste bins, and greenhouse environments. Kill 99.99% of all germs. No organism tested has proven to be resilient. Sanitize livestock enclosures, beds, stalls, kennels, cages, coops, hatcheries, and zoos, as well as breeding and grooming grounds.             ",
          svgs: [
            "./pngicons/water-tank.png",
            "./pngicons/plants.png",
            "./pngicons/shovels.png",

            // "./pngicons/tractor.png",
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
            "Skip the harsh chemicals. Decontaminate microbial growth, and maintain freshness in potable water and storage systems for pets and livestock.             ",
          modalText:
            "         Integrate current professional practices to remove slime, prevent diseases, and slow the reemergence of algae, or spores in flowing or stagnant water. Protect chickens, pigs, goats, horses, and other livestock from bacteria, microorganisms, and parasites like Giardia, Legionella, and Cryptosporidium in drinking water. Many people say it even enhances the flavor. Use our bulk, eco-friendly, and economically cost-effective solutions to disinfect water.",
          svgs: [
            "./pngicons/water.png",
            "./pngicons/pets.png",
            "./pngicons/livestock.png",
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
          title: "FUMIGANT, INSECTICIDE & PESTICIDE  ",
          description:
            "Eliminate conditions where pests, insects, or diseases breed or grow. Destroy mold, allergens, larva, eggs, pollutants and bacteria-causing odor.",
          modalText:
            "Improve air quality and use our hypoallergenic sanitizer in air circulation systems. Penetrate through HEPA filters, navigate turns and bends of ductwork, and stop microorganism growth. Spray with the system intake fan running to use in hard-to-reach places and maintain the systems. For pest management, fumigate insects, mites, ticks, and fleas. Apply in air or on carpets in plant, or animal environments.",
          svgs: [
            "./pngicons/eggs.png",
            "./pngicons/caterpillar.png",
            "./pngicons/pest.png",
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
            "./pngicons/eggs.png",
            "./pngicons/meat.png",
            "./pngicons/vegetable.png",
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
            "./pngicons/greenhouse.png",
            "./pngicons/plants.png",
            "./pngicons/seeds.png",
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
export const dash = atom({
  key: "dash",
  default: [],
  // effects_UNSTABLE: [persistAtom],
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
    /**@ts-ignore */
    set(allQuestionsAtom, newValue);
  },
});
