"use client";
import { useState } from "react";

const faqs = [
  { q: "How long does it take for my music to go live on stores?", a: "Most releases go live within 3-7 days depending on the store." },
  { q: "Do I keep 100% ownership of my music?", a: "Yes, you always retain full ownership of your music and copyrights." },
  { q: "How do I get paid, and what is the payment threshold?", a: "We pay monthly via supported methods with a low threshold." },
  { q: "Can I remove my music from stores?", a: "Yes, you can take down your releases at any time from your dashboard." },
  { q: "What is YouTube Content ID and how do I get it?", a: "It's a system to protect your music on YouTube. Eligible tracks can be enrolled." },
  { q: "Can I distribute under my own record label name?", a: "Yes, the Label Plan lets you brand releases under your own label across platforms." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="hero-gradient py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-2xl text-gray-100/90">We've got Answers for You.</p>
        </div>
      </section>

      {/* Accordion */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-gray-400">{open === idx ? "▾" : "▸"}</span>
              </button>
              {open === idx && (
                <div className="px-6 pb-6 text-gray-300">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter for updates</h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500" />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
