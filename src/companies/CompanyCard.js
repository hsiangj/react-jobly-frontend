import {Link} from 'react-router-dom';
import './CompanyCard.css';

const CompanyCard = ({name, description, handle}) => {
  return (
    <Link className="CompanyCard" to={`/companies/${handle}`}>
      <div className="CompanyCard-body">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Link>
    
  )
}

export default CompanyCard;