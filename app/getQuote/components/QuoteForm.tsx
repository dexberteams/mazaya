"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";

const SERVICES = [
  "Transportation & Fleet Management",
  "Warehousing & Storage",
  "Last-Mile Delivery",
  "Cross-Border & Customs Clearance",
  "E-Commerce Fulfillment",
  "Cold Chain Logistics",
  "Seasonal & Special Projects",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    requirement: "",
    additionalRequirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate server submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      service: "",
      requirement: "",
      additionalRequirements: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div
      id="quote-form"
      className="relative rounded-2xl bg-[#0e0a03]/90 border border-[#2b200e] p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl shadow-black/60"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Request Your Quote
        </h2>
        <p className="mt-2 text-sm text-[#a39b8e] leading-relaxed">
          Complete the form below and our team will review your requirements and get back to you.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-12 px-4 text-center rounded-xl bg-[#140e05]/80 border border-[#f5b800]/20 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#f5b800]/15 border border-[#f5b800]/40 flex items-center justify-center text-[#f5b800] mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
          <p className="text-sm text-[#a39b8e] max-w-md mx-auto mb-6">
            Thank you, <span className="text-[#f5b800] font-medium">{formData.fullName || "Partner"}</span>. Our logistics specialists are reviewing your requirements and will contact you within 24 hours.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#f5b800] text-black font-semibold text-sm hover:bg-[#e0a700] transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Full Name & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-medium text-[#dcd6cc] mb-1.5"
              >
                Full Name<span className="text-[#f5b800] ml-0.5">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg bg-[#070502]/80 border border-[#2b200e] text-white text-sm placeholder-[#6b6255] focus:outline-none focus:border-[#f5b800] focus:ring-1 focus:ring-[#f5b800] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-medium text-[#dcd6cc] mb-1.5"
              >
                Company Name<span className="text-[#f5b800] ml-0.5">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter your company name"
                className="w-full px-4 py-3 rounded-lg bg-[#070502]/80 border border-[#2b200e] text-white text-sm placeholder-[#6b6255] focus:outline-none focus:border-[#f5b800] focus:ring-1 focus:ring-[#f5b800] transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email Address & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-[#dcd6cc] mb-1.5"
              >
                Email Address<span className="text-[#f5b800] ml-0.5">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg bg-[#070502]/80 border border-[#2b200e] text-white text-sm placeholder-[#6b6255] focus:outline-none focus:border-[#f5b800] focus:ring-1 focus:ring-[#f5b800] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-[#dcd6cc] mb-1.5"
              >
                Phone Number<span className="text-[#f5b800] ml-0.5">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-lg bg-[#070502]/80 border border-[#2b200e] text-white text-sm placeholder-[#6b6255] focus:outline-none focus:border-[#f5b800] focus:ring-1 focus:ring-[#f5b800] transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Service Required */}
          <div>
            <label
              htmlFor="service"
              className="block text-xs font-medium text-[#dcd6cc] mb-1.5"
            >
              Service Required<span className="text-[#f5b800] ml-0.5">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full appearance-none px-4 py-3 rounded-lg bg-[#070502]/80 border border-[#2b200e] text-white text-sm placeholder-[#6b6255] focus:outline-none focus:border-[#f5b800] focus:ring-1 focus:ring-[#f5b800] transition-colors pr-10 cursor-pointer"
              >
                <option value="" disabled className="bg-[#110d05] text-[#6b6255]">
                  Select a service
                </option>
                {SERVICES.map((srv) => (
                  <option key={srv} value={srv} className="bg-[#110d05] text-white">
                    {srv}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a39b8e]" />
            </div>
          </div>

          {/* Row 4: Your Logistics Requirement */}
          <div>
            <label
              htmlFor="requirement"
              className="block text-xs font-medium text-[#dcd6cc] mb-1.5"
            >
              Your Logistics Requirement<span className="text-[#f5b800] ml-0.5">*</span>
            </label>
            <textarea
              id="requirement"
              name="requirement"
              required
              rows={4}
              value={formData.requirement}
              onChange={handleChange}
              placeholder="Tell us about your logistics requirements..."
              className="w-full px-4 py-3 rounded-lg bg-[#070502]/80 border border-[#2b200e] text-white text-sm placeholder-[#6b6255] focus:outline-none focus:border-[#f5b800] focus:ring-1 focus:ring-[#f5b800] transition-colors resize-none"
            />
          </div>

          {/* Row 5: Additional Requirements (Optional) */}
          <div>
            <label
              htmlFor="additionalRequirements"
              className="block text-xs font-medium text-[#a39b8e] mb-1.5"
            >
              Additional Requirements <span className="text-[#786f63]">(Optional)</span>
            </label>
            <textarea
              id="additionalRequirements"
              name="additionalRequirements"
              rows={3}
              value={formData.additionalRequirements}
              onChange={handleChange}
              placeholder="Share any additional information that may help us understand your requirements."
              className="w-full px-4 py-3 rounded-lg bg-[#070502]/80 border border-[#2b200e] text-white text-sm placeholder-[#6b6255] focus:outline-none focus:border-[#f5b800] focus:ring-1 focus:ring-[#f5b800] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 px-6 rounded-lg bg-[#f5b800] hover:bg-[#e0a700] text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#f5b800]/20 hover:shadow-[#f5b800]/30 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
