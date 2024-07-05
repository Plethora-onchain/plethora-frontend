import Image from "next/image";
import landingImg2 from "../../assets/images/monetize.png";
import landingImg3 from "../../assets/images/growth.png";

const WeHelpYouGrow = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F3F3F3]">
      <h1 className="text-3xl text-center font-bold text-[#7248EE] tracking-tighter sm:text-4xl md:text-5xl mb-12 lg:mb-24">
        We help you grow
      </h1>
      <div className="container px-4 md:px-6 mb-48">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
          <div className="grid items-center gap-4 sm:gap-6 order-2">
            <Image
              alt="Image"
              className="mx-auto rounded-xl object-cover object-center"
              src={landingImg2}
              // width="550"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter mb-4 text-[#7248EE]">
              Monetize your way
            </h1>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Set up subscriptions, rentals, or one-time buys for access to your
              VOD and live streams. Create exclusive experiences for your
              subscribers with coupons and promotions. One predictable fee,
              transparent pricing, and same-day setup.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
          <div className="grid items-center gap-4 sm:gap-6 order-last lg:order-first">
            <Image
              alt="Image"
              className="mx-auto rounded-xl object-cover object-center"
              src={landingImg3}
              // width="550"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter mb-4 text-[#7248EE]">
              Optimized for growth
            </h1>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              The Screeno ecosystem is designed to help you generate profit. Set
              up complete sales and marketing funnels with ease using the
              Screeno built-in marketing tools and integrations. Generate leads
              and convert your audience into paying subscribers, at no extra
              cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHelpYouGrow;
