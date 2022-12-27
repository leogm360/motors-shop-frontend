import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isObjectEmpty } from "@utils";
import { advertisementSchema } from "./schema";
import { Button, Input, TextArea } from "@components";
import {
  TAdvertisementFormData,
  IAdvertisementFormProps,
} from "./AdvertisementFormType";

export const AdvertisementForm = ({ product }: IAdvertisementFormProps) => {
  const {
    control,
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdvertisementFormData>({
    resolver: yupResolver(advertisementSchema),
    defaultValues: {
      type: "AUCTION",
      vehicleType: "CAR",
      isPublished: true,
      gallery: [{ url: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "gallery",
  });

  const handleAddGalleryField = () => append({ url: "" });

  const handleRemoveGalleryField = () => remove(fields.length - 1);

  const onFormSubmit: SubmitHandler<TAdvertisementFormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-y-6"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className="flex flex-col gap-y-2">
        <label className="text-sm font-medium" id="vehicle-type">
          Tipo de anúncio
        </label>
        <div className="flex gap-x-2">
          <Button
            id="type"
            type="button"
            variant={watch("type") === "AUCTION" ? "brand" : "outline-medium"}
            size="medium"
            name="type"
            role="radiogroup"
            aria-label="Definir anúncio para leilão"
            onClick={() => setValue("type", "AUCTION")}
          >
            Leilão
          </Button>
          <Button
            id="type"
            type="button"
            variant={watch("type") === "SELL" ? "brand" : "outline-medium"}
            size="medium"
            name="type"
            role="radiogroup"
            aria-label="Definir anúncio para venda"
            onClick={() => setValue("type", "SELL")}
          >
            Venda
          </Button>
        </div>
      </div>
      <Input
        id="title"
        label="Título"
        placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
        error={errors.title?.message}
        {...register("title")}
      />
      <div className="flex gap-x-2">
        <Input
          id="year"
          label="Ano"
          placeholder="2019"
          error={errors.year?.message}
          {...register("year")}
        />
        <Input
          id="mileage"
          label="Quilometragem"
          placeholder="0"
          error={errors.mileage?.message}
          {...register("mileage")}
        />
      </div>
      <Input
        id="price"
        label="Preço"
        placeholder="50.000,00"
        error={errors.price?.message}
        {...register("price")}
      />
      <TextArea
        id="description"
        label="Descrição"
        placeholder="Digite a descrição aqui"
        error={errors.description?.message}
        {...register("description")}
      />
      <div className="flex flex-col gap-y-2">
        <label className="text-sm font-medium" id="vehicle-type">
          Tipo de veículo
        </label>
        <div className="flex gap-x-2">
          <Button
            id="vehicle-type"
            type="button"
            variant={
              watch("vehicleType") === "CAR" ? "brand" : "outline-medium"
            }
            size="medium"
            name="vehicleType"
            role="radiogroup"
            aria-label="Definir anúncio para carro"
            onClick={() => setValue("vehicleType", "CAR")}
          >
            Carro
          </Button>
          <Button
            id="vehicle-type"
            type="button"
            variant={
              watch("vehicleType") === "MOTORCYCLE" ? "brand" : "outline-medium"
            }
            size="medium"
            name="vehicleType"
            role="radiogroup"
            aria-label="Definir anúncio para moto"
            onClick={() => setValue("vehicleType", "MOTORCYCLE")}
          >
            Moto
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <label className="text-sm font-medium" id="vehicle-type">
          Publicado
        </label>
        <div className="flex gap-x-2">
          <Button
            id="is-published"
            type="button"
            variant={watch("isPublished") ? "brand" : "outline-medium"}
            size="medium"
            name="isPublished"
            role="radiogroup"
            aria-label="Definir anúncio como publicado"
            onClick={() => setValue("isPublished", true)}
          >
            Sim
          </Button>
          <Button
            id="is-published"
            type="button"
            variant={!watch("isPublished") ? "brand" : "outline-medium"}
            size="medium"
            name="isPublished"
            role="radiogroup"
            aria-label="Definir anúncio como não publicado"
            onClick={() => setValue("isPublished", false)}
          >
            Não
          </Button>
        </div>
      </div>
      <Input
        id="cover"
        label="Imagem da capa"
        placeholder="Digite o link aqui"
        error={errors.cover?.message}
        {...register("cover")}
      />
      <div className="flex flex-col gap-y-6">
        {fields.map(({ id }, index) => (
          <Input
            key={id}
            id={`gallery-${index}`}
            label={`${index + 1}º imagem da galeria`}
            placeholder="Digite o link aqui"
            error={errors.gallery?.[index]?.url?.message}
            {...register(`gallery.${index}.url`)}
          />
        ))}
        <div className="flex gap-x-2">
          {fields.length < 6 && (
            <Button
              type="button"
              variant="brand-opacity"
              size="medium"
              onClick={handleAddGalleryField}
            >
              {fields.length > 1 ? "Adicionar" : " Adicionar campo de imagem"}
            </Button>
          )}
          {fields.length > 1 && (
            <Button
              type="button"
              variant="alert"
              size="medium"
              onClick={handleRemoveGalleryField}
            >
              {fields.length < 6 ? "Remover" : " Remover campo de imagem"}
            </Button>
          )}
        </div>
      </div>
      <div className="flex mt-3 gap-x-2">
        {product && (
          <Button type="button" variant="negative" size="medium">
            Excluir anúncio
          </Button>
        )}
        <Button
          type="submit"
          variant="brand"
          size="medium"
          disabled={!isObjectEmpty(errors)}
        >
          Salvar alterações
        </Button>
      </div>
    </form>
  );
};
