import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Phones = () => {
  const [mobile, setMobile] = useState([]);

  //   useEffect(() => {
  //     fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
  //       .then((response) => response.json())
  //       .then((data) => setMobile(data.data));
  //   }, []);

  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    // .then(data => console.log(data.data.data))
    // .then(data => setMobile(data.data.data))
    .then((data) => {
      const phoneData = data.data.data;
      const phoneWithFakeData = phoneData.map((phone) => {
        const object = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split("_")[1]),
        };
        return object;
      });
      //   console.log(phoneWithFakeData);
      setMobile(phoneWithFakeData);
    });
  return (
    <div>
      <h2 className="text-2xl font-bold">Mobile : {mobile.length}</h2>

      <BarChart
        width={700}
        height={500}
        data={mobile}
        margin={{
          top: 5,
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
        <Bar
          dataKey="price"
          fill="#8884d8"
          activeBar={<Rectangle fill="green" stroke="blue" />}
        />
        <Bar
          dataKey="price"
          fill="#82ca9d"
          activeBar={<Rectangle fill="red" stroke="purple" />}
        />
      </BarChart>
    </div>
  );
};

export default Phones;
