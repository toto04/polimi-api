import type { FC } from "react";
import "./Header.scss";

export const Header: FC = () => {
    return (
        <header
            onClick={() => {
                // go to the github repo
                window.location.href = "http://github.com/toto04/polimi-api";
            }}
        >
            <h1>Polimi API docs</h1>
        </header>
    );
};
