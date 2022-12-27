import { Bind, UserIcon, Button, Title, Input } from "@components";
import { useState } from "react";
import { useData } from "@hooks";
import { IBindsProps } from "./BindsTypes";

export const Binds = ({ binds }: IBindsProps) => {
  const { user } = useData();

  const [bind, setBind] = useState<string>("");

  return (
    <>
      <ul className="flex flex-col max-h-96 gap-y-8 overflow-y-auto smooth-scrollbar">
        {binds.map((bind) => (
          <Bind bind={bind} />
        ))}
      </ul>
      <div className="mt-9 pt-8 border-t border-t-grey-7">
        <div className="flex items-center gap-x-2">
          <UserIcon user={user} size="small" />
          <Title level={2} size="sm" weight="medium">
            {user.name}
          </Title>
        </div>
        <div className="flex mt-8 gap-x-2">
          <Input
            className="max-w-xs"
            label=" Lance"
            value={bind}
            placeholder="Inserir valor do lance"
            error={""}
            onChange={(e) => setBind(e.target.value)}
          />
          <Button
            type="button"
            className="w-fit mt-auto"
            variant="brand"
            size="big"
          >
            Inserir proposta
          </Button>
        </div>
      </div>
    </>
  );
};
