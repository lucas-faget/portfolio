<script lang="ts">
    import { getContext, setContext, type Snippet } from "svelte";
    import type { NavItem } from "$lib/types/NavItem";

    let { id, title = "", children }: { id: string; title: string; children: Snippet } = $props();

    setContext("id", id);

    let nav: NavItem[] = getContext("nav");
    if (!nav.some((item: NavItem) => item.id === id)) {
        nav.push({
            id,
            href: `#${id}`,
            name: title && title !== "" ? title : id,
        });
    }
</script>

<div {id} class="min-h-page group flex border-b">
    {@render children?.()}
</div>
