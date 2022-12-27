import { useNavigate } from "react-router-dom";
import { gotToTop } from "@utils";
import { Button, Title } from "@components";
import { LoginForm } from "./partials";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-14 pb-20 px-4">
      <div className="rounded bg-grey-10 max-w-sm mx-auto px-7 py-11">
        <div className="mb-6">
          <Title className="mb-8" level={2} size="2xl" weight="medium">
            Login
          </Title>
          <LoginForm />
        </div>
        <div>
          <p className="text-sm text-center text-grey-2 mb-6">
            Ainda não possui conta?
          </p>
          <Button
            type="button"
            variant="outline-medium"
            size="medium"
            onClick={() => {
              navigate("/register");
              gotToTop();
            }}
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </section>
  );
};
