import { FaCheck } from "react-icons/fa";
const Feature = ({ features }) => {
  return (
    <div>
      {/* <p>{features}</p> */}
      <p className="items-center">
        <FaCheck className="text-green-400"></FaCheck> {features}
      </p>
    </div>
  );
};

export default Feature;
