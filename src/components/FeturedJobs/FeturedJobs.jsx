import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 mt-8 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center my-5">
        <button
          className={`btn btn-primary ${
            dataLength === jobs.length && "hidden"
          }`}
          onClick={() => setDataLength(jobs.length)}
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeturedJobs;
