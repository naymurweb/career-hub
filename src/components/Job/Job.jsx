import PropTypes from "prop-types";
const Job = ({ job }) => {
  const {
    company_name,
    logo,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className=" card-compact  bg-base-100 shadow-xl p-4 border border-gray-200">
      <figure className="flex justify-start pl-4">
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <small>{company_name}</small>
        <div className="flex gap-4">
          <button className="btn btn-outline ">{remote_or_onsite}</button>
          <button className="btn btn-outline ">{job_type}</button>
        </div>

        <div className="flex ">
          <p className="w-1/4">{location}</p>
          <p className="w-1/2">{salary}</p>
        </div>

        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
