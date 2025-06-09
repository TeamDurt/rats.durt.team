<script>
    import { page } from "$app/state";
    import { redirectToWelcome } from "$lib/config";

    const navItems = [
        { path: redirectToWelcome ? "/welcome" : "/", label: "главная" },
        { path: "/about", label: "об ивенте" },
        { path: "/notes", label: "записки" },
    ];
</script>

<div class="w-full h-fit flex flex-row items-center py-4 gap-20">
    <a href="/" class="text-primary font-bold text-3xl">Ratsmania</a>
    {#each navItems as { path, label }}
        <a
            href={path}
            class="font-light text-xl"
            class:text-heading={page.url.pathname === path}
            class:underline={page.url.pathname === path}
        >
            {label}
        </a>
    {/each}
</div>
