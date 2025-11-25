// Content item with date
interface DateItem {
  data: {
    date?: string | Date;
  };
}

// Content item with weight
interface WeightItem {
  data: {
    weight?: number;
  };
}

// sort by date
export const sortByDate = <T extends DateItem>(array: T[]): T[] => {
  const sortedArray = array.sort(
    (a, b) =>
      new Date(b.data.date ?? 0).valueOf() -
      new Date(a.data.date ?? 0).valueOf(),
  );
  return sortedArray;
};

// sort product by weight
export const sortByWeight = <T extends WeightItem>(array: T[]): T[] => {
  const withWeight = array.filter((item) => item.data.weight !== undefined);
  const withoutWeight = array.filter((item) => item.data.weight === undefined);
  const sortedWeightedArray = withWeight.sort(
    (a, b) => (a.data.weight ?? 0) - (b.data.weight ?? 0),
  );
  const sortedArray = [...new Set([...sortedWeightedArray, ...withoutWeight])];
  return sortedArray;
};
