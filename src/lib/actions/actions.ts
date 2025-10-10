export function underline(node: HTMLElement) {
    const classList: string =
        "relative pb-1 after:absolute after:right-0 after:bottom-0 after:h-[0.15rem] after:w-0 after:bg-current hover:after:left-0 hover:after:w-full after:transition-all after:duration-300";
    node.classList.add(...classList.split(" "));

    return {
        destroy() {
            node.classList.remove(...classList.split(" "));
        },
    };
}
