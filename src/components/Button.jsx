import { Link as Anchor } from "react-router-dom"

export default function Button() {
  return (
    <Anchor to="/signin"><button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-btn1 from-(-13.10%) to-btn2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4">Sign in</button></Anchor>
  )
}

