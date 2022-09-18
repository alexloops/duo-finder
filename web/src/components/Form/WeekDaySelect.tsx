import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface WeekDaySelectProps {
  setWeekDays: (arg0: string[]) => void;
  weekDays: string[];
}

const WeekDaySelect = ({ setWeekDays, weekDays }: WeekDaySelectProps) => {
  return (
    <ToggleGroup.Root
      type="multiple"
      className="flex gap-1 text-xs"
      onValueChange={setWeekDays}
      value={weekDays}
    >
      <ToggleGroup.Item
        value="0"
        className={`w-6 h-6 rounded  ${
          weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
        }`}
        title="Monday"
      >
        M
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="1"
        className={`w-6 h-6 rounded  ${
          weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
        }`}
        title="Tuesday"
      >
        T
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="2"
        className={`w-6 h-6 rounded  ${
          weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
        }`}
        title="Wednesday"
      >
        W
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="3"
        className={`w-6 h-6 rounded  ${
          weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
        }`}
        title="Thursday"
      >
        T
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="4"
        className={`w-6 h-6 rounded  ${
          weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
        }`}
        title="Friday"
      >
        F
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="5"
        className={`w-6 h-6 rounded  ${
          weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
        }`}
        title="Saturday"
      >
        S
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="6"
        className={`w-6 h-6 rounded  ${
          weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
        }`}
        title="Sunday"
      >
        S
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default WeekDaySelect;
