"use client";

import { Plus } from "lucide-react";
import { Button } from "./button";

export default function AddButton({onClick, type}: { type?: "submit" | "reset" | "button" | undefined, onClick?: () => void}) {

    return (
        <Button size="sm" className="h-8 gap-1" onClick={async () => {
            if (onClick) {
                await onClick();
            }
        }} type={type}>
            <Plus className="h-5 w-5" />
        </Button>
    )
}