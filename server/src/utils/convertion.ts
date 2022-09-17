export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);

  return hours * 60 + minutes;
}

export function convertMinutesToHourString(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const hourMinutes = minutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(hourMinutes).padStart(
    2,
    "0"
  )}`;
}
