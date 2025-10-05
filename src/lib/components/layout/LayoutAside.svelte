<script lang="ts">
    import { getContext, type Snippet } from "svelte";
    import type { NavItem } from "$lib/types/NavItem";
    import { underline } from "$lib/actions/actions";

    let { children = null }: { children: Snippet | null } = $props();

    let id: string = getContext("id");
    let nav: NavItem[] = getContext("nav");
</script>

<aside class="min-h-page relative w-100 border-r p-6">
    {#if children}
        {@render children()}
    {:else if nav && nav.length > 0}
        <ul
            class="sticky top-22 left-4 m-0 flex list-none flex-col justify-center gap-2 p-0 text-2xl tracking-wide uppercase"
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
