import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../context/ProductContext";
import PageNavigation from "../components/PageNavigation";
import { Container } from "../styles/Container";
import { FormatPrice } from "../helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import ToggleQuantity from "../components/ToggleQuantity";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/CartContext";



const SingleProduct = ()=>{
  const temp = useParams();
  const {id} = temp;
  const context = useProductContext();
  const {getSingleProduct} = context;
  let {isLoading} = context.state;
  const [quantity,setQuantity] = useState(0);
  const [top, setTop] = useState(null);
  const singleProduct = context?.state?.singleProduct;
  const {name,company,description,image,price} = singleProduct;
  const cartContext = useCartContext();
  const {addToCart} = cartContext;
  
   useEffect(() => {
    if(context.state.products && context.state.products.length>0){
      getSingleProduct(id);
    }
  }, [context.state.products,id]);

  const increaseQuantity = ()=>{
    setQuantity((prev)=>prev+1);
  }
  const decreaseQuantity = ()=>{
    if(quantity === 0)return;
    setQuantity((prev)=>prev-1);
  }
  const handleAddToCart = ()=>{
    addToCart(singleProduct,quantity);
  }
 
  
  
  return (
    <Wrapper>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <>
          <PageNavigation setTop={setTop}  className="page--navigation--element" name={name} />
          <Container className="container">
            <div  className="grid grid-two-column">
              <div className="product_images">
                <img src={image} />
              </div>

              <div className="product-data">
                <h2>{name}</h2>

                <p className="product-data-price">
                  MRP:
                  <del>
                    <FormatPrice price={price + 5000} />
                  </del>
                </p>
                <p className="product-data-price product-data-real-price">
                  Deal of the Day : <FormatPrice price={price} />
                </p>
                <p>{description}</p>
                <div className="product-data-warranty">
                  <div className="product-warranty-data">
                    <TbTruckDelivery className="warranty-icon" />
                    <p>Free Delivery</p>
                  </div>

                  <div className="product-warranty-data">
                    <TbReplace className="warranty-icon" />
                    <p>30 Days Replacement</p>
                  </div>

                  <div className="product-warranty-data">
                    <TbTruckDelivery className="warranty-icon" />
                    <p>Thapa Delivered </p>
                  </div>

                  <div className="product-warranty-data">
                    <MdSecurity className="warranty-icon" />
                    <p>2 Year Warranty </p>
                  </div>
                </div>
                <div className="product-data-info">
                  <p>
                    Brand :<span> {company} </span>
                  </p>
                </div>

                {quantity === 0 && (
                  <Button onClick={() => increaseQuantity()}>
                    Add to Cart{" "}
                  </Button>
                )}
                {quantity > 0 && (
                  <>
                    <ToggleQuantity
                      quantity={quantity}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                    />
                    <Button onClick={handleAddToCart}>
                      <NavLink to={"/cart"}>Add To Cart</NavLink>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Container>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product_images img{
    width:90%;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    h2{
     text-transform: capitalize;
    }

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
        text-transform: capitalize;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
