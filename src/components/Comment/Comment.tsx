import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useData } from "../../contexts";
import { NOW } from "../../utils";
import { Title } from "../Title";
import { UserIcon } from "../UserIcon";
import { ICommentProps } from "./CommentTypes";

export const Comment = ({ comment }: ICommentProps) => {
  const { user } = useData();

  const date = new Date(comment.issuedAt);

  return (
    <li className="flex-none w-full">
      <div className="flex items-center gap-2">
        <UserIcon user={user} size="small" />
        <Title className="text-grey-1" level={2} weight="medium" size="sm">
          {user.name}
        </Title>
        <span className="block bg-grey-3 rounded-full w-1 h-1" />
        <span className="text-xs text-grey-3 ml-1">
          {`há ${formatDistance(NOW, date, {
            includeSeconds: true,
            locale: ptBR,
          })}`}
        </span>
      </div>
      <p className="text-sm text-grey-2 mt-3">{comment.text}</p>
    </li>
  );
};
