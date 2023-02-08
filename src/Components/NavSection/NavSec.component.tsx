import { FC } from "react";
import { NavBar } from "Components/NavBar";

export const NavSec: FC<{}> = () => {
    const navArr = ["Home", "Brovse", "Favourite", "Library"]
    return (
        <>
        {navArr.map((i)=> {
            <NavBar name={i} />
        })}
        </>
    )
}