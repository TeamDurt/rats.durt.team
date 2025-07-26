<script lang="ts">
    import { goto } from "$app/navigation";
    import { dungeonNotesOpened, notesStatuses } from "$lib/config";
    import { onMount } from "svelte";
    import firstImg from "$lib/assets/img/blured_notes/final/1.png";
    import secondImg from "$lib/assets/img/blured_notes/final/2.png";
    import LockSquare from "$lib/components/icons/LockSquare.svelte";

    onMount(() => {
        if (!dungeonNotesOpened.final) goto("/");
    });
</script>

{#if dungeonNotesOpened.final}
<div class="w-full flex flex-row justify-between items-center mt-16">
    <a aria-label="Back" href="/notes">
        <svg width="36" height="36" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="41.5" cy="41.5" r="39" stroke="#515151" stroke-width="5"/>
            <path d="M49 21L28 41L49 61" stroke="#515151" stroke-width="5"/>
        </svg>
    </a>
    <div class="flex flex-col gap-1 items-center">
        <h1 class="text-xl font-light">детальный просмотр записок:</h1>
        <h1 class="text-primary text-4xl font-bold">Логово Чумного Доктора</h1>
    </div>
    <div></div>
</div>

{#if notesStatuses.final[0]}
<div class="w-full h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative">
    <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
        Достигнув глубин подземного царства крыс, ты войдешь в логово самого чумного доктора. Это самое опасное место из всех, что ты можешь представить: тут обитает его армия — тысяча жутких крыс, что разорвут любого, кто приблизится к их господину.

Главный зал, в котором скрывается доктор, окружен бесчисленными опасностями, и здесь ты будешь испытывать не только свое мастерство, но и решимость.
    </p>
</div>
{:else}
<div class="w-full h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative">
    <img src={firstImg} alt="First Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}

{#if notesStatuses.final[1]}
<div class="w-full h-fit rounded-[40px] mt-12 px-8 py-6 bg-card-bg relative">
    <p class="w-full wrap-break-word whitespace-pre-wrap text-2xl">
        Вы вошли на территорию Чумного Доктора. Здесь он черпает силу напрямую — он неуязвим, пока три Маяка питают его магией.

Каждый Маяк закреплён чарами — в одиночку его отключить невозможно. Вам придётся разделиться: по два человека на каждый Маяк. Пока одна группа сдерживает Доктора и отвлекает его, другие — должны синхронно отключать источники силы. Только так можно сделать его уязвимым и открыть путь к настоящей битве.

Скоординируйтесь. Ошибка — смерть.
    </p>
</div>
{:else}
<div class="w-full h-fit rounded-[40px] mt-12 p-4 bg-card-bg relative">
    <img src={secondImg} alt="Second Hint" class="w-full" />
    <LockSquare class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3" />
</div>
{/if}
<div class="w-full h-36"></div>

{/if}
