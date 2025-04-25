import React, { useContext } from "react";
import { DoctorAppointmentContaxt } from "../../Pages/Root";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BookingList = ({ filteredDoctor }) => {
  const { handleRemove } = useContext(DoctorAppointmentContaxt);
  // console.log(filteredDoctor);
  // charts
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <>
      <section className="flex py-8  bg-white rounded-2xl max-w-7xl mx-auto justify-center items-center">
        <ResponsiveContainer width='100%'
          height={300}>

        <BarChart
          
          data={filteredDoctor}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            tickFormatter={(name) => name.split(" ")[1] || name}
          />
          <YAxis></YAxis>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
          <Tooltip></Tooltip>
          <Bar
            dataKey="fee"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {filteredDoctor.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
        </ResponsiveContainer>
       
      </section>
      <div className="card-body py-4 px-0 max-w-7xl mx-auto">
        <div className="my-8 space-y-4">
          <h1 className=" text-4xl font-extrabold text-center">
            My Today Appointments
          </h1>
          <p className="text-base text-[#0F0F0F99] font-normal text-center w-4/5 mx-auto mt2">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
        {filteredDoctor.map((doctor) => (
          <div key={doctor.id} className=" bg-white p-4 my-2 rounded-2xl  ">
            <div className="md:flex justify-between items-center  pb-4 border-b-2  border-dashed border-[#0F0F0F30]">
              <div>
                <h1 className=" text-xl font-bold text-[#0F0F0F]">
                  {doctor.name}
                </h1>
                <p className=" text-base font-medium text-[#0F0F0F98]">
                  {doctor.education}
                </p>
              </div>
              <div className="md:border-none border-t-2 border-dashed border-gray-300">
                <p className=" text-base font-medium text-[#0F0F0F98]">
                  Appointment Fee: {doctor.fee} Taka + Vat
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(doctor)}
              className=" mt-4 btn rounded-full border border-[#FF0000] text-red-500 w-full mx-auto flex justify-center items-center"
            >
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookingList;
