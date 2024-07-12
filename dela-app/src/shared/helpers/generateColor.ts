export const generateColor = (
  firstName: string,
  lastName: string,
  //   userId: string
) => {
  const firstLetter = firstName?.charAt(0);
  const lastLetter = lastName?.charAt(lastName.length - 1);
  //   const userIdLetter = userId.charAt(userId.length - 1);
  const color = `hsl(${firstLetter.charCodeAt(0) + lastLetter.charCodeAt(0)}, 100%, 50%)`;
  return color;
};
