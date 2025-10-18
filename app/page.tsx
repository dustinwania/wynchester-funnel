import AvatarCard from "./components/AvatarCard";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
    return (

        <div className="w-full h-full">

        <ImageCarousel/>        

        <section className="w-full h-[30vh] flex content-center justify-between items-center mt-4 pl-12 pr-12 border bg-gray-200 ">
            <p>
                Headline Text
                <caption>Subline</caption>
            </p>

            <p>Tagline Text
                <caption>Subline</caption>
            </p>
        </section>
        
        <section className="w-full h-[40vh] border mt-4 p-6 bg-gray-200">
            <p className="flex justify-center content-center mb-6 text-2xl">Easy Steps</p>
            <div className="flex justify-center gap-32">
                <AvatarCard></AvatarCard>
                <AvatarCard></AvatarCard>
                <AvatarCard></AvatarCard>   
            </div>
            
        </section>
        
    </div>
    );
}