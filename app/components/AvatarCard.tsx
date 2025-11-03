

interface AvatarCardProps {
    number: string;
    title: string;
    description: string;
}

export default function AvatarCard({ number, title, description }: AvatarCardProps) {
    return(
        <div className="flex flex-col items-center text-center max-w-xs">
            <div className="size-24 rounded-full bg-[#1e40af] text-white flex items-center justify-center text-3xl font-bold mb-4">
                {number}
            </div>
            <h3 className="text-xl font-bold text-[#1e40af] mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}