<script lang="ts">
    import "$lib/assets/css/fonts.css";
    import "$lib/assets/css/globals.css";
    import Header from "$lib/components/Header.svelte";

    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <title>Ratsmania</title>
    <meta name="description" content="Мир меняется. Ты либо часть процесса, либо следующая жертва.">
</svelte:head>

<div class="flex flex-col items-center w-screen min-h-screen px-8">
    <div class="w-full max-w-[1200px] h-full flex flex-col">
        <Header />
        {@render children?.()}
    </div>
</div>
