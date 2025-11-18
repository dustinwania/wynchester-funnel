import Contact03Page from "@/components/contact-03/contact-03"

export default function ContactPage() {
   return(
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-[#1e40af] text-white py-16 px-8 text-center">
                <h1 className="font-bold text-5xl mb-4">Contact Us</h1>
                <p className="text-xl max-w-2xl mx-auto">We are here to help with all your car loan needs.</p>
            </div>
    
            <section className="py-16 px-8">
               <Contact03Page></Contact03Page>
            </section>
        </div>
    )
}