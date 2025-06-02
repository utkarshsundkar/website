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
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-[#F6FBE9] section-with-grid">
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
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 grid grid-cols-6 w-full h-full pointer-events-none">
            {Array.from({ length: 6 }).map((_, colIndex) => (
              <div key={colIndex} className="h-full border-r border-[#A3D9A5] border-opacity-20 last:border-r-0"></div>
            ))}
            {Array.from({ length: 4 }).map((_, rowIndex) => (
              <div key={rowIndex} className="w-full border-b border-[#A3D9A5] border-opacity-20 absolute" style={{ top: `${(rowIndex + 1) * 25}%` }}></div>
            ))}
          </div>

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-sm border relative z-10 ${plan.popular ? 'border-[#FE5F20] transform scale-105 md:scale-105' : 'border-[#EEF8D3]'}`}
            >
              {plan.popular && (
                <div className="bg-[#FE5F20] text-white text-center py-1 text-xs font-medium">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800">
                  {plan.title}
                </h3>
                <p className="text-[#4C4C4D] text-sm mt-1">
                  Up to 15% off on Yearly Plan
                </p>
                
                <div className="flex items-center justify-center my-6">
                  <span className="text-[#2C5446] text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-[#333] text-sm ml-1 self-end mb-1">/month</span>
                </div>
                
                <p className="text-[#333] text-sm mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 text-[#FE5F20] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/coming-soon">
                  <button 
                    className={`w-full py-3 ${plan.popular ? 'bg-[#FE5F20] hover:bg-[#e55624]' : 'bg-[rgba(254,95,32,0.75)] hover:bg-[#FE5F20]'} text-white font-semibold rounded-md transition-colors`}>
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
