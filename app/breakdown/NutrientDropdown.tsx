import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NutrientDropdown() {
    const [selection, setSelection] = useState<string | null>(useSearchParams().get('selection'))

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                >
                    {selection ? selection : "Select"}
                </Button>
            </DropdownTrigger>
            <DropdownMenu onAction={(key) => setSelection(key)}>
                <DropdownItem key="Protein">Protein</DropdownItem>
                <DropdownItem key="Carbohydrates">Carbohydrates</DropdownItem>
                <DropdownItem key="Fat">Fat</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
