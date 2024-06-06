const ProductCard = ({ title, description, image }) => {
  return (
    <div>
      <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
        <img
          src={image}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            Shop Now &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
