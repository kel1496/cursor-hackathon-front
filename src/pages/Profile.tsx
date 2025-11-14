import Nav from "../components/Nav";

const Profile = () => (
  <div className="mx-auto flex flex-col items-center pb-20 min-h-screen bg-gray-900">
    <div className="max-w-md w-full p-6 border-4 border-gray-600 bg-gray-800">
    <div className="flex flex-col items-center">
      <img
          src="/3.png"
          alt=""
        className="w-24 h-24 border-4 border-gray-600 mb-4 pixel-art"
        style={{ imageRendering: "pixelated" }}
      />
      <h2 className="text-2xl font-bold text-white">John Doe</h2>
      <p className="text-gray-400 my-2">john.doe@email.com</p>
    </div>
    </div>
    <Nav />
  </div>
);

export default Profile;

