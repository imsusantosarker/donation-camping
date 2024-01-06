import { Link } from "react-router-dom";

export const DonationCard = ({ donationCard }) => {

    const { id, title, image, type } = donationCard;

    const cardBg = type === "Health" ? "bg-red-200" : type === "Education" ? "bg-green-200" : type === "Clothing" ? "bg-yellow-200" : type === "Food" ? "bg-blue-200" : "bg-gray-200";

    const cardTxt = type === "Health" ? "text-red-700" : type === "Education" ? "text-green-700" : type === "Clothing" ? "text-yellow-700" : type === "Food" ? "text-blue-700" : "text-gray-700";

    const typeBg = type === "Health" ? "bg-red-100" : type === "Education" ? "bg-green-100" : type === "Clothing" ? "bg-yellow-100" : type === "Food" ? "bg-blue-100" : "bg-gray-100";



    return (
        <Link to={`/details/${id}`}>
            <div className={`${cardBg} rounded-lg font-semibold cursor-pointer`}>
                <img src={image} alt="" />
                <div className={`m-4 ${cardTxt}`}>
                    <p className={` py-2 px-4 w-min rounded-md ${typeBg}`}>{type}</p>
                    <h1 className="py-4">{title}</h1>
                </div>
            </div>
        </Link>
    )
}
