
import './JobCard.css';

const JobCard = ({title, name, salary, equity}) => {
  return (
    <div className="JobCard">
      <h5>{title}</h5>
      <p>{name}</p>
      {salary && <div><small>Salary: {salary} </small></div>}
      {equity !== undefined && <div><small> Equity: {equity} </small></div>}
    </div>
   
  )
}

export default JobCard;