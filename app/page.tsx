import AvatarCard from "./components/AvatarCard";
import ImageCarousel from "./components/ImageCarousel";
import WhyChooseUsCarousel from "./components/WhyChooseUsCarousel";
import { Button } from "@/components/ui/button";

export default function Home() {
    const currentYear = new Date().getFullYear();
    const yearsOfService = currentYear - 2015;

    return (
        <div className="w-full h-full bg-white">
            {/* Hero Section with Carousel */}
            <div className="relative">
                <ImageCarousel/>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-[#1e40af] bg-opacity-60 z-10">
                    <h1 className="text-8xl font-bold mt-12 mb-12">Need Emergency Funds?</h1>
                    <h2 className="text-4xl font-bold mb-4">Sangla Kotse with Original ORCR!</h2>
                    <p className="text-xl mb-6 italic">Dito kay WLC - Mabilis. Madali. Maaasahan.</p>
                    <Button className="bg-white hover:bg-gray-100 text-[#1e40af] px-8 py-6 text-lg font-bold rounded-md border-2 border-white">
                        Apply Now
                    </Button>
                </div>
            </div>

            {/* Features Section */}
            <section className="w-full py-16 px-12 flex flex-col md:flex-row justify-between items-center bg-[#1e40af] text-white">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-3xl font-bold mb-2 text-center">Fast Approval</h2>
                    <p className="text-lg opacity-90 text-center">Get approved in just 2 hours!</p>
                </div>

                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-3xl font-bold mb-2 text-center">Generous Interest Rates</h2>
                    <p className="text-lg opacity-90 text-center">Competitive interest rates for all credit types</p>
                </div>
                
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2 text-center">Secured and Reliable</h2>
                    <p className="text-lg opacity-90 text-center">Complete the entire process from your device</p>
                </div>
            </section>
            
            {/* Process Steps Section */}
            <section className="w-full py-16 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#1e40af]">Three Simple Steps</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                    <AvatarCard 
                        number="1" 
                        title="Apply Online" 
                        description="Fill out our simple application in minutes"
                    />
                    <AvatarCard 
                        number="2" 
                        title="Get Approved" 
                        description="Receive your loan decision quickly"
                    />
                    <AvatarCard 
                        number="3" 
                        title="Drive Away" 
                        description="Purchase your dream car with confidence"
                    />
                </div>
                <div className="flex justify-center mt-12">
                    <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-8 py-6 text-lg rounded-md">
                        Start Your Application
                    </Button>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="w-full py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-[#1e40af] mb-6">Why Choose Us?</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            At Wynchester, we understand that securing a car loan can be a complex process. That's why we strive to make it as simple, fast, and transparent as possible. With competitive rates, flexible terms, and a dedicated team, we're here to help you drive away in your dream car with confidence.
                        </p>
                        <p className="text-lg text-gray-700">
                            Our commitment to customer satisfaction and our streamlined application process set us apart. Experience the difference with Wynchester – where your automotive dreams become a reality.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <WhyChooseUsCarousel />
                    </div>
                </div>
            </section>

            {/* Only at WLC Car Loans Section */}
            <section className="w-full py-16 px-6 bg-[#e6effe]">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-[#1e40af] mb-12">Only at WLC Car Loans</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Fast Approval</h3>
                            <p className="text-gray-700">Get approved in as little as 2 hours with minimal paperwork.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Flexible Terms</h3>
                            <p className="text-gray-700">Customizable loan options to fit your budget and needs.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Competitive Rates</h3>
                            <p className="text-gray-700">Enjoy some of the best interest rates in the market.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Secure & Reliable</h3>
                            <p className="text-gray-700">Your data and transactions are always safe with us.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Expert Support</h3>
                            <p className="text-gray-700">Our team of financial experts is here to guide you every step of the way.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-[#1e40af] mb-4">100% Online Process</h3>
                            <p className="text-gray-700">Apply and manage your loan entirely from the comfort of your home.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10 Years with WLC Section */}
            <section className="w-full py-16 px-6 bg-[#1e40af] text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold mb-4">{yearsOfService}+ Years with WLC</h2>
                    <p className="text-xl mb-6">
                        For over {yearsOfService} years, WLC Car Loans has been the trusted partner for countless clients, providing reliable and secure car loan solutions. Our long-standing presence is a testament to the credibility and trust our clients have placed in us.
                    </p>
                    <p className="text-lg">
                        We are committed to maintaining the highest standards of service and transparency, ensuring every inquirer feels confident and secure in choosing WLC for their financial needs.
                    </p>
                </div>
            </section>
        </div>
    );
}