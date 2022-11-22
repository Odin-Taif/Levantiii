export const fetchMeals = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMeals`);
  const data = await res.json();
  const meals: Meal[] = data.meals;

  return meals;
};
