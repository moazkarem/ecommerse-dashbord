import {
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";


const pieData = [
  { name: "Completed", value: 40 },
  { name: "Pending", value: 25 },
  { name: "Canceled", value: 15 },
];

const COLORS = ["#00C49F", "#FFBB28", "#FF4444"];
const BieCharts = () => {
  return (
    <div className="col-span-12 lg:col-span-6 bg-[#0E1011] p-6 rounded-xl shadow-lg">
          <h2 className="text-[#ed1d24] text-[18px] font-semibold mb-4">
            Order Status
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend col />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
  )
}

export default BieCharts