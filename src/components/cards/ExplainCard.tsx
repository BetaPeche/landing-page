interface ExplainCardProps {
    number: number
    active: boolean
    title: string
}

const ExplainCard: React.FC<ExplainCardProps> = ({ number, active, title }) => {
    return (
        <div className="flex gap-[18px]">
            <div
                className={`${active ? 'bg-primary leading-[48px] text-white' : 'border-2 border-primary leading-[44px] text-primary'} h-12 w-12 rounded-full text-center text-base font-bold`}
            >
                {number}
            </div>
            <div className="flex flex-1 flex-col">
                <p className="text-base font-bold leading-[30px] text-text-primary">
                    {title}
                </p>
                <p className="text-base font-medium leading-[30px] text-text-secondary">
                    Condimentum vit pellemsque habitant morbi at molestie
                </p>
            </div>
        </div>
    )
}

export default ExplainCard
