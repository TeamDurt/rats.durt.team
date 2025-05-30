<script lang="ts">
    import { goto } from "$app/navigation";
    import { redirectToWelcome } from "$lib/state";
    import PathProgress from "$lib/components/PathProgress.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        if (!redirectToWelcome) goto("/");
    });
</script>

<h1 class="text-primary text-5xl font-bold mt-24">Добро пожаловать</h1>
<p class="text-2xl font-extralight mt-2">на начало ивента</p>
<div class="w-full max-w-[647px] relative mt-8">
    <enhanced:img
        src="$lib/assets/img/wanted.png"
        class="w-full"
    />
    <enhanced:img
        src="$lib/assets/img/wanted_shadow.png"
        class="w-full absolute top-20 left-0 -z-10"
    />
</div>
<h2 class="text-primary font-bold text-4xl mt-16 mb-8">Ваш прогресс в пути Чумного Доктора:</h2>
<PathProgress />
