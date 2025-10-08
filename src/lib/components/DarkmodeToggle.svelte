<script lang="ts">
    import { onMount } from "svelte";

    let isDark: boolean = false;

    onMount(() => {
        const theme = localStorage.getItem("theme");

        if (theme) {
            isDark = theme === "dark";
        } else {
            isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }

        applyTheme();
    });

    function toggleTheme(): void {
        isDark = !isDark;
        localStorage.setItem("theme", isDark ? "dark" : "light");
        applyTheme();
    }

    function applyTheme(): void {
        document.documentElement.classList.toggle("dark", isDark);
    }
</script>

<button
    onclick={toggleTheme}
    class="border-input hover:bg-muted inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-inherit"
>
    {#if isDark}
        <iconify-icon icon="ph:moon" class="text-2xl"></iconify-icon>
    {:else}
        <iconify-icon icon="ph:sun" class="text-2xl"></iconify-icon>
    {/if}
</button>
