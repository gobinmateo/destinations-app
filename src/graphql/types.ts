export type ImageType = {
  __typename: string;
  url: string;
};

export type HiddenGemType = {
  __typename: string;
  countryCode: string;
  title: string;
  description: string;
  image: ImageType;
};

export type DestinationType = {
  __typename: string;
  preTitle: string;
  title: string;
  image: ImageType;
  fromPrice: number;
  currency: string;
  countryCode: string;
  description: string;
}