import React, { useEffect, useState } from "react";
import { BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import apiMockService from "../../Mocks/ApiMockService";

const ActivityChartComponent = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiMockService.getUserSessions(userId);
        setData(result);
      } catch (error) {
        console.error(
          "Erreur de récuperation des données de l'activitée",
          error
        );
      }
    };

    fetchData();
  }, [userId]);

  return (
    <ResponsiveContainer width={835} height={320} className="activity-chart">
      <BarChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChartComponent;
