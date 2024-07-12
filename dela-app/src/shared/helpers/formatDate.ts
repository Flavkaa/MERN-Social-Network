function padZero(num: number): string {
  return num.toString().padStart(2, '0');
}

function formatDateTime(dateTimeString: Date): string {
  const date = new Date(dateTimeString);
  const formattedDate = `${padZero(date.getDate())}.${padZero(
    date.getMonth() + 1,
  )}.${date.getFullYear()}, ${padZero(date.getHours())}:${padZero(date.getMinutes())}`;
  return formattedDate;
}

export { formatDateTime };
