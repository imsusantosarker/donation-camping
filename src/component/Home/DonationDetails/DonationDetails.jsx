import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationData } from "../StoreData/localStorage";
import bgImg from '../../../../public/img/Health.png'


export const DonationDetails = () => {

  

  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find(donation => donation.id === idInt);

  const notify = () => {
    saveDonationData(idInt)
    toast("You have Donate Successfully!");
  }


  const { title, image, description, type, price } = donation;

  const btnCol = type === "Health" ? "bg-red-400" : type === "Education" ? "bg-green-400" : type === "Clothing" ? "bg-yellow-400" : type === "Food" ? "bg-blue-700" : "null";

  return (
    <div>
      <div className="max-w-5xl m-auto flex justify-between ">
        <div className={`w-100% h-[200px]`}>
          <div className="h-[400px] relative overflow-hidden rounded-2xl">
            <img style={{width: "100%", backgroundColor: ""}} className="" src={bgImg} alt="" />
            <div style={{backgroundColor: "#808080bd"}} className="absolute bottom-0 p-10  w-full">
              <button onClick={notify} className={`${btnCol} btn text-gray-100`}>Donate {price}</button>
            </div>
          </div>
          <div className="m-6">
            <h1 className="font-bold text-xl my-4">{title}</h1>
            <p className="my-4">{description} {description} {description} {description} {description}</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
