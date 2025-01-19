import React from "react";
import ovi from "../../src/assets/Images/profile.jpg"

const Team = () => {
  // Static data for 12 team members
  const teamMembers = Array(12).fill({
    name: "Maharav uddin sorker Ovi",
    email: "mahrav@ovi.gamil.com",
    // image: "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/434262183_2161174864218592_1316690371297996661_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGcJ8L4M_q_QX6FzLfJAEgoXw-eWlPp3ppfD55aU-nemtXZCOSagP2FEFhgbrpnemn-lnqITWKpKrFl3tTvLU2d&_nc_ohc=cGjnN-dAzMgQ7kNvgFtid7Z&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=ArIJPnEU_FtWBDv42zitbvT&oh=00_AYAYUKxhBYfuKaeerNB9G8boyFoSR8O0vYAV1n6jGykUIA&oe=6763659E", 
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold my-6">Meet Our Team</h1>
      <p className="text-center max-w-2xl text-gray-600 mb-6">
        Our team consists of talented and passionate individuals who are committed to delivering the best outcomes. Get to know the amazing people driving our success.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="card bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <div className="avatar">
              <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                <img src={ovi} alt={`${member.name}`} />
              </div>
            </div>
            <h2 className="text-lg font-semibold mt-4">{member.name}</h2>
            <p className="text-sm text-gray-500">{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
