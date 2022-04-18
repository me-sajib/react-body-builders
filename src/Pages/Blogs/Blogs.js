import React from "react";

const Blogs = () => {
  return (
    <div className="bg-dark text-light">
      <div className="container">
        <h1 className="text-center text-primary py-5">Blogs</h1>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <h2 className="text-info">
              authorization and authentication difference ?
            </h2>
            <p>
              Authentication হল একজন ব্যক্তির পরিচয় শনাক্ত করার প্রক্রিয়া যা
              নিশ্চিত করে। Authentication মাধ্যমে ব্যবহারকারীর পরিচয় নির্ধারণ
              করার প্রক্রিয়া, এইভাবে পরিচয় যাচাই করা হয়। একজনের পরিচয়
              Authenticate কিছু উপায় এখানে তালিকাভুক্ত করা হয় | Authorization,
              ইতিমধ্যে, সিস্টেম অ্যাক্সেস করার অনুমতি প্রদানের প্রক্রিয়া।
              Authorization প্রায়ই Authentication অনুসরণ করে এবং বিভিন্ন প্রকার
              হিসাবে তালিকাভুক্ত করা হয়। Authorization মানে সিস্টেমে অ্যাক্সেস
              দেওয়া |
            </p>
          </div>
          <div className="col">
            <h2 className="text-success">
              why using firebase and other authentication option?
            </h2>
            <p>
              Firebase ডাটাবেসের সমস্ত ডেটা রিয়েল-টাইম পরিচালনা করে৷ সুতরাং,
              ডাটাবেস থেকে ডেটা আদান-প্রদান সহজ এবং দ্রুত। তাই, যদি লাইভ
              স্ট্রিমিং, চ্যাট মেসেজিং ইত্যাদির মতো মোবাইল অ্যাপ তৈরি করতে দরকার
              হয় তাহলে, তাহলে Firebase ব্যবহার করা ভালো |
            </p>
            <b>ফায়ারবেস বিকল্প</b>
            <ul>
              <li>Auth0</li>
              <li>Passport </li>
              <li>Okta </li>
              <li>Amazon Cognito </li>
              <li>Keycloak </li>
            </ul>
          </div>
          <div className="col">
            <h2 className="text-primary mb-2">
              What other services does firebase provide other than
              authentication?
            </h2>
            <ul>
              <li>Cloud Firestore</li>
              <li>Cloud Functions Hosting</li>
              <li>Cloud Storage</li>
              <li>Google Analytics</li>
              <li>Predictions</li>
              <li>Cloud Messaging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
