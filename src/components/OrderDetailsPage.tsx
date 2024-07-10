import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import { fetchMiningDetails } from "../api/mining";

const OrderDetailsPage: React.FC = () => {
  const location = useLocation();
  const { userId, inputValue } = location.state || {
    userId: null,
    inputValue: 100,
  };
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      if (userId) {
        try {
          const result = await fetchMiningDetails(userId, inputValue);
          setData(result);
        } catch (error) {
          console.error("Failed to fetch mining details:", error);
        }
      }
    };
    getData();
  }, [userId, inputValue]);

  return data ? (
    <OrderDetails
      miningPower={data.mining_power}
      rentPeriod={data.rent_period}
      totalProfit={data.total_profit}
      dailyProfit={data.daily_profit}
      price={data.price}
      paymentAddress={data.payment_address}
      onClose={() => window.history.back()}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default OrderDetailsPage;
