import Contact02Page from "@/components/contact-02/contact-02"

export default function QuotePage() {
   return(
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-[#1e40af] text-white py-16 px-8">
                <h1 className="font-bold text-5xl mb-4">Get a Loan Today!</h1>
                <p className="text-xl max-w-3xl">Quick approvals with competitive rates tailored for you.</p>
            </div>

            {/* Quote Form Section */}
            <div className="px-8 py-16">
                <section>
                    <Contact02Page />
                </section>
            </div>
        </div>
    )
}