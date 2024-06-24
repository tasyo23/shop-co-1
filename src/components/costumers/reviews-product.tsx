import { getReviews } from "@/services/reviews-service";
import { FunctionComponent } from "react";
import ReviewItem from "./review-item";

interface ReviewProductProps {}

const ReviewProduct: FunctionComponent<ReviewProductProps> = async () => {
  const reviews = await getReviews();

  console.log(reviews);
  return (
    <div>
      <p className="font-bold text-xl mb-8">
        All Reviews{" "}
        <span className="text-black text-opacity-60 font-normal text-lg">
          (451)
        </span>
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {reviews?.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
            isShowDate={true}
            classname="!w-full"
          />
        ))}
      </div>
      <button className="py-[15px] px-[45px] border rounded-full mt-12 mx-auto block">
        Load More Reviews
      </button>
    </div>
  );
};

export default ReviewProduct;
