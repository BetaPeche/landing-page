import Image from 'next/image'

interface CustomerCardProps {
    review: string
    image: string
    name: string
    title: string
}

const CustomerCard: React.FC<CustomerCardProps> = ({
    review,
    image,
    name,
    title,
}) => {
    return (
        <div className="flex w-full flex-col items-center gap-[37px] rounded-2xl bg-[#F6F8FD] p-8">
            <h3 className="text-center text-xl font-bold leading-[30px] text-text-primary">
                {review}
            </h3>
            <div className="flex flex-col items-center gap-4">
                <Image
                    className="h-auto w-auto"
                    src={image}
                    alt="eclair"
                    width={40}
                    height={0}
                    priority={true}
                    quality={100}
                />
                <div className="flex flex-col items-center">
                    <h4 className="text-lg font-extrabold text-text-primary">
                        {name}
                    </h4>
                    <p className="text-xs font-semibold leading-[18px] text-text-secondary">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard
