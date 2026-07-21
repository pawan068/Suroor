import { Link } from "react-router-dom";

const SectionHeader = ({ title, to }) => {
  return (
    <div className="flex justify-between items-center mb-6">

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <Link
        to={to}
        className="text-green-500 hover:text-green-400"
      >
        See All
      </Link>

    </div>
  );
};

export default SectionHeader;