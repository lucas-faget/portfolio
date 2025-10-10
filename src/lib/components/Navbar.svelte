<script lang="ts">
    import type { NavItem } from "$lib/types/NavItem";
    import { underline } from "$lib/actions/actions";
    import { m } from "$lib/i18n/messages";
    import DarkmodeToggle from "./DarkmodeToggle.svelte";
    import LangToggle from "./LangToggle.svelte";

    const nav: NavItem[] = [
        { name: m.nav_home(), href: "/" },
        { name: m.nav_about(), href: "/about" },
        { name: m.nav_work(), href: "/work" },
        { name: m.nav_contact(), href: "/contact" },
    ];

    let lw: number | undefined = $state();
    let rw: number | undefined = $state();

    let w: number = $derived(Math.max(lw, rw));
</script>

<nav
    class="h-nav bg-background text-foreground fixed inset-0 z-10 flex items-center justify-between border-b px-4 text-nowrap"
>
    <a href="/">
        <div bind:offsetWidth={lw} style={`width: ${w}px;`} class="flex text-xl font-bold">Lucas Faget</div>
    </a>
    <ul
        class="m-0 hidden flex-1 list-none justify-center gap-8 p-0 text-lg font-semibold tracking-wide uppercase md:flex"
    >
        {#each nav as item}
            <li>
                <a href={item.href} use:underline>
                    {item.name}
                </a>
            </li>
        {/each}
    </ul>
    <div bind:offsetWidth={rw} style={`width: ${w}px;`} class="flex items-center justify-end gap-1">
        <DarkmodeToggle />
        <LangToggle />
    </div>
</nav>
