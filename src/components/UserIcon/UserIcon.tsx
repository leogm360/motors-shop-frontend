import { getUserIconSize, getUserNameInitials } from "./utils";
import { IUserIconProps } from "./UserIconTypes";

export const UserIcon = ({ user, size = "big" }: IUserIconProps) => {
  const userBaseForImg = "rounded-full";
  const userBaseForSpan =
    "flex justify-center items-center text-whiteFixed font-semibold rounded-full";
  const userIconSize = getUserIconSize(size);

  return user.image ? (
    <img
      className={`${userBaseForImg} ${userIconSize}`}
      src={user.image}
      alt={user.name}
    />
  ) : (
    <span
      className={`${userBaseForSpan} ${user.backgroundColor} ${userIconSize}`}
    >
      {getUserNameInitials(user.name)}
    </span>
  );
};
