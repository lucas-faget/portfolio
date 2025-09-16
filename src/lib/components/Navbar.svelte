<script lang="ts">
    import { underline } from "$lib/actions/actions";

    const links = [
        { name: "home", href: "/" },
        { name: "about", href: "/about" },
        { name: "work", href: "/work" },
        { name: "contact", href: "/contact" },
    ];
</script>

<nav class="h-nav fixed inset-0 flex items-center justify-center gap-8">
    {#each links as link}
        <a href={link.href} use:underline class="text-lg font-semibold tracking-wide text-black uppercase">
            {link.name}
        </a>
    {/each}
</nav>
