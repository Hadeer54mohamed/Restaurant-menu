"use client"

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="https://placehold.co/100x30?text=M3akel"
              alt="شعار المطعم - نص مطعمنا باللون الأبيض"
              className="h-8"
            />
            <p className="mt-2 text-sm">© 2023 مطعمنا. جميع الحقوق محفوظة.</p>
          </div>

          <div className="flex space-x-6 space-x-reverse">
            <a href="#" className="hover:text-blue-300 transition" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-300 transition" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-300 transition" aria-label="Email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1.562-15.25c-.955 0-1.729.774-1.729 1.729v4.417c0 .955.774 1.729 1.729 1.729h9.927c.955 0 1.729-.774 1.729-1.729V8.479c0-.955-.774-1.729-1.729-1.729h-9.927zm0 1.083h9.927c.357 0 .646.289.646.646v4.417a.647.647 0 01-.646.646h-9.927a.647.647 0 01-.646-.646V8.479c0-.357.289-.646.646-.646zm-.694 2.219v2.5c0 .552-.448 1-1 1s-1-.448-1-1v-2.5c0-.552.448-1 1-1s1 .448 1 1z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-center">
          <p>ساعات العمل: يومياً من 10 صباحاً إلى 11 مساءً</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
