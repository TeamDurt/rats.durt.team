<script lang="ts">
    interface Props {
        width?: string;
        height?: string;
        class?: string;
    }

    let { width, height, class: className }: Props = $props();

</script>

<svg
    {width}
    {height}
    class={className}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M3 32L17.5 17.5001M17.5 17.5001L32 3M17.5 17.5001L3 3M17.5 17.5001L32 32"
        stroke="#3A3A3A"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
