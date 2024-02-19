import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({ stars, reviews }) {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 2.5

        return (
            <span key={index}>
                {
                    stars >= index + 1 ? (
                        <FaStar className="text-yellow-500"/>
                    ) :
                        stars >= number ? (
                            <FaStarHalfAlt className="text-yellow-500"/>
                        ) : (
                            <AiOutlineStar />
                        )
                }
            </span>
        )
    })

    return (
        <div className="flex items-center gap-[2px]">
            {ratingStar}
            <h3>({reviews} Customer reviews)</h3>
        </div>
    )
}
export default Star