import React, { useEffect, useState } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./ActivityChartComponent.css";
import CustomTooltip from "../CustomTooltip/CustomTooltipComponent";
import apiService from "../../Services/ApiService";

const ActivityChartComponent = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.getUserActivity(userId);
        setData(result.data.sessions);
      } catch (error) {
        console.error(
          "Erreur de récuperation des données de l'activitée",
          error
        );
      }
    };

    fetchData();
  }, [userId]);

  const minKilogram = Math.min(...data.map((d) => d.kilogram));
  const maxKilogram = Math.max(...data.map((d) => d.kilogram));

  return (
    <ResponsiveContainer width={835} height={320} className="activity-chart">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis yAxisId="left" orientation="left" />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[minKilogram, maxKilogram]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" align="right" iconType="circle" />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#282d30"
          name="Poids (kg)"
        />
        <Bar yAxisId="left" dataKey="calories" fill="#e60000" name="Calories" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChartComponent;
