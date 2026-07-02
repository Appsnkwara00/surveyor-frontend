"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Reveal from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import ServiceImg from "@/assets/services.jpg";
import newabt from "@/assets/new_abt.jpg"
import Image from "next/image";
import LeadershipSection from "@/components/LeadershipSection";
import { useSurveyors } from "@/lib/useSurveyors";
import { BadgeCheck, ScanSearch, LayoutList, Rocket } from "lucide-react";
import aimsnobjectives from "@/assets/aim_objectives.png"

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Professionals",
    description:
      "Every listed surveyor is carefully verified to help you make informed decisions.",
  },
  {
    icon: ScanSearch,
    title: "Advanced Search",
    description: "Search by location, Registration number",
  },
  {
    icon: LayoutList,
    title: "Detailed Profiles",
    description:
      "View Registration number, services offered and contact details.",
  },
  {
    icon: Rocket,
    title: "Fast & Secure Connections",
    description: "Reach professionals directly without unnecessary delays.",
  },
];

const objectives = [
  "Represent and promote the views, interests, and professional welfare of private practicing surveyors in Nigeria.",
  "Uphold the highest standards of professionalism, ethics, integrity, and discipline within the profession.",
  "Strengthen the surveying and geoinformatics industry through capacity building, continuous professional development, seminars, workshops, symposia, and publications.",
  "Protect the economic, political, social, and professional interests of members.",
  "Foster collaboration, unity, and strong relationships among members and with other professional organizations, both within Nigeria and internationally.",
  "Encourage the free exchange of ideas, knowledge, and best practices with similar professional bodies worldwide.",
  "Advise the Nigerian Institution of Surveyors (NIS), educational institutions, and government on matters relating to surveying and geoinformatics.",
  "Mentor surveying students and support the development of future professionals.",
  "Promote and safeguard the interests of private practicing surveyors in all areas of professional practice.",
  "Develop, review, and implement professional fees and practice guidelines in collaboration with relevant professional and regulatory bodies at both the state and national levels.",
];

export const dynamic = "force-dynamic";

export default function Home() {
  const services = [
    { num: "01", name: "Cadastral Surveys" },
    { num: "02", name: "Engineering Surveys" },
    { num: "03", name: "Topographical Surveys" },
    { num: "04", name: "Hydrographic Surveys" },
    { num: "05", name: "GIS & Mapping" },
    { num: "06", name: "Property Boundary Surveys" },
    { num: "07", name: "Construction Setting Out" },
    { num: "08", name: "Drone Surveying" },
  ];

  const { surveyors } = useSurveyors();

  const stats = [
    { value: "100%", label: "Verified Members" },
    { value: surveyors.length, label: "Registered Surveyors" },
    { value: "500+", label: "Completed Projects" },
    { value: "16", label: "Local Government Area Covered" },
  ];

  return (
    <div className="h-[100vh] overflow-y-scroll flex flex-col scroll-smooth">
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-[480px] sm:min-h-[560px] flex items-end overflow-hidden"
      >
        {/* Background image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={hero}
            alt="Surveyor on site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/20" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pb-20 sm:pb-24 pt-16 sm:pt-20">
          <div className="max-w-xl">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Find Registered Practising Surveyors Across Kwara State
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base text-gray-200 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Connect with licensed and experienced private practising surveyors
              for land surveys, property documentation, engineering surveys, GIS
              mapping, and more all in one trusted directory.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href="/directory" className="btn-green inline-flex text-sm">
                Find a Surveyor
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search bar — overlapping hero */}
      <motion.div
        className="max-w-5xl mx-auto w-full px-4 sm:px-6 -mt-10 relative z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <SearchBar elevated />
      </motion.div>

      {/* Professional Surveying Services */}
      <section
        id="services"
        className=" mx-auto px-4 sm:px-6 py-16 sm:py-20 w-[90%]"
      >
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Professional Surveying <br /> Services
          </h2>
        </Reveal>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image */}
          <Reveal delay={0.1} className="w-full md:w-[500px] shrink-0">
            <Image
              src={newabt}
              alt="Surveying team"
              className="w-full h-[360px] md:h-72 object-cover rounded-2xl"
            />
          </Reveal>
          {/* Services grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                className="flex items-center gap-3 py-3 border-none border-gray-100"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="text-sm font-semibold text-black w-6 shrink-0">
                  {s.num}
                </span>
                <span className="text-sm font-medium text-black">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7ee] px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Everything You Need to
              <br />
              Find the Right Surveyor
            </motion.h2>
            <motion.div
              className="shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/directory"
                className="btn-green text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200 inline-flex"
              >
                Find a Surveyor
              </Link>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  className="bg-[#d6edda] rounded-2xl p-6 flex flex-col gap-6"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Icon
                      className="w-8 h-8 text-[#1a7a3c]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[#1a7a3c] font-semibold text-base mb-2">
                      {f.title}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About APPSN Kwara */}
      <section id="about" className="bg-gray-50 py-16 sm:py-20">
        <div className="w-[90%] mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
              About APPSN Kwara
            </h2>
          </Reveal>
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start md:justify-between">
            <Reveal delay={0.05} className="flex-1 max-w-lg">
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                Introduce the association, its mission, and commitment to
                maintaining professional surveying standards, protecting the
                public, and supporting members.
              </p>
              <Link href="#" className="btn-green inline-flex text-sm">
                Learn more
              </Link>
            </Reveal>
            <Reveal delay={0.15} className="w-full md:w-[500px] shrink-0">
              <Image
                src={ServiceImg}
                alt="Surveying team"
                className="w-full h-[360px] md:h-72 object-cover rounded-2xl"
              />
            </Reveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-[#666666] mt-1">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7ee] px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Aims and Objectives
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Left — intro text + image */}
            <div className="md:w-[420px] shrink-0 flex flex-col gap-6">
              <motion.p
                className="text-[#1a7a3c] font-medium text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                The Association is committed to promoting excellence in the
                surveying and geoinformatics profession while representing and
                protecting the interests of private practicing surveyors in
                Nigeria. Its aims and objectives are to:
              </motion.p>
              <motion.div
                className="rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={aimsnobjectives}
                  alt="Surveyors on site"
                  className="w-full h-72 sm:h-[540px] object-cover"
                />
              </motion.div>
            </div>

            {/* Right — objectives list */}
            <ul className="flex-1 flex flex-col gap-4">
              {objectives.map((obj, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-700 shrink-0" />
                  <span>{obj}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Branch Executive Leadership */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Branch Executive Leadership
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <LeadershipSection />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
