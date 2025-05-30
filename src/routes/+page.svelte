<script lang="ts">
    import { goto } from "$app/navigation";
    import { redirectToWelcome } from "$lib/state";
    import { onMount } from "svelte";

    onMount(() => {
        if (redirectToWelcome) goto("/welcome");
    });
</script>
