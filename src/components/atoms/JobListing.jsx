/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div key={job.id} className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-1">{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-teal-500 mb-4 hover:text-teal-700"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-cyan-600 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-gray-600 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>
          <a
            href={`/job/${job.id}`}
            className="h-[36px] bg-teal-900 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
