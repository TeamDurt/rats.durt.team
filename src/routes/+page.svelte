<script lang="ts">
    import { goto } from "$app/navigation";
    import { redirectToWelcome } from "$lib/config";
    import { onMount } from "svelte";

    onMount(() => {
        if (redirectToWelcome) goto("/welcome");
    });
</script>
