interface WorkflowCardProps {
    title: string
    subtitle: string
    text: string
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({
    title,
    subtitle,
    text,
}) => {
    return (
        <div className="flex flex-col gap-[2px]">
            <h3 className="leadin-[44px] text-4xl font-extrabold text-text-primary">
                {title}
            </h3>
            <h4 className="text-base font-bold leading-[30px] text-text-primary">
                {subtitle}
            </h4>
            <p className="text-base font-medium leading-[30px] text-text-secondary">
                {text}
            </p>
        </div>
    )
}

export default WorkflowCard
