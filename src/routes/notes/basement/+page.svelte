<script lang="ts">
    import { goto } from "$app/navigation";
    import { dungeonNotesOpened, notesStatuses } from "$lib/config";
    import { onMount } from "svelte";
    import firstImg from "$lib/assets/img/blured_notes/basement/1.png";
    import secondImg from "$lib/assets/img/blured_notes/basement/2.png";
    import thirdImg from "$lib/assets/img/blured_notes/basement/3.png";
    import fourthImg from "$lib/assets/img/blured_notes/basement/4.png";
    import LockSquare from "$lib/components/icons/LockSquare.svelte";

    onMount(() => {
        if (!dungeonNotesOpened.basement) goto("/");
    });
</script>

{#if dungeonNotesOpened.basement}
<div class="w-full flex flex-row justify-between items-center mt-16">
    <a aria-label="Back" href="/notes">
        <svg width="36" height="36" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="41.5" cy="41.5" r="39" stroke="#515151" stroke-width="5"/>
            <path d="M49 21L28 41L49 61" stroke="#515151" stroke-width="5"/>
        </svg>
    </a>
    <div class="flex flex-col gap-1 items-center">
        <h1 class="text-xl font-light">детальный просмотр записок:</h1>
        <h1 class="text-primary text-4xl font-bold">Старый подвал</h1>
    </div>
    <div></div>
</div>

{#if notesStatuses.basement[0]}
<div class="w-full h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative">
    <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
        C tfkuyg pmciye, dle zoik kt utlq,
Tnplq oziynp — otqljeoug zktuq. Lbk zelmkplg kgod, pkld bgd ejdmlh, V tcqrmyld qlokldm vtltlfplwmeo kysr.  Mlfkm, dle pmciy o kjzkgdol v cdqub, Cfykplm qmduaklg chm uj dkcylg kseu. Slkmplmd ouqlt, pk dkmujmld nbkmjg, Tmnlk qmjqtlg, jckld meklmjk!
    </p>
</div>
{:else}
<div class="w-full h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative">
    <img src={firstImg} alt="First Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}

{#if notesStatuses.basement[1]}
<div class="w-full h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative">
    <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
        Это один из алтарей!
Алтари — ключевые точки управления данжем. Чтобы ослабить влияние Чумной армии, помести Ключ в алтарь. Говорят, ключ где-то поблизости. Ищи внимательно
    </p>
</div>
{:else}
<div class="w-full h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative">
    <img src={secondImg} alt="Second Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}

{#if notesStatuses.basement[2]}
<div class="w-full h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative">
    <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
        Эти особи — не просто крысы. Они пережили то, что убивает других: эксперименты, яд, грязную магию Доктора. Выжившие стали больше, сильнее, злее.

Чаще всего они — главари мелких стай. Умны, агрессивны и умеют командовать. Некоторые из них помнят, кем были раньше… но теперь они служат только ему. Ты, скорее всего, ещё встретишь их на своём пути. Они не забудут запах чужака
    </p>
</div>
{:else}
<div class="w-full h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative">
    <img src={thirdImg} alt="Third Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}

{#if notesStatuses.basement[3]}
    <div class="w-full h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative">
        <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
            Старый подвал чумного доктора находится под заброшенным зданием на окраине. Когда-то он использовал это место как укрытие и лабораторию. Здесь всё осталось почти нетронутым: ржавые инструменты, разбросанные колбы, засохшие следы опытов на полу и стены, покрытые странными символами. Воздух тяжёлый, пропитан запахом старых лекарств и чего-то непонятного. В некоторых комнатах всё ещё работают механизмы, издавая глухой скрежет. В глубине подвала можно услышать шаги — то ли эхо, то ли кто-то всё ещё здесь.

Многие боятся заходить в это место, хотя оно считается самой безопасной частью его наследия. Тем не менее, именно отсюда начинается путь, если хочешь понять, что произошло и куда всё привело. Подвал кажется простым, но скрывает в себе больше, чем видно с первого взгляда.
        </p>
    </div>
{:else}
<div class="w-full h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative">
    <img src={fourthImg} alt="Fourth Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}
<div class="w-full h-36"></div>
{/if}
