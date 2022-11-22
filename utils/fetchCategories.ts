///explaination:here we are fetching the data by calling our api getCategories.
// the we assigen the response to the data variable.
// we then get out disired data (in our case:categories) from the data object {} itself
//we return the the categories.
//Now move to the home page (index) where we call fetchCategories inside our getServeSidePros()

export const fetchCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
  );
  const data = await res.json();
  const categories: Category[] = data.categories;
  return categories;
};
