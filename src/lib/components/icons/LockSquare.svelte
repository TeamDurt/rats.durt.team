<script lang="ts">
    interface Props {
        width?: string;
        height?: string;
        class?: string;
    }

    let { width, height, class: className }: Props = $props();
</script>

<svg
    width={width || "47"}
    height={height || "47"}
    class={className}
    viewBox="0 0 47 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M29.6668 23.5H31.5C32.3285 23.5 33 24.1715 33 25V34.5C33 35.3285 32.3285 36 31.5 36H14.5C13.6716 36 13 35.3285 13 34.5V25C13 24.1715 13.6716 23.5 14.5 23.5H16.3333M29.6668 23.5V17.25C29.6668 15.1667 28.3333 11 23 11C17.6667 11 16.3333 15.1667 16.3333 17.25V23.5M29.6668 23.5H16.3333"
        stroke="#3A3A3A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M1 41V6C1 3.23857 3.23857 1 6 1H41C43.7615 1 46 3.23857 46 6V41C46 43.7615 43.7615 46 41 46H6C3.23857 46 1 43.7615 1 41Z"
        stroke="#3A3A3A"
        stroke-width="2"
    />
</svg>
