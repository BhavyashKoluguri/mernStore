
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    
const params = useParams();
console.log(params);



  return (
    <div>
      Hello this is Details Page.
    </div>
  );
}

export default DetailsPage;
