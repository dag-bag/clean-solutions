
interface type {
    [key: string]: {
        self: {
            svgs: string[]
            discription: string,
        }
        categories: {
            [key: string]: {
                svgs: []
                discription: string,
                discription_more: string,
            }
        }
    }
}

const data: type = {
    'skin contact': {
        self: {
            discription: 'Quickly deactivate 99.99% of germs, bacteria, or fungi on hands, skin, scalp, or hair. ',
            svgs: []
        },
        categories: {
            'hand disinfactant': {
                discription: 'Deactivate germs on hands, or for use on lesions, scratches, and wound sites while protecting your cells and tissue.',
                discription_more: 'Use VeriSan for convenience, versatility, and to ensure sterility! ClO2 is a size-selective antimicrobial agent, which means it can not penetrate deeply into living tissues. No chemicals or harmful residue left behind, leaving skin feeling soft and odor-free.',
                svgs: []
            },
            'deodrant & repellent': {
                discription: 'Our solutions meet USDA, EPA, and AMA standards as a sanitizer. Kill germs, bacteria, and fungi on skin and eliminate odor at the source.',
                discription_more: 'Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Our solutions leave skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.',
                svgs: []
            },
            'hair & fur sanitizer for humans': {
                discription: 'Use ClO2 to rapidly eliminate microorganisms on hair. Spray or soak with our solution to eliminate strong odors like smoke, urine, and skunk.',
                discription_more: 'Replace artificial chemicals like dry shampoos, aerosols, and outdated, wasteful products that pollute the environment. Our solution saves water and unnecessary overwashing that dries out skin and scalps, leaving hair soft and odor-free.',
                svgs: []
            },
            'hair & fur sanitizer for animals': {
                discription: 'Use ClO2 to rapidly eliminate microorganisms on hair. Spray or soak with our solution to eliminate strong odors like smoke, urine, and skunk.',
                discription_more: 'Replace artificial chemicals like dry shampoos, aerosols, and outdated, wasteful products that pollute the environment. Our solution saves water and unnecessary overwashing that dries out skin and scalps, leaving hair soft and odor-free.',
                svgs: []
            },
            'skin infections': {
                discription: 'Bacterial, fungal, and yeast infections on skin, and scalps, like ringworm, athlete’s foot, cold sores, or candida embedded in nail beds.',
                discription_more: 'Our solution is an oxidizing agent that reacts to infection or stress that causes inflammation and pain and reduces pathogens. Studies have shown effective application for infections such as Staph, psoriasis, dry skin, dandruff, bacterial dermatitis, a variety of yeast infections, or candida yeast invading the nails and skin.',
                svgs: []
            },
            'dental & oral hygiene': {
                discription: 'Sterilize personal items like toiletries and everyday items to more important things like medical, surgical, or dental implements.',
                discription_more: 'For residential, and commercial healthcare, use as an oral rinse and throat gargle to eliminate bacteria responsible for periodontitis and gingivitis, whiten stained teeth, and improve other ailments like tooth abscess, toothache, and thrush. For a hospital-grade clean ensure complete disinfection on combs, toothbrushes, dental instruments, bottles, pacifiers, baby toys, respirators, or CPAP machines.',
                svgs: []
            },
            'laundry disinfection': {
                discription: 'Don’t mask odor bacteria-causing, mold, or mildew with chemicals and fragrances. Eliminate germs and odor right at the source on clothing, linen, or bedding.',
                discription_more: 'Gentle, fragrance-free, and hypoallergenic for all skin types including babies and animals. Skip the harsh chemicals and other poisonous non-biodegradable detergents. Our formulas are safe on dyed fabrics and sanitize laundry, linens, bedding, comforters, pillows, mattress pads, wool, rugs, and other textiles. In some of the most extreme cases used as an insect fumigant, even exterminating insects like bed bugs and achieving 100% mortality.',
                svgs: []
            },
        }
    },
    'water treatment': {
        self: {
            discription: 'Control parasites, slime, sludge, and harmful pathogens to ensure clean, safe water.',
            svgs: []
        },
        categories: {
            'drinking water': {
                discription: 'Whether in an emergency, traveling, camping, prepping or managing home water systems, our solutions are a convenient option for water disinfection.',
                discription_more: 'Use for removing slime, preventing diseases, and retarding the reemergence of algae, or spores in flowing or stagnant water. Protect water from bacteria, microorganisms, and parasites like Giardia, Legionella, and Cryptosporidium. Many people say it even enhances the flavor.',
                svgs: []
            },
            'livestocks, pets & animals': {
                discription: 'Ensure healthy animals by keeping water supplies fresh and clean. Deactivate harmful pathogens that can disrupt health and production.',
                discription_more: 'The oxidizing properties prevent the formation of algae, parasites, protozoa, or biofilm layers that can cause bacteria, slime, sludge, and odor regardless of pH changes in livestock retention basins. Use as a shock treatment and for regular maintenance.',
                svgs: []
            },
            'water retention & storage': {
                discription: 'Sanitize and deodorize water in non-potable water retention basins and other water containment devices for decontamination or preservation.',
                discription_more: 'Use in tanks, ponds, decorative non-potable displays, and once-through water systems. If the tank system is cleaned frequently, then consider the level of contamination low to moderate. Continuously apply at lower concentrations to control microbial growth, and odor-causing bacteria in the water, and on water contact surfaces controlling pathogens independent of pH fluctuations.',
                svgs: []
            },
            'recirculating & shocks': {
                discription: 'Control and suppress the growth of biofilm, algae, and microorganisms in water systems like irrigation systems, tanks, reservoirs, pipes, tubing, and transfer lines.',
                discription_more: 'Use in spas, pools, cooling towers, servers, pasteurizers, bottling or canning systems, hydro-coolers, and water networks. Contaminated systems regularly require a deep clean to kill bacteria, mold, and other pathogens. If the tank system is used heavily, notably fouled, cleaned irregularly, going into or coming out of overwintering, then consider the tank(s) level of contamination to be high before disposal. Shock your circulating and containment systems regularly for optimum performance.',
                svgs: []
            },
            'wastewater treatment': {
                discription: 'Eco-friendly alternative to removing both hydrogen sulfide and the sulfide-reducing bacteria that cause odor and corrosion in wastewater and sewage',
                discription_more: 'Residential sources include toilets, showers, laundry, dishwashing, and sinks that can contain black and gray wastewater. Examples of commercial or industrial sources are facilities like beauty salons, laundromats, taxidermy, auto shops, or furniture refinishing. Disinfect turbid waters with low maintenance. Unlike UV, ClO2 will also.ClO2 degrades to harmless salt in wastewater networks with no toxic chlorinated by- products.',
                svgs: []
            },
            'dip tools and equipment': {
                discription: 'Disinfect or pre-clean tools and equipment. Keep water tanks, machines, and appliances sanitized at all times to avoid cross-contamination.',
                discription_more: "Our solutions can be used as a dip or to soak to nearly any surface when mixed and applied properly. Disperse evenly and completely throughout a space, removing any sort of pungent odor from spills or waste. Let's not forget that this substance has been used for 100 years in wastewater without generating any type of resistance.",
                svgs: []
            },
        }
    },
    'home and garden': {
        self: {
            discription: 'All-in-one sanitizer, disinfectant, and deodorizer for humans, pets, plants, and food.',
            svgs: []
        },
        categories: {
            'food surfaces and packages': {
                discription: 'Use in the kitchen while cleaning and preparing foods, in dining areas before and after eating, and on surfaces where food is stored or refrigerated.',
                discription_more: 'The National Organic Standards Board Program lists chlorine dioxide as an approved substance on organic foods, surfaces, and packaged goods. Use our multipurpose solution to eliminate odors and disinfect contaminated food-contact surfaces, metal, wood, enamel, stone, plastic, stainless steel, cast iron, and food packages, like Tupperware or store-bought containers.',
                svgs: []
            },
            'gloceries and perishable foods': {
                discription: 'Expect longer shelf or fridge life by eliminating fungi, viruses, and bacteria on raw foods, fruits, vegetables, eggs, red meat, poultry, and more.',
                discription_more: 'EPA approves use for pre and post-harvest, in-production, before, during, and after food preparation. Also for thawing, transporting, storing, and rinsing raw meat, like; beef, poultry, pork, crustaceans, and fish. Soak eggs without disrupting the membrane to keep them fresh much longer than conventionally washed eggs. Prevent spoilage and rotting on goods and commodities.',
                svgs: []
            },
            'hard surfaces and appliances': {
                discription: 'Our eco-friendly solutions make it easy to sanitize, deodorize and disinfect every inch of your home. Use when soaking, spraying, wiping, or mopping. ',
                discription_more: 'Quickly sanitize everyday items like electronics, light switches, mirrors, mail, or packages. Use weekly for cleaning furniture or deep-cleaning and deodorizing in the bathroom, litter boxes, and hard-to-reach areas. Use our solutions on floors, walls, sealed and finished woods, concrete, stone, brick, linoleum, vinyl, plastics, showers, toilets, sinks, drains, counters, silicone, tile, handles, doors, trash cans, equipment, tools, and more.',
                svgs: []
            },
            'soft surfaces and laundry': {
                discription: 'Don’t mask odors, mold, or mildew with harsh chemicals and fragrances. For soft, porous surfaces eliminate germs and odor right at the source.',
                discription_more: 'Use for daily surface sanitizing, deep-cleaning, for tough jobs to ensure the most thorough surface disinfection. Gentle, fragrance-free, and hypoallergenic for all skin types including babies and animals. Our formulas are safe on dyed fabrics, linens, baby clothing, toys, shoes, furniture, couches, bedding, comforters, pillows, mattress pads, curtains, rugs, luggage, backpacks, purses, wool, rugs, and other textiles. In some of the most extreme cases used as a fumigant to exterminate insects like bed bugs and achieve 99.99% mortality.',
                svgs: []
            },
            'greenhouse and garden': {
                discription: 'Stop contamination in grow rooms or the field. Infections decrease productivity and put entire crops at risk. Protect your seeds, plants, and soil.',
                discription_more: 'International Federation of Organic Agriculture Movements (IFOAM) Norms “Indicative List of Equipment Cleansers and Equipment Disinfectants,” and is effective in humid, wet, and dry environments. Spray mushroom beds, potting soil, flowers, and plant flats. Control mites, mold, and biofilm, and control and suppress bacteria and algae (pre-and post-casing.) Eliminate biofilm from non-potable water, irrigation systems holding tanks, mixing tanks, and containment vessels, including heating and cooling systems.',
                svgs: []
            },
            'fog rooms and carpenting': {
                discription: 'Improve air quality in your home. Disinfect and deodorize every inch of your house. Use on mold, dust, allergens, and pollutants in the air or carpeting. ',
                discription_more: 'The EPA has found that indoor air is around five times more polluted than outside air, with some buildings having as much as 100 times more pollution. Disinfect rooms and carpets in animal facilities and houses to control odors, bacteria, fungi, contamination, and biomatter like, pet dander, vomit, urine, and feces. Our solutions are made in the USA, fragrance-free and hypoallergenic. Sanitize turf used in residential landscaping, for dog patches, decorative strips, or fields.',
                svgs: []
            }

        }
    },
    'travel and recreation': {
        self: {
            discription: 'A compact solution for traveling, camping, auto, RV, bus, aircraft, and marine decontamination.',
            svgs: []
        },
        categories: {
            'portable water preparation': {
                discription: 'Keep yourself and your friends prepared for every expedition. Go further, go harder, stay longer, and hopefully avoid unnecessary emergencies.',
                discription_more: 'Take our compact and lightweight solutions anywhere with a lack of fresh, clean drinking water. Kill microorganisms in water and on surfaces used for water storage to make drinking water safe from bacteria and parasites like Giardia, Legionella, and Cryptosporidium in flowing or stagnant water, such as streams, rivers, and stored water jugs. Take camping, backpacking, hiking, mountaineering, climbing, rafting, fishing, picnics, and on other recreational adventures.',
                svgs: []
            },
            'commuting and lodging spray': {
                discription: 'Have peace of mind on the road by eliminating germs, and odor as strong as smoke. For use in any room or vehicle to reach every crack and crevice.',
                discription_more: "Create a hospital-clean environment and relax knowing our solutions are eco-friendly, hypoallergenic, and fragrance-free. Countermeasures against viruses remain time-consuming even in today's era of modern medical science and technology.Prevent contagious viruses, and always maintain a resort- quality standard for clean space and sanitized air. Use when going on vacation, visiting friends, and family, staying in a hotel, on the subway, airplanes, trains, buses, fleets, rentals, or taxis.",
                svgs: []
            },
            'gyms spas clubs & locker rooms': {
                discription: 'There isn’t a resort, gym, or club that hasn’t had issues with odor, bacteria, fungi, or other contagious microorganisms on floors or equipment.',
                discription_more: "Protect yourself from harmful pathogens spread through workout facilities, arenas, turf, fairways,  spas, locker rooms, showers, and saunas. Kill germs associated with public health concerns including ringworm, Athlete's Foot, fungi, mold, yeast, and algae. While microorganisms do not typically pose a serious health threat, they can be dangerous for those with compromised immune systems. ",
                svgs: []
            },
            'boat, aircraft & rv water storage': {
                discription: 'Treat water systems to kill and prevent contamination, bacteria, algae, biofilm, or mold in recreational and other vehicles to preserve your water.',
                discription_more: 'Used as a shock treatment to control sludge, slime, biofilms, or bacterial and fungal growth in freshwater holding tanks, gray water tanks, transfer lines, or water irrigation systems, This service is recommended twice per year. Maintain concentrated levels in the system for 12 hours followed by a thorough rinse. Use continuously at lower concentrations to ensure clean water year-round. For use in any plastic water storage tank. RVs, planes, ships, boats, or water vessels. Use plastic, rubber, stainless steel, or glass.',
                svgs: []
            },
            'body sanitizer & deodrant': {
                discription: 'Use on skin, scalp, underarms, or feet with no harmful residue left behind. Repel insects and sterilize bites leaving skin soft and fragrance-free. ',
                discription_more: 'Many things can cause a bad odor when traveling. Lack of access to toiletries like body wipes, and deodorant, dehydration, sweat, drinking too much coffee, alcohol, or even skipping meals. Being surrounded by germ factories of sick people in high-traffic areas is stressful. Give yourself the freedom in life you deserve without giving pause. Use in place of, or with repellents, dry-shampoos; to deodorize and disinfect shoes, and sanitize other skin regions.',
                svgs: []
            },
            'camping hunting & scent eleminator': {
                discription: 'Prevent cross-contamination, foodborne bacteria, parasites, viruses, toxins, blood, and bio-matter on raw food, kitchenware, and food contact surfaces.',
                discription_more: 'Ensure a sanitized cooking and food-prep environment for all food-contact surfaces like metal, wood, enamel, stone, plastic, stainless steel, cast iron, food packages, Tupperware, and containers. Use the same simple EPA-approved solution before, during, and after food preparation. Prevent spoilage and rotting of raw fruits and vegetables. Thawing, transporting, storing, and rinsing raw meat and fish. Soak eggs without disrupting the membrane to keep them fresh much longer than conventionally washed eggs.',
                svgs: []
            }

        }
    },
    'professional establishments': {
        self: {
            discription: 'From factories to pharmacies, businesses to bus lines, reach every crack and crevice.',
            svgs: []
        },
        categories: {
            'office and institution': {
                discription: 'Germs can keep us from everyday tasks. Apply our solutions to nearly any surface to kill germs or spray into the air to eliminate odor or allergens. ',
                discription_more: "Cleaner air can directly translate to happier and more productive people. Use our military- strength, hospital- grade disinfectant for deep cleaning or routine surface decontamination.It can be used in nearly every industry whether commercial, retail, medical, or first responders.lab, or office setting.Our solutions are effective and diverse on surfaces in bathrooms, dumpsters, counters, showers, toilets, animal kennels, for HVAC, and on fabrics like carpeting and furniture that can hold mold, environmental pollutants, allergens, bacteria, and odor.",
                svgs: []
            },
            'food establishments': {
                discription: "Expect longer shelf and fridge life for raw foods by eliminating microorganisms. Be GMP compliant. One of the industry's most effective disinfectants",
                discription_more: "Use in grocery stores, restaurants, processing, manufacturing, or storage facilities. FDA & EPA cleared for use as an antimicrobial treatment on food-contact surfaces, metal, wood, enamel, stone, plastic, stainless steel, cast iron, and food packaging. Use before, during, and after food production. For processing, thawing, transporting, storing, and rinsing produce or raw meat, like; beef, poultry, pork, crustaceans, and fish. Soak eggs without disrupting the membrane to keep them fresh much longer than conventionally washed eggs. Used as a soak for produce, and as a surface sanitizer to rinse soil and debris. In addition, it is recognized by the U.S. FDA as a food additive & preservative.",
                svgs: []
            },
            'bottling equipment and facilities': {
                discription: 'USDA cleared for disinfecting and deodorizing food contact surfaces and equipment in food handling facilities leaving no harmful residue behind.',
                discription_more: 'Use in bottling facilities as a sterilizer and sanitizer. Appliances, bottles, cans, plastic containers, glassware, water systems, freezers, tanks, lines, recirculating equipment, hydro coolers, pasteurizers, bottling, or canning systems. Disinfect industrial process water, wastewater, and rinse water. For deactivation of parasites e.g. Legionella, and otherpathogens. Use on a variety of other industrial or commercial beverage surfaces without the need for rinsing. Eliminate odors with lower corrosivity on equipment and less environmental impact than conventional alternatives. ',
                svgs: []
            },
            'bio-trauma remedation': {
                discription: 'For exposure to chemicals, viruses, sewage, biohazards, or other hazardous materials. Use for trauma cleanup involving blood, or other biohazards.',
                discription_more: 'Accidents involving blood or biohazards present major safety hazards. Improper blood cleanup or forensic waste can lead to serious consequences including disease outbreaks or cross-contamination. Our products do not produce carcinogenic, or chlorinated byproducts like chlorine bleach or HTH and are less caustic, less corrosive, and gentler than bleach or other antiseptics. ',
                svgs: []
            },
            'HVAC, fogging and transportation': {
                discription: 'Indoor pollution is blown around through air ducts, filters, furnaces, and ventilation providing a breeding environment for pollutants and allergens.',
                discription_more: 'For use in buildings or vehicle air circulation systems. Use to control environmental toxins, contamination, virus outbreak response, insect or pest outbreak, and establishing clean air following construction. Control mites, bedbugs, ticks, fleas, cockroaches, and their eggs. Include air handling systems, penetrate through HEPA filters, navigate turns and bends of the ductwork, and stop microorganism growth. Excellent compatibility with HEPA components constructed of aluminum or stainless steel.',
                svgs: []
            },
            'water systems, basins and storage': {
                discription: 'ClO2 is a powerful oxidizing agent used in various industries, including food service, healthcare, and other industrial production facilities.',
                discription_more: 'It is a gas that can be dissolved in water to form a liquid, which makes it an economical and smart choice for professional sanitation needs. Use in tanks, ponds, decorative non-potable displays, and once-through water systems. If the tank system is cleaned frequently, then consider the level of contamination low to moderate. Continuously apply at lower concentrations to control microbial growth, and odor-causing bacteria in the water, and on water contact surfaces controlling pathogens independent of pH fluctuations.',
                svgs: []
            }

        },

    },
    'farm and ranch': {
        self: {
            discription: 'Use one eco-friendly sanitizer for vegetation, animals, raw foods, tools, and more.',
            svgs: []
        },
        categories: {
            'horticulture and agriculture tools': {
                discription: 'We are dedicated to improving health and commercial productivity. Disinfect where plants and animals are farmed for a higher quality commodity.',
                discription_more: 'Disinfect and rinse debris or insecticides on equipment for farming before, during, and after harvest. Use on pots, trays, incubators, loading docs, tractor trailers, shelves, racks, drop down hoses, cutting tools, indoor growing rooms, waste bins, and greenhouse environments. Kill 99.99% of all germs. No organism tested has proven to be resilient. Sanitize livestock enclosures, beds, stalls, kennels, cages, coops, hatcheries, and zoos, as well as breeding and grooming grounds. ',
                svgs: []
            },
            'portable water for animals': {
                discription: 'Skip the harsh chemicals. Decontaminate microbial growth, and maintain freshness in potable water and storage systems for pets and livestock. ',
                discription_more: 'Integrate current professional practices to remove slime, prevent diseases, and slow the reemergence of algae, or spores in flowing or stagnant water. Protect chickens, pigs, goats, horses, and other livestock from bacteria, microorganisms, and parasites like Giardia, Legionella, and Cryptosporidium in drinking water. Many people say it even enhances the flavor. Use our bulk, eco-friendly, and economically cost-effective solutions to disinfect water.',
                svgs: []
            },
            'fugiment and insecticide': {
                discription: 'Eliminate conditions where pests, insects, or diseases breed or grow. Destroy mold, allergens, larva, eggs, pollutants and bacteria-causing odor.',
                discription_more: 'Improve air quality and use our hypoallergenic sanitizer in air circulation systems. Penetrate through HEPA filters, navigate turns and bends of ductwork, and stop microorganism growth. Spray with the system intake fan running to use in hard-to-reach places and maintain the systems. For management, fumigate insects, mites, ticks, and fleas. Apply in air or on carpets in plant, or animal environments.',
                svgs: []
            },
            'raw produce, egg and meat': {
                discription: 'Enhance shelf or fridge life of agricultural commodities. Sanitize produce, eggs, poultry, seafood, and meat. Reduce contamination, rot, or spoilage.',
                discription_more: 'Use during production, processing and packing in water systems to remove field heat, rinse soil and debris, and provide initial surface sanitization. Freshly harvested produce can be sprayed or passed through a network that floats goods into a water bath before being sent to a packing shed, stored before sale, or consumed. Use EPA approved disinfectant, and antimicrobial for water and ice to thaw, transport, and store raw meat such as beef, poultry, crustaceans, fish, and other seafood. ',
                svgs: []
            },
            'green house and garden': {
                discription: 'Stop contamination in grow rooms or the field. Infections decrease productivity and put entire crops at risk. Protect your seeds, plants, and soil. ',
                discription_more: 'International Federation of Organic Agriculture Movements (IFOAM) Norms “Indicative List of Equipment Cleansers and Equipment Disinfectants,” and is effective in humid, wet, and dry environments. Spray mushroom beds, potting soil, flower, and plant flats, Control mites, mold, and biofilm, and control and suppress bacteria and algae (pre-and post-casing.)Eliminate biofilm from non-potable water, irrigation systems holding tanks, mixing tanks, and containment vessels, including heating and cooling systems. ',
                svgs: []
            },
            'livestock sanitizer and deodorizer': {
                discription: 'Disinfect hair, skin, and fur leaving animals feeling soft and odor-free. Inactivate viruses, and kill, or repel ticks, fleas, mice, and insects.',
                discription_more: 'The powerful sanitizing properties make it an ideal solution for a wide range of animal health-related applications, like wounds, scratches, hot spots, hoof abscesses, and hoof cankers. It is also useful for treating skin infections; psoriasis and dandruff, a variety of otitis externa, yeast infections, and bacterial dermatitis. Disinfection of animal stalls or other restricted areas on farms can fundamentally solve heavy stink and pesky fly infestations.',
                svgs: []
            }

        },

    },

}

export const subCategories: any = {
    'skin contact': [
        'skin infections',
        'hand disinfactant',
        'deodrant & repellent',
        'dental & oral hygiene',
        'laundry disinfection',
        'hair & fur sanitizer for humans',
        'hair & fur sanitizer for animals'
    ],
    'water treatment': [
        'drinking water',
        'livestocks, pets & animals',
        'water retention & storage',
        'recirculating & shocks',
        'wastewater treatment',
        'dip tools and equipment'
    ],
    'home and garden': [
        'hard surfaces and appliances',
        'greenhouse and garden',
        'gloceries and perishable foods',
        'food surfaces and packages',
        'soft surfaces and laundry',
        'fog rooms and carpenting'
    ],
    'travel and recreation': [
        'portable water preparation',
        'commuting and lodging spray',
        'gyms spas clubs & locker rooms',
        'boat, aircraft & rv water storage',
        'body sanitizer & deodrant',
        'camping hunting & scent eleminator'
    ],
    'farm and ranch': [
        'raw produce, egg and meat',
        'horticulture and agriculture tools',
        'fugiment and insecticide',
        'green house and garden',
        'portable water for animals',
        'livestock sanitizer and deodorizer',
    ],
    'professional establishments': [
        'food establishments',
        'office and institution',
        'bottling equipment and facilities',
        'water systems, basins and storage',
        'HVAC, fogging and transportation',
        'bio-trauma remedation'
    ],
}

export default data
