
const Card = ({elem}) => {
    // console.log(1)
    return (
        <div className="card" >
            <h4 className="card-title">{elem.title}</h4>
            <img className="card-img" src={elem?.images[1]} alt="" />
                <button className="cardButton ">Add to Cart</button>
                <p className="card-info">Rs {elem.price}</p>
                <p className="card-desc">{elem.description}</p>
        </div>
    )
}

module.exports = Card