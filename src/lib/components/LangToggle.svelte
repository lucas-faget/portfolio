<script lang="ts">
    import { onMount } from "svelte";
    import { getLocale, setLocale } from "$lib/i18n/runtime";

    let isFr: boolean = true;

    onMount(() => {
        const lang = getLocale();
        isFr = lang === "fr";

        applyLang();
    });

    function toggleLang(): void {
        isFr = !isFr;
        applyLang();
    }

    function applyLang(): void {
        if (isFr) {
            setLocale("fr");
        } else {
            setLocale("en");
        }
    }
</script>

<button
    onclick={toggleLang}
    class="hover:bg-muted inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-inherit"
>
    {#if isFr}
        <iconify-icon icon="circle-flags:fr" class="text-2xl"></iconify-icon>
    {:else}
        <iconify-icon icon="circle-flags:en" class="text-2xl"></iconify-icon>
    {/if}
</button>
