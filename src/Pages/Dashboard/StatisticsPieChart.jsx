import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle";

const StatisticsPieChart = () => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['trendingsReviewsUsers'],
    queryFn: async () => {
      try {
        const trendingPromise = axiosSecure.get('/trendings');
        const reviewsPromise = axiosSecure.get('/reviews');
        const usersPromise = axiosSecure.get('/users');

        const [trendingResponse, reviewsResponse, usersResponse] = await Promise.all([trendingPromise, reviewsPromise, usersPromise]);
        return [trendingResponse.data, reviewsResponse.data, usersResponse.data];
      } catch (error) {
        throw new Error("Error fetching data");
      }
    }
  });

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-[66vh]">
      <h1 className="text-xl text-[#eab308]">Loding....</h1>
    </div>
  }

  if (isError) {
    return <div className="flex justify-center items-center min-h-[66vh]">
      <h1 className="text-xl text-[#eab308]">Error fetching data</h1>
    </div>;
  }

  const [trendingData, reviewData, usersData] = data || [];

  const chartData = [
    { name: 'Products', value: trendingData ? trendingData.length : 0 },
    { name: 'Reviews', value: reviewData ? reviewData.length : 0 },
    { name: 'Users', value: usersData ? usersData.length : 0 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <>
      <SectionTitle heading={"Statistics PeiChart"} title={""}></SectionTitle>
      <div className="flex justify-center items-center">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={chartData}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </>
  );
};

export default StatisticsPieChart;
