import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <h2 className="text-info">What is Authentication?</h2>
            <p>
              Authentication হল একজন ব্যক্তির পরিচয় শনাক্ত করার প্রক্রিয়া যা
              নিশ্চিত করে। Authentication মাধ্যমে ব্যবহারকারীর পরিচয় নির্ধারণ
              করার প্রক্রিয়া, এইভাবে পরিচয় যাচাই করা হয়। একজনের পরিচয়
              Authenticate কিছু উপায় এখানে তালিকাভুক্ত করা হয় |
            </p>
            <h2 className="mt-3 text-primary">What is Authorization?</h2>
            <p>
              Authorization, ইতিমধ্যে, সিস্টেম অ্যাক্সেস করার অনুমতি প্রদানের
              প্রক্রিয়া। Authorization প্রায়ই Authentication অনুসরণ করে এবং
              বিভিন্ন প্রকার হিসাবে তালিকাভুক্ত করা হয়। Authorization মানে
              সিস্টেমে অ্যাক্সেস দেওয়া |
            </p>
          </div>
          <div className="col">
            <h2>why are using firebase?</h2>
            <p>
              Firebase ডাটাবেসের সমস্ত ডেটা রিয়েল-টাইম পরিচালনা করে৷ সুতরাং,
              ডাটাবেস থেকে ডেটা আদান-প্রদান সহজ এবং দ্রুত। তাই, যদি লাইভ
              স্ট্রিমিং, চ্যাট মেসেজিং ইত্যাদির মতো মোবাইল অ্যাপ তৈরি করতে দরকার
              হয় তাহলে, তাহলে Firebase ব্যবহার করা ভালো |
            </p>
          </div>
          <div className="col">
            <h1>Blogs3</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
