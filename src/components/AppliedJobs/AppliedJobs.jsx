import { useLoaderData } from "react-router-dom";
import { chackItem } from "../../uttils/localStroge";
import { useEffect, useState } from "react";
import AppledJobCard from "./AppledJobCard";

const AppliedJobs = () => {
  const [data, setData] = useState([]);

  const [display, setDisplay] = useState([]);

  const jobs = useLoaderData();

  const handleDisplay = (option) => {
    if (option === "all") {
      setDisplay(data);
    } else if (option === "remote") {
      const remoteData = data.filter((i) => i.remote_or_onsite === "Remote");
      setDisplay(remoteData);
    }
    else{
      const remoteData = data.filter((i) => i.remote_or_onsite === "Onsite");
      setDisplay(remoteData);

    }
  };

  useEffect(() => {
    const getItem = chackItem("item");

    if (jobs.length) {
      const jobApplied = jobs.filter((job) => getItem.includes(job.id));
      setData(jobApplied);
      setDisplay(jobApplied)
    }
  }, []);

  return (
    <div className="container mx-auto">
      <details className="dropdown">
        <summary className="m-1 btn">Filter By</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=>handleDisplay('all')}>
            <a>All</a>
          </li>
          <li onClick={()=>handleDisplay('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=>handleDisplay('onside')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      {display.map((job) => (
        <AppledJobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
export default AppliedJobs;
