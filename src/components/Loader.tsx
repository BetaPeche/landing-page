const Loader = () => {
    return (
        <>
            <div
                className="text-surface absolute left-[50%] top-[50%] inline-block h-8 w-8 translate-x-[-50%] translate-y-[-50%] animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
        </>
    )
}

export default Loader
