import React,{useState} from 'react';
import PhoneData from './json/Json.js';

function List() {
const [items,setItems] = useState(PhoneData);
const filterItem = (categoryItem) =>{
    const updatedItem = PhoneData.filter((currentElement) =>{
        return currentElement.category === categoryItem;
    })
    console.log(updatedItem);
    setItems(updatedItem);
}
    return(
        <>
    <button onClick={() => {filterItem('Samsung')}}> Samsung</button>
    <button onClick={() => {filterItem('Apple')}}> Apple</button>
    <button onClick={() => {filterItem('Oppo')}}> Oppo</button>
    <button onClick={() => {filterItem('Huawei')}}>Huawei</button>
    
    {items.map((elem) =>{
        const {id, model, picture, category} =elem;
        return(
            <div className="card mb-3 mx-auto" key={id} style={{width: '800px', height: '800px', backgroundColor: 'pink',  padding:'10px'}}>
                <img src={picture} className="img-fluid" alt="App-logo" />
                <div className="card-body" style={{textAlign: 'center',marginTop: '30px', padding:'20px'}}>
                    <h5 className="card-title">{category}</h5>
                    <button className="btn btn-success" style={{marginTop: '30px',padding:'20px'}} onClick={() =>history.push('/productDetails')}>more details</button>
        
                </div>
            </div>
        
    )
})}
</>
    );}

export default List;