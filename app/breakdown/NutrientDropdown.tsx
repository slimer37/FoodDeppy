import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NutrientDropdown({value, callback} : any) {
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
