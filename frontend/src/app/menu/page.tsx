import { CateFoods } from "@/components/menu/categories";
import axios from "axios";

export type CategoriesType = {
  name: string;
  id: string;
};
export const GetAllCategories = async () => {
  try {
    const { data } = await axios.get<CategoriesType[]>(
      "http://localhost:8000/categories"
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

async function Menu() {
  const categories = await GetAllCategories();

  return <CateFoods categories={categories as CategoriesType[]} />;
}
export default Menu;
