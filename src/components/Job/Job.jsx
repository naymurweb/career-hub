import PropTypes from "prop-types";
const Job = ({ job }) => {
  const { company_name } = job;
  return (
    <div>
      <h1>{company_name}</h1>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
