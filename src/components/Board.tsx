import Clipboard from "../assets/Clipboard.svg";
import { Checkbox } from "./Checkbox";
import { Counter } from "./Counter";
import { Task } from "./Task";

export function Board() {
    return (
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
                </div>
            </div>
            <div className="w-full border-t text-gray-300 border-t-gray-400 rounded-lg flex flex-col items-center justify-center gap-3 py-16 px-6">
                <Task />
                <Task />
                <Task />

                <img src={Clipboard} />
                <span className="text-center">
                    <strong>
                        Você ainda não tem tarefas cadastradas <br />
                    </strong>
                    Crie tarefas e organize seus itens a fazer
                </span>
            </div>
        </div>
    );
}
