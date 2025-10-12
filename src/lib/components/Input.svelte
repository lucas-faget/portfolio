<script lang="ts">
    let {
        type = "text",
        id = "",
        value = $bindable(""),
        placeholder = "",
        ref = $bindable(null),
    }: {
        type: string;
        id: string;
        value: string;
        placeholder: string;
        ref?: HTMLElement | null;
    } = $props();
</script>

{#if type === "textarea"}
    <textarea
        {id}
        name={id}
        bind:value
        {placeholder}
        bind:this={ref}
        class="bg-muted placeholder:text-muted-foreground focus:ring-foreground focus:ring-offset-background inline-flex h-48 min-h-12 w-full items-center rounded-lg border px-4 py-2.5 text-base focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
    ></textarea>
{:else}
    <input
        {type}
        {id}
        name={id}
        bind:value
        {placeholder}
        bind:this={ref}
        class="bg-muted placeholder:text-muted-foreground focus:ring-foreground focus:ring-offset-background inline-flex h-12 w-full items-center rounded-lg border px-4 text-base focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
    />
{/if}
