export default function WixFooter() {
  return (
    <div className="flex flex-col">
      <span>
        <img
          className="w-[80px] h-[50px]"
          src="https://media.business-humanrights.org/media/images/Screenshot_2023-12-14_210022.width-800.png"
          alt=""
        />
      </span>
      <span className="w-[200px] block mt-[20px]">
        The Wix website builder offers a complete solution from enterprise-grade
        infrastructure and business features to advanced SEO and marketing
        tools–enabling anyone to create and grow online.
      </span>

      <span className="mt-3  hover:text-blue-600 cursor-pointer font-semibold ">
        About
      </span>
      <span className="mt-3  hover:text-blue-600 cursor-pointer font-semibold">
        Contact Us
      </span>
    </div>
  );
}
