import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export function Checkbox() {
    return (
        <CheckboxPrimitive.Root className="w-4 h-4 rounded-full bg-transparent outline-none ring-2 ring-blue-200 hover:ring-blue-500 hover:bg-blue-500 hover:bg-opacity-20">
            <CheckboxPrimitive.CheckboxIndicator>
                <Check className="text-gray-100 bg-purple-400 rounded-full ring-purple-400 ring-2 hover:ring-purple-200 hover:bg-purple-200" />
            </CheckboxPrimitive.CheckboxIndicator>
        </CheckboxPrimitive.Root>
    );
}
