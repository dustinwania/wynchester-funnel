import { Button } from "@/components/ui/button"

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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cum, eligendi magnam beatae qui rerum facilis nisi. Maxime beatae accusamus assumenda ad sit exercitationem labore.
                        </p>
                        <p className="text-lg mb-6 text-gray-700">
                            Vero, possimus consectetur. Voluptas blanditiis modi, dolore deleniti nemo vel in minima eos, ab voluptates aut facere reprehenderit accusantium impedit temporibus sed aspernatur libero at illum suscipit.
                        </p>
                        <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-6 py-2 text-lg rounded-md">
                            Learn More
                        </Button>
                    </div>

                    <div className="w-full lg:w-[45%] h-[50vh] bg-[#e6effe] border-2 border-[#1e40af] rounded-lg flex items-center justify-center shadow-lg">
                        <div className="text-center p-6">
                            <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Visit Our Office</h3>
                            <p className="text-gray-700 mb-2">123 Finance Street, Suite 100</p>
                            <p className="text-gray-700 mb-2">Carville, CA 90210</p>
                            <p className="text-gray-700 mb-4">(555) 123-4567</p>
                            <p className="text-[#1e40af] font-medium">Google Map 2D Location here</p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="w-full mb-16">
                    <h2 className="text-3xl font-bold text-[#1e40af] mb-8 text-center">Our Team</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-64 text-center">
                                <div className="w-32 h-32 rounded-full bg-[#1e40af] mx-auto mb-4"></div>
                                <h3 className="text-xl font-bold text-[#1e40af]">Team Member {i}</h3>
                                <p className="text-gray-700">Position</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
