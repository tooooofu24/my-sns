import { Badge } from "@mantine/core";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

export const DateComponent = ({ time }: { time: Date }) => {
  return (
    <Badge fz="xs" color="gray" mx="auto" my={5} radius="xs">
      {format(time, "M月d日(E)", { locale: ja })}
    </Badge>
  );
};
