import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import apiService from "../../Services/ApiService";
import "./PerformanceRadarChartComponent.css";

const PerformanceRadarChartComponent = (userId) => {
  const [data, setData] = useState([]);

  userId = userId.userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.getUserPerformance(userId);
        setData(result.data.data);
        console.log(userId, data);
      } catch (error) {
        console.error("Erreur de récuperation des données", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <ResponsiveContainer width={258} height={263} className="radar-chart">
      <RadarChart outerRadius={150} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis angle={30} domain={[0, 200]} />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#ff0101"
          fill="#ff0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceRadarChartComponent;
