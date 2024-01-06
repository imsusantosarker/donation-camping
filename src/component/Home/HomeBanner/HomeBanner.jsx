import HomeBg from '../../../../public/img/bannerbg.jpeg'

export const HomeBanner = () => {
    return (
        <div>
            <div className="max-w-6xl m-auto  h-96 relative overflow-hidden bg-center">
                <img className='w-cover ' src={HomeBg} alt="" />
                <div style={{backgroundColor: "#ffffffeb"}} className="flex justify-center items-center flex-col absolute top-0 bottom-0 left-0 right-0">
                    <h1 className="text-4xl mb-4 font-bold">I Grow By Helping People In Need</h1>
                    <div className="">
                        <input className="border mr-4 p-2 rounded-lg w-80 bg-none" type="text" />
                        <input className="btn bg-red-500 text-gray-50" type="button" value="Search" />
                    </div>
                </div>
            </div>
        </div>
    )
}
