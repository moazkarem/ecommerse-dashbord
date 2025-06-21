import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const barData = [
  { name: "Jan", orders: 30 },
  { name: "Feb", orders: 45 },
  { name: "Mar", orders: 20 },
  { name: "Apr", orders: 60 },
];
const BarCharts = () => {
  return (
    <div className="col-span-12 lg:col-span-6 bg-[#0E1011] p-6 rounded-xl shadow-lg">
           <h2 className="text-[#ed1d24] text-[18px] font-semibold mb-4">
             Monthly Orders
           </h2>
           <ResponsiveContainer width="100%" height={250}>
             <BarChart data={barData}>
               <XAxis dataKey="name" stroke="#fff" />
               <YAxis stroke="#fff" />
               <Tooltip
                 contentStyle={{ backgroundColor: "#0E1011", border: "none" }}
                 labelStyle={{ color: "#fff" }}
                 itemStyle={{ color: "#fff" }}
               />
               <Bar
                 dataKey="orders"
                 fill="#ed1d24"
                 radius={[4, 4, 0, 0]}
                 activeBar={false}
               />
             </BarChart>
           </ResponsiveContainer>
         </div>
  )
}

export default BarCharts