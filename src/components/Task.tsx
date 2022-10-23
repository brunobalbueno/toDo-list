import { Checkbox } from "./Checkbox";

export function Task() {
    return (
        <div className="w-full p-4 gap-3 rounded-lg bg-gray-500 outline-none ring-1 ring-gray-400 flex flex-row items-center">
            <Checkbox /> <span className="text-gray-100">Teste</span>
        </div>
    );
}
