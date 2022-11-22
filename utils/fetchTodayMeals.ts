export const fetchTodayMeals = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTodayMeals`
  );
  const data = await res.json();
  const todayMeals: Meal[] = data.todayMeals;
  return todayMeals;
};
