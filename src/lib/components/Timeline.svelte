<script lang="ts">
    import type { TimelineItem } from "$lib/types/TimelineItem";

    let { items }: { items: TimelineItem[] } = $props();

    let hasSomeIcon: boolean = $derived(items.some((item) => Boolean(item.icon)));
</script>

<div class="max-w-(--breakpoint-sm)">
    <div class="relative">
        {#each items as item, index}
            <div class="group relative">
                <div class="flex items-start">
                    <div class={hasSomeIcon ? "ml-4.5" : "ml-1.5"}>
                        <div
                            class="border-muted-foreground relative -ml-px space-y-2 border-l-2 pl-8"
                            class:pb-6={index !== items.length - 1}
                        >
                            {#if item.icon}
                                <div
                                    class="bg-foreground text-background absolute top-0 -left-px flex size-9 -translate-x-1/2 items-center justify-center rounded-full ring-8 ring-transparent"
                                >
                                    <iconify-icon icon={item.icon} class="text-lg"></iconify-icon>
                                </div>
                            {:else}
                                <div
                                    class="border-foreground bg-background absolute -left-px size-3 -translate-x-1/2 rounded-full border-2"
                                    class:top-3={item.icon}
                                    class:top-2={!item.icon}
                                ></div>
                            {/if}
                            <h3 class="text-xl font-semibold" class:pt-1={item.icon}>
                                {item.title}
                            </h3>
                            {#each item.meta ?? [] as meta}
                                <div class="text-muted-foreground flex items-center gap-2 text-base">
                                    <iconify-icon icon={meta.icon}></iconify-icon>
                                    <span>{meta.label}</span>
                                </div>
                            {/each}
                            {#if item.description}
                                <p class="text-muted-foreground text-base">
                                    {item.description}
                                </p>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
