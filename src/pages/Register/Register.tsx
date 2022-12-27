import { Title } from "@components";
import { RegisterForm } from "./partials";

export const Register = () => {
  return (
    <section className="pt-14 pb-20 px-4">
      <div className="rounded bg-grey-10 max-w-sm mx-auto px-7 py-11">
        <Title className="mb-8" level={2} size="2xl" weight="medium">
          Cadastro
        </Title>
        <RegisterForm />
      </div>
    </section>
  );
};
