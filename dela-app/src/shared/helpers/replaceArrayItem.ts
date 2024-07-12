const replaceItem = <T, K extends keyof T>(array: T[], property: K, value: T[K], newItem: T): T[] => {
  const index = array.findIndex((item) => item[property] === value);
  if (index !== -1) {
    array[index] = newItem;
  }
  return array;
};

export { replaceItem };
