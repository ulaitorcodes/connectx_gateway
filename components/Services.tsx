import Image from "next/image";
import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-neutral-100 flex flex-col-reverse md:flex-row justify-between items-center px-5 md:px-12 xl:px-20 mt-20 py-16 mx-0 md:mx-5 xl:mx-20 rounded-none md:rounded-[53px] gap-12">
      <div className="flex-1 h-[750px]">
        <Image
          className="h-full w-full object-cover"
          src={"/keyboard-visa.jpeg"}
          width={405}
          height={829}
          alt=""
        />
      </div>
      <div className="flex-1">
        <div className="bg-gray-200 rounded-[9px] px-2 py-1 w-fit">
          <p>Solutions and Services</p>
        </div>
        <div>
          <p className="text-3xl lg:text-4xl tracking-tight font-medium mt-2">
          Our Payment Gateway Solutions <span className="text-3xl lg:text-5xl">🚀</span>
          </p>
          <div className="relative mt-9 pb-16">
            <div className="max-w-[435px]">
              <p className="text-2xl">
                <span className="text-primary pr-2">01</span>Transaction API Integration
              </p>
              <p className="text-secondary ml-9">
              Our Transaction API integration provides merchants with a flexible and scalable solution for sending transactions through the ICS Connectx Gateway.
              </p>
            </div>
            <div className="absolute top-8 left-3 bg-primary w-[3.7px] h-[102px] rounded-sm"></div>
          </div>
          <div className="relative pb-16">
            <div className="max-w-[435px]">
              <p className="text-2xl">
                <span className="text-primary pr-2">02</span>Hosted Payment Form Integration
              </p>
              <p className="text-secondary ml-9">
              For merchants seeking a hassle-free payment processing solution, our Hosted Payment Form integration offers a convenient option.
              </p>
            </div>
            <div className="absolute top-8 left-3 bg-primary w-[3.7px] h-[102px] rounded-sm"></div>
          </div>
          <div className="pb-16">
            <div className="max-w-[435px]">
              <p className="text-2xl">
                <span className="text-primary pr-2">03</span>Query API Integration
              </p>
              <p className="text-secondary ml-9">
              Accessing transaction and chargeback information in real-time is essential for informed decision-making and business optimization.
              </p>
            </div>
          </div>
          <div className="pb-16">
            <div className="max-w-[435px]">
              <p className="text-2xl">
                <span className="text-primary pr-2">04</span>Pay By Link Integration
              </p>
              <p className="text-secondary ml-9">
              Our Pay By Link Integration enables merchants to create payment links that can be shared with customers via email, SMS, or social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}