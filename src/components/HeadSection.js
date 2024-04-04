export default function HeadSection() {
  return (
    <div className="max-w-[1480px] bg-white w-full h-full flex flex-col justify-between">
      <div className="flex flex-col mt-[70px]">
        <h1 className="text-7xl font-bold mb-[10px]">Press Room</h1>
        <span className="w-full text-xl font-medium ">
          All the News You Need to Know about Wix
        </span>
      </div>
      <div className="my-[50px]  border-black border-t border-b ">
        <div className="my-[30px] flex ">
          <span className=" text-[22px] border-r-2border-sky-500 border-r border-black">
            <p className="mr-[40px] text-blue-600">Press Room</p>
          </span>
          <span className="  mx-[40px] text-[22px] border-r border-black">
            <p className="mr-[40px]">Press Releases</p>
          </span>
          <span className=" text-[22px]">
            <p className="mr-[40px]">In The News</p>
          </span>
        </div>
      </div>
      <div>
        <p className="text-[20px] leading-loose">
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
