"use client";

import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Phone, Mail, Menu, ChevronDown, ShieldCheck, X } from "lucide-react";
import BMIC_LOGO from "@/components/figma/images/BMIC_LOGO.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDropdownStore } from "@/components/store/toggleDropdown";

export function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const { isOpen, toggle, close } = useDropdownStore();

  const handleOpenMenu = () => {
    setOpen((pre) => !pre);
  };

  const solutions = [
    {
      title: "Insulation Solutions",
      description:
        "Durable insulation boosting efficiency, safety, and environmental protection.",
      navigate: "/insulation",
    },
    {
      title: "HVAC / Ducting Solutions",
      description:
        "Precise, durable ducting for efficient industrial climate control.",
      navigate: "/ducting-solutions",
    },
    {
      title: "Cold Storage Solutions",
      description:
        "Durable cold storage insulation ensuring efficiency, sealing, and hygiene.",
      navigate: "/cold-storage-solutions",
    },

    {
      title: "Soundproofing Solutions",
      description:
        "Durable soundproofing for superior noise control and comfort.",
      navigate: "/sound-proofing-solutions",
    },
  ];

  const industries = [
    {
      title: "Pharma",
      description:
        "Advanced insulation for pharmaceutical cleanroom efficiency.",
      navigate: "/pharma",
    },
    {
      title: "Food & FMCG",
      description: "Insulation and ducting for hygienic, efficient facilities.",
      navigate: "/food-beverage",
    },
    {
      title: "Commercial & Real Estate",
      description: "Insulation and ducting for sustainable commercial comfort.",
      navigate: "/commercial-real-estate",
    },
    {
      title: "Engineering & Infrastructure",
      description:
        "Insulation and ducting for durable infrastructure efficiency.",
      navigate: "/cold-chain-logistics",
    },
  ];

  const pathname = usePathname();
  const servicePages = [
    "insulation",
    "ducting-solutions",
    "sound-proofing-solutions",
    "cold-storage-solutions",
  ];

  const industryPages = ["pharma", "cold-chain-logistics", "food-beverage"];

  let currentPage = "/";

  if (pathname === "/" || pathname === "/") {
    currentPage = "/";
  } else if (servicePages.includes(pathname.split("/")[1])) {
    currentPage = "services";
  } else if (industryPages.includes(pathname.split("/")[1])) {
    currentPage = "industry";
  } else {
    currentPage = pathname.split("/")[1];
  }

  return (
    <header className=" top-0 z-50 bg-white shadow-sm sticky overflow-hidden ">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Grid pattern similar to ServicesPage */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-20 gap-1 h-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border-r border-primary/10 h-full" />
            ))}
          </div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute top-2 left-1/4 w-6 h-6 border border-primary/20 rounded-full animate-pulse" />
        <div
          className="absolute top-4 right-1/3 w-4 h-4 bg-primary/10 rounded-lg rotate-45 animate-bounce delay-100"
          style={{ animationDuration: "3s" }}
        />
        <div className="absolute bottom-2 left-1/2 w-3 h-3 bg-accent rounded-full animate-pulse delay-200" />
        <div
          className="absolute top-1/2 right-1/4 w-5 h-5 border border-primary/15 rounded-lg rotate-12 animate-spin delay-300"
          style={{ animationDuration: "8s" }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-xl" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-accent/30 to-transparent rounded-full blur-lg" />
      </div>

      {/* Top contact bar with enhanced visuals */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-2 relative overflow-hidden">
        {/* Background pattern for top bar */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-8 h-8 border border-white/20 rounded-full animate-pulse" />
          <div className="absolute top-1 right-20 w-6 h-6 bg-white/10 rounded-lg rotate-45" />
          <div
            className="absolute bottom-0 left-1/3 w-4 h-4 border border-white/15 rounded-lg animate-spin"
            style={{ animationDuration: "6s" }}
          />
        </div>

        <div className=" mx-auto  lg:px-24 md:px-4 flex md:flex-row flex-col justify-between items-center relative">
          <div className="flex items-center justify-between w-full max-w-sm px-2  space-x-1 ml-auto md:ml-0 md:space-x-4">
            <div className="flex items-center space-x-1 md:space-x-2 hover:bg-white/10 px-0.5 md:px-2 py-1 rounded-md transition-colors">
              <Phone className="md:h-4 h-3 w-3 md:w-4" />
              <span className="text-[11.5px] md:text-[14px]">
                +919566122235
              </span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2 hover:bg-white/10 md:px-2 py-1 rounded-md transition-colors">
              <Mail className="md:h-4 h-3 w-3 md:w-4" />
              <span className="text-[11.5px] md:text-[14px]">
                jagadeesan.bharath@gmail.com
              </span>
            </div>
          </div>
          <div className="flex items-center text-[13px] md:text-[14px] ml-auto md:ml-0 space-x-2">
            <span className="">Follow Us:</span>
            <div className="flex space-x-2">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/bharath-modern-insulation-company-bmic-7b84a4382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="hover:bg-white/10 px-2 py-1 rounded-md transition-colors"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                href="https://x.com/bharathmodernic?s=21"
                className="hover:bg-white/10 px-2 py-1 rounded-md transition-colors"
              >
                Twitter
              </a>

              <a
                target="_blank"
                href="https://www.facebook.com/share/16uFhojkdY/?mibextid=wwXIfr"
                className="hover:bg-white/10 px-2 py-1 rounded-md transition-colors"
              >
                Facebook
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/bharathmoderninsulationcompany?igsh=MXA1ODNzeml5c2drNQ%3D%3D&utm_source=qr"
                className="hover:bg-white/10 px-2 py-1 rounded-md transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation with enhanced styling */}
      <nav className=" mx-auto  px-2 lg:px-24 sm:px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <Link href="/">
            <button className="flex  items-center space-x-2 hover:opacity-80 transition-all duration-300 group relative">
              {/* Enhanced logo with background effect */}
              <div className="relative ">
                <div className="md:w-24 md:h-12 h-6 w-12 rounded-lg flex items-center justify-center ">
                  <Image src={BMIC_LOGO} alt="Logo" fill />
                </div>
                {/* Floating indicator */}
                <div className="absolute hidden md:block -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </div>
              <div className="">
                <h1 className="whitespace-nowrap md:text-2xl text-[12px] sm:text-[13px] text-primary font-bold">
                  Bharath Modern Insulation Company
                </h1>
              </div>
            </button>
          </Link>

          <Menu onClick={handleOpenMenu} className="h-6 w-6 lg:hidden" />

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:space-x-6 space-x-6 relative">
            {/* Background decoration for nav */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <Link
              href="/"
              className={`hover:text-primary font-medium transition-colors relative px-3 rounded-md flex gap-1 py-2 justify-center cursor-default items-center hover:bg-primary/5 focus:outline-none ${currentPage == "/" || currentPage == ""
                ? "bg-[#0059191A] hover:bg-[#0059191A] text-primary py-[6px] px-[12px] rounded"
                : ""
                }`}
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`hover:text-primary font-medium transition-colors relative px-3 rounded-md flex gap-1 py-2 justify-center items-center hover:bg-primary/5 focus:outline-none ${currentPage == "services"
                    ? "bg-[#0059191A] hover:bg-[#0059191A] text-primary py-[6px] px-[12px] rounded"
                    : ""
                    }`}
                >
                  Solutions <ChevronDown size={2} className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="z-[1000] bg-white border border-gray-200 shadow-lg rounded-md min-w-[200px]"
                align="end"
              >
                <div className="max-w-sm flex flex-col bg-white p-2 space-y-6">
                  {solutions.map((item, index) => (
                    <DropdownMenuItem
                      className=" !hover:bg-white"
                      key={index}
                      asChild
                    >
                      <Link
                        href={item.navigate}
                        className="flex w-full text-left cursor-pointer items-start space-x-4 data-[highlighted]:bg-transparent"
                      >
                        <div className="bg-[#0059191A] p-2.5 rounded-full">
                          <ShieldCheck
                            size={24}
                            className="text-primary !h-7 !w-7"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-900 flex items-center">
                            {item.title}
                            <span className="ml-1 text-xl">→</span>
                          </h3>
                          <p className="text-gray-500 text-start text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <button
              onClick={onNavigateToPharma}
              className="hover:text-primary font-medium transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              
            </button> */}
            <DropdownMenu
              open={isOpen}
              onOpenChange={(open) => (open ? toggle() : close())}
            >
              <DropdownMenuTrigger asChild>
                <button
                  onClick={toggle}
                  className={`hover:text-primary font-medium transition-colors relative px-3 rounded-md flex gap-1 py-2 justify-center items-center hover:bg-primary/5 focus:outline-none ${currentPage == "industry"
                    ? "bg-[#0059191A] hover:bg-[#0059191A] text-primary py-[6px] px-[12px] rounded"
                    : ""
                    }`}
                >
                  Industries <ChevronDown size={2} className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="z-[1000] bg-white border border-gray-200 shadow-lg rounded-md min-w-[200px]"
                align="end"
              >
                <div className="max-w-sm flex flex-col bg-white p-2 space-y-6">
                  {industries.map((item, index) => (
                    <DropdownMenuItem
                      className=" !hover:bg-white"
                      key={index}
                      asChild
                    >
                      <Link
                        href={item.navigate}
                        // onClick={()=>}
                        className="flex w-full text-left cursor-pointer items-start space-x-4 data-[highlighted]:bg-transparent"
                      >
                        <div className="bg-[#0059191A] p-2.5 rounded-full">
                          <ShieldCheck
                            size={24}
                            className="text-primary !h-7 !w-7"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-900 flex items-center">
                            {item.title}
                            <span className="ml-1 text-xl">→</span>
                          </h3>
                          <p className="text-gray-500 text-start text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/projects"
              className={`hover:text-primary font-medium transition-colors relative px-3 py-2 rounded-md  ${currentPage.trim() == "projects"
                ? "bg-[#0059191A] !hover:bg-[#0059191A] text-primary py-[6px] px-[12px] rounded"
                : "hover:bg-primary/5"
                }`}
            >
              Gallery
            </Link>

            <Link
              href="/about"
              className={`hover:text-primary font-medium transition-colors relative px-3 py-2 rounded-md whitespace-nowrap  ${currentPage == "about"
                ? "bg-[#0059191A] text-primary hover:bg-[#0059191A] py-[6px] px-[12px] rounded"
                : "hover:bg-primary/5 "
                }`}
            >
              About Us
            </Link>
            <Button className="bg-primary hover:bg-green-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <Link href={"/contact"}>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative"> Contact Us</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </nav>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

      {open && (
        <div className="fixed lg:hidden inset-0 z-50 flex">
          {/* Overlay */}
          {/* Sidebar */}
          <div className="w-full bg-white h-full p-4 overflow-y-auto">
            {/* Logo & Close */}
            <div className="flex justify-between items-center mb-6">
              <Image src={BMIC_LOGO} alt="Logo" width={50} height={50} />
              <button>
                <X
                  onClick={() => {
                    handleOpenMenu();
                  }}
                  className="h-6 w-6"
                />
              </button>
            </div>

            {/* Home button */}
            <Link href="/" onClick={() => setOpen(false)}>
              <button className="hover:text-primary font-medium text-lg transition-colors relative py-5 rounded-md hover:bg-primary/5">
                Home
              </button>
            </Link>

            {/* Solutions */}
            <Accordion
              type="single"
              className="border-t  border-[#0000001A]"
              collapsible
            >
              <AccordionItem value="solutions">
                <AccordionTrigger className="hover:text-primary font-medium text-lg transition-colors relative  py-5 rounded-md hover:bg-primary/5">
                  Solutions
                </AccordionTrigger>
                <AccordionContent className="mt-2 space-y-4">
                  {solutions.map((title, i) => (
                    <Link
                      href={title.navigate}
                      key={i}
                      onClick={() => {
                        setOpen(false);
                      }}
                      className="flex  items-start gap-3.5  max-w-[343px] pb-4"
                    >
                      <div className="bg-[#0059191A] p-3 rounded-full">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                      <div className=" space-y-2">
                        <button className="flex gap-2  text-start text-[17.5px] w-full font-medium">
                          {title.title} <span>→</span>
                        </button>
                        <p className="text-[12.5px] text-gray-500">
                          {title.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Industries */}
            <div className="border-t  border-[#0000001A]">
              <Accordion type="single" collapsible>
                <AccordionItem value="industries">
                  <AccordionTrigger className="w-full py-5 font-medium text-lg">
                    Industries
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 space-y-4">
                    {industries.map((title, i) => (
                      <Link
                        href={title.navigate}
                        key={i}
                        onClick={() => {
                          setOpen(false);
                        }}
                        className="flex  items-start gap-3.5  max-w-[343px] pb-4"
                      >
                        <div className="bg-[#0059191A] p-3 rounded-full">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div className=" space-y-2">
                          <button className="flex gap-2 text-start text-[17.5px] w-full font-medium">
                            {title.title} <span>→</span>
                          </button>
                          <p className="text-[12.5px] text-gray-500">
                            Lorem ipsum Lorem ipsum Lorem ipsum
                          </p>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Other Links */}
            <div className="border-t border-[#0000001A] ">
              <Link
                href={"/projects"}
                onClick={() => {
                  setOpen(false);
                }}
                className="block w-full font-medium text-lg py-5 text-left"
              >
                Gallery
              </Link>
            </div>

            {/* <div className="border-t border-[#0000001A] ">
              <Link
                href={"/blog"}
                onClick={() => {
                  setOpen(false);
                }}
                className="block w-full font-medium text-lg py-5 text-left"
              >
                Blog
              </Link>
            </div> */}

            <div className="border-t border-[#0000001A] ">
              <Link
                href={"/about"}
                onClick={() => {
                  setOpen(false);
                }}
                className="block w-full font-medium text-lg py-5 text-left"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
