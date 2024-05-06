import Image from "next/image";
import React from "react";

export default function OurServices() {
  return (
	
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 px-8">
	
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/icons/our-service-icon.svg"}

          width={74}
          height={74}
          alt=""
        />
        <p className="text-xl xl:text-2xl font-medium mt-6">
		Innovation
        </p>
        <p className="xl:text-lg font-light text-center text-black/63">
		We continuously innovate to stay ahead of industry trends and provide our clients with the most advanced payment solutions.

        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/icons/our-service-icon-2.svg"}

          width={74}
          height={74}
          alt=""
        />
        <p className="text-xl xl:text-2xl font-medium mt-6">
		Security
        </p>
        <p className="xl:text-lg font-light text-center text-black/63">
		Security is our top priority. We adhere to the highest industry standards to ensure the safety and confidentiality of every transaction.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/icons/our-service-icon-3.svg"}
          width={74}
          height={74}
          alt=""
        />
        <p className="xl:text-2xl font-medium mt-6">Reliability</p>
        <p className="xl:text-lg font-light text-center text-black/63">
		We pride ourselves on the reliability of our platform, offering merchants peace of mind and uninterrupted service
        </p>
      </div>
    </section>
  );
}
