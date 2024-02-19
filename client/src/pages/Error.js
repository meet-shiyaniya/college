import { NavLink } from "react-router-dom"
import Button from "../components/Button"

function Error() {
  return (
    <div className=" items-center justify-center w-full h-[50vh] flex flex-col gap-5">
      <h2 className="text-4xl max-md:xl text-red-500 font-bold">404 Not Found</h2>
      <NavLink to="/">
        <Button name="Go back" />
      </NavLink>
    </div>
  )
}
export default Error