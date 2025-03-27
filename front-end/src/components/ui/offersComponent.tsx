import React from 'react'
import useJobs from '../../hooks/useJobs'

export default function OffersComponent({ userId }: any) {

    const { jobs, loading, error, applyForJob, saveOffer } = useJobs();

    if (loading) return <p>Loading jobs...</p>;
    if (error) return <p>Errodr: {error}</p>;

  return (
    <>
        {jobs.map((job, index) => (
            <div key={index}  className="bg-white p-4 rounded shadow flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold"> {job.title} </h3>
                    <p className="text-gray-600"> {job.desc} </p>
                </div>
                <div className=' flex justify-center items-center gap-3'>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded"  onClick={() => applyForJob(userId, job._id)}>Apply</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded"  onClick={() => saveOffer(userId, job._id)}>save</button>
                </div>
            </div>
        ))}
    </>
  )
}
