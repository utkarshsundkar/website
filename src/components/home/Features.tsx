import React from 'react';

// Add Google Fonts import for Poppins in index.html or main entry if not already present
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />

export const Features: React.FC = () => {
  const features = [
    {
      title: "Personalized Nutrition Plans",
      description: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs.",
      icon: "/assets/Diet.png",
    },
    {
      title: "Expert-Backed Guidance",
      description: "Receive actionable insights powered by AI and validated by experts. Arthlete provides recommendations to help you stay on track.",
      icon: "/assets/Ai.png",
    },
    {
      title: "Focus Mode & Form Precision",
      description: "Master every move with perfect form. In Focus Mode, all reps must be clean — or the workout restarts. Stay disciplined, track only perfect execution, and build elite-level consistency.",
      icon: "/assets/Ai2.png",
    },
    {
      title: "Dynamic Meal Suggestions",
      description: "Explore meals recommended by our AI engine based on your training load, recovery needs, and personal goals.",
      icon: "/assets/Diet2.png",
    },
    {
      title: "Habits & Recovery Coaching",
      description: "Fitness is more than workouts—Arthlete helps you build sustainable habits, improve sleep, manage stress, and stay mentally strong.",
      icon: "/assets/Habits.png",
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-black">
      <div className="container mx-auto flex flex-col gap-32">
        {features.map((feature, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={feature.title}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image - much larger */}
              <div className="flex-shrink-0 flex justify-center w-full md:w-1/2 z-10">
                <img
                  src={feature.icon}
                  alt={feature.title + ' icon'}
                  className="w-72 h-72 md:w-[32rem] md:h-[32rem] object-contain rounded-3xl shadow-2xl bg-black"
                  style={{background: 'transparent'}}
                />
              </div>
              {/* Number and Details on the opposite side */}
              <div className="flex-1 flex flex-col items-center md:items-start z-10">
                <span className="text-[6rem] md:text-[8rem] font-extrabold text-white select-none pointer-events-none mb-2 md:mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {idx + 1}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center md:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>{feature.title}</h3>
                <p className="text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed text-center md:text-left">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
