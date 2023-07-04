import {useState, useContext, useEffect} from 'react';
import UserContext from '../UserContext';
import './JobCard.css';

const JobCard = ({id, title, name, salary, equity}) => {
  const {hasAppliedToJob, applyToJob} = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(function updateApplyStatus(){
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob])

  function apply(){
    applyToJob(id);
    setApplied(true);
  }


  return (
    <div className="JobCard">
      <h5>{title}</h5>
      <p>{name}</p>
      {salary && <div><small>Salary: {salary} </small></div>}
      {equity !== undefined && <div><small> Equity: {equity} </small></div>}
      <div className='JobCard-btn-div'>
        <button onClick={apply} disabled={applied}>
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
      
    </div>
   
  )
}

export default JobCard;