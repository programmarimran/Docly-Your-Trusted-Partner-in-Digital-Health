import { useContext } from "react";
import InitialBooking from "../Components/InitialBooking/InitialBooking";
import { DoctorAppointmentContaxt } from "./Root";
import { useLoaderData } from "react-router";
import BookingList from "../Components/BookingList/BookingList";
import { Helmet } from "react-helmet-async";

const Bookings = () => {
  const { doctors } = useLoaderData();
  const { bookings } = useContext(DoctorAppointmentContaxt);
  const filteredDoctor = doctors.filter((doctor) => bookings.includes(doctor.id));
  // console.log(filteredDoctor);

  return (
    <>
    <Helmet>
      <title>Docly|BookingPage</title>
    </Helmet>
      {filteredDoctor.length > 0 ? (
        
        <BookingList filteredDoctor={filteredDoctor}></BookingList>
      ) : (
        <InitialBooking></InitialBooking>
      )}
    </>
  );
};

export default Bookings;
