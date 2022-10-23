import { PlusCircle } from "phosphor-react";
import Logo from "./assets/Logo.svg";
import { Board } from "./components/Board";
import { Counter } from "./components/Counter";
import { Input } from "./components/Input";
import "./styles/global.css";

function App() {
    return (
        <div className="w-screen h-screen bg-gray-600">
            <header className="bg-gray-700 h-[200px] flex items-center justify-center">
                <img src={Logo} />
            </header>
            <div className="-mt-6 flex flex-col items-center justify-center">
                <div className="gap-2 w-[48rem] flex flex-row items-center">
                    <Input />
                    <button className="gap-2 p-4 flex items-center rounded-lg text-sm leading-normal font-bold text-gray-100 bg-blue-500 hover:bg-blue-200 ">
                        Criar <PlusCircle size={16} weight="bold" />
                    </button>
                </div>
                <Board />
            </div>
        </div>
    );
}

export default App;
