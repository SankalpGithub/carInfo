export interface brand {
  _id: string;
  name: string;
  logo_url: string;
  country: string;
  foundation_year: string;
  description: string;
  official_website_link: string;
}

export interface model {
  _id: string;
  name: string;
  img_url: string;
  foundation_year: string;
  description: string;
}

export interface variant {
  _id: string;
  name: string;
  img_url: string[];
  foundation_year: string;
  price: string;
  carModel_id: string;
  tags: string[];
}
