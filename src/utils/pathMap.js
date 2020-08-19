import { filmsURL, charactersURL, planetsURL, speciesURL, starshipsURL, vehiclesURL } from "../conts/url"


export const pathMap = {
  '/films': {
    generalUrl: filmsURL,
    detailFilds: [
      "title",
      "episode_id",
      "opening_crawl",
      "director",
      "producer",
      "release_date",
      ["characters"],
      ["planets"],
      ["starships"],
      ["vehicles"],
      ["species"],
    ],
    filter: (value) => {
      return fetch(`https://swapi.dev/api/films/?search=${value}`)
        .then(response => response.json())
    }
  },
  '/characters' : {
    generalUrl: charactersURL,
    detailFilds: [
      "name",
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "eye_color",
      "birth_year",
      "gender",
      ["homeworld"],
      ["films"],
      ['species'],
      ["starships"],
    ],
    filter: async (value) => {
      return await fetch(`https://swapi.dev/api/people/?search=${value}`)
        .then(response => response.json())
    }
  },
  '/people' : {
    generalUrl: charactersURL,
    detailFilds: [
      "name",
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "eye_color",
      "birth_year",
      "gender",
      ["homeworld"],
      ["films"],
      ['species'],
      ["starships"],
    ],
    filter: async (value) => {
      return await fetch(`https://swapi.dev/api/people/?search=${value}`)
        .then(response => response.json())
    }
  },
  '/pilots' : {
    generalUrl: charactersURL,
    detailFilds: [
      "name",
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "eye_color",
      "birth_year",
      "gender",
      ["homeworld"],
      ["films"],
      ['species'],
      ["starships"],
    ],
    filter: async (value) => {
      return await fetch(`https://swapi.dev/api/people/?search=${value}`)
        .then(response => response.json())
    }
  },
  '/residents' : {
    generalUrl: charactersURL,
    detailFilds: [
      "name",
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "eye_color",
      "birth_year",
      "gender",
      ["homeworld"],
      ["films"],
      ['species'],
      ["starships"],
    ],
    filter: async (value) => {
      return await fetch(`https://swapi.dev/api/people/?search=${value}`)
        .then(response => response.json())
    }
  },
  '/planets': {
    generalUrl: planetsURL,
    detailFilds: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population",
      ["residents"],
      ["films"],
    ],
    filter: async (value) => {
      return await fetch(`https://swapi.dev/api/planets/?search=${value}`)
        .then(response => response.json())
    }
  },
  '/homeworld': {
    generalUrl: planetsURL,
    detailFilds: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population",
      ["residents"],
      ["films"],
    ],
    filter: async (value) => {
      return await fetch(`https://swapi.dev/api/planets/?search=${value}`)
        .then(response => response.json())
    }
  },
  '/species': {
    generalUrl: speciesURL,
    detailFilds: [
      "name",
      "classification",
      "designation",
      "average_height",
      "skin_colors",
      "hair_colors",
      "eye_colors",
      "average_lifespan",
      ["homeworld"],
      "language",
      ["people"],
      ["films"],
    ],
    filter: async (value) => {
      return await fetch(`https://swapi.dev/api/species/?search=${value}`)
        .then(response => response.json())
    }
  },
  '/starships': {
    generalUrl: starshipsURL,
    detailFilds: [
      "name",
      "model",
      "manufacturer",
      "cost_in_credits",
      "length",
      "max_atmosphering_speed",
      "crew",
      "passengers",
      "cargo_capacity",
      "consumables",
      "hyperdrive_rating",
      "MGLT",
      "starship_class",
      ["pilots"],
      ["films"],
    ],
    filter: async (value) => {
      return await fetch(`https://swapi.dev/api/starships/?search=${value}`)
        .then(response => response.json())
    }
  },
  '/vehicles' : {
    generalUrl: vehiclesURL,
    detailFilds: [
      "name",
      "model",
      "manufacturer",
      "cost_in_credits",
      "length",
      "max_atmosphering_speed",
      "crew",
      "passengers",
      "cargo_capacity",
      "consumables",
      "vehicle_class",
      ["pilots"],
      ["films"],
    ],
    filter: async (value) => {
      return await fetch(`https://swapi.dev/api/vehicles/?search=${value}`)
        .then(response => response.json())
    }
  },
};

const getValueByFieldAndPath = (path, field) => {
  if (pathMap[path] === undefined) {
    return pathMap[path]
  }

  return pathMap[path][field];
}

export const getGeneralUrlByPath = (path) => {
  return getValueByFieldAndPath(path, "generalUrl")
}

export const getDetailFildsByPath = (path) => {
  return getValueByFieldAndPath(path, "detailFilds")
}
