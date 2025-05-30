<script lang="ts">
    import "$lib/assets/css/fonts.css";
    import "$lib/assets/css/globals.css";
    import Header from "$lib/components/Header.svelte";
    import bg from "$lib/assets/img/lit_bg.png";

    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <title>Ratsmania</title>
    <meta name="description" content="Мир меняется. Ты либо часть процесса, либо следующая жертва.">
</svelte:head>

<div class="flex flex-col items-center w-screen min-h-screen px-10">
    <div id="content" class="w-full max-w-[1200px] h-full flex flex-col items-center relative">
        <img src={bg} alt="Background" class="-z-10 absolute top-16 left-0 w-full max-w-[1200px]" />
        <Header />
        {@render children?.()}
    </div>
</div>

<style>
    @media screen and (max-width: 1279.99px) {
        #content {
            display: none;
        }
    }
</style>
