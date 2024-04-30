
import './MainContent.css'
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';



const MainContent = () => {

  const {isLoading, data} = useProductContext();
  

  return (
<>

<div className='main_container'>
  <div className='maincontent'>
    <div className='information'>
        <h4>Showing:</h4>
        <p>1-2 products of 2 products</p>
    </div>
    <div className='dropdown'>
      <h4>Sort by</h4>
      <form action='#'>
      <label htmlFor="cars"></label>
        <select id="cars" name="cars" className='dropList'>
            <option value="new">Newest First</option>
            <option value="highest">Price High to Low</option>
            <option value="lowest">Price Low to High</option>
        </select>
      </form>
    </div>

  </div>
<div className='image-container'>



{isLoading?<h1> ...Loading </h1>: data.slice(0,6).map((img,i)=>{
 return <div className='images' key={i}>
  <Link to={`/home/${img.id}`} >
  <img src={img.image} alt='shoes' className='img'/>
  </Link>
  <div className='image-info'>
    <a href='/'>{img.company}</a> 
    <div className='info'>
      <p>{img.description.slice(0,150)}</p>

    </div>
  </div>  
  <div className='price-info-rating'>
    <h2>${img.price}</h2>
    <p>4.2 <FcRating /></p>
    </div>  
</div>
})}
  </div>

  
  


</div>

</>
  );
}

export default MainContent;
