export default function Form() {
  return (
    <div className="lg:max-w-[1280px]">
      <form className="flex flex-col lg:w-[650px] absolute ">
        <div className="lg:mt-[100px] min-[320px]:mt-[50px] lg:mb-[30px] min-[320px]:mb-[15px]">
          <input
            type="text"
            placeholder="First Name"
            className="outline-none placeholder-black border-b border-black mr-[30px] p-2"
          />
          <input
            type="text"
            placeholder="Phone"
            className="outline-none placeholder-black border-b border-black lg:mr-[20px] p-2"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="outline-none placeholder-black border-b border-black lg:mr-[40px] lg:my-[30px] min-[320px]:my-[15px]  p-2"
        />
        <div className="lg:my-[60px] min-[320px]:my-[30px]">
          <textarea
            id="message"
            rows="4"
            class="border border-black p-2.5 min-[520px]:w-full lg:h-[200px] min-[320px]:w-[200px]"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <div>
          <button className="border rounded-full border-black py-[10px] w-[150px] px-[20px] transition-colors ease-linear duration-300 hover:bg-blue-600 hover:text-white hover:border-0">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
