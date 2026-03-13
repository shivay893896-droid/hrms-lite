import { Link } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", attendance: 18 },
  { day: "Tue", attendance: 20 },
  { day: "Wed", attendance: 17 },
  { day: "Thu", attendance: 21 },
  { day: "Fri", attendance: 19 },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">

      {/* Welcome Banner */}
      <div className="col-span-12">
        <div className="bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold">
            Workforce Overview
          </h1>
          <p className="opacity-90 mt-1">
            Monitor employees and attendance performance
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border">
          <p className="text-sm text-gray-500">Total Employees</p>
          <h2 className="text-2xl font-bold mt-1">24</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border">
          <p className="text-sm text-gray-500">Present Today</p>
          <h2 className="text-2xl font-bold text-green-600 mt-1">18</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border">
          <p className="text-sm text-gray-500">Attendance Rate</p>
          <h2 className="text-2xl font-bold text-brand-600 mt-1">75%</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border">
          <p className="text-sm text-gray-500">Departments</p>
          <h2 className="text-2xl font-bold mt-1">4</h2>
        </div>

      </div>

      {/* Attendance Chart */}
      <div className="col-span-12 lg:col-span-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border">
          <h3 className="text-lg font-semibold mb-4">
            Weekly Attendance
          </h3>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={data}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="attendance" fill="#465FFF" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>

      {/* Quick Actions */}
      <div className="col-span-12 lg:col-span-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border">
          <h3 className="text-lg font-semibold mb-4">
            Quick Actions
          </h3>

          <div className="flex flex-col gap-3">

            <Link
              to="/employees"
              className="p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
            >
              Add Team Member
            </Link>

            <Link
              to="/attendance"
              className="p-4 rounded-lg bg-green-50 hover:bg-green-100 transition"
            >
              Record Attendance
            </Link>

          </div>
        </div>
      </div>

    </div>
  );
}