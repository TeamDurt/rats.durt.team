<script lang="ts">
    import voodooImg from "$lib/assets/img/modals/voodoo.png";
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
        <img src={voodooImg} alt="Voodoo" class="w-1/2 h-full" />
        <div class="relative w-1/2 h-full px-6 flex flex-col justify-center gap-5">
            <h2 class="text-primary font-bold text-5xl/snug">Кукла Вуду</h2>
            <p class="text-2xl font-light">
                Одна из крыс Чумной Армии была жестоким шаманом. Она создала эту куклу, вложив в неё древнюю магию и частицу своей злобы.<br/><br/>
                Переименуй куклу и активируй её на алтаре у спавна — и ты получишь живую копию любого игрока, которая станет твоим соратником.
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
