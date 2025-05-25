import React from "react";

const WhyChooseCodeCrew = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Why Choose CodeCrew
        </h1>

        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed">
          Driven by core principles, focused on your career success.
        </p>

        <blockquote className="max-w-3xl mx-auto italic text-center text-gray-600 mb-16 border-l-4 border-indigo-600 pl-6">
          "We've built CodeCrew on values that prioritize your growth and success. We
          believe our dedication is the key to empowering your future."
        </blockquote>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Expert Mentorship
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our experienced mentors guide you every step of the way, ensuring you
              gain real-world skills and industry insights.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Hands-on Projects
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Learn by doing with practical projects that prepare you for actual job
              scenarios and challenges.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">24/7 Support</h2>
            <p className="text-gray-700 leading-relaxed">
              Our team is always available to support your learning journey, making
              sure you’re never stuck.
            </p>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default WhyChooseCodeCrew;
