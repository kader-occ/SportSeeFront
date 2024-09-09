import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
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
        const formattedData = result.data.data.map((item) => ({
          subject: result.data.kind[item.kind],
          value: item.value,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Erreur de récuperation des données", error);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div
      style={{
        backgroundColor: "#2E2E2E",
        borderRadius: "10px",
        padding: "20px",
        width: "258px",
      }}
    >
      <ResponsiveContainer width={258} height={263}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#fff" />
          <PolarAngleAxis dataKey="subject" stroke="#fff" />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#ff0101"
            fill="#ff0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceRadarChartComponent;
