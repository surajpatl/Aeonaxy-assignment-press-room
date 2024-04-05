export default function PressRelease() {
  return (
    <div className="max-w-[1480px] my-[100px] bg-white w-full h-full flex flex-col justify-between">
      <span className="flex">
        <h1 className="text-4xl font-semibold">Press Releases</h1>
        <p className="mx-5 text-[20px] flex flex-col justify-end underline underline-offset-8 decoration-1 cursor-pointer">
          View All
        </p>
      </span>
      <div className="flex flex-col my-[130px]">
        <div className="pb-[60px] border-b border-black">
          <h4 className="font-bold">March 4, 2024</h4>
          <span className="flex justify-between">
            <p className="my-[20px] opacity-75">
              Now Live: Wix Delivers the Next Generation of Web Creation with
              the Release of the AI...
            </p>
            <p className=" flex flex-col justify-center underline underline-offset-8 decoration-1 hover:text-blue-600 cursor-pointer">
              READ MORE
            </p>
          </span>
        </div>
        <div className="pb-[60px] border-b border-black mt-[60px]">
          <h4 className="font-bold">February 20, 2024</h4>
          <span className="flex justify-between">
            <p className="my-[20px] opacity-75">
              Wix Partners with Global-e to Empower Online Merchants to Expand
              Their Global Reach a...
            </p>
            <p className=" flex flex-col justify-center underline underline-offset-8 decoration-1 hover:text-blue-600 cursor-pointer">
              READ MORE
            </p>
          </span>
        </div>
        <div className="pb-[60px] border-b border-black mt-[60px]">
          <h4 className="font-bold">January 10, 2024</h4>
          <span className="flex justify-between">
            <p className="my-[20px] opacity-75">
              Wix Transforms Revenue Sharing for Partners, Significantly
              Increasing Opportunities t...
            </p>
            <p className=" flex flex-col justify-center underline underline-offset-8 decoration-1 hover:text-blue-600 cursor-pointer">
              READ MORE
            </p>
          </span>
        </div>
        <div className="pb-[60px] border-b border-black mt-[60px]">
          <h4 className="font-bold">November 8, 2023</h4>
          <span className="flex justify-between">
            <p className="my-[20px] opacity-75">
              Wix Releases a Conversational AI Chat Experience to Provide
              Tailored Business Solutio...
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
