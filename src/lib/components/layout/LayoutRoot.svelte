<script lang="ts">
    import { setContext, type Snippet } from "svelte";
    import type { NavItem } from "$lib/types/NavItem";

    let { children }: { children: Snippet } = $props();

    let nav: NavItem[] = $state([]);
    setContext("nav", nav);
</script>

<div class="flex flex-col">
    {@render children?.()}
</div>
