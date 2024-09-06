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
import apiService from "../../Services/ApiService";
import PropTypes from "prop-types";

const CaloriesChart = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.getUserCalories(userId);
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

CaloriesChart.propTypes = {
  userId: PropTypes.string,
};

export default CaloriesChart;
