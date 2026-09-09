"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Phone,
    Mail,
    Clock,
    MapPin,
    ChevronRight,
    ChevronDown,
    ArrowRight,
    Home,
    LayoutGrid,
    Check,
    Share2,
    X,
} from "lucide-react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function ContactUsPage() {
    // Form State
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        service: "",
        requirement: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission delay
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccessOpen(true);
        }, 600);
    };

    const handleReset = () => {
        setFormData({
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            service: "",
            requirement: "",
        });
        setIsSuccessOpen(false);
    };

    return (
        <div className="relative min-h-screen bg-[#070502] text-white selection:bg-amber-400 selection:text-black font-sans pb-16">
            {/* ── SECTION 1: HERO & QUICK CONTACT INFO ── */}
            <section className="relative w-full pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
                {/* Background Image with Dark Vignette Gradient */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <Image
                        src="/contact/hero-bg.jpg"
                        alt="Mazaya Logistics Port Terminal"
                        fill
                        priority
                        unoptimized
                        className="object-right lg:object-cover object-contain opacity-75 select-none"
                    />
                    {/* Gradients: dark on left for text legibility, transparent on right to showcase trucks and cranes */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#070502] via-[#070502]/75 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070502] via-transparent to-[#070502]/70" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.18)_0%,transparent_65%)]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                    {/* Header Texts */}
                    <div className="max-w-2xl">
                        {/* Small Contact Us Badge */}
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-2.5 h-2.5 bg-[#f5b800] rounded-xs inline-block" />
                            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#f5f5f5] uppercase">
                                CONTACT US
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                            Let’s Move Your <br />
                            <span className="text-[#f5d76e]">Business Forward</span>
                        </h1>

                        {/* Amber Accent Bar */}
                        <div className="w-20 h-1 bg-[#d4af37] mt-5 mb-6 rounded-full" />

                        {/* Description */}
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                            Have a logistics requirement or need more information? Get in touch
                            with our team and let’s find the right solution for your business.
                        </p>
                    </div>

                    {/* Quick Contact Info Cards Floating Bar */}
                    <div className="mt-14 sm:mt-18 rounded-2xl border border-amber-500/35  backdrop-blur-[1px] p-6 sm:p-8 shadow-[0_0_40px_rgba(245,184,0,0.12)]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-amber-900/30">
                            {/* 1. Call Us */}
                            <div className="flex items-start gap-4 pt-4 sm:pt-0">
                                <div className="w-12 h-12 shrink-0 rounded-full border border-amber-400/50 bg-amber-500/10 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,184,0,0.15)]">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
                                        Call Us
                                    </p>
                                    <a
                                        href="tel:+966XXXXXXXXX"
                                        className="block text-white font-semibold text-sm sm:text-base hover:text-amber-400 underline underline-offset-4 decoration-zinc-600 hover:decoration-amber-400 transition-colors"
                                    >
                                        +966 XX XXX XXXX
                                    </a>
                                    <p className="text-zinc-400 text-xs pt-1">Sunday – Thursday</p>
                                    <p className="text-zinc-500 text-xs">09:00 AM – 06:00 PM</p>
                                </div>
                            </div>

                            {/* 2. Email Us */}
                            <div className="flex items-start gap-4 pt-6 sm:pt-0 lg:pl-6">
                                <div className="w-12 h-12 shrink-0 rounded-full border border-amber-400/50 bg-amber-500/10 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,184,0,0.15)]">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
                                        Email Us
                                    </p>
                                    <a
                                        href="mailto:info@mazayalogistics.com"
                                        className="block text-white font-semibold text-sm sm:text-base hover:text-amber-400 underline underline-offset-4 decoration-zinc-600 hover:decoration-amber-400 transition-colors break-all"
                                    >
                                        info@mazayalogistics.com
                                    </a>
                                    <p className="text-zinc-400 text-xs pt-1">We Reply within</p>
                                    <p className="text-zinc-500 text-xs">24 hours</p>
                                </div>
                            </div>

                            {/* 3. WhatsApp */}
                            <div className="flex items-start gap-4 pt-6 sm:pt-0 lg:pl-6">
                                <div className="w-12 h-12 shrink-0 rounded-full border border-amber-400/50 bg-amber-500/10 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,184,0,0.15)]">
                                    <FaWhatsapp className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
                                        WhatsApp
                                    </p>
                                    <p className="text-white font-semibold text-sm sm:text-base">
                                        +966 XX XXX XXXX
                                    </p>
                                    <p className="text-zinc-400 text-xs pt-1">Chat with our team</p>
                                    <a
                                        href="https://wa.me/966000000000"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-[#22c55e] hover:text-[#16a34a] text-xs font-medium transition-colors pt-0.5 group"
                                    >
                                        Start Conversation{" "}
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>

                            {/* 4. Office Hours */}
                            <div className="flex items-start gap-4 pt-6 sm:pt-0 lg:pl-6">
                                <div className="w-12 h-12 shrink-0 rounded-full border border-amber-400/50 bg-amber-500/10 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,184,0,0.15)]">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
                                        Office Hours
                                    </p>
                                    <p className="text-white font-semibold text-sm sm:text-base">
                                        Sunday – Thursday
                                    </p>
                                    <p className="text-zinc-400 text-xs pt-1">Friday – Saturday</p>
                                    <p className="text-[#ef4444] text-xs font-semibold">Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: FORM & VISIT OUR OFFICE ── */}
            <section className="relative w-full py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                        {/* Left Column: Form "How Can We Help?" */}
                        <div className="lg:col-span-7 rounded-2xl border border-amber-500/20 bg-[#0e0c08]/90 backdrop-blur-md p-6 sm:p-10 shadow-2xl">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                How Can We Help?
                            </h2>
                            <p className="text-zinc-400 text-xs sm:text-sm mt-2 mb-8 leading-relaxed">
                                Tell us about your logistics needs and our team will get back to
                                you with the right solution.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name & Company */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-zinc-300">
                                            Full Name<span className="text-amber-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className="w-full rounded-lg border border-amber-900/40 bg-[#16120b] px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-zinc-300">
                                            Company Name<span className="text-amber-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            required
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            placeholder="Enter your company name"
                                            className="w-full rounded-lg border border-amber-900/40 bg-[#16120b] px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-zinc-300">
                                            Email Address<span className="text-amber-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email address"
                                            className="w-full rounded-lg border border-amber-900/40 bg-[#16120b] px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-zinc-300">
                                            Phone Number<span className="text-amber-400">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                            className="w-full rounded-lg border border-amber-900/40 bg-[#16120b] px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Service Required */}
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-zinc-300">
                                        Service Required<span className="text-amber-400">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full appearance-none rounded-lg border border-amber-900/40 bg-[#16120b] px-4 py-3 text-sm text-white focus:border-amber-400 focus:outline-none transition-colors pr-10 cursor-pointer"
                                        >
                                            <option value="" disabled className="bg-[#16120b] text-zinc-500">
                                                Select a service
                                            </option>
                                            <option value="land" className="bg-[#16120b] text-white">
                                                Land Transportation & Fleet Management
                                            </option>
                                            <option value="warehousing" className="bg-[#16120b] text-white">
                                                Warehousing & Smart Fulfillment
                                            </option>
                                            <option value="freight" className="bg-[#16120b] text-white">
                                                Air & Ocean Cargo Freight
                                            </option>
                                            <option value="customs" className="bg-[#16120b] text-white">
                                                Customs Clearance & Documentation
                                            </option>
                                            <option value="coldchain" className="bg-[#16120b] text-white">
                                                Temperature-Controlled Cold Chain
                                            </option>
                                            <option value="supplychain" className="bg-[#16120b] text-white">
                                                Integrated Supply Chain Solutions
                                            </option>
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                    </div>
                                </div>

                                {/* Requirement Message */}
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-zinc-300">
                                        Requirement<span className="text-amber-400">*</span>
                                    </label>
                                    <textarea
                                        name="requirement"
                                        required
                                        rows={4}
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        placeholder="Tell us about your logistics requirements.."
                                        className="w-full rounded-lg border border-amber-900/40 bg-[#16120b] px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                                    />
                                </div>

                                {/* Submit Request Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full mt-3 py-3.5 px-6 rounded-lg bg-[#f5b800] hover:bg-[#e0a800] active:scale-[0.99] text-black font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(245,184,0,0.25)] cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                            Submitting Request...
                                        </span>
                                    ) : (
                                        <>
                                            Submit Request <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Right Column: "Visit Our Office" */}
                        <div className="lg:col-span-5 rounded-2xl border border-amber-500/20 bg-[#0e0c08]/90 backdrop-blur-md p-6 sm:p-10 shadow-2xl flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                    Visit Our Office
                                </h2>
                                <div className="w-14 h-1 bg-[#d4af37] mt-3 mb-8 rounded-full" />

                                {/* Address */}
                                <div className="flex items-start gap-4 mb-7">
                                    <div className="w-11 h-11 shrink-0 rounded-full border border-amber-400/50 bg-amber-500/10 flex items-center justify-center text-amber-400">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-base mb-1.5">
                                            Address
                                        </h3>
                                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                                            Mazaya Logistics, Building No. 1234,
                                            <br />
                                            King Fahd Road, Riyadh 12345,
                                            <br />
                                            Saudi Arabia
                                        </p>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="w-11 h-11 shrink-0 rounded-full border border-amber-400/50 bg-amber-500/10 flex items-center justify-center text-amber-400">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-base mb-1.5">
                                            Office Hours
                                        </h3>
                                        <p className="text-zinc-300 text-xs sm:text-sm">
                                            Sunday – Thursday
                                        </p>
                                        <p className="text-zinc-400 text-xs mt-1">Friday – Saturday</p>
                                        <p className="text-[#ef4444] text-xs font-semibold mt-0.5">
                                            Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Preview Card matching the visual in screenshot */}
                            <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden border border-amber-900/50 bg-[#12100a] mt-4 shadow-lg group">
                                <iframe
                                    title="Mazaya Logistics Riyadh Office Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463879.26521990495!2d46.5414846497138!3d24.72539809930777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x7ff97233564f4b15!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                                    className="w-full h-full border-0 filter grayscale-[20%] contrast-[1.05]"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />

                                {/* Styled Pin Badge Overlay */}
                                <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white/95 text-black px-3 py-1.5 rounded-md shadow-xl border border-amber-400 text-xs font-bold animate-bounce duration-1000">
                                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                                    <MapPin className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                                    <span>Mazaya Logistics</span>
                                </div>

                                {/* Google Map Bottom Overlay */}
                                <div className="pointer-events-none absolute bottom-2 left-2 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-zinc-700 font-medium">
                                    Riyadh, Saudi Arabia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: CONNECT WITH US & READY TO MOVE FORWARD ── */}
            <section className="relative w-full py-6">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 space-y-6">
                    {/* Card 1: Connect With Us Banner */}
                    <div className="rounded-2xl border border-amber-500/30 bg-[#120f09]/80 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_30px_rgba(245,184,0,0.1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                Connect With Us
                            </h3>
                            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-md leading-relaxed">
                                Follow us on social media or reach out directly through our
                                channels.
                            </p>
                        </div>

                        {/* Social Action Cards */}
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full md:w-auto">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/966000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-initial flex items-center justify-between gap-6 bg-[#17130c] hover:bg-[#1f1a10] border border-amber-900/40 hover:border-green-500/50 rounded-xl px-4 py-3.5 transition-all group min-w-[200px]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-[#22c55e] flex items-center justify-center text-white shadow-md">
                                        <FaWhatsapp className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-white">WhatsApp</p>
                                        <p className="text-[11px] text-zinc-400 group-hover:text-green-400 transition-colors">
                                            Chat with us →
                                        </p>
                                    </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-initial flex items-center justify-between gap-6 bg-[#17130c] hover:bg-[#1f1a10] border border-amber-900/40 hover:border-blue-500/50 rounded-xl px-4 py-3.5 transition-all group min-w-[200px]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-[#0077b5] flex items-center justify-center text-white shadow-md">
                                        <FaLinkedinIn className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-white">LinkedIn</p>
                                        <p className="text-[11px] text-zinc-400 group-hover:text-blue-400 transition-colors">
                                            Connect with us →
                                        </p>
                                    </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Ready to Move Forward? Banner */}
                    <div className="rounded-2xl border border-amber-900/40 bg-[#0d0b07] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
                        <div className="flex items-center gap-5">
                            {/* Golden Yellow Forward/Logistics Icon */}
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#f5b800] shrink-0 shadow-[0_0_20px_rgba(245,184,0,0.2)]">
                                <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.7498 9.25006V15.4167H12.3332V58.5834H61.6665V30.8334H67.8332V61.6667C67.8332 62.4845 67.5083 63.2687 66.9301 63.847C66.3519 64.4252 65.5676 64.75 64.7498 64.75H9.24984C8.43209 64.75 7.64783 64.4252 7.06959 63.847C6.49135 63.2687 6.1665 62.4845 6.1665 61.6667V12.3334C6.1665 11.5156 6.49135 10.7314 7.06959 10.1531C7.64783 9.57491 8.43209 9.25006 9.24984 9.25006H27.7498ZM58.429 15.4167L49.3332 6.32089L53.693 1.96106L70.158 18.4261C70.4164 18.6848 70.5923 19.0143 70.6636 19.3729C70.7348 19.7316 70.6982 20.1033 70.5583 20.4411C70.4184 20.779 70.1816 21.0678 69.8776 21.2711C69.5737 21.4744 69.2163 21.5831 68.8507 21.5834H43.1665C41.531 21.5834 39.9625 22.2331 38.806 23.3896C37.6495 24.546 36.9998 26.1146 36.9998 27.7501V46.25H30.8332V27.7501C30.8332 24.4791 32.1326 21.342 34.4455 19.0291C36.7585 16.7161 39.8955 15.4167 43.1665 15.4167H58.429Z" fill="#FFBB00" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                    Ready to Move Forward?
                                </h3>
                                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                                    Let’s discuss how Mazaya Logistics can support your business.
                                </p>
                            </div>
                        </div>

                        {/* Get Quote Action */}
                        <Link
                            href="/get-quote"
                            className="shrink-0 px-6 py-3 rounded-lg bg-[#f5b800] hover:bg-[#e0a800] text-black font-semibold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(245,184,0,0.2)] cursor-pointer"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── SUCCESS MODAL (MATCHING IMAGE 4) ── */}
            {isSuccessOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-300">
                    <div className="relative w-full max-w-lg rounded-3xl border border-amber-900/50 bg-[#0f0d09] p-7 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] text-center flex flex-col items-center">
                        {/* Close Button */}
                        <button
                            onClick={handleReset}
                            className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Big Green Check Circle */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#22c55e] flex items-center justify-center text-black mb-6 shadow-[0_0_35px_rgba(34,197,94,0.45)]">
                            <Check className="w-12 h-12 sm:w-14 sm:h-14 stroke-[3.5]" />
                        </div>

                        {/* Success Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#22c55e] mb-4 tracking-tight">
                            Quote Request Submitted!
                        </h3>

                        {/* Description Lines */}
                        <div className="space-y-4 text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-md mb-8">
                            <p>
                                Thank you for sharing your logistics requirements with us. Our
                                team has received your request and will review the details
                                provided.
                            </p>
                            <p>
                                We’ll get back to you shortly with the appropriate logistics
                                solution and quotation.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full space-y-3.5">
                            {/* Back to Home Button */}
                            <Link
                                href="/"
                                className="w-full py-3.5 px-6 rounded-xl bg-[#f5b800] hover:bg-[#e0a800] text-black font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(245,184,0,0.25)]"
                            >
                                <Home className="w-4 h-4" />
                                Back to Home
                            </Link>

                            {/* View Our Services Button */}
                            <Link
                                href="/services"
                                className="w-full py-3.5 px-6 rounded-xl bg-black/50 border border-[#f5b800]/60 hover:border-[#f5b800] text-[#f5b800] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 hover:bg-amber-500/10"
                            >
                                <LayoutGrid className="w-4 h-4" />
                                View Our Services
                            </Link>

                            {/* Reset/Dismiss Link */}
                            <div className="pt-2">
                                <button
                                    onClick={handleReset}
                                    className="text-xs sm:text-sm text-zinc-400 hover:text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-colors cursor-pointer"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
