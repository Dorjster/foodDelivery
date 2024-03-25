import React from "react";
import { History } from "@/components/order/OrderHistory";
import { AxiosError } from "axios";
import axios from "axios";

const GetOrder = async () => {
  try {
    const { data } = await axios.get("https://fooddelivery-pg8c.onrender.com/get-order");

    return data;
  } catch (err: AxiosError | any) {
    console.log(err.message);
  }
};
async function page() {
  const data = await GetOrder();

  return (
    <div>
      <History data={data} />
    </div>
  );
}

export default page;
