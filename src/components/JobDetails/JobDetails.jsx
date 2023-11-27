import { useLoaderData, useParams } from "react-router-dom";
import { setLocalStr } from "../../uttils/localStroge";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const JobDetails = () => {
  const [click, setClick] = useState(false);
  const id = useParams();
  const idx = parseInt(id.id);
  const items = useLoaderData();
  const item = items.find((data) => data.id === idx);
  const { job_title } = item;

  const handleClick = () => {
    setLocalStr(idx);
    toast("successfully apply");
    setClick(true);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-5xl my-5">{job_title}</h2>
      <button
        className={`btn btn-primary `}
        disabled={click}
        onClick={handleClick}
      >
        Apply Now
      </button>
      <ToastContainer />
      <HelmetProvider>
                <Helmet>
                    <title>jobDetails</title>
                </Helmet>
            </HelmetProvider>
    </div>
  );
};

export default JobDetails;
