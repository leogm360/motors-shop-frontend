import { useMediaQuery } from "react-responsive";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { accountSchema } from "./schema";
import { Button, Input, TextArea } from "@components";
import {
  TManageAccountFormData,
  IManageAccountFormProps,
} from "./ManageAccountFormTypes";

export const ManageAccountForm = ({ setIsOpen }: IManageAccountFormProps) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TManageAccountFormData>({ resolver: yupResolver(accountSchema) });

  const handleCancelAccountManagement = () => {
    reset();
    setIsOpen(false);
  };

  const onFormSubmit: SubmitHandler<TManageAccountFormData> = (data) =>
    console.log(data);

  return (
    <form
      className="flex flex-col gap-y-6"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <Input
        label="Nome"
        placeholder="Digite aqui o nome"
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        label="Email"
        placeholder="Digite aqui o email"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        label="CPF"
        isMasked={true}
        mask="cpf"
        placeholder="000.000.000-00"
        error={errors.cpf?.message}
        {...register("cpf")}
      />
      <Input
        label="Celular"
        placeholder="Digite aqui o celular"
        error={errors.cellphone?.message}
        {...register("cellphone")}
      />
      <Input
        type="date"
        label="Data de Nascimento"
        error={errors.birthdate?.message}
        {...register("birthdate")}
      />
      <TextArea
        label="Descrição"
        placeholder="Digite aqui a descrição"
        error={errors.description?.message}
        {...register("description")}
      />
      <div className="flex gap-x-2">
        <Button
          className="w-1/3 lg:w-fit lg:ml-auto"
          type="button"
          variant="negative"
          size={isDesktop ? "big" : "medium"}
          onClick={handleCancelAccountManagement}
        >
          Cancelar
        </Button>
        <Button
          className="w-2/3 lg:w-fit"
          type="submit"
          variant="brand"
          size={isDesktop ? "big" : "medium"}
        >
          Salvar alterações
        </Button>
      </div>
    </form>
  );
};
