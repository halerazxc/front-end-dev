import { assets } from "../assets/assets";

const WorkItem = ({

  
  title,
  description,
  type,
  img,
  link,
  reverse,
}: {
  title: string;
  description: string;
  type: string;
  img: string;
  link: string;
  reverse?: boolean;
}) => {
  

  return (
    <>
      <div
        onClick={() => window.open(link, "_blank")}
        className={`mt-[25px] md:mt-[50px] flex justify-center ${
          reverse ? 'lg:justify-end lg:flex-row flex-col-reverse' : 'lg:flex-row-reverse xl:justify-end flex-col-reverse' } items-center md:items-center gap-[32px] 2xl:hover:bg-white/10 cursor-pointer transition-all rounded-2xl duration-150`}
      >
        <div className="max-w-xl">
          <h1 className="mb-[16px] font-semibold text-[16px]">{title}</h1>
          <p className="mb-[24px] font-light text-[20px] md:text-[32px]">
            {description}
          </p>
          <p className="mb-[32px] font-light text-[18px]">{type}</p>
          <button className="flex items-center border border-gray-300 px-[16px] py-[8px] rounded-full font-[300] text-[16px]">
            View work
            <img
              className="ml-2"
              width={20}
              src={assets.arrowRight}
              alt="arrowRight"
            />
          </button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default WorkItem;
