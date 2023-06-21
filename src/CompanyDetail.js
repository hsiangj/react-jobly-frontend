import { useParams } from "react-router-dom";

const CompanyDetail = () => {
  const {name} = useParams();

  return (
    <div>
      This is {name}
    </div>
  )

}

export default CompanyDetail;