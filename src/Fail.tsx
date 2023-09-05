import type { Component, ParentComponent } from "solid-js";

const Pre: ParentComponent = props => {
    const children = createMemo(() => props.children);
    return <pre>{children()}</pre>;
};

const Code: ParentComponent = props => {
    const child = children(() => props.children);

    return (
        <Show
            when={Array.isArray(child())}
            fallback={<For each={child.toArray()}>{element => <Pre>{element}</Pre>}</For>}
        >
            <Pre>{child()}</Pre>
        </Show>
    );
};

const App: Component = () => {
    return <Code>{`import { children } from "solid-js";`}</Code>;
};

export default App;
