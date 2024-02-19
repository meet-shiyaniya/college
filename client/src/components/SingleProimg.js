import { useState } from "react"

function SingleProimg({ image = [{ url: "" }] }) {
  const [mainimage, setMainimage] = useState(image[0])
  return (
    <main>
      <div className="">
        <figure>
          <img src={mainimage.url} alt="product image" className="cursor-pointer rounded-md" />
        </figure>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {image &&
            image.map((current, index) => (
              <figure key={index}>
                <img src={current.url} alt="similar-products" onClick={() => setMainimage(current)} className=" lg:h-[100px] cursor-pointer" />
              </figure>
            ))
          }
        </div>
      </div>
    </main>
  )
}
export default SingleProimg