import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'
import { DLT, REMOVE } from '../redux/actions/action';
import { ADD } from '../redux/actions/action';


function Myheader() {
    const [price, setPrice] = useState(0);
    console.log(price);

    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata)

    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const send=(e)=>{
        // console.log(e)
    
        dispatch(ADD(e));
    
      }

    const remove =(item)=>{
        dispatch(REMOVE(item))

    }  

    // taking the price and storing into price var
    const total = () => {
        let totalprice = 0;
        getdata.map((e, k) => {
            totalprice = e.price * e.qnty + totalprice

        });
        setPrice(totalprice)

    }
    // whenever the price will change it will change after render
    useEffect(() => {
        total();
    }, [total])

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px",position:"sticky" }} fixed="top">
                <Container>
                    {/* <NavLink to="/" className="text-decoration-none text-light mx-3">Add Product</NavLink> */}
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>

                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>

                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>

                    </Badge>

                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <img className='mt-4' src={e.imgdata} style={{ width: "8rem", height: "7rem",borderRadius:"10px",border:"2px solid black", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", }} alt="img" />
                                                        </td>
                                                        <td>
                                                            <p style={{fontWeight:"bold"}}>{e.rname}</p>
                                                            <p  style={{fontWeight:"bold"}}>Price: ₹{e.price * e.qnty}</p>
                                                            <p>Quantity: {e.qnty} <div className=' adding '><span style={{ fontSize: 24 }} onClick={()=>remove(e)}>-</span>
                                                                <span style={{ fontSize: 24 }}>{e.qnty}</span>
                                                                <span style={{ fontSize: 24 }} onClick={()=>send(e)}>+</span></div></p>

                                                        </td>
                                                        <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                            <i className='fas fa-trash largetrash'></i>


                                                        </td>

                                                    </tr>

                                                )
                                            })
                                        }
                                        <p className='text-center1' style={{ fontWeight: "bold" }}>Total: ₹{price} <span> <a href="https://www.zomato.com/" target="_blank"><button className='btn btn-warning btn-sm mt-2'>Click To Checkout</button></a></span></p>
                                    </tbody>
                                </Table>


                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative",background:"yellow" }}>
                                <i className='fas fa-close smallclose' onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p className='p1'>Cart is Empty</p>
                                <img src="https://media2.giphy.com/media/jtECu4KjK3cqiAUMyR/giphy.gif?cid=ecf05e47o510lx8e80wv24ny70p2kl4k61tffuz9q79po6bi&rid=giphy.gif&ct=g" alt="" className='emptycart_img' style={{ width: "7rem", padding: 5 }} />

                            </div>
                    }

                </Menu>
            </Navbar>

        </>
    )
}

export default Myheader
