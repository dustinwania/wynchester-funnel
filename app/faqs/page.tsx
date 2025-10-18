import { AccordionCard } from "../components/FaqsCard"
export default function FAQsPage() {
    return(
        <div className="px-16 py-4">
            <p className="text-center font-bold text-5xl mt-8 mb-16">Frequently Asked Questions</p>

            <section>
                <AccordionCard></AccordionCard>
            </section>
        </div>
    )
}