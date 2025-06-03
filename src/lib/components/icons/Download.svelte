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
    viewBox="0 0 49 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M3 60H45.75"
        stroke="#0A0A0A"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M24.375 3V45.7493M24.375 45.7493L36.8438 33.2807M24.375 45.7493L11.9062 33.2807"
        stroke="#0A0A0A"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
