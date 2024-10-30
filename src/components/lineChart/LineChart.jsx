import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const mathMarksData = [
    {
      studentId: 1,
      studentName: "Alice",
      mathMark: 90,
      accountingMark: 85,
      financeMark: 88,
    },
    {
      studentId: 2,
      studentName: "Bob",
      mathMark: 82,
      accountingMark: 79,
      financeMark: 84,
    },
    {
      studentId: 3,
      studentName: "Charlie",
      mathMark: 91,
      accountingMark: 88,
      financeMark: 90,
    },
    {
      studentId: 4,
      studentName: "David",
      mathMark: 78,
      accountingMark: 82,
      financeMark: 80,
    },
    {
      studentId: 5,
      studentName: "Eva",
      mathMark: 94,
      accountingMark: 91,
      financeMark: 92,
    },
    {
      studentId: 6,
      studentName: "Frank",
      mathMark: 85,
      accountingMark: 87,
      financeMark: 86,
    },
    {
      studentId: 7,
      studentName: "Grace",
      mathMark: 96,
      accountingMark: 95,
      financeMark: 93,
    },
    {
      studentId: 8,
      studentName: "Henry",
      mathMark: 83,
      accountingMark: 80,
      financeMark: 82,
    },
    {
      studentId: 9,
      studentName: "Ivy",
      mathMark: 90,
      accountingMark: 92,
      financeMark: 89,
    },
    {
      studentId: 10,
      studentName: "Jack",
      mathMark: 78,
      accountingMark: 76,
      financeMark: 79,
    },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={mathMarksData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="mathMark" stroke="purple"></Line>
        <Line dataKey="accountingMark" stroke="green"></Line>
        <Line dataKey="financeMark" stroke="red"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
