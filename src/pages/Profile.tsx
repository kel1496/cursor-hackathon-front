import Nav from "../components/Nav";

const Profile = () => (
  <div className="w-[360px] h-[700px] mx-auto my-10 flex flex-col items-center pb-20">
    <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-white">
    <div className="flex flex-col items-center">
      <img
        src="https://ui-avatars.com/api/?name=J+D"
        alt=""
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold">John Doe</h2>
      <p className="text-gray-600 my-2">john.doe@email.com</p>
    </div>
    </div>
    <Nav />
  </div>
);

export default Profile;

