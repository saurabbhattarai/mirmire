const Hero = () => {
return (
    <>
        <div className="flex flex-col font-semibold items-center justify-center text-center py-10">
            <div>
                <span className="text-xl mb-5">
                    आर्थिक वर्ष २०८०/८१ को वार्षिक प्रतिवेदनको लागि यहाँ क्लिक गर्नुहोस्
                    |
                </span>
            </div>
            <a
                href="/files/mirmire_book.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-500 no-underline border border-blue-500 px-6 mt-1 py-2 rounded-2xl"
            >
                <svg
                    className="w-6 h-6 inline-block mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M5 22q-.425 0-.712-.288T4 21t.288-.712T5 20h14q.425 0 .713.288T20 21t-.288.713T19 22zm7-4.625q-.225 0-.437-.1t-.363-.3l-4.95-6.35q-.375-.5-.1-1.062T7.05 9H9V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v6h1.95q.625 0 .9.563t-.1 1.062l-4.95 6.35q-.15.2-.363.3t-.437.1m0-2.625L14.9 11H13V4h-2v7H9.1zM12 11"
                    />
                </svg>
                पीडीएफ
            </a>
        </div>

        <div className="flex flex-col font-semibold items-center justify-center text-center py-10">
            <div>
                <span className="text-xl mb-5">
                    कार्यक्रम तालिका को लागि यहाँ क्लिक गर्नुहोस् |
                </span>
            </div>
            <a
                href="/files/mirmire_itenary.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-500 no-underline border border-blue-500 px-6 mt-1 py-2 rounded-2xl"
            >
                <svg
                    className="w-6 h-6 inline-block mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M5 22q-.425 0-.712-.288T4 21t.288-.712T5 20h14q.425 0 .713.288T20 21t-.288.713T19 22zm7-4.625q-.225 0-.437-.1t-.363-.3l-4.95-6.35q-.375-.5-.1-1.062T7.05 9H9V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v6h1.95q.625 0 .9.563t-.1 1.062l-4.95 6.35q-.15.2-.363.3t-.437.1m0-2.625L14.9 11H13V4h-2v7H9.1zM12 11"
                    />
                </svg>
                पीडीएफ
            </a>
        </div> 

        <div className="flex flex-col font-semibold items-center justify-center text-center py-10">
            <div>
                <span className="text-xl mb-5">
                    सहकारीका मूल्य र मान्यता पढ्नको लागि यहाँ क्लिक गर्नुहोस् | 
                </span>
            </div>
            <a
                href="/files/sahakari_values.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-500 no-underline border border-blue-500 px-6 mt-1 py-2 rounded-2xl"
            >
                <svg
                    className="w-6 h-6 inline-block mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M5 22q-.425 0-.712-.288T4 21t.288-.712T5 20h14q.425 0 .713.288T20 21t-.288.713T19 22zm7-4.625q-.225 0-.437-.1t-.363-.3l-4.95-6.35q-.375-.5-.1-1.062T7.05 9H9V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v6h1.95q.625 0 .9.563t-.1 1.062l-4.95 6.35q-.15.2-.363.3t-.437.1m0-2.625L14.9 11H13V4h-2व7H9.1zM12 11"
                    />
                </svg>
                पीडीएफ
            </a>
        </div>
    </>
);
};

export default Hero;
