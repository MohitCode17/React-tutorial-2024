const List = () => {
  const people = [
    {
      id: 0,
      name: "Rohit Sharma",
      profession: "Cricketer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25uhv3LIGyCcgSljUsZiFB_t9B_HjZ13kIg&s",
    },
    {
      id: 1,
      name: "Lionel Messi",
      profession: "Footballer",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    },
    {
      id: 2,
      name: "Narendra Modi",
      profession: "Politician",
      img: "https://s7d1.scene7.com/is/image/wbcollab/India_PM_Narendra_Modi-2?qlt=90&fmt=webp&resMode=sharp2",
    },
    {
      id: 3,
      name: "Virat Kohli",
      profession: "Cricketer",
      img: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
    },
  ];
  return (
    <div>
        <h1>Greatest Personality:</h1>
      {people.map((item) => (
        <div key={item.id} style={{ border: "1px solid black", display: "flex", gap: "10px" }}>
          <img
            src={item.img}
            alt={item.name}
            title={item.name}
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          <div>
            <h2>{item.name}</h2>
            <p style={{marginTop: "-20px"}}>Profession: {item.profession}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
