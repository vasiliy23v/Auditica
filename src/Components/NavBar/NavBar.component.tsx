import { FC } from "react";
interface NavBarProps {
    name: string,
}
export const NavBar: FC<NavBarProps> = ({name}: NavBarProps) => {
    return <h3>{name}</h3>
}