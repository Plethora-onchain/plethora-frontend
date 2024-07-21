import Image from "next/image";
import landingImg2 from "../../assets/images/monetize.png";
import landingImg3 from "../../assets/images/growth.png";

const WeHelpYouGrow = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F3F3F3]">
      <h1 className="text-3xl text-center font-bold text-[#171717] tracking-tighter sm:text-4xl md:text-5xl mb-12 lg:mb-24">
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
            <h1 className="text-4xl font-bold tracking-tighter mb-4 text-[#171717]">
              Monetize your way
            </h1>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Our platform is designed to empower creators like you, providing
              the tools and resources needed to monetize your work effectively.
              From secure payment processing to audience engagement strategies,
              we&apos;ve got you covered. Connect with fans, offer exclusive
              content, and build a sustainable income doing what you love.
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
            <h1 className="text-4xl font-bold tracking-tighter mb-4 text-[#171717]">
              Optimized for growth
            </h1>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              At its core, our blockchain-based content creation platform is
              crafted to cultivate a dynamic ecosystem where creativity
              flourishes and innovation is celebrated. By harnessing the
              advantages of blockchain technology, we aspire to reshape the
              content creation and monetization landscape, empowering creators
              like you to soar to unprecedented levels of success. Join us in
              this exciting journey, where your passion for creation is met with
              the tools and support needed to thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHelpYouGrow;
