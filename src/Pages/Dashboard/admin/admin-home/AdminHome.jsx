"use client";
import Image from "next/image";
import adminListedItem from "../../../../../public/dashboard_icons/to-do.png";
import totalReviews from "../../../../../public/dashboard_icons/review.png";
import sell from "../../../../../public/dashboard_icons/sell.png";
import totalItem from "../../../../../public/dashboard_icons/product-selling.png";
import totalUsers from "../../../../../public/dashboard_icons/users.png";
import totalRevenue from "../../../../../public/dashboard_icons/financial-statement.png";



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
    totalItem: 5,
    totalReviews: 2,
    totalSell: 10,
    decline: 2,
    totalUsers:10,
    totalRevenue:300,
    adminListedItem:3
  };

  // chart data 
  const chartData = [
    {
      name: "Total Item",
      count: sellerStats?.totalItem,
    },
    {
      name: "Total Reviews",
      count: sellerStats?.totalReviews,
    },
    {
      name: "Total Sell",
      count: sellerStats?.totalSell,
    },
    {
      name: "Order Declines",
      count: sellerStats?.decline,
    },
    {
      name: "Your Item",
      count: sellerStats?.adminListedItem,
    },
    {
      name: "Total User",
      count: sellerStats?.totalUsers,
    },
 
  ];
const barChartLength =  parseInt(chartData.length)*120 
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
          {/* stat 1 totalItem */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-200 shadow border text-black ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt=" totalItem image"
                width={40}
                height={40}
                src={totalItem}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize"> Total item</p>
              <h1 className="text-3xl font-bold leading-none">
                {sellerStats?.totalItem}
              </h1>
            </div>
          </div>
          {/* stat 2 totalReviews  */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-orange-100 shadow border text-neutral-900 ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt=" totalReviews image"
                width={40}
                height={40}
                src={totalReviews}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize">Total Reviews</p>
              <h1 className="text-3xl font-bold leading-none">
                {sellerStats?.totalReviews}
              </h1>
            </div>
          </div>
          {/* stat 3 sell  */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-emerald-100 shadow border text-neutral-900">
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
          {/* stat 4 admin listed item  */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-emerald-100 shadow border text-neutral-900">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt="admin listed item image"
                width={40}
                height={40}
                src={adminListedItem}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize">Your Listed Item</p>
              <h1 className="text-3xl font-bold leading-none">
                {sellerStats?.adminListedItem}
              </h1>
            </div>
          </div>
          {/* stat 5 users  */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-orange-100 shadow border text-neutral-900">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt="users state image"
                width={40}
                height={40}
                src={totalUsers}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize">Total Users</p>
              <h1 className="text-3xl font-bold leading-none">
                {sellerStats?.totalUsers}
              </h1>
            </div>
          </div>
          {/* stat 6 revenue  */}
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-slate-200 shadow border text-neutral-900">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  -violet-400">
              <Image
                alt="total revenue image"
                width={40}
                height={40}
                src={totalRevenue}
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="capitalize">Total Revenue</p>
              <h1 className="text-3xl font-bold leading-none">
                {sellerStats?.totalRevenue} $
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* user info section */}
      <h3 className=" my-5 text-xl font-bold text-center">All Activities</h3>
      {/* user order info charts  section */}
      <section className=" text-black w-full flex items-center mx-5 overflow-auto justify-center pl-24">
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
