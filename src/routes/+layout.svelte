<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import { page } from "$app/state";
    import { locales, localizeHref } from "$lib/i18n/runtime";

    export const prerender = true;

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<div class="mt-nav">
    {@render children?.()}
</div>

<div style="display:none">
    {#each locales as locale}
        <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
    {/each}
</div>
