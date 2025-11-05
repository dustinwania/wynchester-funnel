import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
    return(
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-[#1e40af] text-white py-16 px-8">
                <h1 className="font-bold text-5xl mb-4">About Us</h1>
                <p className="text-xl max-w-3xl">Helping customers find the perfect car loan for over 15 years</p>
            </div>

            {/* Main Content */}
            <div className="px-8 py-16 max-w-7xl mx-auto">
                <section className="w-full flex flex-wrap justify-between items-start gap-12 mb-16">
                    <div className="w-full lg:w-[45%]">
                        <h2 className="text-3xl font-bold text-[#1e40af] mb-6">Our Mission</h2>
                        <p className="text-lg mb-6 text-gray-700">
                            WLC is a car loan business specializing in providing the fastest car-to-cash availment, lowest rates and easiest processing. With more than 10 years of experience, WLC boasts of thousand-strong loyal and returning clientele. Basically, we loan money for whatever purpose our clients have, with just their car as a collateral. Efficient, hassle-free and fair--that is the WLC guarantee.
                        </p>
                        <p className="text-lg mb-6 text-gray-700">
                            We aim to provide our clients fast approval and the highest, fairest possible appraisal; and to be an instrument of support to our loaners during their time of need.
                        </p>
                        <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-6 py-2 text-lg rounded-md">
                            Learn More
                        </Button>
                    </div>

                    <div className="w-full lg:w-[45%] h-[50vh] border-2 border-[#1e40af] rounded-lg shadow-lg relative group overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3824966449597!2d121.05488107472618!3d14.634215985856109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b798966274c7%3A0x991e384a5c73a96b!2sWLC%20Car%20Loan!5e0!3m2!1sen!2sph!4v1762253472857!5m2!1sen!2sph" width="100%" height="100%" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 w-full h-full"></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-white/90 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                            <div className="text-center p-6">
                                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Visit Our Office</h3>
                                <p className="text-gray-700 mb-2">4th Flr. Room 407, Wil-Vic Bldg, 125 Kamias Rd</p>
                                <p className="text-gray-700 mb-2">Diliman, Quezon City, Metro Manila</p>
                                <p className="text-gray-700 mb-4">(02) 34364574</p>
                                <Button asChild className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white mt-4">
                                    <Link href="https://maps.app.goo.gl/zkvbDnAXnVF4aGZw8" target="_blank">Get Directions</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    ) 
}
