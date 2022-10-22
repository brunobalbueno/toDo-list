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
                <div className="w-[48rem] m-16 flex flex-col items-start gap-6">
                    <div className="w-full flex justify-between">
                        <div className="flex flex-row gap-2">
                            <span className="text-sm font-bold text-blue-200">
                                Tarefas Criadas
                            </span>
                            <Counter />
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="text-sm font-bold text-purple-200">
                                Concluídas
                            </span>
                            <Counter />
                        </div>
                    </div>
                    <Board />
                </div>
            </div>
        </div>
    );
}

export default App;
