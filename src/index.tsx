/* @refresh reload */
import { render } from "solid-js/web";

/** Uncomment the line below to check the error */
// import App from "./Fail";
/** Uncomment the line below to check the success */
import App from "./Success";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
    );
}

render(() => <App />, root!);
