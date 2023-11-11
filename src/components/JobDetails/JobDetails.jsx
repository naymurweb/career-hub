import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const id=useParams()
    const idx=parseInt(id.id)
    const items=useLoaderData()
    const item=items.find(data=>data.id===idx )
    const {job_title}=item
   
    return (
        <div className="container mx-auto">
            <h2 className="text-5xl my-5">{job_title}</h2>
            <button className="btn btn-primary">Apply Now</button>
        </div>
    );
};

export default JobDetails;