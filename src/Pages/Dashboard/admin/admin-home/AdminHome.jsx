"use client";
import Image from "next/image";
import listedItem from "../../../../../public/dashboard_icons/to-do.png";
import customerFeedback from "../../../../../public/dashboard_icons/review.png";
import sell from "../../../../../public/dashboard_icons/sell.png";


// import bar chart
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// import pie chart 
import { PieChart, Pie, Sector, Cell } from 'recharts';


const AdminHome = () => {
  //  get user
  const user = {
    name: "Mr X",
    email: "hello@gmail.com",
    phone: "+934990898",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  };
  // get user stats
  const sellerStats = {
    listedItem: 5,
    customerFeedback: 2,
    totalSell: 3,
    decline: 2,
  };

  // chart data 
  const chartData = [
    {
      name: "Listed Item",
      count: sellerStats?.listedItem,
    },
    {
      name: "Customer Feedback",
      count: sellerStats?.customerFeedback,
    },
    {
      name: "Total Sell",
      count: sellerStats?.totalSell,
    },
    {
      name: "Order Declines",
      count: sellerStats?.decline,
    },
  ];
const barChartLength =  parseInt(chartData.length)*150 
// console.log(barChartLength);

// pie chart 
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



  return (
    <main>
      {" "}
      <h2 className=" text-2xl font-bold my-5 ml-6">
        Hi Welcome Back <span className=" text-primary">{user?.name}</span>
      </h2>
      {/* stats section  */}
      <section className="p-6 my-6  flex items-center">
        <div className="w-[90%] grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
          {/* stat 1 listedItem */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-400 text-black ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt=" listedItem image"
                width={40}
                height={40}
                src={listedItem}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize"> Total listed item</p>
              <h1 className="text-3xl font-bold leading-none">
                {sellerStats?.listedItem}
              </h1>
            </div>
          </div>
          {/* stat 2 customerFeedback  */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-fuchsia-200 text-neutral-900 ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt=" customerFeedback image"
                width={40}
                height={40}
                src={customerFeedback}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize">Feedback</p>
              <h1 className="text-3xl font-bold leading-none">
                {sellerStats?.customerFeedback}
              </h1>
            </div>
          </div>
          {/* stat 3 sell  */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-emerald-100 text-neutral-900">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt="sell image"
                width={40}
                height={40}
                src={sell}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize">Total Sell</p>
              <h1 className="text-3xl font-bold leading-none">
                {sellerStats?.totalSell}
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* user info section */}
      <h3 className=" my-5 text-xl font-bold text-center"> Your Activities</h3>
      {/* user order info charts  section */}
      <section className=" text-black w-full flex items-center mx-5 overflow-auto justify-center">
        <div>
        <BarChart
          width={barChartLength}
          height={300}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" stackId="a" fill="#fe6702" />
        </BarChart></div>
        <div>
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
          >
            
            {chartData.map((entry, index) => (
              <Cell key={`index`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip></Tooltip>
            <Legend></Legend>
        </PieChart></div>
      </section>
    </main>
  );
};

export default AdminHome;
