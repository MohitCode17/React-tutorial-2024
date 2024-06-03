import Profile from "./Profile";

const Gallery = () => {
  return (
    <div>
      <Profile
        person={{
          name: "Rohit Sharma",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25uhv3LIGyCcgSljUsZiFB_t9B_HjZ13kIg&s",
        }}
        size={200}
      />

      <Profile
        person={{
          name: "Lionel Messi",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
        }}
        size={200}
      />

      <Profile
        person={{
          name: "Virat Kohli",
          imageUrl:
            "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
        }}
        size={200}
      />
    </div>
  );
};

export default Gallery;
