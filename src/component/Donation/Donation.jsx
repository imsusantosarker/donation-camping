import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredDonationData } from "../Home/StoreData/localStorage";
import { DonatedCard } from "./DonatedCard/DonatedCard";


export const Donation = () => {

  const [dataDonated, setDataDonated] = useState();

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
      <div className="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2">
        {
          dataDonated?.map(donated => <DonatedCard key={donated.id} donated={donated}></DonatedCard>)
        }
      </div>
    </div>
  )
}
