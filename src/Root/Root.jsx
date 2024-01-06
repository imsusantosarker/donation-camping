import { Outlet } from "react-router-dom"
import { Header } from "../component/Header/Header"


export const Root = () => {
  return (
    <div className="px-4 flex flex-col m-auto w-100%">
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
