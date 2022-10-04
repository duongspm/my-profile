import React from 'react'
import "./Product.css";
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';
import NB from '../../img/nb.png';
import CV from '../../img/convert.png'
function Product() {
    return (
        <div>
            <div class="product">
                <div class="cardd">
                    <div class="card__top">
                        <div class="card__heart">
                            <AiOutlineHeart/>
                        </div>
                        <div class="card__cart">
                            <AiOutlineShoppingCart/>
                        </div>
                    </div>
                    <div class="card__img">
                        <img src={NB} alt=""/>
                    </div>
                    <div class="card__title">
                        New Balance 327
                    </div>
                    <div class="card__price">
                        $99.99
                    </div>
                    <div class="card__button">
                
                        <div class="card__size">
                        <h3>Size:</h3>
                        <span>10</span>
                        <span>12</span>
                        <span>13</span>
                        </div>
                        <div class="card__color">
                        <h3>Color:</h3>
                        {/* <span class="card__color__gray" style="background:#665945 ;"> </span>
                        <span class="card__color__gray" style="background:#D5CBB6 ;"> </span>
                        <span class="card__color__gray" style="background:#2F3644 ;"> </span>
                        <span class="card__color__gray" style="background:#D4CDC2 ;"> </span>
                        <span class="card__color__gray" style="background:#E4D8B2 ;"> </span> */}
                    
                        </div>
                        <div class="card__action">
                        <button>Buy Now</button>
                        <button>Buy Later</button>
                        </div>
                    </div>
                </div>

                <div class="cardd">
                <div class="card__top">
                        <div class="card__heart">
                            <AiOutlineHeart/>
                        </div>
                        <div class="card__cart">
                            <AiOutlineShoppingCart/>
                        </div>
                </div>
                <div class="card__img">
                    <img src={NB} alt=""/>
                </div>
                <div class="card__title">
                    New Balance 327
                </div>
                <div class="card__price">
                    $99.99
                </div>
                <div class="card__button">
            
                    <div class="card__size">
                    <h3>Size:</h3>
                    <span>10</span>
                    <span>12</span>
                    <span>13</span>
                    </div>
                    <div class="card__color">
                    <h3>Color:</h3>
                    {/* <span class="card__color__gray" style="background:#665945 ;"> </span>
                    <span class="card__color__gray" style="background:#D5CBB6 ;"> </span>
                    <span class="card__color__gray" style="background:#2F3644 ;"> </span>
                    <span class="card__color__gray" style="background:#D4CDC2 ;"> </span>
                    <span class="card__color__gray" style="background:#E4D8B2 ;"> </span>
          */}
                    </div>
                    <div class="card__action">
                    <button>Buy Now</button>
                    <button>Buy Later</button>
                    </div>
                </div>
                </div>

                <div class="cardd card1" >
                <div class="card__top">
                        <div class="card__heart">
                            <AiOutlineHeart/>
                        </div>
                        <div class="card__cart">
                            <AiOutlineShoppingCart/>
                        </div>
                </div>
                <div class="card__img">
                    <img src={CV} alt=""/>
                </div>
                <div class="card__title">
                    Run Star Hike High
                </div>
                <div class="card__price">
                    $120
                </div>
                <div class="card__button">
            
                    <div class="card__size">
                    <h3>Size:</h3>
                    <span>10</span>
                    <span>12</span>
                    <span>13</span>
                    </div>
                    <div class="card__color">
                    <h3>Color:</h3>
                    {/* <span class="card__color__gray" style="background:#665945 ;"> </span>
                    <span class="card__color__gray" style="background:#D5CBB6 ;"> </span>
                    <span class="card__color__gray" style="background:#2F3644 ;"> </span>
                    <span class="card__color__gray" style="background:#D4CDC2 ;"> </span>
                    <span class="card__color__gray" style="background:#E4D8B2 ;"> </span>
       */}
                    </div>
                    <div class="card__action">
                    <button>Buy Now</button>
                    <button>Buy Later</button>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Product
