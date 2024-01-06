import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredDonationData } from "../Home/StoreData/localStorage";
import { DonatedCard } from "./DonatedCard/DonatedCard";


export const Donation = () => {

  const [dataDonated, setDataDonated] = useState();
  const [dataLength, setDataLength] = useState(4)

  const donations = useLoaderData();
  useEffect( () => {
    const storedDonationIds = getStoredDonationData();
    if(donations.length > 0){

      const donationsData = [];

      for( const id of storedDonationIds){
        const donation = donations.find(donation => donation.id === id);
        if(donation){
          donationsData.push(donation)
        }
      }
      setDataDonated(donationsData)
    }
  },[])

  return (
    <div>
      <h1>This is Donation Component</h1>
      <div className="max-w-6xl m-auto grid grid-cols-2">
        {
          dataDonated?.slice(0, dataLength).map(donated => <DonatedCard key={donated.id} donated={donated}></DonatedCard>)
        }
      </div>
      
      {/* <div className={dataLength === dataDonated.length && 'hidden'}>
        <button onClick={ () => setDataLength(dataDonated.length)} className="btn btn-primary">Show More</button>
      </div> */}
    </div>
  )
}
