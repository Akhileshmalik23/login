'use client'
import { ReactTyped } from "react-typed";

const Message: React.FC = () => (
    <>
        <div className="flex justify-center items-center my-3">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                Fill 
            </p>
            <ReactTyped
                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#d0546d] "
                strings={["Your Data","here"]}
                typeSpeed={60}
                backSpeed={100}
                loop
            />
        </div>
    </>
);

export default Message;
