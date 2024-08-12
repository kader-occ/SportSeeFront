import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import apiMockService from "../../Mocks/ApiMockService";

const AverageSessionChartComponent = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiMockService.getUserAverageSessions(userId);
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Erreur de récuperation des données", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <ResponsiveContainer width={258} height={263}>
      <LineChart data={data} style={{ backgroundColor: "#e60000" }}>
        <CartesianGrid stroke="none" />
        <XAxis dataKey="day" stroke="none" tickLine={false} axisLine={false} />
        <YAxis
          domain={[0, "dataMax"]}
          stroke="none"
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <Legend verticalAlign="top" align="center" />

        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          name="Durée moyenne des sessions"
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSessionChartComponent;
