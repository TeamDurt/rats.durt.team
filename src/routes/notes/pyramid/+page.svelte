<script lang="ts">
    import { goto } from "$app/navigation";
    import { dungeonNotesOpened, notesStatuses } from "$lib/config";
    import { onMount } from "svelte";
    import firstImg from "$lib/assets/img/blured_notes/pyramid/1.png";
    import secondImg from "$lib/assets/img/blured_notes/pyramid/2.png";
    import thirdImg from "$lib/assets/img/blured_notes/pyramid/3.png";
    import fourthImg from "$lib/assets/img/blured_notes/pyramid/4.png";
    import LockSquare from "$lib/components/icons/LockSquare.svelte";

    onMount(() => {
        if (!dungeonNotesOpened.pyramid) goto("/");
    });
</script>

{#if dungeonNotesOpened.pyramid}
<div class="w-full flex flex-row justify-between items-center mt-16">
    <a aria-label="Back" href="/notes">
        <svg width="36" height="36" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="41.5" cy="41.5" r="39" stroke="#515151" stroke-width="5"/>
            <path d="M49 21L28 41L49 61" stroke="#515151" stroke-width="5"/>
        </svg>
    </a>
    <div class="flex flex-col gap-1 items-center">
        <h1 class="text-xl font-light">детальный просмотр записок:</h1>
        <h1 class="text-primary text-4xl font-bold">Пирамида Зефроса</h1>
    </div>
    <div></div>
</div>

{#if notesStatuses.pyramid[0]}
<div class="w-1/2 h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative self-start">
    <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
        Заходи, смелее, путник,
В край теней, где тайна ждет,
Где Бобртавр, словно буря,
Ходит кругом, страж ворот.
Шаг за шагом он петляет,
Кто зайдёт сюда — тот выхода не знает.

Тьмой укутаны пути,
Бобэр курва, ты учти:
Я пердоле, тут свобода,
Потеряешь счет ты времени и года.
Если сможешь ты, отважный,
Скоро к выходу дойти.
    </p>
</div>
{:else}
<div class="w-1/2 h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative self-start">
    <img src={secondImg} alt="Second Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}

{#if notesStatuses.pyramid[1]}
<div class="w-full h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative">
    <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
        Отравленные крысы (Ядозубы) — это мутировавшие создания, которые появились после распространения чумы. В результате контакта с ядовитыми веществами и смертельными бактериями, крысы стали носителями токсичных вирусов, которые передаются через их укус.
    </p>
</div>
{:else}
<div class="w-full h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative">
    <img src={firstImg} alt="First Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}

{#if notesStatuses.pyramid[2]}
<div class="w-full h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative">
    <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
        Пирамида — один из ключевых опорных пунктов чумного доктора. Она была захвачена им после разрушения древних защитных механизмов. Внутри хранятся важные ресурсы и фрагменты забытых знаний, которые доктор использует для своих экспериментов. Охраняет пирамиду его самый преданный воин — крыса Зефрос. Он остаётся внутри, выполняя приказ не подпускать никого к тайнам, скрытым в глубинах сооружения. Преодолеть Зефроса — единственный путь вперёд.
    </p>
</div>
{:else}
<div class="w-full h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative">
    <img src={thirdImg} alt="Third Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}

{#if notesStatuses.pyramid[3]}
    <div class="w-full h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative">
        <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
            Его зовут Зефрос.
Он был первым, кто выжил после инъекций Доктора. Первым, кто не просто вытерпел боль, а стал сильнее. Сильнее всех нас.
Теперь он больше не просто крыса. Не солдат. Он — страж. Командир из гнили и золота. Его тело давно не принадлежит ему — только шприцам, трубкам, и вареву, что течёт в его спину, удерживая чудовище внутри.
Если ты читаешь это… возможно, ты ещё жив. Но если хочешь остаться таким —  разруби потоки зелий на его спине.
        </p>
    </div>
{:else}
<div class="w-full h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative">
    <img src={fourthImg} alt="Fourth Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}
{/if}
