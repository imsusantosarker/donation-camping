
const getStoredDonationData = () => {
    const storedDonationData = localStorage.getItem('donation-data');
    if(storedDonationData) {
        return JSON.parse(storedDonationData)
    }
    return []
}

const saveDonationData = id =>{
    const storedDonationData = getStoredDonationData()
    const exists = storedDonationData.find(jobId => jobId === id);
    if(!exists){
        storedDonationData.push(id);
        localStorage.setItem('donation-data', JSON.stringify(storedDonationData))
    }
}

export {getStoredDonationData, saveDonationData}