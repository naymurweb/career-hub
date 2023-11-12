import React from 'react';

const AppledJobCard = ({job}) => {
    const {logo,job_title,remote_or_onsite}=job
    // console.log(job);
    return (

        <div className="card card-side bg-base-100 shadow-xl my-8">
        <figure><img src={logo} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className='text-blue-500'>{remote_or_onsite}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default AppledJobCard;