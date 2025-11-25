// Content item interface for similar items matching
interface ContentItem {
  slug: string;
  data: {
    categories: string[];
    tags: string[];
  };
}

// similar products
const similarItems = <T extends ContentItem>(
  currentItem: T,
  allItems: T[],
): T[] => {
  let categories: string[] = [];
  let tags: string[] = [];

  // set categories
  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }

  // set tags
  if (currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item) =>
    categories.find((category) => item.data.categories.includes(category)),
  );

  // filter by tags
  const filterByTags = allItems.filter((item) =>
    tags.find((tag) => item.data.tags.includes(tag)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

  // filter by slug
  const filterBySlug = mergedItems.filter(
    (product) => product.slug !== currentItem.slug,
  );

  return filterBySlug;
};

export default similarItems;
