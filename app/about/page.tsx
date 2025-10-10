"use client";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { ProfilePlaceholder, aboutUSBg_2, bgBanner } from "@/components/figma/images";
import {
  ArrowLeft,
  Target,
  TrendingUp,
  Globe,
  Eye,
  Zap,
  ShieldCheck,
  Users,
  Building,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  const onBackToHome = () => router.push("/");
  const teamMembers = [
    {
      name: "CT Murugesan",
      role: "Founder",
      experience: "40+ years",
      expertise:
        " Pioneering entrepreneur who laid the foundation of Bharath Modern Insulation Company in 1975, with a vision to deliver reliable thermal and acoustic solutions that stand the test of time.",
      image: ProfilePlaceholder,
    },
    {
      name: "M Jagadeesan",
      role: "Proprietor & Managing Director",
      experience: "35+ years",
      expertise:
        "Guiding force behind the company’s growth, combining deep technical expertise with a commitment to innovation and customer satisfaction.",
      image: ProfilePlaceholder,
    },
    {
      name: "CJ Akash Ram",
      role: " Chief Executive Officer (CEO)",
      experience: "10+ years",
      expertise:
        " Dynamic leader driving strategic expansion, operational excellence, and modernization of services to meet evolving industry needs.",
      image:
        ProfilePlaceholder,
    },
    {
      name: "A Rajan",
      role: "Supervisor",
      experience: "12+ years",
      expertise:
        "Experienced supervisor ensuring meticulous project execution, safety compliance, and the highest standards of quality on every installation.",
      image:
        ProfilePlaceholder,
    },
  ];

  const statsCard = [
    {
      icon: <Building className="h-6 w-6 text-green-900" />,
      value: "1975",
      title: "Company Founded",
    },
    {
      icon: <Target className="h-6 w-6 text-green-900" />,
      value: "10K+",
      title: "Projects Completed",
    },
    {
      icon: <Globe className="h-6 w-6 text-green-900" />,
      value: "5+",
      title: "Countries Served",
    },
    {
      icon: <Users className="h-6 w-6 text-green-900" />,
      value: "200+",
      title: "Team Members",
    },
  ];

  // const clientLogos = [
  //   {
  //     name: "Reliance Industries",
  //     logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=RELIANCE",
  //   },
  //   {
  //     name: "Tata Group",
  //     logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=TATA",
  //   },
  //   {
  //     name: "Adani Group",
  //     logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=ADANI",
  //   },
  //   {
  //     name: "Bajaj",
  //     logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=BAJAJ",
  //   },
  //   {
  //     name: "Mahindra",
  //     logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=MAHINDRA",
  //   },
  //   {
  //     name: "L&T",
  //     logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=L%26T",
  //   },
  // ];
  const stats = [
    {
      icon: <Globe className="h-6 w-6 text-green-700" />,
      value: "100+",
      title: "Industries Served",
      description: "Delivering tailored solutions across diverse sectors",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-700" />,
      value: "1.5+",
      title: "Million Sq.Mtr",
      description: "Insulated Surface Area",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-green-700" />,
      value: "25+",
      title: "ISO Certifications",
      description: "Industry-leading quality standards",
    },
    {
      icon: <Zap className="h-6 w-6 text-green-700" />,
      value: "99.8%",
      title: "Client Satisfaction",
      description: "Proven track record of excellence",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden md:min-h-[700px] h-full bg-gradient-to-br from-primary/5 via-white to-accent/30 pb-20">
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={bgBanner}
            alt="About Us"
            fill
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-[#78A484] mix-blend-multiply"></div> */}

          <Button
            variant="outline"
            onClick={onBackToHome}
            className="absolute top-6 left-6 md:top-20 md:left-20 inline-flex items-center text-[#0A0A0A] hover:text-[#0A0A0A] border border-[#0000001A] !bg-white shadow-md"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-8 pointer-events-none">
          <div className="absolute top-20 left-10 md:left-20 w-24 md:w-40 h-24 md:h-40 border-2 border-primary/20 rounded-full animate-pulse" />
          <div className="absolute top-40 md:top-60 right-10 md:right-32 w-16 md:w-24 h-16 md:h-24 bg-primary/10 rounded-lg rotate-45 animate-bounce delay-100" />
          <div className="absolute bottom-20 md:bottom-32 left-1/3 w-12 md:w-20 h-12 md:h-20 border-2 border-primary/15 rotate-12 animate-pulse delay-200" />
          <div className="absolute top-1/2 right-1/4 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-primary/8 to-accent/15 rounded-full animate-bounce delay-300" />
        </div>

        <div className="container mx-auto px-4 md:px-0 flex justify-center items-center">
          <div className="relative z-10 text-center w-full max-w-7xl mx-auto bg-white  p-6 md:p-12 shadow-md mt-[-100px] md:mt-[-150px]">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              About Our Company
            </Badge>
            <h1 className="text-3xl md:text-[52px] font-semibold text-gray-900 mb-6">
              Building the <span className="text-primary">Future</span> of
              Industry
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              For over three decades, we&#39;ve been at the forefront of
              industrial innovation, delivering cutting-edge solutions that
              transform businesses and shape the future of manufacturing and
              engineering excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50   mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-7">
            <h2 className="text-3xl lg:text-[42px] font-semibold text-gray-900 mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-[#4A5565] text-[20px] font-normal  mx-auto">
              Founded in 1975, our company started with a clear mission: to
              deliver advanced insulation solutions that enhance efficiency,
              safety, and comfort across industries. From humble beginnings as a
              family-run venture, we have evolved into a trusted name known for
              technical expertise and uncompromising quality.
            </p>
            <p className="text-[#4A5565] text-[20px] font-normal  mx-auto">
              Over the decades, our journey has been shaped by innovation,
              lasting client relationships, and a passion for setting new
              benchmarks in thermal and acoustic insulation. From large-scale
              industrial projects to specialized commercial installations, we
              have successfully completed hundreds of assignments throughout
              India and beyond, serving customers ranging from small enterprises
              to multinational corporations.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row mx-auto gap-8 items-center justify-between">
            {/* Left stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full ">
              {statsCard.map((item, index) => (
                <Card
                  key={index}
                  className="bg-[#eff5f1] border-[#00591933] border rounded-xl px-6 py-8 flex flex-col items-center text-center shadow  w-full"
                >
                  <div className="">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-green-900 ">
                    {item.value}
                  </h3>
                  <p className="text-green-900 font-medium">{item.title}</p>
                </Card>
              ))}
            </div>

            {/* Right image with certification */}
            <div className="relative w-full  aspect-[3/2] overflow-hidden">
              <Image
                src={aboutUSBg_2}
                alt="Office"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Foundation
            </Badge>
            <h2 className="text-3xl lg:text-[42px] font-semibold text-gray-900 mb-6">
              Our <span className="text-primary">Mission</span> & Vision
            </h2>
            <p className="text-[#4A5565] text-[20px]  mx-auto">
              Driving forward with purpose and clear direction toward a
              sustainable industrial future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-11  mx-auto w-full ">
            <Card className="p-8 max-h-min   duration-300  border-[#0000001A] border-t-5 border-t-primary  bg-[#FFFFFF] gap-5">
              <div className="flex items-center gap-2  space-x-1 mb-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl text-gray-900 font-semibold ">
                  Our Mission
                </h3>
              </div>

              <p className="text-gray-600  text-sm leading-relaxed">
                To be a trusted leader in thermal and acoustic solutions,
                setting industry benchmarks in quality, innovation, and
                sustainability. We aim to enhance energy efficiency and
                environmental comfort across every space we insulate
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full text-primary" />
                  <span className="text-gray-700 text-sm">
                    Excellence in every project
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full text-primary" />
                  <span className="text-gray-700 text-sm">
                    Client success as our priority
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full text-primary" />
                  <span className="text-gray-700 text-sm">
                    Sustainable business practices
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-8 max-h-min  duration-300 border-[#0000001A] border-t-5 border-t-primary bg-[#FFFFFF] gap-5">
              <div className="flex items-center gap-2 space-x-1 mb-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl text-gray-900 font-semibold">
                  Our Vision
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                To deliver high-performance insulation and soundproofing
                solutions through expert craftsmanship, cutting-edge technology,
                and a commitment to client satisfaction— ensuring safe,
                efficient, and sustainable environments for all industries we
                serve.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full text-primary" />
                  <span className="text-gray-700 text-sm">
                    Global industry leadership
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full text-primary" />
                  <span className="text-gray-700 text-sm">
                    Technological innovation
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full text-primary" />
                  <span className="text-gray-700 text-sm">
                    Environmental stewardship
                  </span>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 py-11 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <Card
                key={index}
                className="bg-[#FFFFFFCC] rounded-lg border border-[#0000001A] p-6 flex flex-col items-center text-center gap-2"
              >
                <div className="bg-[#0059191A] rounded-full p-3 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-green-800 mb-1">
                  {item.value}
                </h3>
                <p className="font-normal text-gray-900 mb-1">{item.title}</p>
                <p className="text-[#4A5565] text-sm max-w-40">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Meet Our Team
            </Badge>
            <h2 className="text-3xl font-semibold lg:text-4xl text-gray-900 mb-6">
              Our <span className=" text-primary">Leadership</span> Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our company&#39;s
              vision and drive our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4  mx-auto gap-7">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden border   mx-auto w-full gap-0 border-[#0000001A] "
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover "
                  />
                </div>

                <CardContent className="p-5">
                  <div className="space-y-3">
                    <div className=" bottom-4 left-4 right-4">
                      <h3 className="text-lg mb-1">{member.name}</h3>
                      <p className="text-sm text-primary my-1.5">
                        {member.role}
                      </p>
                    </div>
                    <Badge className="mb-4 bg-primary/0 text-primary border-primary/30">
                      {member.experience}
                    </Badge>
                    <p className="text-[#4A5565] text-[14px]  align-middle">
                      {member.expertise}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Infrastructure
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              World-Class Facilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our state-of-the-art manufacturing and testing facilities ensure
              the highest quality standards in every project we deliver.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Manufacturing facility"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="text-lg text-gray-900">Manufacturing Unit</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  50,000 sq ft advanced manufacturing facility with automated
                  production lines and quality control systems.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Gurgaon, Haryana</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Testing laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="text-lg text-gray-900">Testing Laboratory</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  NABL accredited testing lab with advanced thermal testing
                  equipment and certification capabilities.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Corporate office"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h3 className="text-lg text-gray-900">Corporate Office</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Modern corporate headquarters with design studios, training
                  centers, and customer experience zones.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Partner Brands */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Trusted Partners
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              Partnering with Industry Leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re proud to work with some of India&apos;s most respected
              companies, delivering solutions that drive their success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-12 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  fill
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied clients who trust us with their thermal
              management needs.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Become Our Partner
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
