export function Input() {
    return (
        <div className="w-full p-4 gap-2 flex items-start rounded-lg bg-gray-500 ring-1 ring-gray-700 focus-within:ring-purple-400">
            <input
                className="text-gray-100 text-md leading-normal bg-transparent outline-none placeholder:text-gray-300 flex-1"
                placeholder="Digite o nome da tarefa..."
            />
        </div>
    );
}
