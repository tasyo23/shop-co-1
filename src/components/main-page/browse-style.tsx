import { FunctionComponent } from "react";

interface BrowseStyleProps {}

const BrowseStyle: FunctionComponent<BrowseStyleProps> = () => {
  return (
    <div className="mb-20 px-4 md:px-0">
      <div className="container mx-auto pb-19 pt-17.5 bg-grey rounded-4xl px-16">
        <h2 className="text-center mb-16">BROWSE BY dress STYLE</h2>
        <div className="grid  grid-rows-2 gap-5">
          <div className="grid md:grid-cols-browse  gap-5">
            <div className="bg-[url('../assets/images/casual.png')] bg-no-repeat bg-cover h-[190px] lg:h-[289px] 2xl:h-[400px] py-6 px-9 rounded-2.5xl">
              <p className="text-xl md:text-2xl: lg:text-3xl font-bold">
                Casual
              </p>
            </div>
            <div className="bg-[url('../assets/images/formal.png')] bg-no-repeat bg-cover h-[190px] lg:h-[289px] 2xl:h-[400px] py-6 px-9 rounded-2.5xl ">
              <p className="text-xl md:text-2xl: lg:text-3xl font-bold">
                Formal
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-browse2 gap-5">
            <div className="bg-[url('../assets/images/party.png')]  bg-no-repeat bg-cover h-[190px] lg:h-[289px] 2xl:h-[400px] py-6 px-9 rounded-2.5xl ">
              <p className="text-xl md:text-2xl: lg:text-3xl font-bold">
                Party
              </p>
            </div>
            <div className="bg-[url('../assets/images/gym.png')] bg-no-repeat bg-cover h-[190px] lg:h-[289px] 2xl:h-[400px] py-6 px-9 rounded-2.5xl ">
              <p className="text-xl md:text-2xl: lg:text-3xl font-bold">Gym</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
