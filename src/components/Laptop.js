import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Laptop = () => {
    const [master, setmaster] = useState([])
    useEffect(() => {
        axios.get(" http://localhost:2456/products")
        .then((response)=>{
          console.log(response.data)
          setmaster(response.data)
        })
        .catch((error)=>{
          console.log(error);
        })
      }, [])
      const imagethl= (category)=>{
        return master.map((element,index)=>{
                if (element.category === category ) {
                    return (
                        <div key={index}>
                            <img className='category-img' src={element.thumbnail} alt="" />
                            <p>{element.category}</p>
                            <p></p>
                        </div>
                    )
                }
        })
}
    const imageApi= (category)=>{
            return master.map((element,index)=>{
                    if (element.category === category ) {
                        return (
                            <div key={index}>
                                <img className='category-img' src={element.images[0]} alt="" />
                                <p>{element.category}</p>
                                <p>{element.description}</p>
                                <p>{element.price}</p>
                                <p></p>
                            </div>
                        )
                    }
            })
    }
    const imageApi1= (category)=>{
        return master.map((element,index)=>{
                if (element.category === category ) {
                    return (
                        <div key={index}>
                            <img className='category-img' src={element.images[1]} alt="" />
                            <p>{element.category}</p>
                            <p>{element.description}</p>
                            <p>{element.price}</p>
                            <p></p>
                        </div>
                    )
                }
        })
}
const imageApi2= (category)=>{
    return master.map((element,index)=>{
            if (element.category === category ) {
                return (
                    <div key={index}>
                        <img className='category-img' src={element.images[2]} alt="" />
                        <p>{element.category}</p>
                        <p>{element.description}</p>
                        <p>{element.price}</p>
                        <p></p>
                    </div>
                )
            }
    })
}
const imageApi3= (category)=>{
    return master.map((element,index)=>{
            if (element.category === category ) {
                return (
                    <div key={index}>
                        <img className='category-img' src={element.images[3]} alt="" />
                        <p>{element.category}</p>
                        <p>{element.description}</p>
                        <p>{element.price}</p>
                        <p></p>
                    </div>
                )
            }
    })
}
const imageApi4= (category)=>{
    return master.map((element,index)=>{
            if (element.category === category ) {
                return (
                    <div key={index}>
                        <img className='category-img' src={element.images[4]} alt="" />
                        <p>{element.category}</p>
                        <p>{element.description}</p>
                        <p>{element.price}</p>
                        <p></p>
                    </div>
                )
            }
    })
}
  return (
    <>
       <div div className='body-div'>
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
            <div className='mains-body'>
                <div className='big'>
                    <div className='phone-div'>
                            <div className='upper-div'>
                                <p>Limited Stock Deals</p>
                                <p>see more</p>
                            </div>
                            <div className='phonebig-div'>{imagethl("laptops")}</div>
                    </div>
                    <div className='phone-divs'>
                            <div className='upper-div'>
                                    <p>Phone Deals</p>
                            </div>
                            <div className='phonebig-div'>{imageApi("laptops")}</div>
                    </div>
                    <div className='phone-divs'>
                            <div className='upper-div'>
                                    <p>Top Deals</p>
                            </div>
                            <div className='phonebig-div'>{imageApi1("laptops")}</div>
                    </div>
                    <div className='phone-divs'>
                            <div className='upper-div'>
                                    <p>Official Store</p>
                            </div>
                            <div className='phonebig-div'>{imageApi2("laptops")}</div>
                    </div>
                    <div className='phone-divs'>
                            <div className='upper-div'>
                                    <p>Smartphones</p>
                            </div>
                            <div className='phonebig-div'>{imageApi3("laptops")}</div>
                    </div>
                    <div className='phone-divs'>
                            <div className='upper-div'>
                                    <p>Phone Deals</p>
                            </div>
                            <div className='phonebig-div'>{imageApi4("laptops")}</div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Laptop