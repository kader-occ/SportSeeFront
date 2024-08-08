import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import apiMockService from "../../Mocks/ApiMockService";

const CaloriesChart = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiMockService.getUserCalories(userId);
        setData(result);
      } catch (error) {
        console.error("Error fetching calories data", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CaloriesChart;
