import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Admin = () => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [discountPercentage, setdiscountPercentage] = useState("")
    const [rating, setrating] = useState("")
    const [stock, setstock] = useState("")
    const [brand, setbrand] = useState("")
    const [category, setcategory] = useState("")
    // const [selectthumb, setselectthumb] = useState([])
    const [thumbnail, setthumbnail] = useState("")
    const [master, setmaster] = useState([])
    // const [sumapi, setsumapi] = useState(second)

    const imagechange=(e)=>{
        const file =e.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onload=(e)=>{
                let imagefile = e.target.result
                setthumbnail(imagefile)
                 console.log(imagefile);
                // console.log(selectimage);
            }
            console.log(file);
            reader.readAsDataURL(file)
        }
    }

    const set = ()=>{
        if(thumbnail){
            // const formData = new FormData()
            // formData.set('image', selectimage);
            console.log(thumbnail);
            const postedData={
                title,
                description,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
                thumbnail,
                }
                axios.post("http://localhost:2456/products",postedData)
      .then((response)=>{
        console.log(response)
        // settotalapi(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
        }
    }
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

    const imageApi= (category)=>{
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
  return (
    <>
        <div className='admin-page'>
            <div className='admin'>
                    <div>
                        <label htmlFor="Title">Tittle</label>
                        <input type="text" onChange={((e)=>settitle(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div>
                        <label htmlFor="description">description</label>
                        <input type="text" onChange={((e)=>setdescription(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div>
                        <label htmlFor="price">price</label>
                        <input type="number" onChange={((e)=>setprice(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div>
                        <label htmlFor="discountPercentage">discountPercentage</label>
                        <input type="text" onChange={((e)=>setdiscountPercentage(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div>
                        <label htmlFor="rating">rating</label>
                        <input type="text" onChange={((e)=>setrating(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div>
                        <label htmlFor="stock">stock</label>
                        <input type="text" onChange={((e)=>setstock(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div>
                        <label htmlFor="brand">brand</label>
                        <input type="text" onChange={((e)=>setbrand(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div>
                        <label htmlFor="category">category</label>
                        <input type="text" onChange={((e)=>setcategory(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div>
                        <label htmlFor="picture">picture</label>
                            <input type="file" name='file' onChange={imagechange} />
                    </div>
                    <button onClick={set}>SET</button>
                    <div className='admin-div'>
                    {imageApi("smartphones")}
                    </div>
                    <div className='admin-div'>{imageApi("skincare")}</div>
                    <div className='admin-div'>{imageApi("laptops")}</div>
                    <div className='admin-div'>{imageApi("fragrances")}</div>
                    <div className='admin-div'>{imageApi("groceries")}</div>
                    <div className='admin-div'> {imageApi("home-decoration")}</div>
                    <div className='admin-div'>
                        {imageApi("Refrigerator")}
                    </div>
                    <div className='admin-div'>{imageApi("Mobile Accessories")}</div>
                    <div className='admin-div'>{imageApi("generator")}</div>
                    <div className='admin-div'>{imageApi("men sneakers")}</div>
                    <div className='admin-div'>{imageApi("watches")}</div>
                    <div className='admin-div'>{imageApi("clearance sales")}   </div>
            </div>
        </div>
    </>
  )
}

export default Admin