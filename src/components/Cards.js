
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './style.css'
import Cardsdata from './CardsData'
import { useDispatch } from 'react-redux'
import { ADD } from '../redux/actions/action'

function Cards() {

  const [data, setData] = useState(Cardsdata);
  // console.log(data);
// for triggering the function of action.js we use useDispatch

  const dispatch = useDispatch(Cardsdata);

  const send=(e)=>{
    // console.log(e)

    dispatch(ADD(e));

  }

  return (

    <div className='container mt-3'>
     

        <h2 className='text-center'>Add to Cart Projects</h2>
        <h4 className='text-center1' >Delicious foods from your favorite restaurant in <span className='city'>GORAKHPUR</span> </h4>

        <div className="row d-flex justify-content-center align-items-center">
          {
            data.map((element, id) => {
              return (
                <>
                  <Card style={{ width: '22rem', border: "none",borderRadius:"20px" }} className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <h5>Address: {element.address}</h5>
                      <h5>Rating: {element.rating} ⭐</h5>
                      <Card.Text>
                        <h6> Price : ₹ {element.price}</h6>
                        
                      </Card.Text>
                      <div className="button_div d-flex justify-content-center">
                        <Button variant="danger" onClick={()=>send(element)} className='col-lg-12'>Add to Cart</Button>
                      </div>

                    </Card.Body>
                  </Card>
                </>
              )
            })
          }

        </div>

      </div>
      )
}

      export default Cards
