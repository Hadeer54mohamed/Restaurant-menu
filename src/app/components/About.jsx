"use client"

import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">عن مطعمنا</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://placehold.co/600x400?text=مطعمنا"
              alt="صورة داخلية للمطعم مع طاولات وزينة أنيقة"
              className="rounded-lg shadow"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-4">
              مطعمنا يقدم أشهى الأطباق العربية والعالمية منذ عام 2010. نفتخر
              بجودة مكوناتنا وطهاة ذوي خبرة واسعة.
            </p>
            <p>
              نسعى دائماً لإرضاء زبائننا بتقديم أطباق مميزة في جو عائلي راقي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
