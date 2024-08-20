const Loader = () => {
    return (
        <>
            <div
                className="text-surface absolute left-[calc(50%-1rem)] top-[calc(50%-1rem)] inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </>
    )
}

export default Loader
