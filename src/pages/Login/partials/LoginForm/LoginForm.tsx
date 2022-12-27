import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema";
import { Input, Button } from "@components";
import { TLoginFormData } from "./LoginFormTypes";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormData>({ resolver: yupResolver(loginSchema) });

  const onFormSubmit: SubmitHandler<TLoginFormData> = (data) => {
    return null;
  };

  return (
    <form
      className="flex flex-col bg-transparent"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <Input
        label="Usuário"
        placeholder="Digitar usuário"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        className="mt-6"
        label="Senha"
        placeholder="Digitar senha"
        error={errors.password?.message}
        {...register("password")}
      />
      <div className="text-right mt-2">
        <Link className="font-medium text-sm text-grey-2" to="#">
          Esqueci minha senha
        </Link>
      </div>
      <Button className="mt-6" type="submit" variant="brand" size="medium">
        Entrar
      </Button>
    </form>
  );
};
