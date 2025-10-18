import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
    return (

        <div className="w-full h-full">

        <ImageCarousel/>        

        <div className="w-full h-[30vh] flex content-center justify-between items-center mt-4 pl-12 pr-12 border bg-gray-200 ">
            <p>
                Headline Text
                <caption>Subline</caption>
            </p>

            <p>Tagline Text
                <caption>Subline</caption>
            </p>
        </div>
        
        <div className="w-full h-[40vh] border mt-4 p-6 bg-gray-200">
            <p>Easy Steps</p>
            <div className="size-32 rounded-full bg-red-300"></div>
            <div className="size-32 rounded-full bg-red-300"></div>
            <div className="size-32 rounded-full bg-red-300"></div>
        </div>
        
    </div>
    );
}