export type CountryType = {
  id: number;
  name: string;
  code: string;
  currency: string;
  createdAt: string;
  updatedAt: string;
};

export type SubregionType = {
  id: number | null;
  name: string;
  country: number;
  createdAt: string;
  updatedAt: string;
};

export type CityType = {
  id: number;
  name: string;
  subregion: number | null;
  country: number;
  createdAt: string;
  updatedAt: string;
};
