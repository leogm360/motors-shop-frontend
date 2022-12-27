import { FocusEvent, MouseEvent, useState } from "react";
import { AxiosError } from "axios";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schema";
import { useAddress } from "@hooks";
import { EUserRoles, isObjectEmpty } from "@utils";
import { Input, TextArea, Button } from "@components";
import { SuccessModal } from "./partials";
import { TRegisterFormData } from "./RegisterFormTypes";
import { useEffect } from "react";

export const RegisterForm = () => {
  const { getAddress } = useAddress();

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  const {
    control,
    register,
    clearErrors,
    setError,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: { accountType: EUserRoles.buyer },
  });

  const handleUserRole = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value as EUserRoles;

    setValue("accountType", value);
  };

  const handleCepChange = async (e: FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value;

    if (cep === "") return;

    clearErrors("address.cep");
    clearErrors("address.state");
    clearErrors("address.city");
    clearErrors("address.street");

    try {
      const address = await getAddress(cep);

      setValue("address.state", address.uf);
      setValue("address.city", address.localidade);
      setValue("address.street", address.logradouro);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError("address.cep", {
          message: "Não foi possível localizar o cep",
        });
      }
    }
  };

  const onSubmitForm: SubmitHandler<TRegisterFormData> = (data) => {
    delete data.confirmPassword;

    console.log(data);

    setIsSuccessModalOpen(true);
  };

  return (
    <>
      <SuccessModal
        isOpen={isSuccessModalOpen}
        setIsOpen={setIsSuccessModalOpen}
      />
      <form className="bg-transparent" onSubmit={handleSubmit(onSubmitForm)}>
        <fieldset className="flex flex-col mb-6 gap-6">
          <legend className="text-sm font-medium mb-6">
            Informações pessoais
          </legend>
          <Input
            id="name"
            label="Nome"
            placeholder="Ex: Samuel Leão"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            id="email"
            label="Email"
            placeholder="Ex: samuel@kenzie.com.br"
            error={errors.email?.message}
            {...register("email")}
          />
          <Controller
            control={control}
            name="cpf"
            defaultValue=""
            render={({ field, formState: { errors } }) => (
              <Input
                id="cpf"
                label="CPF"
                placeholder="000.000.000-00"
                error={errors.cpf?.message}
                isMasked={true}
                mask="cpf"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="cellphone"
            defaultValue=""
            render={({ field, formState: { errors } }) => (
              <Input
                id="callphone"
                label="Celular"
                placeholder="(DD) 90000-0000"
                error={errors.cellphone?.message}
                isMasked={true}
                mask="cellphone"
                {...field}
              />
            )}
          />
          <Input
            id="birthdate"
            label="Data de nascimento"
            error={errors.birthdate?.message}
            type="date"
            {...register("birthdate")}
          />
          <Input
            id="password"
            label="Senha"
            placeholder="Digitar senha"
            error={errors.password?.message}
            type="password"
            {...register("password")}
          />
          <Input
            id="confirm-password"
            label="Confirmar senha"
            placeholder="Confirmar senha"
            error={errors.confirmPassword?.message}
            type="password"
            {...register("confirmPassword")}
          />
          <TextArea
            id="description"
            label="Descrição"
            placeholder="Digitar descrição"
            error={errors.description?.message}
            {...register("description")}
          />
        </fieldset>
        <fieldset className="flex flex-col mb-6 gap-6">
          <legend className="text-sm font-medium mb-6">
            Informações de endereço
          </legend>
          <Controller
            control={control}
            name="address.cep"
            defaultValue=""
            render={({
              field: { name, onChange, ref, value },
              formState: { errors },
            }) => (
              <Input
                id="cep"
                label="CEP"
                placeholder="00000-000"
                error={errors.address?.cep?.message}
                isMasked={true}
                mask="cep"
                name={name}
                onBlur={handleCepChange}
                onChange={onChange}
                ref={ref}
                value={value}
              />
            )}
          />
          <div className="flex gap-3">
            <Input
              id="state"
              label="Estado"
              placeholder="Digitar estado"
              error={errors.address?.state?.message}
              {...register("address.state")}
            />
            <Input
              id="city"
              label="Cidade"
              placeholder="Digitar cidade"
              error={errors.address?.city?.message}
              {...register("address.city")}
            />
          </div>
          <Input
            id="street"
            label="Rua"
            placeholder="Digitar rua"
            error={errors.address?.street?.message}
            {...register("address.street")}
          />
          <div className="flex gap-3">
            <Input
              id="number"
              label="Número"
              placeholder="Digitar número"
              error={errors.address?.number?.message}
              {...register("address.number")}
            />
            <Input
              id="complement"
              label="Complemento"
              placeholder="Ex: apart 137"
              error={errors.address?.complement?.message}
              {...register("address.complement")}
            />
          </div>
        </fieldset>
        <fieldset className="flex gap-3">
          <legend className="text-sm font-medium mb-6">Tipo de conta</legend>
          <Button
            type="button"
            value={EUserRoles.buyer}
            onClick={handleUserRole}
            size="big"
            variant={
              watch("accountType") === EUserRoles.buyer
                ? "brand"
                : "outline-medium"
            }
          >
            Comprador
          </Button>
          <Button
            type="button"
            value={EUserRoles.advertiser}
            onClick={handleUserRole}
            size="big"
            variant={
              watch("accountType") === EUserRoles.advertiser
                ? "brand"
                : "outline-medium"
            }
          >
            Anunciante
          </Button>
        </fieldset>
        <Button
          className="mt-6"
          type="submit"
          variant="brand"
          size="big"
          disabled={!isObjectEmpty(errors)}
        >
          Finalizar cadastro
        </Button>
      </form>
    </>
  );
};
