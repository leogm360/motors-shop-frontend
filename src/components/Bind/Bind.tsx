import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { NOW, formatPriceToBRL } from "@utils";
import { Title, UserIcon } from "@components";
import { IBindProps } from "./BindTypes";

export const Bind = ({ bind }: IBindProps) => {
  const date = new Date(bind.issuedAt);

  return (
    <div>
      <div className="flex items-center gap-x-2">
        <UserIcon user={bind.issuedBy} size="small" />
        <Title className="text-grey-1" level={2} weight="medium" size="sm">
          {bind.issuedBy.name}
        </Title>
        <span className="block bg-grey-3 rounded-full w-1 h-1" />
        <span className="text-xs text-grey-3 ml-1">
          {`há ${formatDistance(NOW, date, {
            includeSeconds: true,
            locale: ptBR,
          })}`}
        </span>
      </div>
      <div className="mt-3">
        <span className="text-sm text-grey-2">
          {formatPriceToBRL(bind.value)}
        </span>
      </div>
    </div>
  );
};
