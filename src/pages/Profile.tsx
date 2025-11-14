const user = {
  nombre: "Juan Pérez",
  email: "juan.perez@email.com",
  bio: "Desarrollador Full Stack apasionado por la tecnología y el aprendizaje continuo.",
  avatar: "https://ui-avatars.com/api/?name=Juan+Pérez"
};

const Profile = () => (
  <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white">
    <div className="flex flex-col items-center">
      <img
        src={user.avatar}
        alt="Avatar"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold">{user.nombre}</h2>
      <p className="text-gray-600 my-2">{user.email}</p>
      <p className="italic text-center">{user.bio}</p>
    </div>
  </div>
);

export default Profile;

