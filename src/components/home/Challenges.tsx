
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export const Challenges: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="bg-[#FE5F20] rounded-2xl overflow-hidden relative">
          {/* Background with 3D geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-full relative">
              {/* Circles */}
              <div className="absolute h-16 w-16 rounded-full bg-[#4CD964]/60 top-10 left-10"></div>
              <div className="absolute h-8 w-8 rounded-full bg-[#FF9500]/60 top-40 right-20"></div>
              <div className="absolute h-12 w-12 rounded-full bg-[#FF73FA]/60 bottom-10 left-1/4"></div>
              
              {/* Cubes/squares */}
              <div className="absolute h-14 w-14 bg-[#5AC8FA]/60 rotate-12 top-20 right-1/3"></div>
              <div className="absolute h-10 w-10 bg-[#FFCC00]/60 -rotate-6 bottom-20 right-10"></div>
              <div className="absolute h-6 w-6 bg-[#FF3B30]/60 rotate-45 top-1/2 left-20"></div>
              
              {/* Rectangles */}
              <div className="absolute h-5 w-20 bg-[#FF73FA]/60 -rotate-12 top-16 right-1/4"></div>
              <div className="absolute h-4 w-16 bg-[#34AADC]/60 rotate-45 bottom-16 left-1/3"></div>
              
              {/* Pills */}
              <div className="absolute h-8 w-4 rounded-full bg-[#44DB5E]/60 rotate-45 top-1/3 right-16"></div>
              <div className="absolute h-6 w-3 rounded-full bg-[#FFCC00]/60 -rotate-30 bottom-1/3 left-16"></div>
            </div>
          </div>

          {/* Content box */}
          <div className="min-h-[600px] md:min-h-[500px] w-full relative flex items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-white/95 rounded-xl p-8 m-4 md:m-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#234338] mb-6">
                Weekly Fitness Challenges
              </h2>
              
              <p className="text-center mb-10 text-[#333] max-w-2xl mx-auto">
                Each week, a custom set of exercises will be released for all users.
                Compete to win exciting prizes by showing your best form and highest reps!
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#FFDED3] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center">How to Win</h3>
                  <ul className="space-y-3 list-disc pl-6">
                    <li>Complete all assigned exercises using the Arthlete AI Motion Tracker</li>
                    <li>Aim for the highest accuracy and most reps</li>
                    <li>Only paid users are eligible for prizes</li>
                  </ul>
                </div>
                
                <div className="bg-[#FFDED3] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center">Weekly Winning Ratio</h3>
                  <ul className="space-y-3 list-disc pl-6">
                    <li>Week 1: 1 in 10 participants win</li>
                    <li>Week 2: 1 in 20 win</li>
                    <li>Week 3: 1 in 30 win</li>
                    <li>Week 4: 1 in 40 win</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <p className="mb-4 text-[#333]">Haven't downloaded yet? Install now!</p>
                <a href="https://forms.gle/RHsTMRrQkHoToqxXA" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#234338] text-white hover:bg-[#1a332a]">
                    Download Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
