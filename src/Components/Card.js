import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        
            <div className="credit-card">
               <h1 className="title">Company Name </h1>
            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-card-chip-1522262-1288452.png" width="70px" height="80px"></img>
      <div className="container">
        <div className="text">
          <h2 className="card-number">{props.user.number}</h2>
          <h2 className="date-exp">{props.user.valid}</h2>
          <h2 className="card-holder">{props.user.name}</h2>        
        </div>
        <div className="logo"><img src="https://www.reussir-mon-ecommerce.fr/wp-content/uploads/2016/03/MasterCard-Logo-1-1024x768.png" width="100px"/></div>
      </div> 
            </div>
        
    )
}
export default Card