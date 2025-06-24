import { Link } from "react-router-dom";

const Student_Visa = ({ student }) => {
  const { id, region, countries, description, image } = student;

  return (
    <div className="card card-compact h-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={`${region} photo`} className="object-cover h-48 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#005a31]">{region}</h2>
        <h3 className="text-md font-semibold text-[#005a31]">
          Countries: {countries.join(", ")}
        </h3>
        <p className="text-gray-700">{description}</p>
        <div className="card-actions">
          <Link to={`/university_details/${id}`}>
            <button className="btn text-lg bg-white text-[#005a31] border-[1.5px] border-[#005a31] hover:bg-[#005a31] hover:text-white hover:shadow-lg hover:shadow-[#005a31] transition-all duration-300 px-6 py-2 rounded-md">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Student_Visa;
