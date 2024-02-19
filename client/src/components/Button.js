function Button(props) {
    const { name } = props
    return (
        <button className="py-2 px-4 bg-blue-500 text-white font-roboto font-semibold cursor-pointer border-none outline-none hover:bg-blue-600 transition-all rounded-lg hover:scale-105 text-sm">
            {name}
        </button>
    )
}
export default Button