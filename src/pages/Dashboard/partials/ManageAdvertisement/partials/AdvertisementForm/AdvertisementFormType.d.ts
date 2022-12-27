export type TAdvertisementType = "AUCTION" | "SELL";

export type TVehicleType = "CAR" | "MOTORCYCLE";

export type TGallery = {
  url: string;
};

export type TAdvertisementFormData = {
  type: TAdvertisementType;
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  vehicleType: TVehicleType;
  isPublished: boolean;
  cover: string;
  gallery: TGallery[];
};

export interface IAdvertisementFormProps {
  product?: IProduct;
}
