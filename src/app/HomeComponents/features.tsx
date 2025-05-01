// components/KeyFeatures.tsx
"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function KeyFeatures() {
  return (
    <section className="bg-black text-white py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Key Features</h2>

      <Tabs defaultValue="application" className="max-w-5xl mx-auto">
        {/* Top Button Row */}
        <TabsList className="flex justify-center gap-4 mb-8 bg-transparent">
          <TabsTrigger
            value="application"
            className="rounded-md px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold"
          >
            Application Builder
          </TabsTrigger>
          <TabsTrigger
            value="dates"
            className="rounded-md px-6 py-2 bg-gray-800 text-white hover:bg-gray-700"
          >
            Important Dates
          </TabsTrigger>
          <TabsTrigger
            value="alumni"
            className="rounded-md px-6 py-2 bg-gray-800 text-white hover:bg-gray-700"
          >
            Meet the Alumni
          </TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <TabsContent value="application">
          <div className="bg-black border border-pink-500/40 rounded-xl p-8 flex gap-6 shadow-lg">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">Application Builder</h3>
              <p className="text-white font-semibold mb-4">Nail Every Application With AI</p>
              <p className="text-gray-300 mb-4">
                From SOPs to resumes, Alumna.ai helps you write, polish, and submit standout
                applications — fast and stress-free.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>SOP & LOR Drafts</strong> — AI-generated, reviewed, and optimized for impact.
                </li>
                <li>
                  <strong>Resume Assistant</strong> — Tailored resumes for college, internships, or job roles.
                </li>
                <li>
                  <strong>Auto-Fill Applications</strong> — Save time and reduce errors with smart autofill for forms.
                </li>
              </ul>
              <button className="mt-6 px-6 py-2 border border-pink-400 text-pink-300 rounded hover:bg-pink-500 hover:text-white transition">
                Build My Application Now
              </button>
            </div>
            <div className="w-1/2 h-[250px] bg-gray-900 rounded-lg"></div>
          </div>
        </TabsContent>

        <TabsContent value="dates">
          <div className="bg-black border border-gray-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Important Dates Calendar</h3>
            <p className="text-gray-400">Coming soon: Stay on track with application deadlines!</p>
          </div>
        </TabsContent>

        <TabsContent value="alumni">
          <div className="bg-black border border-gray-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Meet the Alumni</h3>
            <p className="text-gray-400">Connect with successful alumni and learn from their journeys.</p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
