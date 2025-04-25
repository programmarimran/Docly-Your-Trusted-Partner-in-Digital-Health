import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";

const Blog = () => {
  const collectData = useLoaderData();
  const datas = collectData.questionsAndAnswers;
  return (
    
    <div className="max-w-7xl mx-auto mt-8">
      <Helmet>
        <title>Docly|Blog</title>
      </Helmet>
      {datas.map((data) => (
        <div key={data.id} className="card bg-white my-6 rounded-2xl p-12">
          <h1 className=" text-2xl font-bold py-4  text-start">
            <span className="text-4xl font-extrabold">Question {data.id}: </span>
            {data.question}
          </h1>
          <span className=" border-2 border-dashed border-gray-300"></span>
          <p className="text-2xl font-bold py-4  text-start">
            <span className="text-4xl font-extrabold">Ans: </span>
            {data.answer}
          </p>
          <span className=" border-2 border-dashed border-gray-300"></span>
        </div>
        // ***********************************************************
        // <div
        //   tabIndex={0}
        //   className="collapse collapse-arrow bg-base-100 border-base-300 border"
        // >
        //   <div className="collapse-title font-semibold">
        //     <h1 className=" text-2xl font-bold py-4  text-start">
        //       <span className="text-4xl font-extrabold">
        //         Question {data.id}:{" "}
        //       </span>
        //       {data.question}
        //     </h1>
        //   </div>
        //   <div className="collapse-content text-sm">
        //     <p className="text-2xl font-bold py-4  text-start">
        //       <span className="text-4xl font-extrabold">Ans: </span>
        //       {data.answer}
        //     </p>
        //   </div>
        // </div>
        // ************************************************
      ))}
    </div>
  );
};

export default Blog;
