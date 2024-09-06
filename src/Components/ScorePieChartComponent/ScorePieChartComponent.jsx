import PropTypes from "prop-types";
import { ResponsiveContainer, Legend, RadialBarChart } from "recharts";

const ScorePieChartComponent = ({ userData }) => {
  return (
    <ResponsiveContainer width={258} height={263} className="radial-chart">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={userData}
      >
        <RadialBarChart
          minAngle={15}
          label={{ position: "insideStart", fill: "#e60000" }}
          dataKey="score"
        />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

ScorePieChartComponent.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScorePieChartComponent;
