"use client";

import { useState } from "react";
import { CheckCircle, MoveRight, X } from "lucide-react";
import SectionHeader2 from "../ui/SectionHeader2";
import Image from "next/image";

const ApplyOnline = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show success popup
    setShowSuccess(true);

    // Clear all text/select fields
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      position: "",
      experience: "",
      message: "",
    });

    // Clear file input
    e.currentTarget.reset();

    // Automatically close popup
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <>
      {/* ================= SUCCESS POPUP ================= */}
      {showSuccess && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-xl border border-[#6f5a22]/70 bg-[#161000] p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="absolute right-4 top-4 text-white/40 transition hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Success Icon */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFBB00]/10">
              <CheckCircle size={36} className="text-[#FFBB00]" />
            </div>

            <h2 className="font-manrope text-xl font-bold text-white">
              Application Submitted!
            </h2>

            <p className="mt-3 font-manrope text-sm leading-6 text-white/60">
              Thank you for your interest in joining Mazaya Logistics.
              We&apos;ll review your application and get back to you soon.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-6 rounded-[5px] bg-[#FFBB00] px-8 py-2.5 text-sm font-medium text-black transition hover:bg-[#f5b200]"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* ================= APPLY SECTION ================= */}
      <section className="my-10 overflow-hidden px-4 lg:my-20 lg:px-8">
        <SectionHeader2
          title="Apply"
          highlight="Online"
          description="Don't see the right role? Send us your details and our HR team will get in touch with you."
          className="lg:w-[30%]"
        />
        <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between border border-[#6f5a22]/50 bg-[#161000] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] mt-4 rounded-lg">
          {/* Section Header */}
          <div className="flex gap-2">
            <div className="p-2 bg-black/30 rounded-full w-11 h-10 flex justify-center items-center">
              <Image
                src="/career/icons/email-icon.svg"
                alt="email"
                width={100}
                height={100}
                className="w-8 h-8"
              ></Image>
            </div>

            <div className="text-white">
              <h3>careers@mazayalogistics.com</h3>
              <p className="text-xs text-gray-400 w-full lg:w-2/3">
                We&apos;ll carefully review your profile and contact you when a
                suitable opportunity becomes available that matches your skills
                and experience.Feel free to contact with us.
              </p>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-[7px] lg:w-[68%] p-3 lg:p-6"
          >
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-xs text-white/80">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className=" h-9 w-full rounded-sm border border-white/10 bg-linear-to-b from-black/50 via-[#201700]/50 to-white/6 px-3 text-xs text-white outline-none placeholder:text-white/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7),inset_0_-1px_4px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-md focus:border-[#FFBB00]/70 focus:bg-linear-to-b focus:from-black/60 focus:via-[#201700]/60 focus:to-white/8 focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),inset_0_-1px_5px_rgba(255,255,255,0.16),0_0_12px_rgba(255,187,0,0.12)] "
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs text-white/80">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className=" h-9 w-full rounded-sm border border-white/10 bg-linear-to-b from-black/50 via-[#201700]/50 to-white/6  px-3 text-xs text-white outline-none placeholder:text-white/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7),inset_0_-1px_4px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-md  focus:border-[#FFBB00]/70  focus:bg-linear-to-b focus:from-black/60 focus:via-[#201700]/60 focus:to-white/8 focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),inset_0_-1px_5px_rgba(255,255,255,0.16),0_0_12px_rgba(255,187,0,0.12)] "
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-xs text-white/80">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className=" h-9 w-full rounded-sm border border-white/10 bg-linear-to-b from-black/50 via-[#201700]/50 to-white/6 px-3 text-xs text-white outline-none placeholder:text-white/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7),inset_0_-1px_4px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-md focus:border-[#FFBB00]/70 focus:bg-linear-to-b focus:from-black/60 focus:via-[#201700]/60 focus:to-white/8 focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),inset_0_-1px_5px_rgba(255,255,255,0.16),0_0_12px_rgba(255,187,0,0.12)] "
                />
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-xs text-white/80">
                  Current Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your current location"
                  required
                  className=" h-9 w-full rounded-sm border border-white/10 bg-linear-to-b from-black/50 via-[#201700]/50 to-white/6 px-3 text-xs text-white outline-none placeholder:text-white/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7),inset_0_-1px_4px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-md focus:border-[#FFBB00]/70 focus:bg-linear-to-b focus:from-black/60 focus:via-[#201700]/60 focus:to-white/8 focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),inset_0_-1px_5px_rgba(255,255,255,0.16),0_0_12px_rgba(255,187,0,0.12)] "
                />
              </div>

              {/* Position */}
              <div>
                <label className="mb-2 block text-xs text-white/80">
                  Position of Interest
                </label>

                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className=" h-9 w-full rounded-sm border border-white/10 bg-linear-to-b from-black/50 via-[#201700]/50 to-white/6 px-3 text-xs text-white outline-none placeholder:text-white/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7),inset_0_-1px_4px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-md focus:border-[#FFBB00]/70 focus:bg-linear-to-b focus:from-black/60 focus:via-[#201700]/60 focus:to-white/8 focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),inset_0_-1px_5px_rgba(255,255,255,0.16),0_0_12px_rgba(255,187,0,0.12)] "
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="operations-coordinator">
                    Operations Coordinator
                  </option>

                  <option value="warehouse-supervisor">
                    Warehouse Supervisor
                  </option>

                  <option value="fleet-manager">Fleet Manager</option>

                  <option value="hr-specialist">HR Specialist</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="mb-2 block text-xs text-white/80">
                  Years of Experience
                </label>

                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className=" h-9 w-full rounded-sm border border-white/10 bg-linear-to-b from-black/50 via-[#201700]/50 to-white/6 px-3 text-xs text-white outline-none placeholder:text-white/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7),inset_0_-1px_4px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-md focus:border-[#FFBB00]/70 focus:bg-linear-to-b focus:from-black/60 focus:via-[#201700]/60 focus:to-white/8 focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),inset_0_-1px_5px_rgba(255,255,255,0.16),0_0_12px_rgba(255,187,0,0.12)] "
                >
                  <option value="" disabled>
                    Select experience
                  </option>

                  <option value="0-1">0 - 1 Years</option>
                  <option value="2-3">2 - 3 Years</option>
                  <option value="4-5">4 - 5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>

              {/* Resume */}
              <div>
                <label className="mb-2 block text-xs text-white/80">
                  Upload Resume
                </label>

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="h-9 w-full rounded-sm border border-white/10 bg-linear-to-b from-black/50 via-[#201700]/50 to-white/6 px-3 text-xs text-white outline-none placeholder:text-white/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7),inset_0_-1px_4px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.25)]  backdrop-blur-md
                  file:mr-3 file:rounded-[3px] file:border file:border-white/20 file:bg-black file:px-3 file:py-1 file:text-xs file:text-white/80 file:cursor-pointer focus:border-[#FFBB00]/70 "
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs text-white/80">
                  Additional Message (Optional)
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself"
                  rows={1}
                  className="h-9 w-full rounded-sm border border-white/10 bg-linear-to-b from-black/50 via-[#201700]/50 to-white/6 px-3 text-xs text-white outline-none placeholder:text-white/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7),inset_0_-1px_4px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-md focus:border-[#FFBB00]/70 focus:bg-linear-to-b focus:from-black/60 focus:via-[#201700]/60 focus:to-white/8 focus:shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),inset_0_-1px_5px_rgba(255,255,255,0.16),0_0_12px_rgba(255,187,0,0.12)] "
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end sm:col-span-2">
                <button
                  type="submit"
                  className="h-9 w-full rounded-[5px] bg-[#FFBB00] px-7 text-xs font-medium text-black transition hover:bg-[#f5b200] sm:w-auto flex gap-1 justify-center items-center"
                >
                  Submit Application
                  <span className="ml-2">
                    <MoveRight />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ApplyOnline;
