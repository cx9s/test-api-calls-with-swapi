const genders = ["male", "female", "n/a"] as const;
type Gender = typeof genders[number];

export interface Char {
  name: string;
  height: string;
  gender: Gender;
  homeworld: string;
  url: string;
}
