import Navbar from './Navbar'
import Carousel from './Carousel'
// import Categoryrow from './categoryRow'
import Footer from './Footer'
import { useState } from 'react'


const Homepage = ()=>{

    const [query, setQuery] = useState('');
   
    return(
       <div>
        <Navbar setQuery={setQuery}/>
        {/* <Categoryrow/> */}
        <Carousel query={query}/>
        <Footer/>
       </div>

    );
}

export default Homepage;