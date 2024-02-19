function FormatePrice({ price }) {
    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(price / 100)
}
export default FormatePrice