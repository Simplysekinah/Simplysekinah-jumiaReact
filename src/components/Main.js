import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const Navigate = useNavigate()
    const [totalapi, settotalapi] = useState([])
    const [master, setmaster] = useState([])
    const phones=()=>{
        Navigate("/phone")
    }
    const laptop=()=>{
        Navigate("/laptop")
    }
    const fragrance=()=>{
        Navigate("/fragrance")
    }
    const groceries=()=>{
        Navigate("/groceries")
    }
    const homedecoration=()=>{
        Navigate("/homedecoration")
    }
    const skincare=()=>{
        Navigate("/skincare")
    }
    useEffect(() => {
      axios.get(" http://localhost:2456/products")
      .then((response)=>{
        console.log(response.data)
        settotalapi(response.data)
        // setmaster(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    }, [])
    const apifunction=(category)=>{
       let counter = 0
        return totalapi.map((element,index)=>{
                if(element.category === category ){
                    if (counter < 1) {
                        counter++
                        return (
                            <div key={index}>
                                <img className='category-img' src={element.thumbnail} alt="" />
                                <p>{element.category}</p>
                            </div>
                        )
                    }
                            
                 }
               
            
        })
    }
    useEffect(() => {
        axios.get(" http://localhost:2456/products")
        .then((response)=>{
          console.log(response.data)
        //   settotalapi(response.data)
          setmaster(response.data)
        })
        .catch((error)=>{
          console.log(error);
        })
      }, [])
    const imageApi= (category)=>{
        return master.map((element,index)=>{
                if (element.category === category ) {
                    return (
                        <div className='category-imgs' key={index}>
                            <img className='category-img' src={element.thumbnail} alt="" />
                            <p>{element.description}</p>
                            <p>₦{element.price}</p>
                            <p className='dis'>{element.discountPercentage}%</p>
                        </div>
                    )
                }
        })
}
    
  return (
    <>
       <div className='body-div'>
            <div>
                <img src={require('../images/JA-brands-top-strip.gif')} alt="" />
            </div>
            <div className='upper-nav'>
                <div className='jumia-sell'>
                    <div><i class="fa raty fa-star"></i></div>
                    <a href="" className='sell'>Sell on Jumia</a>
                </div>
                <div>
                    <div className='jumia-word'>
                        <h3>Jumia</h3>
                        <div><i class="fa raty fa-star"></i></div>
                    </div>
                </div>
            </div>
            <nav className='navbar'>
                <div className='nav-sub'>
                    <div className='jumia-word'>
                        <h3>Jumia</h3>
                        <div><i class="fa raty fa-star"></i></div>
                    </div>
                    <div className='navsection'>
                        <div className='main-input'>
                            <div className='input-div'>
                                <i class="fa fa-magnifying-glass"></i>
                                <input type="text" placeholder='Search products,brands and categories' className='div-input' />
                            </div>
                            <button className='search-button'>Search</button>
                        </div>
                        <ul className='nav-listing'>
                            <li>
                                <i class="fa fa-user"></i>
                                <a href="" className='list1'>Account</a>
                            </li>
                            <li>
                                <i class="fa fa-user"></i>
                                <a href="" className='list2'>Help</a>
                            </li>
                            <li>
                            <i class="fa fa-user"></i>
                                <a href="" className='list2'>Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            <div className='main-body'>
                <div className='big-div'>
                    <div className='left-div'>
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Supermarket</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Health & Beauty</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Home & Office</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Appliances</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Phones & Tablets</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Computing</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Electronics</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Fashion</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Baby Products</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Gaming</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Sporting Goods</span>
                        </a>
                        <br />
                        <a href="">
                            <i class="fa fa-user"></i>
                            <span>Other Categories</span>
                        </a>
                    </div>
                    <div className='right-div'>
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={require('../images/carousel1.jpg')} className="img1 d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../images/carousel2.jpg')} className="img1 d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../images/carousel3.jpg')} className="img1 d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../images/carousel4.png')} className="img1 d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../images/carousel5.jpg')} className="img1 d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../images/carousel6.jpg')} className="img1 d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='side-div'>
                        <div>
                            <img src={require('../images/side-img.jpg')} alt="" className='img-sm' />
                        </div>
                        <div>
                            <img src={require('../images/side-img1.png')} alt="" className='img-sm1' />
                        </div>
                    </div>
                </div> 
            </div>
            <div className='second-div'>
                <div className='sub-second'>
                     <div onClick={phones}>{apifunction('smartphones')}</div>
                     <div onClick={laptop}>{apifunction("laptops")}</div>
                     <div onClick={fragrance}>{apifunction("fragrances")}</div>
                     <div onClick={skincare}>{apifunction("skincare")}</div>
                     <div onClick={groceries}>{apifunction("groceries")}</div>
                     <div onClick={homedecoration}>{apifunction("home-decoration")}</div>
                </div>
                <div className='subs-second'>
                {apifunction("Refrigerator")}
                {apifunction("Mobile Accessories")}
                {apifunction("generator")}
                {apifunction("men sneakers")}
                {apifunction("watches")}
                {apifunction("clearance sales")}
                </div>
                <div className='big'>
                    <div className='phones-divs'>
                            <div className='upper-div'>
                                    <p>Phone Deals</p>
                            </div>
                            <div className='phonebig-div'>{imageApi("fragrances")}</div>
                    </div>
                    <div className='phones-divs'>
                            <div className='upper-div'>
                                    <p>Phone Deals</p>
                            </div>
                            <div className='phonebig-div'>{imageApi("smartphones")}</div>
                    </div>
                    <div className='phones-divs'>
                            <div className='upper-div'>
                                    <p>Phone Deals</p>
                            </div>
                            <div className='phonebig-div'>{imageApi("laptops")}</div>
                    </div>
                    <div className='phones-divs'>
                            <div className='upper-div'>
                                    <p>Phone Deals</p>
                            </div>
                            <div className='phonebig-div'>{imageApi("skincare")}</div>
                    </div>
                    <div className='phones-divs'>
                            <div className='upper-div'>
                                    <p>Phone Deals</p>
                            </div>
                            <div className='phonebig-div'>{imageApi("groceries")}</div>
                    </div>
                    <div className='phones-divs'>
                            <div className='upper-div'>
                                    <p>Phone Deals</p>
                            </div>
                            <div className='phonebig-div'>{imageApi("home-decoration")}</div>
                    </div>
                </div>
                
            </div>
        </div> 
    </>
  )
}

export default Main