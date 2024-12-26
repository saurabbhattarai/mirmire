import Image from "next/image";

const Header = () => {
return (
    <> 
    <div className="text-xs py-4 text-center text-green-500">  
            <span>"तपाईंको बचत, ऊर्जामा लगानी, उचित प्रतिफल, सुनिश्चित जिन्दगानी"</span> 
            </div>
        <div className="flex justify-center py-4">
            <Image
                src="/images/headerlogo.webp"
                alt="लोगो"
                width={800}
                height={800}
                loading="lazy"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
        </div>
            <div className="marquee text-xl font-semibold bg-gray-200 text-green-600">
            <p>मिर्मिरे ऊर्जा सहकारी संस्था लिमिटेड को १२ औं वार्षिक साधारण सभा तथा चौथो अधिवेशनमा यहाँहरुलाई हार्दिक स्वागत गर्दछु |</p>
            </div>

            <style>{`
                .marquee {
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    box-sizing: border-box;
                }

                .marquee p {
                    display: inline-block;
                    padding-left: 100%;
                    animation: marquee 15s linear infinite;
                }

                @keyframes marquee {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(-100%, 0);
                    }
                }
            `}</style>
    </>
);
};

export default Header;
