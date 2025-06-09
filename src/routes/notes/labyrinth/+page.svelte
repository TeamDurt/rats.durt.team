<script lang="ts">
    import { goto } from "$app/navigation";
    import { dungeonNotesOpened, notesStatuses } from "$lib/config";
    import { onMount } from "svelte";
    import firstImg from "$lib/assets/img/blured_notes/labyrinth/1.png";
    import secondImg from "$lib/assets/img/blured_notes/labyrinth/2_1.png";
    import thirdImg from "$lib/assets/img/blured_notes/labyrinth/2_2.png";
    import LockSquare from "$lib/components/icons/LockSquare.svelte";

    onMount(() => {
        if (!dungeonNotesOpened.labyrinth) goto("/");
    });
</script>

{#if dungeonNotesOpened.labyrinth}
<div class="w-full flex flex-row justify-between items-center mt-16">
    <a aria-label="Back" href="/notes">
        <svg width="36" height="36" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="41.5" cy="41.5" r="39" stroke="#515151" stroke-width="5"/>
            <path d="M49 21L28 41L49 61" stroke="#515151" stroke-width="5"/>
        </svg>
    </a>
    <div class="flex flex-col gap-1 items-center">
        <h1 class="text-xl font-light">детальный просмотр записок:</h1>
        <h1 class="text-primary text-4xl font-bold">Лабиринт Бобротавра</h1>
    </div>
    <div></div>
</div>

{#if notesStatuses.labyrinth[0]}
<div class="w-full h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative">
    <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
        Следующий барьер на пути доктора и его армии оказался лабиринтом, охраняемым существом полубобром, полубыком — бобротавром.

Тысяча крыс разделились, находя путь через сложнейшие ходы и ловушки лабиринта, и вскоре загнали стража в его же обитель. Чумной доктор захватил его и подчинил своей воле, оставив бобротавра охранять лабиринт уже в качестве его верного слуги. Это чудовище теперь защищает путь, который ведет дальше, к тайнам доктора.
    </p>
</div>
{:else}
<div class="w-full h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative">
    <img src={firstImg} alt="First Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}

<div class="w-full flex flex-row justify-between items-center relative mt-12">
    {#if notesStatuses.labyrinth[1]}
    <div class="w-[628px] h-fit rounded-[40px] px-8 py-6 bg-card-bg relative">
        <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
фхщ нчэок ж шзхчб, фхщ кцлжв ж аюфф,,
яёй вхиьчж еьхиье мубрс щьърщ.
смфй — х жёсмл, атшуст — н яншслцр,
отйглт — юьо, зфз кэв фуюзы нк фбэз.

сб йкчщ рнумкся фшчбфеох ьукт,
зфз цро пн тсъюкме, юл рллвиююю окт.
зфз ыькса внччшйдг тчп юйзьвмъи фйюзт —
юьо ыхрыь зжлщх… к ъэьдгязб ирххм.
        </p>
    </div>
    {:else}
    <div class="w-[628px] h-fit rounded-[40px] p-4 bg-card-bg relative">
        <img src={secondImg} alt="Second Hint" class="w-full" />
        <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
    </div>
    {/if}
    <svg width="210" height="16" viewBox="0 0 394 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="z-10 absolute top-1/2 left-[600px] -translate-y-1/2">
        <path d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM378 8C378 12.4183 381.582 16 386 16C390.418 16 394 12.4183 394 8C394 3.58172 390.418 0 386 0C381.582 0 378 3.58172 378 8ZM8 8V9.5H386V8V6.5H8V8Z" fill="#515151"/>
    </svg>
    {#if notesStatuses.labyrinth[2]}
    <div class="w-[425px] h-fit rounded-[40px] px-8 py-6 bg-card-bg relative">
        <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl text-center">
            В Е Р Г И Л Ь
        </p>
    </div>
    {:else}
    <div class="w-[425px] h-fit rounded-[40px] p-4 bg-card-bg relative flex justify-center items-center">
        <img src={thirdImg} alt="Third Hint" class="w-1/2" />
        <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
    </div>
    {/if}
</div>
{/if}
