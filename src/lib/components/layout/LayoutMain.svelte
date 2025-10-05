<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<section class="sm:min-h-page flex flex-1 items-center p-6">
    {@render children?.()}
</section>
