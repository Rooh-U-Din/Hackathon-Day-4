const Component5 = () => {
    return (
      <div>
        <div className="w-[390px] h-[292px] ml-[24px] md:hidden">
          <div className="max-h-[86px] mt-[48px]">
            <h2 className="text-xl font-clash">Join the club and get the benefits</h2>
            <p className="mt-[44px] font-satoshi">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
            </p>
          </div>
          <div className="flex mt-[100px]">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-gray-200 w-[224px] h-[56px] placeholder:text-center font-satoshi"
            />
            <button className="w-[118px] h-[56px] bg-[rgba(78,77,147,1)] font-satoshi">Sign up</button>
          </div>
        </div>
  
        <div className="sm:hidden md:block absolute md:mt-[20px] md:w-[1180px] md:h-[381px] md:bg-gray-200 xl:mt-[20px] xl:w-[1440px] xl:h-[481px] xl:bg-gray-200">
          <div className="md:w-[1080px] md:h-[304px] md:bg-white md:ml-[73px] md:mt-[42px] xl:w-[1273px] xl:h-[364px] xl:bg-white xl:ml-[93px] xl:mt-[52px]">
            <div className="md:mt-[68px] md:ml-[351px] md:w-[371px] xl:w-[571px] md:h-[114px]">
              <h2 className="xl:text-4xl md:text-2xl lg:block font-clash">Join the club and get the benefits</h2>
              <br />
              <div className="md:ml-[50.5px] md:w-[470px] md:h-[48px]">
                <p className="md:text-sm font-satoshi">Sign up for our newsletter and receive exclusive offers on new</p>
                <p className="md:text-base md:ml-[60px] font-satoshi">ranges, sales, pop up stores and more</p>
              </div>
            </div>
            <div className="flex mt-[60px]">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-gray-200 md:w-[472px] h-[56px] placeholder:text-center font-satoshi ml-[354px]"
              />
              <button className="font-satoshi w-[118px] h-[56px] bg-[rgba(78,77,147,1)] text-white">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Component5;