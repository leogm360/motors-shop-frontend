import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressSchema } from "./schema";
import { Input, Button } from "@components";
import {
  TManageAddressFormData,
  IManageAddressFormProps,
} from "./ManageAddressFormTypes";

export const ManageAddressForm = ({ setIsOpen }: IManageAddressFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TManageAddressFormData>({ resolver: yupResolver(addressSchema) });

  const handleCancelAddressManagement = () => {
    reset();
    setIsOpen(false);
  };

  const handleGetAddress = () => {};

  const onFormSubmit: SubmitHandler<TManageAddressFormData> = (data) =>
    console.log(data);

  return (
    <form
      className="flex flex-col gap-y-6"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <Input
        label="CEP"
        isMasked={true}
        mask="cep"
        placeholder="00000-00"
        error={errors.cep?.message}
        {...register("cep")}
      />
      <div className="flex gap-x-2">
        <Input
          label="Cidade"
          placeholder="Curitiba"
          error={errors.city?.message}
          {...register("city")}
        />
        <Input
          label="Estado"
          placeholder="Paraná"
          error={errors.state?.message}
          {...register("state")}
        />
      </div>
      <Input
        label="Rua"
        placeholder="Rua do paraná"
        error={errors.road?.message}
        {...register("road")}
      />
      <div className="flex gap-x-2">
        <Input
          label="Número"
          placeholder="000"
          error={errors.number?.message}
          {...register("number")}
        />
        <Input
          label="Complemento"
          placeholder="Apto 12"
          error={errors.complement?.message}
          {...register("complement")}
        />
      </div>
      <div className="flex gap-x-2">
        <Button
          className="w-1/3 lg:w-fit lg:ml-auto"
          type="button"
          variant="negative"
          size="medium"
          onClick={handleCancelAddressManagement}
        >
          Cancelar
        </Button>
        <Button
          className="w-2/3 lg:w-fit"
          type="submit"
          size="medium"
          variant="brand"
        >
          Salvar alterações
        </Button>
      </div>
    </form>
  );
};
