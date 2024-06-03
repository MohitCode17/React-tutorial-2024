const Profile = ({ person, size }) => {
  return (
    <img
      style={{ objectFit: "cover", objectPosition: "top", marginRight: "20px", borderRadius: "50%" }}
      src={person.imageUrl}
      width={size}
      height={size}
      alt={person.name}
      title={person.name}
    />
  );
};

export default Profile;
