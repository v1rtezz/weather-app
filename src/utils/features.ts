import { CONFIG } from "../config"
const { FEATURES_KEY } = CONFIG
export const getFavorites = (): string[] => {
  const raw = localStorage.getItem(FEATURES_KEY)
  return raw ? JSON.parse(raw) : []
}

export const addFavorite = (city: string): void => {
  const current = getFavorites()
  if (!current.includes(city)) {
    localStorage.setItem(FEATURES_KEY, JSON.stringify([...current, city]))
  }
}

export const removeFavorite = (city: string): void => {
  const updated = getFavorites().filter((c) => c !== city)
  localStorage.setItem(FEATURES_KEY, JSON.stringify(updated))
}