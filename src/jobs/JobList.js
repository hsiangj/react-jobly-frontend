import { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JobCard from "./JobCard";
import SearchForm from "../SearchForm";

const JobList = () => {
  const [jobs, setJobs] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function getAllJobs(){
      search();
    }
    getAllJobs();   
  }, [])

  const search = async (searchTerm) => {
    let result = await JoblyApi.getAllJobs(searchTerm);
    setJobs(result);
    setIsLoading(false);
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>
  }

  return (
    <div>
    <SearchForm search={search}/>
    {jobs.length
      ? (
        jobs.map(job => 
          <JobCard 
            key={job.id}
            title={job.title}
            name={job.companyName}
            salary={job.salary}
            equity={job.equity}
           />
          
          )
        )
      : (
        <p>Sorry, no results found!</p>
      ) }
    
      
  </div>
  )
}

export default JobList;