import { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";

const TinKul = () => {
    const [ekhlas, setEkhlas] = useState(0);
    const [falak, setFalak] = useState(0);
    const [nach, setNach] = useState(0);
    const [disabledEkhlas, setDisabledEkhlas] = useState(false);
    const [disabledFalak, setDisabledFalak] = useState(false);
    const [disabledNach, setDisabledNach] = useState(false);

    const handleEkhlas = () => {
        const newCount = ekhlas + 1
        setEkhlas(newCount);

        if (newCount === 3) {
            setDisabledEkhlas(true);
        }
    }
    const handleFalak = () => {
        const newCount = falak + 1
        setFalak(newCount);

        if (newCount === 3) {
            setDisabledFalak(true);
        }
    }
    const handleNach = () => {
        const newCount = nach + 1
        setNach(newCount);

        if (newCount === 3) {
            setDisabledNach(true);
        }
    }

    return (
        <div>
            <div className="w-full mx-auto items-center justify-evenly flex">
                <div>
                    <Link to='/'><IoIosHome className=" text-3xl text-left mr-10 text-orange-400"></IoIosHome></Link>
                </div>
                <h2 className="text-3xl  font-semibold text-orange-500"> This is Tasbih Count and Screen</h2>
            </div>
            <div className="mx-auto w-9/12 grid grid-cols-3 gap-5 mt-10 justify-center">
                <div className="items-center">
                    <div className="mb-5 border-b-orange-600 ">
                        <h2>Display counting: {ekhlas} </h2>
                    </div>
                    <div>
                        <button onClick={() => { handleEkhlas(); }} disabled={disabledEkhlas} className="btn btn-accent ">কুল হুয়াল্লাহু আহাদ। আল্লাহুচ্চামাদ। লাম ইয়ালিদ ওয়া লাম ইউলাদ। ওয়া লাম ইয়াকুল্লাহু কুফুয়ান আহাদ।</button>
                    </div>
                </div>
                <div className="items-center">
                    <div className="mb-5 border-b-orange-600 ">
                        <h2>Display counting: {falak} </h2>
                    </div>
                    <div>
                        {/* <button onClick={handleAlhamdulillahIncrease} disabled={disabledAlham} className="btn btn-accent">Alhamdulillah </button> */}
                        <button onClick={() => { handleFalak(); }} disabled={disabledFalak} className="btn btn-accent">Alhamdulillah </button>
                    </div>
                </div>
                <div className="items-center">
                    <div className="mb-5 border-b-orange-600 ">
                        <h2>Display counting: {nach} </h2>
                    </div>
                    <div>
                        {/* <button onClick={handleAllahuAkbarIncrease} disabled={disabledAllahhu} className="btn btn-accent">AllahhuAkbar </button> */}
                        <button onClick={() => { handleNach(); }} disabled={disabledNach} className="btn btn-accent">AllahhuAkbar </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TinKul;