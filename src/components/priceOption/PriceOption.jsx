import Feature from "../Features/Feature";

const PriceOption = ({ OPTION }) => {
  const { name, price, features } = OPTION;
  return (
    <div className=" bg-blue-500 my-6 py-3 rounded-xl text-center text-white">
      <h2>
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>

      <div className="mr-40 ">
        {features.map((feature, index) => (
          <Feature key={index} features={feature}></Feature>
        ))}
          </div>
          <button className="bg-green-600 w-full p-2 text-xl font-bold">Buy Now</button>
    </div>
  );
};

export default PriceOption;
