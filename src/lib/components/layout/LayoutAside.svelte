<script lang="ts">
    import { getContext, type Snippet } from "svelte";
    import type { NavItem } from "$lib/types/NavItem";
    import { underline } from "$lib/actions/actions";

    let { children = null }: { children: Snippet | null } = $props();

    let id: string = getContext("id");
    let nav: NavItem[] = getContext("nav");
</script>

<aside class="sm:min-h-page relative w-full border-b p-6 sm:w-60 sm:border-r md:w-80 lg:w-100">
    {#if children}
        {@render children()}
    {:else if nav && nav.length > 0}
        <ul
            class="sticky top-22 left-4 m-0 flex list-none flex-row flex-wrap gap-4 p-0 text-2xl tracking-wide uppercase sm:flex-col sm:gap-2"
        >
            {#each nav as item}
                <li class:text-muted-foreground={item.id !== id}>
                    <a href={item.href} use:underline>
                        {item.name ?? item.id}
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</aside>
