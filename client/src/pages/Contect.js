import Button from "../components/Button"

function Contect() {
  return (
    <>
      <section className="padding-y">
        <h2 className="text-center capitalize text-blue-400 font-roboto font-semibold text-xl">Contact our team</h2>
        <div className="map mt-7">
          <iframe className="w-full h-[350px] max-sm:h-[250px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2274.684438810173!2d10.485082175919334!3d55.241244731277554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464d25c02f7975a7%3A0x6640f18a7058d10!2sTrendbazaar!5e0!3m2!1sen!2sin!4v1701435224443!5m2!1sen!2sin" loading="lazy"></iframe>
        </div>
        <div className="max-container">
          <div className="contact-form mt-8 flex justify-center ">
            <form action="https://formspree.io/f/meqbbngr" method="POST" className="flex flex-col gap-3 max-w-[400px] w-[90%]">
              <input
                type="text"
                placeholder="username"
                name="username"
                required
                autoComplete="off"
                className="border outline-none p-2 focus:border-blue-500 transition-all rounded-md shadow-sm"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                autoComplete="off"
                className="border outline-none p-2 focus:border-blue-500 transition-all rounded-md shadow-sm"
              />
              <textarea placeholder="Enter description" cols="25" rows="5" autoComplete="off" name="description"
                className="border outline-none p-2 focus:border-blue-500 transition-all rounded-md shadow-sm" />
              <Button name="submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contect