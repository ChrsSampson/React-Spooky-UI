// demo page
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Button, Typography, Input } from "./src/npm-exports";

const root = createRoot(document.getElementById("root"), {});

root.render(App());

function App() {
    return (
        <section style={{ padding: ".5em" }}>
            <header className="demo-header">
                <Typography element="h1">Spooky UI</Typography>
                <ThemeButton />
            </header>
            <Typography element="h3">Button Variants</Typography>
            <hr />
            <div style={{ display: "flex", gap: "1em", padding: "2em" }}>
                <Button>Button</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="skeleton" disabled={true}>
                    Disabled
                </Button>
                <Button variant="skeleton">Skeleton</Button>

                <Button variant="danger">Danger</Button>
                <Button variant="warn">Warning</Button>
            </div>
            <Typography element="h3">Typography</Typography>
            <hr />
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
                    <Typography element="h1" font="halloween">
                        H1 Heading
                    </Typography>
                    <Typography element="h2" font="halloween">
                        H2 Heading
                    </Typography>
                    <Typography element="h3" font="halloween">
                        H3 Heading
                    </Typography>
                    <Typography element="h4" font="halloween">
                        H4 Heading
                    </Typography>
                    <Typography element="h5">H5 Heading</Typography>
                    <Typography>Regular Text</Typography>
                    <Typography element="sub">Sub Title</Typography>
                </div>
                <div
                    style={{ display: "flex", gap: "1em", flexDirection: "column", padding: "5em" }}
                >
                    <Typography element="h2" font="spooky">
                        Lorum Ipsom Dolor
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi.
                    </Typography>
                </div>
            </div>
            <div></div>
            <Typography element="h3">Input Fields</Typography>
            <hr />
            <div style={{ display: "flex", gap: "1em" }}>
                <Input value="Input" />
                <Input value="Placeholder" />
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
