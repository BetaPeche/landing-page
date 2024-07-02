import Link from 'next/link'

const Logo = () => {
    return (
        <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold text-text-primary"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
            >
                <rect
                    y="0.00012207"
                    width="34"
                    height="34"
                    rx="7.51155"
                    fill="url(#paint0_linear_4613_27)"
                />
                <g filter="url(#filter0_ddi_4613_27)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.5796 16.8792C26.5796 22.2369 22.2363 26.5802 16.8786 26.5802C11.5208 26.5802 7.17755 22.2369 7.17755 16.8792C7.17755 11.5214 11.5208 7.17813 16.8786 7.17813C22.2363 7.17813 26.5796 11.5214 26.5796 16.8792ZM11.9397 19.1553C12.1998 18.4483 12.6094 17.7987 13.1485 17.2552C14.1321 16.2636 15.4662 15.7065 16.8573 15.7065C18.2483 15.7065 19.5824 16.2636 20.566 17.2552C21.1181 17.8118 21.5344 18.4797 21.7934 19.2066C22.1281 18.5011 22.3154 17.712 22.3154 16.8792C22.3154 13.8765 19.8813 11.4423 16.8786 11.4423C13.8759 11.4423 11.4417 13.8765 11.4417 16.8792C11.4417 17.6918 11.62 18.4629 11.9397 19.1553Z"
                        fill="url(#paint1_linear_4613_27)"
                        shapeRendering="crispEdges"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_ddi_4613_27"
                        x="4.51513"
                        y="4.85233"
                        width="24.4209"
                        height="24.8799"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-0.550847" dy="1.04049" />
                        <feGaussianBlur stdDeviation="1.05579" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0506089 0 0 0 0 0.0159861 0 0 0 0 0.191833 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4613_27"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="0.520244" dy="-0.489642" />
                        <feGaussianBlur stdDeviation="0.918078" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="effect1_dropShadow_4613_27"
                            result="effect2_dropShadow_4613_27"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_4613_27"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="1.28531" />
                        <feGaussianBlur stdDeviation="0.810969" />
                        <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect3_innerShadow_4613_27"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_4613_27"
                        x1="20.3"
                        y1="28.2001"
                        x2="27.5306"
                        y2="2.06216"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4A25E1" />
                        <stop offset="1" stopColor="#9C84FF" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_4613_27"
                        x1="20.2701"
                        y1="16.3107"
                        x2="17.428"
                        y2="29.9149"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" stopOpacity="0.96" />
                        <stop offset="1" stopColor="white" stopOpacity="0.23" />
                    </linearGradient>
                </defs>
            </svg>
            HorizonUI
        </Link>
    )
}

export default Logo
