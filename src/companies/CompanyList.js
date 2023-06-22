import { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";

const CompanyList = () => {
  const [companies, setCompanies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllCompanies() {
      let companies = await JoblyApi.getAllCompanies();
      setCompanies(companies);
      setIsLoading(false);
    }
    getAllCompanies();
  }, [])
  
  if (isLoading) {
    return <p>Loading &hellip;</p>
  }

  return (
    <div>
    
      {companies.map(company => 
        <CompanyCard 
          key={company.handle}
          name={company.name}
          handle={company.handle}
          description={company.description}
          logoUrl={company.logoUrl} />
        )}
    </div>
  )
}

export default CompanyList;