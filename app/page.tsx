import AvatarCard from "./components/AvatarCard";
import ImageCarousel from "./components/ImageCarousel";
import { Button } from "@/components/ui/button";

export default function Home() {
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
        </div>
    );
}