import { AccordionCard } from "../components/FaqsCard"
import { Button } from "@/components/ui/button"

import Link from "next/link"

export default function FAQsPage() {
    return(
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-[#1e40af] text-white py-16 px-8 text-center">
                <h1 className="font-bold text-5xl mb-4">Frequently Asked Questions</h1>
                <p className="text-xl max-w-2xl mx-auto">Find answers to common questions about our car loan services</p>
            </div>

            <section className="max-w-4xl mx-auto py-16 px-8">
                <AccordionCard></AccordionCard>
                
                <div className="mt-12 text-center">
                    <p className="text-lg mb-4 text-gray-700">Still have questions?</p>
                    <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-6 py-2 text-lg rounded-md">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}