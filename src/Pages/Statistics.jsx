import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  BarChart,
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
        <p className="mt-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Gadgets Price Distribution
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={gadgets}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid stroke="#e5e7eb" vertical={false} />

            <XAxis dataKey="product_title" tick={{ fontSize: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />

            <defs>
              <linearGradient id="bgCurve" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="price"
              stroke="#8b5cf6"
              strokeWidth={2}
              fill="url(#bgCurve)"
            />

            <Bar
              dataKey="price"
              barSize={40}
              fill="#8b5cf6"
              radius={[6, 6, 0, 0]}
            />
          </ComposedChart>
        </ResponsiveContainer>

        <div className="text-center mt-4">
          <p className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Purple Bar = Gadget Price
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
