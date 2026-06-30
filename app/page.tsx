"use client"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import hero from "@/assets/hero.jpg";
import ServiceImg from "@/assets/services.jpg";
import chairman from "@/assets/chairman.jpg";
import vice from "@/assets/vice.jpg";
import sec from "@/assets/secretary.jpg";
import Image from "next/image";
import LeadershipSection from "@/components/LeadershipSection";
import { useSurveyors } from "@/lib/useSurveyors";



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
  
  const { surveyors } = useSurveyors()
  
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
      <section id="home" className="relative min-h-[480px] sm:min-h-[560px] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Surveyor on site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/20" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pb-20 sm:pb-24 pt-16 sm:pt-20">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Find Registered Practising Surveyors Across Kwara State
            </h1>
            <p className="text-sm sm:text-base text-gray-200 mb-8 max-w-md">
              Connect with licensed and experienced private practising surveyors
              for land surveys, property documentation, engineering surveys, GIS
              mapping, and more—all in one trusted directory.
            </p>
            <Link href="/directory" className="btn-green inline-flex text-sm">
              Find a Surveyor
            </Link>
          </div>
        </div>
      </section>

      {/* Search bar — overlapping hero */}
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 -mt-10 relative z-20">
        <SearchBar elevated />
      </div>

      {/* Professional Surveying Services */}
      <section id="services" className=" mx-auto px-4 sm:px-6 py-16 sm:py-20 w-[90%]">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
          Professional Surveying <br /> Services
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image */}
          <div className="w-full md:w-[500px] shrink-0">
            <Image
              src={ServiceImg}
              alt="Surveying team"
              className="w-full h-[360px] md:h-72 object-cover rounded-2xl"
            />
          </div>
          {/* Services grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {services.map((s) => (
              <div
                key={s.num}
                className="flex items-center gap-3 py-3 border-none border-gray-100"
              >
                <span className="text-sm font-semibold text-black w-6 shrink-0">
                  {s.num}
                </span>
                <span className="text-sm font-medium text-black">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About APPSN Kwara */}
      <section id="about" className="bg-gray-50 py-16 sm:py-20">
        <div className="w-[90%] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            About APPSN Kwara
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start md:justify-between">
            <div className="flex-1 max-w-lg">
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                Introduce the association, its mission, and commitment to
                maintaining professional surveying standards, protecting the
                public, and supporting members.
              </p>
              <Link href="#" className="btn-green inline-flex text-sm">
                Learn more
              </Link>
            </div>
            <div className="w-full md:w-[500px] shrink-0">
              <Image
                src={ServiceImg}
                alt="Surveying team"
                className="w-full h-[360px] md:h-72 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-[#666666] mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Executive Leadership */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
          Branch Executive Leadership
        </h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {leaders.map((l, i) => (
            <div
              key={i}
              className=" cursor-pointer rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow p-2"
            >
              <Image
                src={l.img}
                alt={l.name}
                className="w-[373px] h-[373px] mb-[10px] object-cover rounded-2xl"
              />
              <div className="p-4 flex items-center justify-between border border-[#E5E5E5] rounded-2xl">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {l.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">{l.role}</p>
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-none ${
                    l.badge === "FNIS"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {l.badge}
                </span>
              </div>
            </div>
          ))}
        </div> */}
        <LeadershipSection/>
      </section>

      <Footer />
    </div>
  );
}
