import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: "Fitness Plan",
      description: "Get started with AI-powered motion tracking tailored to your workouts. Perfect for solo users looking to improve form and consistency.",
      features: [
        "Real-time form correction",
        "Weekly progress insights",
        "Weekly fitness challenges",
        "Basic exercise library"
      ],
      price: isYearly ? 199 : 249,
      popular: false
    },
    {
      title: "Diet Plan",
      description: "A standalone personalized diet plan built for your fitness goals. Ideal for users who only want nutritional support.",
      features: [
        "Customized meal plans",
        "Weekly nutrition tips",
        "Direct dietician-curated updates",
        "Grocery shopping lists"
      ],
      price: isYearly ? 159 : 199,
      popular: false
    },
    {
      title: "Ultimate Plan",
      description: "Unlock the complete Arthlete experience – motion tracking + personalized diet plans. The all-in-one solution.",
      features: [
        "Everything in Fitness Plan",
        "Everything in Diet Plan",
        "Premium AI Tracker",
        "Priority customer support"
      ],
      price: isYearly ? 299 : 349,
      popular: true
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-[#FFF0E0]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
            Our Pricing
          </h2>
          <p className="text-[#333] text-base mt-3 max-w-2xl mx-auto">
            We provide flexible, affordable options to support your fitness and wellness journey.
            Whether you're just starting or going all-in, we've got a plan for you.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 border border-[#FE5F20] inline-flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                !isYearly
                  ? 'bg-[#234338] text-white'
                  : 'text-[#4C4C4C]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                isYearly
                  ? 'bg-[#234338] text-white'
                  : 'text-[#4C4C4C]'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
        
        <p className="text-center text-sm text-[#4C4C4D] mb-8">
          Save 15% on Yearly Plans
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl border relative z-10 ${plan.popular ? 'border-[#FE5F20] transform scale-105 md:scale-105' : 'border-gray-100'}`}
            >
              {plan.popular && (
                <div className="bg-[#FE5F20] text-white text-center py-2 text-sm font-semibold rounded-t-2xl absolute -top-1 left-1/2 -translate-x-1/2 w-40 tracking-wider">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8 pt-10">
                <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Up to 15% off on Yearly Plan
                </p>
                
                <div className="flex items-baseline justify-center my-8">
                  <span className="text-[#2C5446] text-5xl font-extrabold">₹{plan.price}</span>
                  <span className="text-[#333] text-base ml-1">/month</span>
                </div>
                
                <p className="text-gray-600 text-base mb-8 leading-relaxed">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-base">
                      <svg className="w-5 h-5 text-[#468671] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="https://forms.gle/RHsTMRrQkHoToqxXA" target="_blank" rel="noopener noreferrer">
                  <button 
                    className={`w-full py-4 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${plan.popular ? 'bg-[#FE5F20] hover:bg-[#e55624]' : 'bg-[#FFAB6A] hover:bg-[#FE5F20] text-white'}`}>
                    Choose Plan
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
