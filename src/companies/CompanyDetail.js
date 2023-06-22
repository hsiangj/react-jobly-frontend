import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";

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

  const {name, description, numEmployee, jobs} = company;

  return (
    <div>
      <h2>{name}</h2>
      {numEmployee
      ? <p>Employs {numEmployee} employees.</p>
      : null}
      <p>{description}</p>
      <h4>Jobs available at {name}:</h4>
    </div>
  )

}

export default CompanyDetail;