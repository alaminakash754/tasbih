import { useState } from "react";


const SubhanAllah = () => {
    const [count, setCount] = useState(0);
    const [countAlhamdulillah, setCountAlhamdulillah] = useState(0);
    const [countAllahAkBar, setCountAllahAkBar] = useState(0);
    const [countAll, setCountAll] = useState(0);
    const [disabledSubhan, setDisabledSubhan] = useState(false);
    const [disabledAlham, setDisabledAlham] = useState(false);
    const [disabledAllahhu, setDisabledAllahhu] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const handleIncrease = () => {
        const newCount = count + 1
        setCount(newCount);

        if (newCount === 33) {
            setDisabledSubhan(true);
        }
    }

    const handleAlhamdulillahIncrease = () => {
        const newCount = countAlhamdulillah + 1
        setCountAlhamdulillah(newCount);

        if (newCount === 33) {
            setDisabledAlham(true);
        }
    }

    const handleAllahuAkbarIncrease = () => {
        const newCount = countAllahAkBar + 1
        setCountAllahAkBar(newCount);

        if (newCount === 33) {
            setDisabledAllahhu(true);
        }
    }

    const handleClick = () => {
        const newCount = countAll + 1
        setCountAll(newCount);

        if (newCount === 1) {
            setIsButtonDisabled(true);
        }
    }

    return (
        <div>
            <h2 className="text-3xl text-center font-semibold text-orange-500">This is Tasbih Count and Screen</h2>
            <div className="mx-auto w-9/12 grid grid-cols-3 gap-5 mt-10 justify-evenly">
                <div className="items-center">
                    <div className="mb-5 border-b-orange-600 ">
                        <h2>Display counting: {count} </h2>
                    </div>
                    <div>
                        <button onClick={handleIncrease} disabled={disabledSubhan} className="btn btn-accent">Subhan Allah</button>
                    </div>
                </div>
                <div className="items-center">
                    <div className="mb-5 border-b-orange-600 ">
                        <h2>Display counting: {countAlhamdulillah} </h2>
                    </div>
                    <div>
                        <button onClick={handleAlhamdulillahIncrease} disabled={disabledAlham} className="btn btn-accent">Alhamdulillah </button>
                    </div>
                </div>
                <div className="items-center">
                    <div className="mb-5 border-b-orange-600 ">
                        <h2>Display counting: {countAllahAkBar} </h2>
                    </div>
                    <div>
                        <button onClick={handleAllahuAkbarIncrease} disabled={disabledAllahhu} className="btn btn-accent">AllahhuAkbar </button>
                    </div>
                </div>
            </div>
            <div className="w-3/4 mx-auto mt-10">
            <div className="mb-5 border-b-orange-600 ">
                        <h2 className="text-center">Display counting: {countAll} </h2>
                    </div>
                <button onClick={handleClick} disabled={isButtonDisabled} className="btn btn-block bg-green-400">SubhanAllah Alhamdulillah La-I-Laha Illalahu AllahhuAkbar </button>
            </div>
        </div>
    );
};

export default SubhanAllah;