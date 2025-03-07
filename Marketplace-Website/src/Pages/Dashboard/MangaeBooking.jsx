import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";
import useAuth from "../../Hook/useAuth";
import UserRole from "../../Hook/UserRole";
import UseAxios from "../../Hook/UseAxios";
import Container from "../../Components/UI/Container";
import Loader from "../../Components/UI/Loader";

const MangaeBooking = () => {
  const Axios = UseAxios();
  const { user } = useAuth();
  const [role]=UserRole();
 
  const getBooking = async () => {
    const response = await Axios.get(`/user/booked`);
    return response;
  };
   const handleSubmitClick = () => {
     if (role === "student") {
       toast.error("Only moderators can Change.");
     }
   };

  const {
    data: booking,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Bookings"],
    queryFn: getBooking,
  });

  const { mutate } = useMutation({
    mutationKey: ["bookings"],
    mutationFn: async (id) => {
      const res = await Axios.delete(`/user/cancel-booking/${id}`);
      return res;
    },
    onSuccess: () => {
      toast("delete Done");
      refetch();
      QueryClient.invalidateQuries({ queryKey: ["myBooking"] });
    },
  });

  const { mutate:AcceptBooked } = useMutation({
    mutationKey: ["accepted"],
    mutationFn: async ({id, status = "Accepted"}) => {
      const response = await Axios.patch(`/user/bookings/status/${id}`, {
        status,
      });
      return response;
    },
    onSuccess: () => {
      toast(" Booking Accepted");
      refetch();
      QueryClient.invalidateQuries({ queryKey: ["accepted"] });
    },
  });

 

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <Container>
        <div className="overflow-x-auto  min-h-screen">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Booking ID</th>
                <th>Magazine ID</th>
                <th>Magazine name</th>
                <th>date of Booking</th>
                <th>Booking status</th>
                <th>Cancel Booking</th>
              </tr>
            </thead>
            <tbody>
              {booking?.data?.map((booked, index) => (
                <tr key={booked?._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{booked._id}</td>
                  <td>{booked?.magazineId}</td>
                  <td>{booked?.title}</td>
                  <td>{booked?.purchaseTime}</td>
                  <td onMouseEnter={() => handleSubmitClick()}>
                    {booked.status == "pending" ? (
                      <button
                        disabled={role === "student"}
                        onClick={() => AcceptBooked({ id: booked?._id })}
                        className="btn btn-primary"
                      >
                        {booked.status}
                      </button>
                    ) : (
                      <button
                        disabled={role === "student"}
                        onClick={() => AcceptBooked({ id: booked?._id })}
                        className="btn btn-success"
                      >
                        {booked.status}
                      </button>
                    )}
                  </td>
                  <td onMouseEnter={() => handleSubmitClick()}>
                    <button
                      disabled={role === "student"}
                      onClick={() => mutate(booked._id)}
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default MangaeBooking;
