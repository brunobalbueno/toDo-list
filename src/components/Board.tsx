import Clipboard from "../assets/Clipboard.svg";

export function Board() {
    return (
        <div className="w-full border-t text-gray-300 border-t-gray-400 rounded-lg flex flex-col items-center justify-center gap-6 py-16 px-6">
            <img src={Clipboard} />
            <span className="text-center">
                <strong>
                    Você ainda não tem tarefas cadastradas <br />
                </strong>
                Crie tarefas e organize seus itens a fazer
            </span>
        </div>
    );
}
