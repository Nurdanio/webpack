import { useState } from "react"
import { Outlet } from "react-router-dom"
import "./test.css"

export const Test = () => {
    const [count, setCount] = useState(0)
    console.log(__PLATFORM__)

    let sad: number = 0
    sad = 213123

    return <>
        <div className="styles">HELLO</div>
        <button onClick={() => setCount((prev) => prev + 1)} >{count}</button>
        <Outlet />
    </> 
}