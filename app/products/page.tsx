import { Button } from "@/components/ui/button"

export default function ProductsPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-[#1e40af] text-white py-16 px-8 text-center">
                <h1 className="font-bold text-5xl mb-4">Our Loan Products</h1>
                <p className="text-xl max-w-2xl mx-auto">Flexible financing solutions for every need</p>
            </div>

            <section className="max-w-7xl mx-auto py-16 px-8">
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    <div className="w-full md:w-[30%] flex flex-col items-center text-center bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                        <div className="w-full h-64 bg-[#1e40af] text-white flex items-center justify-center">
                            <div className="text-center p-6">
                                <h3 className="text-2xl font-bold mb-2">New Car Loans</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">
                                Get behind the wheel of your dream car with our competitive rates and flexible terms. Perfect for first-time buyers and returning customers.
                            </p>
                            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white">Learn More</Button>
                        </div>
                    </div>

                    <div className="w-full md:w-[30%] flex flex-col items-center text-center bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                        <div className="w-full h-64 bg-[#1e40af] text-white flex items-center justify-center">
                            <div className="text-center p-6">
                                <h3 className="text-2xl font-bold mb-2">Used Car Loans</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">
                                Find the perfect pre-owned vehicle with our used car financing options. We offer competitive rates and terms tailored to your budget.
                            </p>
                            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white">Learn More</Button>
                        </div>
                    </div>

                    <div className="w-full md:w-[30%] flex flex-col items-center text-center bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                        <div className="w-full h-64 bg-[#1e40af] text-white flex items-center justify-center">
                            <div className="text-center p-6">
                                <h3 className="text-2xl font-bold mb-2">Refinancing</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">
                                Lower your monthly payments by refinancing your existing auto loan. Our specialists can help you find the best solution for your needs.
                            </p>
                            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white">Learn More</Button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-8 py-6 text-lg rounded-md">
                        Apply For Financing
                    </Button>
                </div>
            </section>
        </div>
    )
}
