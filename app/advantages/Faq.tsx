"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Plus, Minus, ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
const faqs = [
  {
    question: "What services does Mazaya Logistics offer?",
    answer:
      "Mazaya Logistics provides reliable logistics and transportation solutions, including freight forwarding, warehousing, shipment handling, delivery, and supply chain support.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We provide logistics services across multiple regions, helping businesses move goods efficiently and safely through our extensive logistics network.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can request a quote by contacting our team through the contact form or by reaching out to us directly with your shipment details.",
  },
  {
    question: "How do you ensure the safety of goods?",
    answer:
      "We follow professional handling procedures, secure packaging standards, real-time monitoring, and reliable transportation processes to keep your goods safe.",
  },
  {
    question: "Can I track my shipment in real-time?",
    answer:
      "Yes. Our real-time tracking system allows you to monitor your shipment status and stay updated throughout the delivery process.",
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Delivery time depends on the destination, shipment type, distance, and customs requirements. Our team provides an estimated delivery timeline for every shipment.",
  },
  {
    question: "Do you provide warehousing solutions?",
    answer:
      "Yes. We provide secure and efficient warehousing solutions designed to support inventory management, storage, and smooth distribution.",
  },
  {
    question: "Do you handle international shipments?",
    answer:
      "Yes. We support international logistics and cross-border shipments with professional documentation, customs coordination, and transportation services.",
  },
  {
    question: "Can businesses get customized logistics solutions?",
    answer:
      "Absolutely. We can create customized logistics solutions based on your business requirements, shipment volume, destinations, and operational needs.",
  },
];
const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);
  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  const handleShowAll = () => {
    setShowAll(true);
  };
  const handleShowLess = () => {
    setShowAll(false);
    setOpenIndex(null);
  };
  return (
    <section className="relative overflow-hidden bg-[#080700] py-14 sm:py-16 lg:py-20">
      <SectionHeader title="FAQ" className="px-4 lg:px-8"></SectionHeader>
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f8b900]/[0.035] blur-[120px]" />
      <div className="relative mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        {/* FAQ Glass Container */}
        <div className=" relative overflow-hidden rounded-lg border border-white/10 bg-white/2.5 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150 sm:p-5 lg:p-6 ">
          {/* Top Glass Highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
          {/* Corner Gold Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#f8b900]/6 blur-3xl" />
          {/* FAQ List */}
          <div className="relative z-10 space-y-3">
            <AnimatePresence initial={false}>
              {visibleFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={faq.question}
                    layout
                    initial={showAll ? { opacity: 0, y: 15 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className=" group relative overflow-hidden rounded-sm border border-white/5.5 bg-black/20 backdrop-blur-md transition-all duration-300 hover:border-[#f8b900]/20 hover:bg-white/[0.035] "
                  >
                    {/* Active Gold Glow */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="pointer-events-none absolute inset-0 bg-[#f8b900]/2.5"
                        />
                      )}
                    </AnimatePresence>
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className=" relative z-10 flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5 bg-[#161000]"
                    >
                      <span
                        className={`text-[11px]  font-medium transition-colors duration-300 sm:text-xs lg:text-sm ${isOpen ? "text-[#f8b900]" : "text-gray-300 group-hover:text-white"}`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={` flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-[#f8b900]/40 bg-[#f8b900]/10 text-[#f8b900]" : "border-white/10 bg-white/2.5 text-gray-400 group-hover:border-[#f8b900]/30 group-hover:text-[#f8b900]"} `}
                      >
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          {isOpen ? (
                            <Minus size={12} strokeWidth={1.8} />
                          ) : (
                            <Plus size={12} strokeWidth={1.8} />
                          )}
                        </motion.div>
                      </span>
                    </button>
                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="border-t border-white/5 px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                            <p className="max-w-4xl text-[10px] leading-[1.7] text-gray-300 sm:text-xs lg:text-sm">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          {/* View All / Show Less */}
          <div className="relative z-10 flex justify-end pt-5 sm:pt-6">
            {!showAll ? (
              <motion.button
                type="button"
                onClick={handleShowAll}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
                className=" group flex items-center gap-1.5 text-[9px] font-medium text-[#f8b900] transition-colors hover:text-[#ffd34d] sm:text-[10px] "
              >
                <span>View All FAQs</span>
                <ArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </motion.button>
            ) : (
              <motion.button
                type="button"
                onClick={handleShowLess}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
                className=" group flex items-center gap-1.5 text-[9px] font-medium text-[#f8b900] transition-colors hover:text-[#ffd34d] sm:text-[10px] "
              >
                <span>Show Less FAQs</span>
                <ChevronDown
                  size={12}
                  className="rotate-180 transition-transform duration-300"
                />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
