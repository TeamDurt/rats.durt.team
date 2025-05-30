<script lang="ts">
    import { goto } from "$app/navigation";
    import { redirectToWelcome } from "$lib";
    import { onMount } from "svelte";

    onMount(() => {
        if (!redirectToWelcome) goto("/");
    });
</script>
