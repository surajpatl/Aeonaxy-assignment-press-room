export default function WixFooter() {
  return (
    <div className="flex lg:flex-col min-[320px]:flex-row min-[320px]:justify-around">
      <span>
        <img
          className="w-[80px] h-[50px] min-[480px]:self-center"
          src="https://media.business-humanrights.org/media/images/Screenshot_2023-12-14_210022.width-800.png"
          alt=""
        />
      </span>
      <span className="w-[200px] min-[550px]:block mt-[20px] min-[320px]:hidden">
        The Wix website builder offers a complete solution from enterprise-grade
        infrastructure and business features to advanced SEO and marketing
        tools–enabling anyone to create and grow online.
      </span>

      <span className="mt-3  hover:text-blue-600 cursor-pointer font-semibold min-[320px]:self-center ">
        About
      </span>
      <span className="mt-3  hover:text-blue-600 cursor-pointer font-semibold min-[320px]:self-center">
        Contact Us
      </span>
    </div>
  );
}
