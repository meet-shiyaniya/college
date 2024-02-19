function Quantity({amount,Increase,Decrease}) {
    return (
        <div className="flex items-center gap-3">
            <button onClick={Decrease} className="cursor-pointer bg-gray-200 px-2 rounded-md font-semibold">-</button>
            <div>{amount}</div>
            <button onClick={Increase} className="cursor-pointer bg-gray-200 px-2 rounded-md font-semibold">+</button>
        </div>
    )
}
export default Quantity