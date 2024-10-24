import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Profile = () => {
const [person,setPerson]=useState(undefined)
  const navigate = useNavigate();
  const fecthData=async(id)=>{
    const res=await axios.get(`https://dummyjson.com/users/${id}`)
    setPerson(res.data)
  }
useEffect(()=>{
        let personDetails=JSON.parse(localStorage.getItem('user'));
        if(personDetails&&personDetails.id){
            fecthData(personDetails.id)
        }
        else{
            navigate('/')
        }
    },[])
    if(person==undefined){
        return ;
    }
  return (
    <div className="profileContainer">
      <div className="profileHeader">
        <img className="profileImg" src={person.image} />
        <div className="profileHeaderSection-2">
          <p className="profileHeading1">Person Details</p>
          <p className="profileName">
            {person.firstName} {person.maidenName} {person.lastName}
          </p>
          <div>
            <p>{person.email}</p>
          </div>
          <div className="profileHeader2Details">
            <p>{person.age}</p>
            <p>{person.gender}</p>
            <p>{person.birthDate}</p>
          </div>
        </div>
      </div>
      <div className="profileAddress">
        <p className="profileHeading">Address Details</p>
        <div className="section">
          <div className="innerSec">
            <p className="profileLabel">Address :</p>
            <p>{person.address.address} </p>
            <p>{person.address.city}</p>
            <p>{person.address.postalCode}</p>
          </div>
        </div>
        <div className="section">
          <div className="innerSec">
            <p className="profileLabel">State :</p>
            <p>{person.address.state}</p>
          </div>
          <div className="innerSec">
            <p className="profileLabel">Country :</p>
            <p>{person.address.country}</p>
          </div>
        </div>
      </div>
      <div className="university">
        <p className="profileHeading">University Details</p>
        <div className="section">
          <div className="innerSec">
            <p className="profileLabel">University :</p>
            <p>{person.university}</p>
          </div>
        </div>
      </div>
      <div className="bankDetails">
        <p className="profileHeading">Bank Details</p>

        <div className="section">
          <div className="innerSec">
            <p className="profileLabel">Card :</p>
            <p>{person.bank.cardNumber}</p>
          </div>
          <div className="innerSec">
            <p className="profileLabel">Expiry :</p>
            <p>{person.bank.cardExpire}</p>
          </div>
        </div>
      </div>
      <div className="companyDetails">
        <p className="profileHeading">Company Details</p>

        <div className="section">
          <div className="innerSec">
            <p className="profileLabel">Title :</p>
            <p>{person.company.title}</p>
          </div>
          <div className="innerSec">
            <p className="profileLabel">Department :</p>
            <p>{person.company.department}</p>
          </div>
        </div>
        <div className="section">
          <div className="innerSec">
            <p className="profileLabel">Company :</p>
            <p>{person.company.name}</p>
          </div>
        </div>
        <div className="section">
          <div className="innerSec">
            <p className="profileLabel">Address :</p>
            <p>{person.company.address.address} </p>
            <p>{person.company.address.city}</p>
            <p>{person.company.address.postalCode}</p>
          </div>
        </div>
      </div>
      <div className="cryptoDetails">
        <p className="profileHeading">Crypto Currency Details</p>

        <div className="section">
          <div className="innerSec">
            <p className="profileLabel">Currency Name :</p>
            <p>{person.crypto.coin} </p>
            <p className="profileLabel">Network :</p>
            <p>{person.crypto.network} </p>
          </div>
        </div>
        <div className="section">
          <div className="innerSec">
            <p className="profileLabel">Wallet :</p>
            <p>{person.crypto.wallet} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
