import { Helmet } from 'react-helmet-async';

const Registration_Agents = () => {
  return (
    <div className="mb-12 px-4 container mx-auto">
      <Helmet>
        <title>Become an Agent | Eammu Immigration Services Bangladesh</title>
        <meta
          name="description"
          content="Join Eammu Immigration Services as a registered travel agent in Bangladesh. Start your visa and ticketing business with 50% commission and no investment."
        />
        <meta
          name="keywords"
          content="visa agent Bangladesh, travel agency partner, no investment business, visa ticketing commission, agentship registration, Eammu Immigration Services"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.eammu.com/agents" />
      </Helmet>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="lg:w-[400px]"
            src="https://i.ibb.co/9GWRJvf/agentship.jpg"
            alt="eammuimmigrationservicesagent"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Eammu Immigration Services Gives Agentship in Bangladesh
          </h2>
          <p className="mt-6">
            বেকার বসে আছেন? ৫০% এজেন্টশিপে ট্রাভেল এজেন্সী ব্যবসা করুন কোন ইনভেস্ট ছাড়াই! <br /><br />
            🚀 ট্রাভেল এজেন্সী ব্যবসায় একটি ভালো ক্যারিয়ারের স্বপ্ন দেখছেন? আপনার সুযোগ এখানেই!🚀 <br /><br />
            ইয়াম্মু ইমিগ্রেশন সার্ভিস এর সাথে সর্বোচ্চ কমিশনে টিকেট এবং ভিসা করুন 🔥 <br />
            Eammu Immigration Services কোনো ইনভেস্ট ছাড়াই উল্লেখযোগ্য 50% কমিশন সহ ব্যক্তিদের
            এজেন্ট হিসেবে আমাদের সাথে যোগদান করার জন্য একটি সীমিত সুযোগ দিচ্ছে! 🔥
          </p>
          <p className="text-2xl font-bold text-[#005a31]">শীঘ্রই রেজিস্ট্রেশন করুন</p>
          <div className="card-actions justify-end">
            <a
              href="https://rb.gy/si1vi9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-[#005a31] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-white bg-white text-[#072504] border-[1.5px] border-[#072504]"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration_Agents;
