export default function HeadSection() {
  return (
    <div className="max-w-[1480px] bg-white w-full h-full flex flex-col justify-between">
      <div className="flex flex-col lg:mt-[70px] min-[320px]:mt-[30px]">
        <h1 className="lg:text-7xl sm:text-4xl min-[320px]:text-3xl font-bold mb-[10px]">Press Room</h1>
        <span className="w-full text-xl font-medium min-[320px]:text-lg ">
          All the News You Need to Know about Wix
        </span>
      </div>
      <div className="lg:my-[50px] min-[320px]:my-[20px]  border-black border-t border-b ">
        <div className="lg:my-[30px] min-[320px]:my-[10px] flex ">
          <span className=" lg:text-[22px] min-[320px]:text-[13px]   border-r-2border-sky-500 border-r border-black ">
            <p className="mr-[40px] text-blue-600 cursor-pointer">Press Room</p>
          </span>
          <span className="  mx-[40px] lg:text-[22px] min-[320px]:text-[13px] border-r border-black">
            <p className="mr-[40px] cursor-pointer hover:text-blue-600">
              Press Releases
            </p>
          </span>
          <span className=" lg:text-[22px] min-[320px]:text-[13px]">
            <p className="mr-[40px] cursor-pointer hover:text-blue-600">
              In The News
            </p>
          </span>
        </div>
      </div>
      <div>
        <p className="lg:text-[20px] min-[320px]:text-[13px] leading-loose">
          Wix is leading the way with a cloud-based development platform for
          users worldwide. Wix was founded on the belief that the Internet
          should be accessible to everyone to develop, create and contribute.
          Through free and premium subscriptions, Wix empowers millions of
          businesses, organizations, artists, and individuals to take their
          businesses, brands and workflow online.
        </p>
      </div>
    </div>
  );
}
