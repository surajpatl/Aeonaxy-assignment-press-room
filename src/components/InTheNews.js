export default function InTheNews() {
  return (
    <div className="max-w-[1480px] bg-white w-full h-full flex flex-col justify-between">
      <span className="flex">
        <h1 className="text-4xl font-semibold">In The News</h1>
        <p className="mx-5 text-[20px] flex flex-col justify-end underline underline-offset-8 decoration-1 cursor-pointer">
          View All
        </p>
      </span>
      <div className="flex flex-col my-[130px]">
        <div className="pb-[60px] border-b border-black">
          <h4 className="mb-[20px]">March 25, 2024</h4>
          <h4 className="font-bold">The AI Journal</h4>
          <span className="flex justify-between">
            <p className="my-[12px] opacity-75">
              AI will become the Human Assistant
            </p>
            <p className=" flex flex-col justify-center underline underline-offset-8 decoration-1 hover:text-blue-600 cursor-pointer">
              READ MORE
            </p>
          </span>
        </div>
        <div className="pb-[60px] mt-[60px] border-b border-black">
          <h4 className="mb-[20px]">March 12, 2024</h4>
          <h4 className="font-bold">Small Business Currents</h4>
          <span className="flex justify-between">
            <p className="my-[12px] opacity-75">
              5 SEO Tips for Small Businesses in 2024
            </p>
            <p className=" flex flex-col justify-center underline underline-offset-8 decoration-1 hover:text-blue-600 cursor-pointer">
              READ MORE
            </p>
          </span>
        </div>
        <div className="pb-[60px] mt-[60px] border-b border-black">
          <h4 className="mb-[20px]">March 4, 2024</h4>
          <h4 className="font-bold">TechRadar</h4>
          <span className="flex justify-between">
            <p className="my-[12px] opacity-75">
              We ask the experts: What should agencies look for when choosing a
              website builder?
            </p>
            <p className=" flex flex-col justify-center underline underline-offset-8 decoration-1 hover:text-blue-600 cursor-pointer">
              READ MORE
            </p>
          </span>
        </div>
        <div className="pb-[60px] mt-[60px] border-b border-black">
          <h4 className="mb-[20px]">March 4, 2024</h4>
          <h4 className="font-bold">The Verge</h4>
          <span className="flex justify-between">
            <p className="my-[12px] opacity-75">
              Wix’s new AI chatbot builds websites in seconds based on prompts
            </p>
            <p className=" flex flex-col justify-center underline underline-offset-8 decoration-1 hover:text-blue-600 cursor-pointer">
              READ MORE
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
