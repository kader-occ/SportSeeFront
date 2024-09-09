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
import apiService from "../../Services/ApiService";
import PropTypes from "prop-types";

const AverageSessionChartComponent = ({ userId }) => {
  const [data, setData] = useState([]);

  const jourSemaine = ["L", "M", "M", "J", "V", "S", "D"];

  const formatData = (data) => {
    return data.map((session, index) => ({
      day: jourSemaine[index],
      sessionLength: session.sessionLength,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.getUserAverageSessions(userId);
        setData(formatData(result.data.sessions));
      } catch (error) {
        console.error("Erreur de récuperation des données", error);
      }
    };

    fetchData();
  }, [userId]);

  const formattedData = formatData(data);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
            color: "black",
          }}
        >
          {`${payload[0].value} min`}
        </div>
      );
    }
    return null;
  };

  return (
    <div
      style={{
        backgroundColor: "#ff0000",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <p
        style={{
          color: "white",
          marginBottom: "20px",
          fontSize: "15px",
          opacity: "0.7",
        }}
      >
        Durée moyenne des sessions
      </p>
      <ResponsiveContainer width={258} height={263}>
        <LineChart data={formattedData}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "white", fontSize: 12 }}
          />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            strokeWidth={2}
            dot={{ stroke: "white", strokeWidth: 5 }}
            activeDot={{
              stroke: "white",
              fill: "white",
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageSessionChartComponent.propTypes = {
  userId: PropTypes.string,
};

export default AverageSessionChartComponent;
