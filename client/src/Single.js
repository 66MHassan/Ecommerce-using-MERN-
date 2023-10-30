
import { useContext } from 'react';
import AppContext from './context/Product';
import { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CurrencyFormater from './components/CurrencyFormater';
import Star from './components/Star';
import CartAmount from './components/CartAmount';
import { CartContext } from './context/CartContext';


const Single = () => {
  const [changeImage,setChangeImage]=useState([0]);

  const[amount,setAmount]=useState(1)
  const Api="https://api.pujakaitem.com/api/products";
  const {getSingleProduct,singleProduct,isLoadingSingle}=useContext(AppContext);
  const {addToCart}=useContext(CartContext);
  const {id}=useParams();

  useEffect(()=>{
    getSingleProduct(`${Api}?id=${id}`);
  },[])
  if(isLoadingSingle){
    return <div>.... Loading</div>
  }
  // Single Product destrcturing here
const{category,
  colors,
  company,
  description,
  featured,
  image,
  name,
  price,
  reviews,
  stars,
  stock}=singleProduct;

  //Code for changing Image 
  const changeit=(index)=>{
    setChangeImage(index)
  }


  // Code for increasing and Decreasing Amount
  const setIncreasing=()=>{
    amount<stock ? setAmount(amount+1):setAmount(stock);
  }
  const setDecreasing=()=>{
    amount>1 ? setAmount(amount-1):setAmount(1);
  }
  
  return (
    <>
    <div className="container mt-4">
      <div className="row">
        {/* Left Column - Product Data */}
        <div className="col-md-6">
          <h2>{name}</h2>
          {/* star Section */}
          <Star stars={stars} reviews={reviews} /><br />  
          <del>
            <CurrencyFormater price={price+250000}></CurrencyFormater>
          </del>
          <p>Deal of the Day: 
          <CurrencyFormater price={price}></CurrencyFormater>
          </p>
          <p>{description}</p>
          <p>Available : {stock>0 ? "In Stock" : "Not in Stock"}</p>
          <p>ID : {id}</p>
          <p>brand : {company}</p>
          <CartAmount amount={amount} setIncreasing={setIncreasing} setDecreasing={setDecreasing}/>
          <Link to='/Cart'><button className='btn btn-primary' onClick={()=>addToCart(id,amount,singleProduct)}>Add to Cart</button></Link>
          <hr className="custom-hr" />
          {/* Add more product information here */}
        </div>

        {/* Right Column - Product Images */}
        <div className="col-md-6 text-center">
        <h3>Product Images</h3>
        <div className='col-12' >
          <div className="row" >
          {image && image[changeImage]?.url && (
                <img src={image[changeImage].url} className='img-fluid singlepage-height' alt="product" />
              )}
          </div>
          </div>

          <div className='col-12'>
          <div className="row d-flex " >
            {image &&
              image.map((item,index)=>(
                  <div key={index} className="m-3" style={{width:"100px"}}>
                  <img src={item.url} style={{height:"100px" ,width:"100px"}} onMouseEnter={()=>changeit(index)} onMouseOut={()=>changeit(0)}  alt='Image' />
                  </div>
              )
              
              )
            }
          </div>
          </div>
          
          {/* <div className="row">
            <div className="col-md-4 mb-3">
              <img
                src={image[0].url}
                alt="Product Image 1"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src=""
                alt="Product Image 2"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src=""
                alt="Product Image 3"
                className="img-fluid"
              />
              </div>*/}
            {/* Add more product images here */} 
          {/* </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Single