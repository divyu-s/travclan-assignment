import React,{useState,useEffect} from 'react';
import './style.css';

const API = `https://intense-tor-76305.herokuapp.com/merchants`;
export default function Index() {
    const [customersList, setCustomersList] = useState([]);
    useEffect(() => {
        const getDataFromApi = async()=>{
            const customerList = await fetch(API);
            const customerListJson = await customerList.json();
            setCustomersList(customerListJson);
        }
        getDataFromApi();
    }, []);
    return (
        <div className="body">
            Body
        </div>
    )
}