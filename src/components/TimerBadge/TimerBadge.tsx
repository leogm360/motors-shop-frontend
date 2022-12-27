import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { formatSecondsToTimer, NOW, ONE_SECOND_IN_MILLISECONDS } from "@utils";
import { Icon } from "@components";
import { ITimerBadgeProps } from "./TimerBadgeTypes";

export const TimerBadge = ({ expiration }: ITimerBadgeProps) => {
  const differenceOfSeconds = differenceInSeconds(expiration, NOW);

  const [seconds, setSeconds] = useState<number>(differenceOfSeconds);

  useEffect(() => {
    if (seconds <= 0) return;

    let interval = setInterval(
      () => setSeconds(seconds - 1),
      ONE_SECOND_IN_MILLISECONDS
    );

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="flex items-center text-whiteFixed bg-whiteFixed rounded-full w-fit py-2 pl-2 pr-4 gap-2">
      <Icon name="clock" />
      <span className="font-Lexend font-semibold text-grey-1">
        {seconds <= 0 ? "00:00:00" : formatSecondsToTimer(seconds)}
      </span>
    </div>
  );
};
