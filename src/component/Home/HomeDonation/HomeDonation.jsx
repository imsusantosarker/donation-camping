import { useEffect, useState } from "react"
import { DonationCard } from "../DonationCard/DonationCard";


export const HomeDonation = () => {

    const [donationCards, setDonaitonCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDonaitonCards(data));
    }, [])


    return (
        <div className="">
            <div className="max-w-6xl m-auto flex justify-between items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
                {
                    donationCards?.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
                }
            </div>
        </div>
    )
}
