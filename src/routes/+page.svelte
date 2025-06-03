<script lang="ts">
    import { goto } from "$app/navigation";
    import LockSquare from "$lib/components/icons/LockSquare.svelte";
    import { currentStep, redirectToWelcome, relicsOpened, stepNumber, stepOffset } from "$lib/config";
    import { onMount } from "svelte";
    import staffCard from "$lib/assets/img/cards/staff.png";
    import bladeCard from "$lib/assets/img/cards/blade.png";
    import voodooCard from "$lib/assets/img/cards/voodoo.png";
    import musicDiskCard from "$lib/assets/img/cards/music_disk.png";
    import eggCard from "$lib/assets/img/cards/egg.png";
    import waitingStep from "$lib/assets/img/steps/waiting.png";
    import pyramidStep from "$lib/assets/img/steps/pyramid.png";
    import labyrinthStep from "$lib/assets/img/steps/labyrinth.png";
    import finalStep from "$lib/assets/img/steps/final.png";
    import PathProgress from "$lib/components/PathProgress.svelte";
    import StaffRelicModal from "$lib/components/modals/StaffRelicModal.svelte";
    import BladeRelicModal from "$lib/components/modals/BladeRelicModal.svelte";
    import MusicDiskRelicModal from "$lib/components/modals/MusicDiskRelicModal.svelte";
    import EggRelicModal from "$lib/components/modals/EggRelicModal.svelte";
    import VoodooRelicModal from "$lib/components/modals/VoodooRelicModal.svelte";

    const relicModalsStatuses = $state({
        musicDisk: false,
        blade: false,
        staff: false,
        egg: false,
        voodoo: false
    });

    const handleRelicClick = (relic: keyof typeof relicModalsStatuses) => {
        if (relicsOpened[relic]) {
            relicModalsStatuses[relic] = true;
        }
    };

    onMount(() => {
        if (redirectToWelcome) goto("/welcome");
    });
</script>

<StaffRelicModal bind:open={relicModalsStatuses.staff} />
<BladeRelicModal bind:open={relicModalsStatuses.blade} />
<MusicDiskRelicModal bind:open={relicModalsStatuses.musicDisk} />
<EggRelicModal bind:open={relicModalsStatuses.egg} />
<VoodooRelicModal bind:open={relicModalsStatuses.voodoo} />

<h1 class="text-3xl font-semibold mt-16">Найденные реликвии Чумного Доктора:</h1>
<div class="w-full h-[668px] mt-8 grid grid-cols-7 grid-rows-2 gap-4">
    <button class="relative flex justify-center items-center col-span-2 bg-card-bg rounded-[40px]" onclick={() => handleRelicClick('musicDisk')}>
        {#if relicsOpened.musicDisk}
            <span class="absolute top-4 right-6 text-2xl font-light">1/5</span>
            <img src={musicDiskCard} alt="Music Disk Relic" class="w-full h-full cursor-pointer z-20 rounded-[40px]" />
        {:else}
            <LockSquare />
        {/if}
    </button>
    <button class="relative flex justify-center items-center col-span-3 bg-card-bg rounded-[40px]"  onclick={() => handleRelicClick('blade')}>
        {#if relicsOpened.blade}
            <span class="absolute top-4 right-6 text-2xl font-light">2/5</span>
            <img src={bladeCard} alt="Blade Relic" class="w-full h-full cursor-pointer z-20 rounded-[40px]" />
        {:else}
            <LockSquare />
        {/if}
    </button>
    <div class="relative flex justify-center items-center col-span-2 row-span-2 bg-card-bg rounded-[40px]">
        {#if relicsOpened.staff}
            <span class="absolute top-4 right-6 text-2xl font-light">5/5</span>
            <img src={staffCard} alt="Staff Relic" class="w-[198%] max-w-screen absolute bottom-0 left-1/2 -translate-x-1/2 z-10" />
            <button
                aria-label="Staff"
                class="w-full h-full absolute top-0 left-0 cursor-pointer z-20 rounded-[40px]"
                onclick={() => handleRelicClick('staff')}
            ></button>
        {:else}
            <LockSquare />
        {/if}
    </div>
    <button class="relative flex justify-center items-center col-span-2 bg-card-bg rounded-[40px]" onclick={() => handleRelicClick('egg')}>
        {#if relicsOpened.egg}
            <span class="absolute top-4 right-6 text-2xl font-light">3/5</span>
            <img src={eggCard} alt="Egg Relic" class="w-full h-full cursor-pointer z-20 rounded-[40px]" />
        {:else}
            <LockSquare />
        {/if}
    </button>
    <div class="relative flex justify-center items-center col-span-3 bg-card-bg rounded-[40px]">
        {#if relicsOpened.voodoo}
            <span class="absolute top-4 right-6 text-2xl font-light">4/5</span>
            <img src={voodooCard} alt="Voodoo Relic" class="w-full max-w-screen absolute top-0 left-0 z-10" />
            <button
                aria-label="Voodoo"
                class="w-full h-full absolute top-0 left-0 cursor-pointer z-20 rounded-[40px]"
                onclick={() => handleRelicClick('voodoo')}
            ></button>
        {:else}
            <LockSquare />
        {/if}
    </div>
</div>
<h2 class="text-primary font-semibold text-4xl mt-20 mb-8">Ваш прогресс в пути Чумного Доктора:</h2>
<PathProgress />

<svg
    width="40"
    height="20"
    viewBox="0 0 40 20"
    class="self-start mt-8 -translate-x-1/2"
    style:margin-left={stepOffset + "px"}
    fill="#0a0a0a"
    xmlns="http://www.w3.org/2000/svg"
>
    <path d="M0 20 L40 20 L20 0 Z" />
</svg>
{#if currentStep === "waiting"}
<div class="w-full h-[592px] mb-12 bg-card-bg rounded-[40px] relative flex flex-col items-center pt-22">
    <h2 class="text-primary font-semibold text-5xl z-10">Ожидайте новое испытание</h2>
    <p class="text-lg font-light mt-2 z-10">После прохождения текущего подземелья, следующее станет доступен в течение суток.</p>
    <img src={waitingStep} alt="Waiting" class="absolute top-0 left-0 w-full h-full">
</div>
{:else if currentStep === "pyramid"}
<div class="w-full h-[592px] mb-12 bg-card-bg rounded-[40px] relative flex flex-row">
    <img src={pyramidStep} alt="Pyramid" class="h-full" />
    <div class="grow h-full flex flex-col gap-4 p-12 pl-0">
        <h2 class="text-primary font-semibold text-5xl/snug z-10">Пирамида Зефроса</h2>
        <p class="text-lg font-light mt-2 z-10">
            Пирамида — один из ключевых опорных пунктов чумного доктора. Она была захвачена им после разрушения древних защитных механизмов. Внутри хранятся важные ресурсы и фрагменты забытых знаний, которые доктор использует для своих экспериментов.<br/><br/>
            Охраняет пирамиду его самый преданный воин — крыса Зефрос. Он остаётся внутри, выполняя приказ не подпускать никого к тайнам, скрытым в глубинах сооружения. Преодолеть Зефроса — единственный путь вперёд.
        </p>
    </div>
</div>
{:else if currentStep === "labyrinth"}
<div class="w-full h-[592px] mb-12 bg-card-bg rounded-[40px] relative flex flex-row">
    <img src={labyrinthStep} alt="Labyrinth" class="h-full" />
    <div class="grow h-full flex flex-col gap-4 p-12 pl-0">
        <h2 class="text-primary font-semibold text-5xl/snug z-10">Лабиринт Бобротавра</h2>
        <p class="text-lg font-light mt-2 z-10">
            Следующим барьером на пути доктора и его армии оказался лабиринт, охраняемый существом полубобром, полубыком — бобротавром.<br/><br/>
            Тысяча крыс разделились, находя путь через сложнейшие ходы и ловушки лабиринта, и вскоре загнали стража в его же обитель. Чумной доктор захватил его и подчинил своей воле, оставив бобротавра охранять лабиринт уже в качестве его верного слуги. Это чудовище теперь защищает путь, который ведет дальше, к тайнам доктора.
        </p>
    </div>
</div>
{:else if currentStep === "final"}
<div class="w-full h-[592px] mb-12 bg-card-bg rounded-[40px] relative flex flex-row">
    <img src={finalStep} alt="Final" class="h-full" />
    <div class="grow h-full flex flex-col gap-4 p-12 pl-0">
        <h2 class="text-primary font-semibold text-5xl/snug z-10">Логово Чумного Доктора</h2>
        <p class="text-lg font-light mt-2 z-10">
            Достигнув глубин подземного царства крыс, ты войдешь в логово самого чумного доктора. Это самое опасное место из всех, что ты можешь представить: тут обитает его армия — тысяча жутких крыс, что разорвут любого, кто приблизится к их господину.<br/><br/>
            Главный зал, в котором скрывается доктор, окружен бесчисленными опасностями, и здесь ты будешь испытывать не только свое мастерство, но и решимость.
        </p>
    </div>
</div>
{/if}
