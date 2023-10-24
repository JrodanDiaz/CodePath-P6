/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from "recharts";

export default function AvgPriceChart({ events }) {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    let data = [];
    if (events) {
      events.forEach((event) => {
        if (event.stats?.average_price) {
          data.push({
            Artist: event.title,
            AveragePrice: event.stats.average_price,
          });
          console.log(`event.performers.name: ${event.performers[0].name}`);
          console.log(`avg price: ${event.stats.average_price}`);
        }
      });
    }
    setPriceData(data);
  }, [events]);

  return (
    <>
      <div className="venue-chart-container">
        <h1>Avg Price Chart</h1>
        {priceData && (
          <BarChart width={730} height={250} data={priceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Artist" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="AveragePrice" fill="#e8003a" />
          </BarChart>
        )}
      </div>
    </>
  );
}
