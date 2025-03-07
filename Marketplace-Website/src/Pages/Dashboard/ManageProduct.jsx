import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import UserRole from "../../Hook/UserRole";
import UseAxios from "../../Hook/UseAxios";
import Container from "../../Components/UI/Container";

const ManageProduct = () => {
    const [role] = UserRole();
    const Axios = UseAxios();

    const handleSubmitClick = () => {
       if (role === "student") {
         toast.error("Only moderators can delete.");
       }
    };

  
  const getServices = async () => {
    const response = await Axios.get(`/user/products`);
    return response;
  };
  const {
    data: services,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  const { mutate } = useMutation({
    mutationKey: ["services"],
    mutationFn: async (id) => {
      const res = await Axios.delete(`/user/cancel-Product/${id}`);
      return res;
    },
    onSuccess: () => {
      toast("delete Done");
      refetch();
      QueryClient.invalidateQuries({ queryKey: ["services"] });
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
                <th>Product Name</th>
                <th>Product price</th>
                <th>Product Descriptions</th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {services?.data?.result.map((equipment, index) => (
                <tr key={equipment._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{equipment?.title}</td>
                  <td>{equipment?.price}</td>
                  <td>{equipment?.description}</td>
                  <td className="flex justify-around items-center gap-3">
                    <Link to={`/dashboard/update-Product/${equipment?._id}`}>
                      <button className="btn btn-warning">Update</button>
                    </Link>
                    <button
                      onMouseEnter={() => handleSubmitClick()}
                      disabled={role==="student"}
                      onClick={() => mutate(equipment?._id)}
                      className="btn btn-secondary"
                    >
                      Delete
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

export default ManageProduct;
