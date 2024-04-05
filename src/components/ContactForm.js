export default function Form() {
  return (
    <div>
      <form className="flex flex-col w-[650px] absolute ">
        <div className="mt-[100px] mb-[30px]">
          <input
            type="text"
            placeholder="First Name"
            className="outline-none placeholder-black border-b border-black mr-[30px] p-2"
          />
          <input
            type="text"
            placeholder="Phone"
            className="outline-none placeholder-black border-b border-black mr-[20px] p-2"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="outline-none placeholder-black border-b border-black mr-[40px] my-[30px] p-2"
        />
        <div className="my-[60px]">
          <textarea
            id="message"
            rows="4"
            class="border border-black p-2.5 w-full h-[200px] "
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
