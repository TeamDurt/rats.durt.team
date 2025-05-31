<script lang="ts">
    import eggImg from "$lib/assets/img/modals/egg.png";
    import Cross from "../icons/Cross.svelte";

    interface Props {
        open: boolean;
    }

    let { open = $bindable() }: Props = $props();

    let dialog: HTMLDialogElement | undefined = $state();

    $effect(() => {
        if (open) dialog?.showModal();
    });

    function handleClickOutside(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (target === dialog) {
            open = false;
        }
    }
</script>

{#if open}
    <div
        class="fixed top-0 left-0 w-screen h-screen bg-black transition-all opacity-40 z-30"
    ></div>
    <dialog
        class="fixed top-1/2 left-1/2 -translate-1/2 w-[1028px] h-[612px] bg-card-bg rounded-[40px] z-40 flex flex-row"
        bind:this={dialog}
        onclose={() => (open = false)}
        onclick={handleClickOutside}
    >
        <img src={eggImg} alt="Egg" class="w-1/2 h-full" />
        <div class="relative w-1/2 h-full px-6 flex flex-col justify-center gap-5">
            <h2 class="text-primary font-bold text-5xl/snug">Яйцо крысы</h2>
            <p class="text-2xl font-light">
                Некоторым редким крысам так и не суждено было родиться. Их души скрыты внутри этих яиц.<br/><br/>
                Поставьте яйцо на алтарь, заполните анкету — и через 48 часов из него вылупится ваш новый питомец.
            </p>
            <button
                class="absolute top-8 right-8 w-5 h-5 bg-none cursor-pointer"
                onclick={() => (open = false)}
            >
                <Cross class="w-full h-full" />
            </button>
        </div>
    </dialog>
{/if}
