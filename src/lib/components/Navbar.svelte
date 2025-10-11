<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/state";
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

    let isMenuOpen: boolean = $state(false);

    function toggleMenu(): void {
        isMenuOpen = !isMenuOpen;
    }

    $effect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    });

    onMount(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                isMenuOpen = false;
            }
        };

        if (mediaQuery.matches) {
            isMenuOpen = false;
        }

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    });
</script>

<nav
    class="h-nav bg-background text-foreground fixed inset-0 z-20 flex items-center justify-between border-b px-4 text-nowrap"
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
    <div bind:offsetWidth={rw} style={`width: ${w}px;`} class="flex justify-end">
        <div class="flex items-center gap-1 max-md:hidden">
            <DarkmodeToggle />
            <LangToggle />
        </div>
        <div class="md:hidden">
            <button
                onclick={toggleMenu}
                class="hover:bg-muted inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-inherit"
            >
                {#if isMenuOpen}
                    <iconify-icon icon="line-md:menu-to-close-alt-transition" class="text-3xl"></iconify-icon>
                {:else}
                    <iconify-icon icon="line-md:close-to-menu-alt-transition" class="text-3xl"></iconify-icon>
                {/if}
            </button>
        </div>
    </div>
</nav>

{#if isMenuOpen}
    <div class="pt-nav bg-background fixed inset-0 z-10 h-screen w-full md:hidden">
        <div class="flex h-full flex-col justify-between gap-6 overflow-y-auto p-4">
            <ul class="m-0 flex list-none flex-col gap-6 p-0 text-3xl tracking-wide uppercase">
                {#each nav as item}
                    <li class="group" class:text-muted-foreground={item.href !== page.url.pathname}>
                        <a
                            href={item.href}
                            onclick={toggleMenu}
                            use:underline
                            class="flex items-center justify-between gap-4"
                        >
                            {item.name}
                            {#if item.href !== page.url.pathname}
                                <iconify-icon
                                    icon="lucide:move-right"
                                    class="-translate-x-4 text-2xl opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                                ></iconify-icon>
                            {:else}
                                <iconify-icon icon="lucide:circle-dot" class="text-2xl"></iconify-icon>
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>
            <div class="flex items-center gap-1">
                <DarkmodeToggle />
                <LangToggle />
            </div>
        </div>
    </div>
{/if}
