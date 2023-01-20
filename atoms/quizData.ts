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
  type: "input" | "select" | "options" | "mix";
  r: string;
  ml: number;
  f?: number;
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
              ml: 0,
              r: r[0],
              options: ["A) Short", "B) Medium", "C) Long", "D) Extra long"],
            },
            {
              question: " How many animals do you have?",
              type: "input",
              value: 0,
              ml: 0,
              r: r[0],
            },
            // {
            //   question: "would you use sanitizer as a spray or soak?",
            //   type: "options",
            //   value: 0,
            //   ml: 0,
            //   r: r[0],
            //   options: ["Soak", "Spray"],
            // },
            {
              question: "How many gallons do they typically require to wash? ",
              type: "input",
              value: 0,
              ml: 0,
              r: r[0],
            },
            {
              question: "How long would you like a hair sanitizing supply?",
              type: "select",
              value: 0,
              options: monthOptions,
              ml: 0,
              r: r[0],
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
              ml: 0,
              r: r[0],
            },
            {
              question:
                "How long would you like to have a disinfection supply?",
              type: "select",
              value: 0,
              options: monthOptions,
              ml: 0,
              r: r[0],
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
              ml: 0,
              r: r[0],
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
              ml: 0,
              r: r[0],
            },
            {
              question:
                "How long would you like to have a sanitizer for dental & oral care?",
              value: [],
              type: "select",
              options: monthOptions,
              ml: 0,
              r: r[0],
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
              ml: 0,
              r: r[0],
            },
          ],
        },
      ],
    },
    {
      slug: "water-treatment",
      data: [
        {
          title: "DRINKING WATER",
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
                "How many gallons of drinking water do you want to have disinfected on an average day?",
              type: "input",
              value: "",
              ml: 0,
              r: r[1],
            },
            {
              question:
                "How many times a month do you want to be prepared with safe drinking water?",
              value: "",
              type: "input",
              ml: 0,
              r: r[1],
              max: 30,
              min: 1,
            },
            {
              question:
                "How long would you like to have a drinking water supply?                ",
              value: "",
              type: "select",
              options: monthOptions,
              ml: 0,
              r: r[1],
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
                "How much water do all of your pets and animals consume weekly?",
              value: "",
              ml: 0,
              r: r[1],
              type: "input",
            },
            {
              question:
                "How long would you like to have an animal drinking water supply ?",
              value: "",
              type: "select",
              options: monthOptions,
              ml: 0,
              r: r[1],
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
              type: "mix",
              options: [
                "1) Ponds, Reservoirs, & Retention Basins",

                "2) Once-through Water Cooling Systems ",

                "3) Aircraft, RV, Boat Tanks & Lines ",

                "4) Other Non-Potable Water Storage",
              ],
              ml: 0,
              r: r[1],
            },
            {
              question:
                "How many times per month do you want to sanitize water containment?",
              value: "",
              type: "input",
              ml: 0,
              r: r[1],
            },
            {
              question:
                "How long would you like a water storage sanitizer supply to last?",
              value: "",
              type: "select",
              options: monthOptions,
              ml: 0,
              r: r[1],
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
              question: "How many gallons are in each water system?",
              value: "",
              ml: 0,
              r: r[1],
              type: "mix",
              options: [
                "1) Pools, Hot tubs, & Spas  ",

                "2) Canning Retort & Pasteurizer Cooling Water ",

                "3) Electronic Cooling Towers ",

                "4) Stainless Steel Transfer Lines, & Hydrocoolers ",

                "5) Other Recirculating Water Systems ",
              ],
            },
            {
              question:
                "How many times per month do you sanitize water systems?",
              value: "",
              ml: 0,
              r: r[1],
              type: "input",
              max: 5,
            },
            {
              question:
                "How long would you like a recirculating water system disinfectant  supply?",
              value: "",
              ml: 0,
              r: r[1],
              type: "select",
              options: monthOptions,
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
              ml: 0,
              r: r[1],
            },
            {
              question:
                "How long would you like a recirculating water system disinfectant  supply?",
              type: "select",
              value: "",
              options: monthOptions,
              ml: 0,
              r: r[1],
            },
            {
              question: "How much water can each system hold?",
              max: 3,
              type: "input",
              value: "",
              ml: 0,
              r: r[1],
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
              ml: 0,
              r: r[1],
            },
            {
              question:
                "How many times per week do you sanitize tools equipment?",
              value: "",
              type: "input",
              f: 4.4,
              ml: 0,
              r: r[1],
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
              ml: 0,
              r: r[2],
              type: "input",
            },
            {
              question: "How often do you sanitize each type of food?",
              value: "",
              ml: 0,
              r: r[2],
              type: "select",
              options: [
                "A) Daily",
                "B) Twice a week",
                "C) Once a week",
                "D) Every other week",
                "E) Once a month ",
              ],
            },
            {
              question:
                "How long would you like a raw agricultural commodities sanitizer supply?",
              value: "",
              ml: 0,
              r: r[2],
              type: "select",
              options: monthOptions,
            },
          ],
        },
        {
          title: "FOOD SURFACES & PACKAGES",
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
              question: "1) Select food-contact surfaces to sanitize",
              value: "",
              ml: 0,
              r: r[2],
              type: "options",
              options: [
                "A) Counters",
                "B) Tables ",
                "C) Cabinets",
                "D) Refrigerators",
                "E) Stoves",
                "F) Utensils",
                "G) Glassware",
                "H) Pots & Pans",
                "I) Gloves & Hands",
                "J) Other Appliances & Surface",
              ],
            },
            {
              question:
                "2)How many items would you sanitize packages, casing, wrappers, or containers?",
              value: "",
              ml: 0,
              r: r[2],
              type: "options",
              options: [
                "A) 1 package/ week",
                "B) 5 packages/ week",
                "C) 10 packages/ week",
                "D) 20 packages/ week",
                "E) 40 packages/ week",
              ],
            },
            {
              question:
                "How many times per month do you sanitize food contact surfaces?",
              value: "",
              ml: 0,
              r: r[2],
              type: "input",
              f: 4.4,
            },
            {
              question:
                "How long would you like a sanitizer for packages or containers?",
              value: "",
              ml: 0,
              r: r[2],
              type: "select",
              f: 4.4,
              options: monthOptions,
            },
          ],
        },
        {
          title: "HARD SURFACES & APPLIANCES",
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
                "Which methods are preferred for disinfection and deodorizing at home.",
              value: "",
              ml: 0,
              r: r[2],
              type: "mix",
              options: [
                "1) Spray.What is the SQ FT of home?",
                "2) Mop.How many SQ FT in the home are hard-floors?",
                "3) Soak.How many gallons do you typically use in a week for disinfecting hard, non-food contact surfaces?",
              ],
            },
            {
              question:
                "How many times per week do you sanitize hard surfaces?",
              value: "",
              ml: 0,
              r: r[2],
              type: "input",
              f: 4.4,
            },
            {
              question:
                "How long would you like a hard surface sanitizer supply?",
              value: "",
              ml: 0,
              r: r[2],
              type: "select",
              options: monthOptions,
            },
          ],
        },
        {
          title: "SOFT SURFACE SANITIZER",
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
              question: "Choose all that apply.",
              value: "",
              ml: 0,
              r: r[2],
              type: "options",
              options: [
                "A) Subfloors",
                "B) Rugs & Carpeting",
                "C) Bed Sets ",
                "D) Animal Bedding & Kennels",
                "E) Drapes & Curtains",
                "F) Upholstered Furniture   ",
                "G) Vehicle Upholstery ",
                "H) Footwear ",
                "I) Luggage & Bags",
                "J) Toys ",
                "K) Laundry 20 Gallons each",
              ],
            },
            {
              question: "How frequently do you sanitize or wash each month?",
              value: "",
              ml: 0,
              r: r[2],
              type: "mix",
              options: [
                "A) Subfloors",
                "B) Rugs & Carpeting",
                "C) Bed Sets",
                "D) Animal Bedding",
                "E) Drapes & Curtains",
                "F) Upholstered Furnitur",
                "G) Vehicle Upholstery",
                "H) Footwear",
                "I) Luggage & Bags",
                "J) Toys",
                "K) Laundry",
              ],
            },
            {
              question: "What strength do you want to use?",
              value: "",
              ml: 0,
              r: r[2],
              type: "select",
              options: [
                "1) Light 20 ppm",
                "2)Moderate  100 ppm",
                "3) Heavy 200 ppm",
                "4) Insecticide -725 ppm ",
              ],
            },
            {
              question:
                "How long would you like a porous surface sanitizer supply?",
              value: "",
              ml: 0,
              r: r[2],
              type: "select",
              options: monthOptions,
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
                "What are you sanitizing and the maximum growing capacity?",
              value: "",
              ml: 0,
              r: r[2],
              type: "options",
              options: [
                "1) Seeds & Propagations Room",
                "2) Soil, Hydro & Aeroponic Grow Beds",
                "3) Plants & Perpetual Grow",
                "4) Mushrooms,  Substrates & Fruiting Chamber",
                "5) Trimming, Curing, Drying, & Harvest",
              ],
            },
            {
              question:
                "How many times per month do you sanitize in greenhouses?",
              value: "",
              ml: 0,
              r: r[2],
              type: "mix",
              options: [
                "1) Seeds",
                "2) Soil",
                "3) Plant",
                "4) Mushrooms ",
                "5) Work Rooms",
              ],
            },
            {
              question: "How long do you want a greenhouse sanitizer supply?",
              value: "",
              ml: 0,
              r: r[2],
              type: "select",
              options: monthOptions,
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
              ml: 0,
              r: r[2],
              type: "input",
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
                "How many gallons of drinking water do you want to have disinfected for an average day on the road?",
              value: "",
              ml: 0,
              r: r[3],
              type: "input",
            },
            {
              question:
                "How many times per month do you want to be prepared with safe drinking water?",
              value: "",
              ml: 0,
              r: r[3],
              type: "input",
            },
            {
              question:
                "How long would you like to have a potable drinking water supply?",
              value: "",
              ml: 0,
              r: r[3],
              type: "options",
              options: monthOptions,
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
              question: "Select all that apply",
              value: "",
              ml: 0,
              r: r[3],
              type: "options",
              options: [
                "1) Hotel",
                "2) Hostel",
                "3) Camping",
                "4) AirbNb",
                "5) Rental Property",
                "6) Transportation",
              ],
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
                "Pick methods for preferred disinfection and deodorizing.",
              value: "",
              ml: 0,
              r: r[3],
              type: "mix",
              options: [
                "1) Spray. How many SQ FT is the building or room?",
                "2) Mop. How many SQ FT are hard-floors? ",
                "3) Soak.",
              ],
            },
            {
              question:
                "How many times per month do you sanitize hard surfaces?",
              value: "",
              ml: 0,
              r: r[3],
              type: "input",
            },
            {
              question:
                "How long would you like a hard surface sanitizer supply?",
              value: "",
              ml: 0,
              r: r[3],
              type: "select",
              options: monthOptions,
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
              question: "Select all the foods you eat and preferred met",
              value: "",
              ml: 0,
              r: r[3],
              type: "options",
              options: [
                "1) Produce, Fruits, Vegetable  ",
                "2) Eggshells",
                "3) Raw meat, poultry, seafood",
                "4) Surfaces",
              ],
            },
            {
              question: "How often do you sanitize each type of food? ",
              value: "",
              ml: 0,
              r: r[3],
              type: "options",
              options: [
                "A) Daily",
                "B) Twice a week",
                "C) Once a week",
                "D) Every other week",
                "E) Once a month ",
              ],
            },
            {
              question: "How often do you sanitize each type of food? ",
              value: "",
              ml: 0,
              r: r[3],
              type: "select",
              options: monthOptions,
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
              question: "How many gallons are within the storage system?",
              value: "",
              ml: 0,
              r: r[3],
              type: "mix",
              options: [
                "1) Potable Water",
                "2) Waste Water",
                "3) Non-Potable Tanks & Lines ",
              ],
            },
            {
              question:
                "How many times per month do you want to sanitize water containment? If unknown, then 2/mo is recommended. ",
              value: "",
              ml: 0,
              r: r[3],
              type: "select",
              options: ["1", "2", "3"],
            },
            {
              question: "How long would you like to keep this supply?",
              value: "",
              ml: 0,
              r: r[3],
              type: "select",
              options: monthOptions,
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
                "While on the road how many times per day do you use skin sanitizer?",
              value: "",
              ml: 0,
              r: r[3],
              f: 30,
              type: "input",
            },
            {
              question: "How many times per week do you apply deodorant?",
              value: "",
              ml: 0,
              r: r[3],
              f: 4.4,
              type: "input",
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
                "Pick methods for preferred disinfection and deodorizing.",
              value: "",
              type: "mix",
              ml: 0,
              r: r[4],
              f: 4.4,
              options: [
                "1) Spray. How many SQ FT is the building or room?",
                "2) Mop. How many SQ FT are hard-floors?",
                "4) Soak. How many gallons do you typically use in a week for disinfecting hard, non-food contact surfaces?",
              ],
            },
            {
              question:
                " How many times per month do you sanitize hard surfaces?",
              value: "",
              type: "mix",
              ml: 0,
              r: r[4],
              f: 4.4,
              options: ["1) Spray", "2) Mop", "3) Soak"],
            },
            {
              question:
                "How long would you like a hard surface sanitizer supply?",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],

              options: monthOptions,
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
                "Select which foods your establishment typically disinfect. Food Rinse, Misters, & Humidification Water ",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],

              options: [
                "1) Produce, Fruits, Vegetable  ",
                "2) Eggshells",
                "3) Raw meat, poultry, seafood",
              ],
            },
            {
              question:
                "How many times per month do you sanitize each type of food?",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],

              options: [
                "1 Daily",
                "2 Twice a week",
                "3 Once a week",
                "4 Every other week",
              ],
            },
            {
              question:
                "How long would you like a raw agricultural commodities sanitizer supply?",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],

              options: monthOptions,
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
                "How many times per month do you sanitize equipment and machinery?",
              value: "",
              type: "input",
              ml: 0,
              r: r[4],
            },
            {
              question: "What strength do you want to use?",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],
              options: ["A) Light", "B) Moderate", "C) Heavy"],
            },
            {
              question: "How long would you like to keep this supply?",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],

              options: monthOptions,
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
              question: "Select all that apply",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],
              options: [
                "1) Blood & Blood Products",
                "2) Waste, Feces, & Urine ",
                "3) Viral Infections ",
                "4) Airborne Pollutants",
                "5) Personal Protective",
              ],
            },
            {
              question:
                "How many times per month do to sanitize, disinfect, or deodorize hazardous materials? ",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],
              options: ["1)", "2)", "3)", "4)"],
            },
            {
              question: "How would you like to use?",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],
              options: ["A) Light ", "B) Moderate  ", "C) Heavy "],
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
                "How many times per month do to sanitize, disinfect, or deodorize hazardous materials? ",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],
              options: ["1)", "2)", "3)", "4)"],
            },
            {
              question: "What strength do you want to use for fogging?",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],
              options: [
                "A)Light ",
                "B)Moderate  ",
                "C) Heavy   ",
                "D) HVAC ",
                "E) Fumigate ",
              ],
            },
            {
              question: "How long would you like to keep this supply?",
              value: "",
              type: "select",
              ml: 0,
              r: r[4],
              options: monthOptions,
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
