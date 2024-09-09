import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from "recharts";
import "./ScorePieChartComponent.css";
import { useEffect, useState } from "react";

const ScorePieChartComponent = ({ score }) => {
  const [data, setData] = useState([]);

  const formatData = (score) => {
    return [
      { name: "Score", value: score * 100 },
      { name: "Restant", value: 100 - score * 100 },
    ];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(formatData(score));
      } catch (error) {
        console.error("Erreur de récuperation des données", error);
      }
    };
    fetchData();
  }, [score]);

  return (
    <div
      style={{
        backgroundColor: "#FBFBFB",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "16px", color: "#000", marginBottom: "10px" }}>
        Score
      </h2>
      <ResponsiveContainer width={258} height={263}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="90%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="value"
            cornerRadius={10}
            fill="#ff0000"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            style={{ fontSize: "24px", fontWeight: "bold", fill: "#000" }}
          >
            {`${(score * 100).toFixed(0)}%`}
          </text>
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-subtext"
            style={{ fontSize: "16px", fill: "#74798C" }}
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

ScorePieChartComponent.propTypes = {
  userData: PropTypes.object,
};

export default ScorePieChartComponent;
