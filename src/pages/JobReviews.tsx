import Carousel from "@/components/Carousel";
import job_reviews1 from "@/assets/job-reviews-1.jpg";
import job_reviews2 from "@/assets/job-reviews-2.jpg";
import job_reviews3 from "@/assets/job-reviews-3.jpg";
import job_reviews4 from "@/assets/job-reviews-4.jpg";
import job_reviews5 from "@/assets/job-reviews-5.jpg";
import job_reviews6 from "@/assets/job-reviews-6.jpg";
import job_reviews7 from "@/assets/job-reviews-7.jpg";
import job_reviews8 from "@/assets/job-reviews-8.jpg";
import job_reviews9 from "@/assets/job-reviews-9.jpg";
import { useEffect } from "react";

const JobReviews = () => {
    useEffect(() => {window.scrollTo(0, 0);}, []);
    const job_reviews = [job_reviews1, job_reviews2, job_reviews3, job_reviews4, job_reviews5, job_reviews6, job_reviews7, job_reviews8, job_reviews9];

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Отзывы</h1>
        <div className="h-[600px]">
          <Carousel
            items={job_reviews.map((cert, idx) => (
              <div key={idx} className="flex items-center justify-center px-4">
                <img
                  src={cert}
                  alt={`Отзыв ${idx + 1}`}
                  className="max-h-[580px] w-auto object-contain rounded-lg shadow-xl"
                />
              </div>
            ))}
            autoPlay
            interval={60000}
          />
        </div>
      </div>
    </div>
  );
};

export default JobReviews;
