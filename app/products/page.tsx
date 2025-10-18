export default function Products() {
    return (
        <div className="px-16 py-4">
            <p className="text-center font-bold text-5xl mt-8 mb-16">Our Loan Products</p>

            <section className="flex flex-wrap justify-between gap-8">
                <div className="w-full sm:w-[30%] flex flex-col items-center text-center">
                    <div className="size-64 bg-gray-300 mb-4"></div> {/* Adjusted size */}
                    <p className="text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis similique soluta facere, eligendi reiciendis minus suscipit ipsam provident nostrum eos iure sequi atque eius dolor eaque a. Velit, alias!
                    </p>
                </div>

                <div className="w-full sm:w-[30%] flex flex-col items-center text-center">
                    <div className="size-64 bg-gray-300 mb-4"></div>
                    <p className="text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis similique soluta facere, eligendi reiciendis minus suscipit ipsam provident nostrum eos iure sequi atque eius dolor eaque a. Velit, alias!
                    </p>
                </div>

                <div className="w-full sm:w-[30%] flex flex-col items-center text-center">
                    <div className="size-64 bg-gray-300 mb-4"></div>
                    <p className="text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis similique soluta facere, eligendi reiciendis minus suscipit ipsam provident nostrum eos iure sequi atque eius dolor eaque a. Velit, alias!
                    </p>
                </div>
            </section>
        </div>
    )
}
