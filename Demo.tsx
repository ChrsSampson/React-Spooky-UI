// demo page
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./src/npm-exports";

const root = createRoot(document.getElementById("root"), {});

root.render(App());

function App() {
    return (
        <section style={{ padding: ".5em" }}>
            <header className="demo-header">
                <h1>Spooky UI</h1>
                <ThemeButton />
            </header>
            <h3>Buttons</h3>
            <div style={{ display: "flex", gap: "1em" }}>
                <Button>Button</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="skeleton" disabled={true}>
                    Disabled
                </Button>
                <Button variant="skeleton">Skeleton</Button>

                <Button variant="danger">Skeleton</Button>
            </div>
        </section>
    );
}

// the worst theme switcher you have ever seen
function ThemeButton() {
    function initTheme() {
        const exists = localStorage.getItem("theme");

        if (!exists) {
            localStorage.setItem("theme", "light");
        }
    }

    function checkTheme() {
        const theme = localStorage.getItem("theme");
        if (theme == "dark") {
            toggleTheme();
            localStorage.setItem("theme", "dark");
        }
    }

    function toggleTheme() {
        const theme = localStorage.getItem("theme");
        if (theme == "light") {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
    }

    useEffect(() => {
        initTheme();

        checkTheme();
    }, []);

    return <Button onClick={toggleTheme}>Toggle Theme</Button>;
}
