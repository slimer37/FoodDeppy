import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NutrientDropdown({value, callback} : any) {
    const labels = ["Protein", "Carbohydrates", "Fat"]

    value = useSearchParams().get('nutrient')

    const [state, setState] = useState(null)

    useEffect(() => {
        for (let i = 0; i < labels.length; i++) {
            if (labels[i] == value) {
                callback(value)
                break;
            }
        }
    }, [state])

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                >
                    {value}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" onAction={(key) => callback(key)}>
                <DropdownItem key="Protein">Protein</DropdownItem>
                <DropdownItem key="Carbohydrates">Carbohydrates</DropdownItem>
                <DropdownItem key="Fat">Fat</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
