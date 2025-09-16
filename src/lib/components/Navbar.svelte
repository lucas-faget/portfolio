<script lang="ts">
    import { underline } from "$lib/actions/actions";

    const links = [
        { name: "home", href: "/" },
        { name: "about", href: "/about" },
        { name: "work", href: "/work" },
        { name: "contact", href: "/contact" },
    ];
</script>

<nav class="fixed inset-0 h-nav flex justify-center items-center gap-8">
    {#each links as link}
        <a href={link.href} use:underline class="text-lg font-semibold uppercase tracking-wide text-black">
            {link.name}
        </a>
    {/each}
</nav>
