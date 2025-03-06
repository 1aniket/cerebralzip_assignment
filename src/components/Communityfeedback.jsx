import React, { useEffect, useState } from "react";
import { useUser } from "../context/context";
import { fetchCumminityFeedbackData } from "../services/Dashboardservice";

const CommunityFeedback = () => {
  const [communityFeedbackData, setCommunityFeedbackData] = useState();
  const { user } = useUser();

  const fetchData = async () => {
    try {
      const response = await fetchCumminityFeedbackData(user);
      setCommunityFeedbackData(response);
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch community feedback data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const total =
    (communityFeedbackData?.negative || 0) +
    (communityFeedbackData?.positive || 0) +
    (communityFeedbackData?.neutral || 0);
  const divider = total / 100 || 1;
  const negativeWidth = (communityFeedbackData?.negative / divider) + "%";
  const neutralWidth = (communityFeedbackData?.neutral / divider) + "%";
  const positiveWidth = (communityFeedbackData?.positive / divider) + "%";

  console.log(total, negativeWidth, positiveWidth);

  return (
    <div className="bg-white h-[20vh] rounded-[10px] px-3 py-1">
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">Community Feedback</p>
        <h1 className="text-lg font-bold">
          Mostly {communityFeedbackData?.negative > communityFeedbackData?.neutral
            ? communityFeedbackData?.negative > communityFeedbackData?.positive
              ? "Negative"
              : communityFeedbackData?.neutral > communityFeedbackData?.positive
              ? "Neutral"
              : "Positive"
            : "Positive"}
        </h1>
      </div>

      <div className="w-[100%] h-[10px] rounded-full flex gap-1">
        <div
          id="negative"
          style={{ width: negativeWidth }}
          className="bg-red-300 h-[10px] rounded-full"
        ></div>
        <div
          id="neutral"
          style={{ width: neutralWidth }}
          className="bg-yellow-300 h-[10px] rounded-full"
        ></div>
        <div
          id="positive"
          style={{ width: positiveWidth }}
          className="bg-green-300 h-[10px] rounded-full"
        ></div>
      </div>
      <div className="flex gap-2 pt-2">
        <div>
          <h6>Negative</h6>
          <p className="font-bold">{communityFeedbackData?.negative}</p>
        </div>
        <div>
          <h6>Neutral</h6>
          <p className="font-bold">{communityFeedbackData?.neutral}</p>
        </div>
        <div>
          <h6>Positive</h6>
          <p className="font-bold">{communityFeedbackData?.positive}</p>
        </div>

      </div>
    </div>
  );
};

export default CommunityFeedback;