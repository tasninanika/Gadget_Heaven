import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Statistics = () => {
  const gadgets = useLoaderData();

  return (
    <div className="mt-8">
      <Helmet>
        <title>Statistics || Gadget Heaven</title>
      </Helmet>

      {/* Header Section */}
      <div className="bg-purple-600 text-white text-center py-6 shadow-md mb-10">
        <h1 className="text-3xl font-bold">Statistics</h1>
        <p className="mt-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>

      {/* Chart Section */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        Gadgets Price Distribution
      </h2>
      <div className="bg-purple-50 p-6 m-20 rounded-xl">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={gadgets}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            {/* horizontal grid */}
            <CartesianGrid stroke="#e5e7eb" vertical={false} />

            <XAxis
              dataKey="product_title"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#1f2937", fontSize: 12, fontWeight: "bold" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#1f2937", fontSize: 12, fontWeight: "bold" }}
            />
            <Tooltip />
            <Legend />

            {/* Gradient for Area */}
            <defs>
              <linearGradient id="bgCurve" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            {/* Background smooth curve */}
            <Area
              type="monotone"
              dataKey="price"
              stroke="none"
              strokeWidth={2}
              fill="url(#bgCurve)"
              tooltipType="none"
            />

            {/* Bars on top */}
            <Bar dataKey="price" barSize={40} fill="#8b5cf6" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
