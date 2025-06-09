<script>
    import LockSquare from "$lib/components/icons/LockSquare.svelte";
    import { dungeonHintsOpened } from "$lib/config";
    import basementImg from "$lib/assets/img/hints_dungeons/basement.png";
    import pyramidImg from "$lib/assets/img/hints_dungeons/pyramid.png";
    import labyrinthImg from "$lib/assets/img/hints_dungeons/labyrinth.png";
    import finalImg from "$lib/assets/img/hints_dungeons/final.png";
</script>

<h1 class="text-heading text-3xl font-semibold mt-16">Выберите подземелье</h1>
<p class="text-2xl font-light">для детального просмотра подсказок</p>
<div class="w-fit grid grid-cols-2 mt-16 gap-16">
    <div class="w-fit h-fit flex flex-col gap-2">
        {#if dungeonHintsOpened.basement}
            <div class="w-[302px] h-[302px] rounded-[40px] bg-card-bg relative">
                <img src={basementImg} alt="Basement Dungeon" class="max-w-screen max-h-screen w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-1/2 z-0" />
                <div class="relative top-0 left-0 z-10 w-full h-full rounded-[40px] cursor-pointer"></div>
            </div>
            <p class="text-2xl font-light w-full text-center">Старый подвал</p>
        {:else}
            <div class="w-[302px] h-[302px] rounded-[40px] bg-card-bg flex justify-center items-center">
                <LockSquare />
            </div>
        {/if}
    </div>
    <div class="w-fit h-fit flex flex-col gap-2">
        {#if dungeonHintsOpened.pyramid}
            <div class="w-[302px] h-[302px] rounded-[40px] bg-card-bg relative">
                <img src={pyramidImg} alt="Pyramid Dungeon" class="max-w-screen max-h-screen w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-1/2 z-0" />
                <div class="relative top-0 left-0 z-10 w-full h-full rounded-[40px] cursor-pointer"></div>
            </div>
            <p class="text-2xl font-light w-full text-center">Пирамида Зефроса</p>
        {:else}
            <div class="w-[302px] h-[302px] rounded-[40px] bg-card-bg flex justify-center items-center">
                <LockSquare />
            </div>
        {/if}
    </div>
    <div class="w-fit h-fit flex flex-col gap-2">
        {#if dungeonHintsOpened.labyrinth}
            <div class="w-[302px] h-[302px] rounded-[40px] bg-card-bg relative">
                <img src={labyrinthImg} alt="Labyrinth Dungeon" class="max-w-screen max-h-screen w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-1/2 z-0" />
                <div class="relative top-0 left-0 z-10 w-full h-full rounded-[40px] cursor-pointer"></div>
            </div>
            <p class="text-2xl font-light w-full text-center">Лабиринт Бобротавра</p>
        {:else}
            <div class="w-[302px] h-[302px] rounded-[40px] bg-card-bg flex justify-center items-center">
                <LockSquare />
            </div>
        {/if}
    </div>
    <div class="w-fit h-fit flex flex-col gap-2">
        {#if dungeonHintsOpened.final}
            <div class="w-[302px] h-[302px] rounded-[40px] bg-card-bg relative">
                <img src={finalImg} alt="Final Dungeon" class="max-w-screen max-h-screen w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-1/2 z-0" />
                <div class="relative top-0 left-0 z-10 w-full h-full rounded-[40px] cursor-pointer"></div>
            </div>
            <p class="text-2xl font-light w-full text-center">Логово Доктора</p>
        {:else}
            <div class="w-[302px] h-[302px] rounded-[40px] bg-card-bg flex justify-center items-center">
                <LockSquare />
            </div>
        {/if}
    </div>
</div>
