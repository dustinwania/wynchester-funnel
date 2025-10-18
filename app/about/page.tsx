import AvatarCard from "../components/AvatarCard"

export default function AboutPage() {
    return(
        <div className="px-8 py-4">
            <p className="font-bold text-5xl mb-6">About Us</p>

            <section className="w-full h-auto flex flex-wrap justify-between items-center space-x-8">
                <p className="w-full sm:w-[48%] mb-6 sm:mb-0 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cum, eligendi magnam beatae qui rerum facilis nisi. Maxime beatae accusamus assumenda ad sit exercitationem labore. Vero, possimus consectetur. Voluptas blanditiis modi, dolore deleniti nemo vel in minima eos, ab voluptates aut facere reprehenderit accusantium impedit temporibus sed aspernatur libero at illum suscipit. Ab debitis voluptatibus laudantium quis corporis natus voluptatem! Assumenda laborum, suscipit ea obcaecati repellendus praesentium in odio molestiae neque eius voluptatum non officia. Voluptate, vitae. Dolorum accusamus magnam nisi ipsum quis praesentium nulla, doloremque tempora quasi officiis, id necessitatibus fugiat quibusdam vel optio nobis, blanditiis quos inventore! Ut?
                </p>

                <div className="w-full sm:w-[48%] h-[50vh] bg-gray-300 flex items-center justify-center">
                    <p className="text-center">Google Map 2D Location here</p>
                </div>
            </section>

        </div>
    )
}
