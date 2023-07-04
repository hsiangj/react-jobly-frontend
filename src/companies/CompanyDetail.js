import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCard from "../jobs/JobCard";

const CompanyDetail = () => {
  const {companyHandle} = useParams();
  const [company, setCompany] = useState();
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    async function getCompany() {
      let response = await JoblyApi.getCompany(companyHandle);
      setCompany(response);
      setIsLoading(false);
    }
    getCompany();
  }, [companyHandle])

  if (isLoading) {
    return <p>Loading &hellip;</p>
  }

  const {name, description, numEmployees, jobs} = company;
  
  return (
    <div>
      <h2>{name}</h2>
      {numEmployees
      ? <p>Employs {numEmployees} employees.</p>
      : null}
      <p>{description}</p>
      <h4>Jobs available at {name}:</h4>
      {jobs.length
        ? (jobs.map(job =>
          <JobCard
          key={job.id}
          id={job.id} 
          title={job.title} 
          equity={job.equity}
          salary={job.salary} />
        ))
      : (<p>Currently no jobs available. </p>)}
    </div>
  )

}

export default CompanyDetail;