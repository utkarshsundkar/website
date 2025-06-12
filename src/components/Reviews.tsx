import { useRef, useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";

interface Review {
  id: number;
  name: string;
  occupation: string;
  rating: number;
  comment: string;
  headline: string;
  frame: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Dhruv Sidhpura",
    occupation: "Athlete",
    rating: 4.5,
    headline: "\"It's like having a personal trainer in my pocket\"",
    comment: "The AI motion tracking is incredibly accurate. it corrected my posture in real-time and actually helped me feel the difference. I don't have to worry about gym timings anymore. Super useful for someone like me who prefers working out at home.",
    frame: 31
  },
  {
    id: 2,
    name: "Abhishek Dubey",
    occupation: "Student",
    rating: 4,
    headline: "\"Finally, an app that keeps me consistent!\"",
    comment: "The gamified experience is addictive! Watching my rank go up on the leaderboard every week actually pushes me to work out daily. The points and progress system make fitness fun again",
    frame: 31
  },
  {
    id: 3,
    name: "Madhuri Gedam",
    occupation: "Teacher",
    rating: 4.5,
    headline: "\"Perfect for beginners and hostel life\"",
    comment: "I didn't have access to a gym, but Arthlete made it easy to stay on track. The exercises are guided and safe, and I love how the app gives instant feedback. Excited to see where it goes next.",
    frame: 31
  },
  {
    id: 4,
    name: "Yash Ekke",
    occupation: "Student",
    rating: 4,
    headline: "\"Finally, an app that keeps me consistent!\"",
    comment: "Arthlete completely changed my home workout game! The AI motion tracking is super accurate and keeps me motivated every day.",
    frame: 30
  }
];

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card className="bg-[#FE5F20] text-white p-6 rounded-xl flex flex-col min-h-[220px] border-none shadow-xl relative w-[320px] md:w-[350px] mx-4">
      <div>
        <h3 className="text-lg font-semibold mb-3">{review.headline}</h3>
        <p className="text-sm text-white/90">{review.comment}</p>
      </div>
      <div className="mt-auto flex items-center pt-4">
        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
          {review.name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium">{review.name}</p>
          <p className="text-sm text-white/70">{review.occupation}</p>
        </div>
      </div>
    </Card>
  );
};

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  // Duplicate reviews for seamless infinite scroll
  const rollingReviews = [...reviews, ...reviews];

  useEffect(() => {
    // Set the width of the track for animation
    const track = trackRef.current;
    if (track) {
      setTrackWidth(track.scrollWidth / 2); // Only half, since we duplicate
    }
  }, []);

  useEffect(() => {
    // Pause animation on hover
    const track = trackRef.current;
    if (!track) return;
    const handleMouseEnter = () => {
      track.style.animationPlayState = 'paused';
    };
    const handleMouseLeave = () => {
      track.style.animationPlayState = 'running';
    };
    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 bg-[#FE5F20]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-2">What Our Users Are Saying</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Real Stories, Real Results – Hear From Our Athletes
          </p>
        </div>
        <div className="overflow-x-hidden w-full">
          <div
            ref={trackRef}
            className="flex items-stretch whitespace-nowrap"
            style={{
              animation: trackWidth
                ? `review-marquee ${trackWidth / 40}s linear infinite`
                : undefined,
            }}
          >
            {rollingReviews.map((review, idx) => (
              <ReviewCard key={review.id + '-' + idx} review={review} />
            ))}
          </div>
        </div>
      </div>
      {/* Animation keyframes with dynamic width */}
      <style>{`
        @keyframes review-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${trackWidth}px); }
        }
      `}</style>
    </section>
  );
}
