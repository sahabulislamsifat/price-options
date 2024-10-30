import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {
  const optionPrice = [
    {
      id: 1,
      name: "Basic",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "One free fitness assessment",
        "Open gym hours only",
        "Standard customer support",
        "Access to basic cardio and weight training areas",
        "Free water refill station access",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Two free fitness assessments",
        "Access to group classes",
        "10% discount on merchandise",
        "Extended gym hours access",
        "Standard customer support",
        "Access to indoor track",
        "One guest pass per month",
        "Free water refill station access",
        "Access to functional training area",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 69.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness assessments",
        "Access to all group classes",
        "Access to sauna and spa",
        "20% discount on merchandise",
        "Priority support",
        "24/7 gym access",
        "Unlimited guest passes",
        "Free towel service",
        "Access to pool and jacuzzi",
        "Access to personal training sessions at a discounted rate",
        "Exclusive access to private locker rooms",
        "Free monthly body composition analysis",
        "Complimentary nutritional guidance",
        "Priority booking for classes and events",
      ],
    },
  ];

  return (
    <div className="mr-12">
      <h2 className="text-2xl bg-violet-500 p-4 ">
        This is the Best Price Option
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {optionPrice.map((Option) => (
          <PriceOption key={Option} OPTION={Option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
