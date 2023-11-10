import  { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
//   console.log(jobs); 
  return (
    <div>
      {
        jobs.map(job=><Job key={job.id} job={job}></Job>)
      }
    </div>
  );
};

export default FeturedJobs;
