import { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../SearchForm";

const CompanyList = () => {
  const [companies, setCompanies] = useState();
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    function getAllCompanies() {
      search();
      console.log('RENDERING INSIDE USEEFFECT')
    }
    getAllCompanies();
  }, [])
  
  const search = async (searchTerm) => {
    let companies = await JoblyApi.getAllCompanies(searchTerm);
    setCompanies(companies);
    setIsLoading(false);
    
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>
  }

  return (
    <div>
      <SearchForm search={search}/>
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