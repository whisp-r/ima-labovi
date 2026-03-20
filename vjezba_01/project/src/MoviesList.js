//movies.filter(m => m.genre === "Horror")

//movies.filter(m => m.subgenre === "Zombie horror")

//database tables (id | title | year | genre | subgenre)

const movies = [
  {
    id: 1,
    title: "  Guardian",
    year: 2021,
    genre: "SF",
    subgenre: "Super Hero SF",
  },
  {
    id: 2,
    title: "Photon Defender",
    year: 2020,
    genre: "SF",
    subgenre: "Super Hero SF",
  },
  {
    id: 3,
    title: "Nebula Knight",
    year: 2023,
    genre: "SF",
    subgenre: "Super Hero SF",
  },

  {
    id: 4,
    title: "Crystal Planet",
    year: 2019,
    genre: "SF",
    subgenre: "Fantazy SF",
  },
  {
    id: 5,
    title: "Wizard of Orion",
    year: 2022,
    genre: "SF",
    subgenre: "Fantazy SF",
  },
  {
    id: 6,
    title: "Dragons of Vega",
    year: 2024,
    genre: "SF",
    subgenre: "Fantazy SF",
  },

  {
    id: 7,
    title: "Astro Strike",
    year: 2018,
    genre: "SF",
    subgenre: "Action SF",
  },
  {
    id: 8,
    title: "Orbital Assault",
    year: 2021,
    genre: "SF",
    subgenre: "Action SF",
  },
  {
    id: 9,
    title: "Plasma War",
    year: 2023,
    genre: "SF",
    subgenre: "Action SF",
  },

  {
    id: 10,
    title: "London Extraction",
    year: 2020,
    genre: "Action",
    subgenre: "British Action",
  },
  {
    id: 11,
    title: "Royal Strike Force",
    year: 2019,
    genre: "Action",
    subgenre: "British Action",
  },

  {
    id: 12,
    title: "Highway Fury",
    year: 2021,
    genre: "Action",
    subgenre: "Car chase Action",
  },
  {
    id: 13,
    title: "Nitro Escape",
    year: 2022,
    genre: "Action",
    subgenre: "Car chase Action",
  },
  {
    id: 14,
    title: "Midnight Pursuit",
    year: 2020,
    genre: "Action",
    subgenre: "Car chase Action",
  },

  {
    id: 15,
    title: "Cyber Assault",
    year: 2023,
    genre: "Action",
    subgenre: "SF Action",
  },
  {
    id: 16,
    title: "Mech Storm",
    year: 2022,
    genre: "Action",
    subgenre: "SF Action",
  },

  {
    id: 17,
    title: "Cartel Raid",
    year: 2018,
    genre: "Action",
    subgenre: "Crime Action",
  },
  {
    id: 18,
    title: "Underworld Chase",
    year: 2021,
    genre: "Action",
    subgenre: "Crime Action",
  },

  {
    id: 19,
    title: "Night Corridor",
    year: 2020,
    genre: "Horror",
    subgenre: "Thriller horror",
  },
  {
    id: 20,
    title: "Echoes in the Basement",
    year: 2022,
    genre: "Horror",
    subgenre: "Thriller horror",
  },

  {
    id: 21,
    title: "Dead City Rising",
    year: 2019,
    genre: "Horror",
    subgenre: "Zombie horror",
  },
  {
    id: 22,
    title: "Last Train from Infection",
    year: 2023,
    genre: "Horror",
    subgenre: "Zombie horror",
  },

  {
    id: 23,
    title: "Broken Mirror Mind",
    year: 2021,
    genre: "Horror",
    subgenre: "Psychological horror",
  },
  {
    id: 24,
    title: "Voices Behind the Wall",
    year: 2024,
    genre: "Horror",
    subgenre: "Psychological horror",
  },

  {
    id: 25,
    title: "Haunted Party",
    year: 2018,
    genre: "Horror",
    subgenre: "Comedy horror",
  },
  {
    id: 26,
    title: "Ghosts Love Pizza",
    year: 2022,
    genre: "Horror",
    subgenre: "Comedy horror",
  },

  {
    id: 27,
    title: "Love Algorithm",
    year: 2021,
    genre: "Comedy",
    subgenre: "Romantic Comedy",
  },
  {
    id: 28,
    title: "Coffee & Chaos",
    year: 2020,
    genre: "Comedy",
    subgenre: "Romantic Comedy",
  },

  {
    id: 29,
    title: "Funeral Laughs",
    year: 2019,
    genre: "Comedy",
    subgenre: "Black Comedy",
  },
  {
    id: 30,
    title: "Dark Humor Society",
    year: 2023,
    genre: "Comedy",
    subgenre: "Black Comedy",
  },

  {
    id: 31,
    title: "The Minister's Joke",
    year: 2022,
    genre: "Comedy",
    subgenre: "Satiric Comedy",
  },
  {
    id: 32,
    title: "Election Circus",
    year: 2024,
    genre: "Comedy",
    subgenre: "Satiric Comedy",
  },

  {
    id: 33,
    title: "Autumn Letters",
    year: 2018,
    genre: "Drama",
    subgenre: "Melodrama",
  },
  {
    id: 34,
    title: "Silent Promise",
    year: 2021,
    genre: "Drama",
    subgenre: "Melodrama",
  },

  {
    id: 35,
    title: "Sunday Table",
    year: 2022,
    genre: "Drama",
    subgenre: "Family Drama",
  },
  {
    id: 36,
    title: "Home Between Storms",
    year: 2020,
    genre: "Drama",
    subgenre: "Family Drama",
  },

  {
    id: 37,
    title: "MI-Shadow",
    year: 2023,
    genre: "British",
    subgenre: "Action British",
  },
  {
    id: 38,
    title: "Thames Pursuit",
    year: 2021,
    genre: "British",
    subgenre: "Action British",
  },

  {
    id: 39,
    title: "Tea Time Trouble",
    year: 2019,
    genre: "British",
    subgenre: "Cpmedy British",
  },
  {
    id: 40,
    title: "Pub Philosophy",
    year: 2022,
    genre: "British",
    subgenre: "Cpmedy British",
  },

  {
    id: 41,
    title: "Winter Without You",
    year: 2017,
    genre: "Tragedy",
    subgenre: "Familiy",
  },
  {
    id: 42,
    title: "Broken Generations",
    year: 2023,
    genre: "Tragedy",
    subgenre: "Familiy",
  },

  {
    id: 43,
    title: "Ashes of the Battalion",
    year: 2021,
    genre: "Tragedy",
    subgenre: "War Tragedy",
  },
  {
    id: 44,
    title: "Last Letter from the Front",
    year: 2020,
    genre: "Tragedy",
    subgenre: "War Tragedy",
  },

  {
    id: 45,
    title: "Fading Identity",
    year: 2022,
    genre: "Tragedy",
    subgenre: "Psychological Tragedy",
  },
  {
    id: 46,
    title: "Mindfall",
    year: 2024,
    genre: "Tragedy",
    subgenre: "Psychological Tragedy",
  },
];

export { movies };
