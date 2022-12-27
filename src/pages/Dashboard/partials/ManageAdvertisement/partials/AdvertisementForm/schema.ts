import * as Yup from "yup";
import {
  NOW,
  REQUIRED_FIELD,
  NUMBER_FIELD,
  INTEGER_FIELD,
  POSITIVE_NUMBER_FIELD,
  MIN_NUMBER_FIELD,
  MAX_NUMBER_FIELD,
  IMAGE_URL,
  IMAGE_URL_FIELD,
  MIN_TEXT_FIELD,
} from "@utils";
import {
  TAdvertisementFormData,
  TGallery,
  TAdvertisementType,
  TVehicleType,
} from "./AdvertisementFormType";

const MIN_YEAR = NOW.getFullYear() - 50;
const MAX_YEAR = NOW.getFullYear();

const MIN_MILEAGE = 0;
const MAX_MILEAGE = 500_000;

const MIN_PRICE = 10_000;
const MAX_PRICE = 1_000_00_000;

const MIN_TITLE = 10;

const MIN_DESCRIPTION = 50;

const gallerySchema: Yup.SchemaOf<TGallery> = Yup.object().shape({
  url: Yup.string()
    .required(REQUIRED_FIELD)
    .matches(IMAGE_URL, IMAGE_URL_FIELD),
});

export const advertisementSchema: Yup.SchemaOf<TAdvertisementFormData> =
  Yup.object().shape({
    type: Yup.mixed<TAdvertisementType>()
      .required(REQUIRED_FIELD)
      .oneOf(["AUCTION", "SELL"]),
    year: Yup.number()
      .typeError(NUMBER_FIELD)
      .required(REQUIRED_FIELD)
      .integer(INTEGER_FIELD)
      .positive(POSITIVE_NUMBER_FIELD)
      .min(MIN_YEAR, MIN_NUMBER_FIELD(MIN_YEAR))
      .max(MAX_YEAR, MAX_NUMBER_FIELD(MAX_YEAR)),
    mileage: Yup.number()
      .typeError(NUMBER_FIELD)
      .required(REQUIRED_FIELD)
      .integer(INTEGER_FIELD)
      .positive(POSITIVE_NUMBER_FIELD)
      .min(MIN_MILEAGE, MIN_NUMBER_FIELD(MIN_MILEAGE))
      .max(MAX_MILEAGE, MAX_NUMBER_FIELD(MAX_MILEAGE)),
    title: Yup.string()
      .required(REQUIRED_FIELD)
      .min(MIN_TITLE, MIN_TEXT_FIELD(MIN_TITLE)),
    price: Yup.number()
      .typeError(NUMBER_FIELD)
      .required(REQUIRED_FIELD)
      .integer(INTEGER_FIELD)
      .positive(POSITIVE_NUMBER_FIELD)
      .min(MIN_PRICE, MIN_NUMBER_FIELD(MIN_PRICE))
      .max(MAX_PRICE, MAX_NUMBER_FIELD(MAX_PRICE)),
    description: Yup.string()
      .required(REQUIRED_FIELD)
      .min(MIN_DESCRIPTION, MIN_TEXT_FIELD(MIN_DESCRIPTION)),
    vehicleType: Yup.mixed<TVehicleType>()
      .required(REQUIRED_FIELD)
      .oneOf(["CAR", "MOTORCYCLE"]),
    isPublished: Yup.boolean().required(REQUIRED_FIELD),
    cover: Yup.string()
      .required(REQUIRED_FIELD)
      .matches(IMAGE_URL, IMAGE_URL_FIELD),
    gallery: Yup.array<TGallery, typeof gallerySchema>().of(gallerySchema),
  });
