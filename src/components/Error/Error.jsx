import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center space-y-10">
            <h1 className=" text-7xl">Opps</h1>
            <Link to={'/'} className="btn btn-ghost"><button>Go to home</button></Link>
        </div>
    );
};

export default Error;