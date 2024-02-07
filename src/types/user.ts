export type NewUserInfomation_type = {
  name: string;
  email: string;
  password: string;
  birth_date: string;
  document: string;
  country: number;
  subregion: number;
  city: number;
};

export type loginUserInformation_type = {
  document: string;
  email: string;
  name: string;
  password: string;
};
