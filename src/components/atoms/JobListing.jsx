/* eslint-disable react/prop-types */
const JobListing = ({ job }) => {
  return (
    <div key={job.id} className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{job.description}</div>

        <h3 className="text-teal-600 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-gray-700 mb-3">
            <i className="fa-solid fa-location-dot text-lg"></i>
            {job.location}
          </div>
          <a
            href={`/job/${job.id}`}
            className="h-[36px] bg-teal-900 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
