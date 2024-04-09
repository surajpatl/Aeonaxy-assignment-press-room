export default function Cards() {
  return (
    <div>
      <div className="grid grid-cols-3 lg:gap-10 min-[320px]:gap-5 my-10">
        <div>
          <div className="relative group">
            <img
              className="cursor-pointer hover:opacity-0 hover:z-0"
              src="https://static.wixstatic.com/media/701e00_e691edf90f52465abf7e9e14d304949d~mv2.jpg/v1/fill/w_404,h_404,al_c,lg_1,q_80,enc_auto/701e00_e691edf90f52465abf7e9e14d304949d~mv2.jpg"
              alt=""
            />
            <img
              className="cursor-pointer opacity-0 hover:opacity-100 hover:z-10 top-0 absolute"
              src="https://static.wixstatic.com/media/00e9a6_9d6c2d7531c043a4932ef7e06b103b21~mv2.png/v1/fill/w_404,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00e9a6_9d6c2d7531c043a4932ef7e06b103b21~mv2.png"
              alt=""
            />
          </div>
          <h3 className="lg:mt-10 min-[320px]:mt-5 font-bold text-xl ">
            Brand Assets{" "}
          </h3>
          <p className="mt-4 leading-7 min-[320px]:mt-2 whitespace-normal">
            All of the official design assets and guidelines used by Wix can be
            found here, along with all the information you need about our
            graphic elements and the philosophy behind them.
          </p>
        </div>
        <div>
          <div className="relative group">
            <img
              className="cursor-pointer  hover:opacity-0 hover:z-0"
              src="https://static.wixstatic.com/media/aabc0d_45c1fe679362404697560377993956de~mv2.png/v1/fill/w_404,h_404,al_c,lg_1,q_85,enc_auto/aabc0d_45c1fe679362404697560377993956de~mv2.png"
              alt=""
            />
            <img
              className="cursor-pointer opacity-0 hover:opacity-100 hover:z-10 top-0 absolute"
              src="https://static.wixstatic.com/media/00e9a6_9d6c2d7531c043a4932ef7e06b103b21~mv2.png/v1/fill/w_404,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00e9a6_9d6c2d7531c043a4932ef7e06b103b21~mv2.png"
              alt=""
            />
          </div>
          <h3 className="lg:mt-10 min-[320px]:mt-5 font-bold text-xl ">
            About Us
          </h3>
          <p className="mt-4 leading-7 min-[320px]:mt-2 whitespace-normal">
            Wix makes it easy for everyone to get online with a stunning,
            professional and powerful web presence. Learn more about our
            company, customers, products and people.
          </p>
        </div>
        <div>
          <div className="relative group">
            <img
              className="cursor-pointer  hover:opacity-0 hover:z-0"
              src="https://static.wixstatic.com/media/311dce_a9ba8dba96c64276af67afd024b6158f~mv2.png/v1/fill/w_404,h_404,al_c,lg_1,q_85,enc_auto/311dce_a9ba8dba96c64276af67afd024b6158f~mv2.png"
              alt=""
            />
            <img
              className="cursor-pointer opacity-0 hover:opacity-100 hover:z-10 top-0 absolute"
              src="https://static.wixstatic.com/media/00e9a6_9d6c2d7531c043a4932ef7e06b103b21~mv2.png/v1/fill/w_404,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00e9a6_9d6c2d7531c043a4932ef7e06b103b21~mv2.png"
              alt=""
            />
          </div>
          <h3 className="lg:mt-10 min-[320px]:mt-5 font-bold text-xl ">
            Investor Relations
          </h3>
          <p className="mt-4 leading-7 min-[320px]:mt-2 whitespace-normal">
            Information about Wix for investors and financial analysts. You can
            also find a company glossary, stats, and a list of IR events and
            presentations.
          </p>
        </div>
      </div>
    </div>
  );
}
