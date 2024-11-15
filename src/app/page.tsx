"use client";

import { MouseEvent, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../../public/icons/arrow-right-349-svgrepo-com.svg";
import Plus from "../../public/icons/plus-1512-svgrepo-com.svg";

export default function Home() {
  const [wishlistData, setWishlistData] = useState<Array<any>>([]);
  const [password, setPassword] = useState("");
  const [showAddItem, setShowAddItem] = useState(false);

  useEffect(() => {
    const data = [
      // {
      //   name: "New Balance 550",
      //   size: "10.5",
      //   color: "White with Vintage Indigo",
      //   link: "https://www.newbalance.com/pd/550/BB550V1-43389.html?dwvar_BB550V1-43389_style=BB550STG",
      //   description: "Want some shoes between slippers and tennis shoes",
      // },
      // {
      //   name: "New iPhone 14 Pro case",
      //   link: "https://www.amazon.com/Spigen-Hybrid-MagFit-Designed-iPhone/dp/B0BBWM6PN9/ref=asc_df_B0BBWM6PN9/?tag=hyprod-20&linkCode=df0&hvadid=598244023656&hvpos=&hvnetw=g&hvrand=8817517426675049679&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9011698&hvtargid=pla-1877738067045&mcid=6ca0eef532a53e308758f67b46c53c07&gclid=CjwKCAiAsIGrBhAAEiwAEzMlC71z1kq6paA5FK9xZaXX2Z-AluvRUEcZ13njZG5RPLLxWc74wcRrHRoCdysQAvD_BwE&th=1",
      //   description: "Cool and fitting for computer science :]",
      // },
      // {
      //   name: "T-shirt",
      //   size: "L",
      //   link: "https://www.amazon.com/dp/B004HTQ93W/?coliid=ITZQXY1SP0O5U&colid=1QMHU5X8WHM3&psc=1&ref_=list_c_wl_gv_ov_lig_pi_dp",
      //   description: "Blue T-shirt",
      // },
      // {
      //   name: "T-shirt",
      //   size: "L",
      //   link: "https://www.adidas.com/us/trefoil-essentials-tee/IM4538.html?forceSelSize=L",
      //   description: "Grey T-shirt",
      // },
      // {
      //   name: "Crewneck",
      //   size: "L",
      //   link: "https://www.amazon.com/Hanes-Ecosmart-Fleece-Sweatshirt-Black/dp/B01L8JJ57U/ref=sr_1_5?crid=2W1MNVUYDH5S3&keywords=mens%2Bcrewneck%2Bsweatshirts&qid=1701026456&sprefix=mens%2Bcrewne%2Caps%2C105&sr=8-5&th=1&psc=1",
      //   description: "Going to be cold...",
      //   new: true,
      // },
      {
        name: "New cologne",
        description: "This may be something I need to go to the store for...",
      },
      {
        name: "Amazon gift cards or cash",
        link: "https://www.amazon.com/Amazon-com-Gift-Card-Reindeer-Ornament/dp/B07FK7L976/ref=sr_1_3?crid=2CRMA1CUE8984&keywords=gift%2Bcards&qid=1700892909&sprefix=gift%2B%2Caps%2C132&sr=8-3&th=1",
        description: "Always exciting",
      },
      {
        name: "Hollister Gift Card",
        link: "https://hollisterco.com",
        description: "Clothes",
      },
      {
        name: "American Eagle Gift Card",
        link: "https://ae.com",
        description: "Clothes",
      },
      {
        name: "Magsafe Phone Wallet",
        link: "https://www.amazon.com/Upgraded-Magnetic-Wallet-Magsafe-Leather/dp/B0BYTXHG2T/ref=sr_1_4?crid=2DYF94TBL04KI&dib=eyJ2IjoiMSJ9.G7sD17W8b2qI7tN6wrg-JMG_SgsgV9ouwBkcp3uuPyCuCVW2CnbzfU8P4lKTRHVLuRDP2hiDjaE4kfHa2WiHqgHuvdCuKkHEpb9XCrYFPdz7LVVrYuz0Uwn9NDP_4QBpRRkA4lu0NkCtkli5MnIh4LA99T7HmPFEkXLZ06sLmko9T_5acJcs8w4ABhbX780a-dFeQxsusuDAQBDZfGyRWo44C0PWFGgPQ718Q8tkjFQ.vyktJZYjZ5gRcXbFzY71xsFlV16aIqodpmMbVGW_DAE&dib_tag=se&keywords=magsafe%2Bwallet%2Bmen&qid=1731699540&sprefix=magsafe%2Bwall%2Caps%2C137&sr=8-4&th=1",
        description: "So I don't lose another credit card",
      },
    ];
    setWishlistData(data);
  }, []);

  //code for tilt effect

  function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    };
  }

  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;

      setRotate({ x: rotateX / 6, y: rotateY / 6 });
    }, 100),
    [throttle]
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-slate-700">
      <div className="max-w-7xl m-auto flex flex-col gap-6 justify-center items-center p-6">
        <div className="hover:scale-105 duration-200">
          <h1
            className="text-5xl lg:text-7xl font-sans font-semibold py-6 px-10 border-2 border-white rounded-full text-center hover:shadow-2xl"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
              transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
            }}
          >
            {"TYLER'S WISHLIST"}
          </h1>
        </div>
        <div className="p-6 w-full">
          <ul className="flex flex-col gap-6 mt-16">
            {wishlistData.map((item, index) => (
              <li key={index} className="">
                {item.name && (
                  <div className="flex justify-between items-start gap-6 md:flex-row md:items-center flex-col">
                    <div className="">
                      {item.new && item.new == true && (
                        <p className="text-sm font-sans px-2 bg-white text-slate-700 rounded-full w-fit mb-2">
                          NEW
                        </p>
                      )}
                      <h1 className="text-2xl font-sans font-semibold">
                        {item.name}
                      </h1>
                      {item.size && (
                        <h2 className="text-xl font-sans">Size: {item.size}</h2>
                      )}
                      {item.color && (
                        <h2 className="text-xl font-sans">
                          Color: {item.color}
                        </h2>
                      )}
                      {item.description && (
                        <h2 className="text-xl font-sans opacity-40">
                          Note: {item.description}
                        </h2>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      {item.link && (
                        <Link href={item.link} target="_blank">
                          <button className="flex gap-1 items-center justify-center py-2 px-6 border-2 border-white rounded-full hover:shadow-xl hover:-translate-y-1 duration-200">
                            <p className="font-sans text-xl">View Item</p>
                            <Image
                              src={Arrow}
                              alt=""
                              width={20}
                              height={20}
                              className="-rotate-45"
                            ></Image>
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
                <hr className="border-white mt-6 border-opacity-10" />
              </li>
            ))}
            {/* <li className="">
              <div className="flex justify-between items-center gap-6">
                <div className="">
                  <h1 className="text-2xl font-sans font-semibold">
                    New Balance 550
                  </h1>
                  <h2 className="text-xl font-sans">Size: 10.5</h2>
                  <h2 className="text-xl font-sans">
                    Color: White with Vintage Indigo
                  </h2>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="https://www.newbalance.com/pd/550/BB550V1-43389.html?dwvar_BB550V1-43389_style=BB550STG"
                    target="_blank"
                  >
                    <button className="flex gap-1 items-center justify-center py-2 px-6 border-2 border-black rounded-full hover:shadow-xl duration-200">
                      <p className="font-sans text-xl">View Item</p>
                      <Image
                        src={Arrow}
                        alt=""
                        width={20}
                        height={20}
                        className="-rotate-45"
                      ></Image>
                    </button>
                  </Link>
                </div>
              </div>
              <hr className="border-black my-6" />
            </li> */}
          </ul>
        </div>
        <p className="text-sm font-sans mt-24">
          Thank you for checking out my list!
        </p>
        {/* <button className="flex gap-2 items-center justify-center py-2 px-6 bg-white text-slate-700 rounded-full hover:shadow-xl hover:-translate-y-1 duration-200">
          <p className="font-sans text-xl">Add New Item</p>
          <Image src={Plus} alt="" width={20} height={20}></Image>
        </button> */}
      </div>
      {/* <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-white text-slate-700 p-8 rounded-xl shadow-lg">
          <form onSubmit={(e) => {
            e.preventDefault();
            if(password !== "TYlerWishlist2023!"){
              toast.error("Incorrect Password.");
            }
            else{
              setShowAddItem(true);
            }
          }} className="flex flex-col justify-center items-center">
            <p className="font-sans text-xl">Please enter the password:</p>
            <input
              type="text"
              className="w-full border-2 border-slate-700 rounded-full mt-3 outline-none px-2 py-1"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="font-sans text-xl bg-slate-700 text-white py-2 px-6 rounded-full mt-3">
              Submit
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
}
