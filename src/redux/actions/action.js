
//Add Items
export const ADD =(item)=>{
    return{
        type:"ADD_CART",
        //passing the data through payload
        payload:item
    }
}
//Remove items
export const DLT =(id)=>{
    return{
        type:"DLT_CART",
        //passing the id through payload
        payload:id
    }
}

export const REMOVE =(item)=>{
    return{
        type:"REMOVE_ONE",
        //removing perticular item
        payload:item
    }
}