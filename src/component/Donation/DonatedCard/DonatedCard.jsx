

export const DonatedCard = ({donated}) => {

    const {id, title, type, image, price } = donated

    const cardBg = type === "Health" ? "bg-red-200" : type === "Education" ? "bg-green-200" : type === "Clothing" ? "bg-yellow-200" : type === "Food" ? "bg-blue-200" : "bg-gray-200";

    const cardTxt = type === "Health" ? "text-red-700" : type === "Education" ? "text-green-700" : type === "Clothing" ? "text-yellow-700" : type === "Food" ? "text-blue-700" : "text-gray-700";

    const typeBg = type === "Health" ? "bg-red-100" : type === "Education" ? "bg-green-100" : type === "Clothing" ? "bg-yellow-100" : type === "Food" ? "bg-blue-100" : "bg-gray-100";

    const btnCol = type === "Health" ? "bg-red-400" : type === "Education" ? "bg-green-400" : type === "Clothing" ? "bg-yellow-400" : type === "Food" ? "bg-blue-700" : "null";



  return (
    <div>
        <div className={`${cardBg} m-4 md:flex rounded-lg`}>
            <div className="w-[200px] flex justify-center items-center overflow-hidden">
                <img className="overflow-hidden rounded-lg" src={image} alt="" />
            </div>
            <div className={`m-4 ${cardTxt}`}>
                <p className={` py-2 px-4 w-min rounded-md ${typeBg}`}>{type}</p>
                <h1 className="py-1 font-bold">{title}</h1>
                <p className="font-bold py-1">{price}</p>
                <button className={`${btnCol} btn text-gray-100`}>View Details</button>
            </div>
        </div>
    </div>
  )
}
