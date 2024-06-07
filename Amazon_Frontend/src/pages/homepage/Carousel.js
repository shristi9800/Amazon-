import Card from './card'
import { useEffect, useState } from "react";


const Carousel = ({ query }) => {

    const [data, setData] = useState([]);
   
    const getData = async () => {
        
        if (query.length> 0 && query != undefined) {
            const shorturl = await fetch(`http://localhost:1400/products?title=${query}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then((res) => res.json()).then(r => {
                    setData(r.data.product);
                })
                .catch((err) => console.log(err))
        //     console.log(data);
        }
        else {
            const shorturl = await fetch('http://localhost:1400/products', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then((res) => res.json()).then(r => {
                    setData(r.data.product);
                })
                .catch((err) => console.log(err))
            // console.log(data);
        }
    }
    useEffect(() => { getData() }, [query])

    return (

        <div>
            <div className="hero-image">
                <div className="hero-words" >
                    You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                    Click here to go to amazon.in
                </div>
            </div>

            <div className="content">
                {data.map(elem => {
                    return (
                        <div key={elem.id}>
                            <Card elem={elem} />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Carousel