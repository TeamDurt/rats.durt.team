<script lang="ts">
    import "$lib/assets/css/fonts.css";
    import "$lib/assets/css/globals.css";
    import Header from "$lib/components/Header.svelte";
    import bg from "$lib/assets/img/lit_bg.png";
    import MobileBlocker from "$lib/components/MobileBlocker.svelte";
    import type { Snippet } from "svelte";
    import { onMount } from "svelte";

    interface Props {
        children?: Snippet;
    }

    let { children }: Props = $props();
    let contentContainer: HTMLElement;
    let scrollTimeout: number | undefined = $state();

    const applyLoupeEffect = () => {
        const childElements = contentContainer?.querySelectorAll('*:not(img):not(script):not(style)') || [];
        const centerPoint = window.innerHeight / 2 + 300;

        childElements.forEach((element) => {
            const el = element as HTMLElement;
            const rect = el.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;

            if (elementCenter <= centerPoint) {
                el.style.transform = 'scale(1)';
                el.style.filter = 'brightness(1)';
                el.style.textShadow = 'none';
                return;
            }

            const distanceFromCenter = elementCenter - centerPoint;
            const maxDistance = window.innerHeight / 2;

            const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
            const effectIntensity = Math.pow(normalizedDistance, 2);

            const scale = 1 - effectIntensity * 0.05;
            const brightness = 1 - effectIntensity * 0.2;

            el.style.transform = `scale(${scale})`;
            el.style.filter = `brightness(${brightness})`;
            el.style.transition = 'transform 0.4s ease-out, filter 0.4s ease-out';

            if (normalizedDistance < 0.3) {
                el.style.textShadow = '0 0 1px rgba(0,0,0,0.1)';
                el.style.fontWeight = getComputedStyle(el).fontWeight;
            } else {
                el.style.textShadow = 'none';
            }
        });
    };

    onMount(() => {
        applyLoupeEffect();
    });

    const handleScroll = () => {
        if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
        scrollTimeout = window.requestAnimationFrame(applyLoupeEffect);
    };
</script>

<svelte:window onscroll={handleScroll} />

<svelte:head>
    <title>Ratsmania</title>
    <meta name="description" content="Мир меняется. Ты либо часть процесса, либо следующая жертва.">
</svelte:head>

<div id="content" class="flex flex-col items-center w-screen min-h-screen px-10 overflow-hidden">
    <div bind:this={contentContainer} class="w-full max-w-[1200px] flex flex-col items-center relative loupe-effect">
        <img src={bg} alt="Background" class="-z-10 absolute top-16 left-0 w-full max-w-[1200px]" />
        <Header />
        {@render children?.()}
    </div>
</div>
<MobileBlocker />

<style>
    @media screen and (max-width: 1279.99px) {
        #content {
            display: none;
        }
    }

    .loupe-effect {
        perspective: 1000px;
    }
</style>
