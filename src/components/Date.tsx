import { Badge } from "@mantine/core";
import { format } from "date-fns";

export const DateComponent = ({ time }: { time: Date }) => {
  return (
    <Badge fz="xs" color="gray" mx="auto" my={5} radius="xs">
      {format(time, "M月d日")}
    </Badge>
  );
};
