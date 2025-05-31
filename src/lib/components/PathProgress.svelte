<script lang="ts">
    import { progressSteps } from "$lib/config";
</script>

<div class="w-full bg-card-bg rounded-[40px] px-20 py-5 flex flex-row items-center gap-8">
    {#each progressSteps as step}
        {#if step.type === "point"}
            {#if step.status === "empty"}
                <div class="w-8 h-8 rounded-full border-2" style:borderColor={step.color}>
                </div>
            {:else if step.status === "point"}
                <div class="w-8 h-8 rounded-full border-2 flex justify-center items-center" style:border-color={step.color}>
                    <div class="w-3 h-3 rounded-full" style:background={step.color}></div>
                </div>
            {:else if step.status === "completed"}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="12" cy="12" rx="12" ry="12" fill={step.color} />
                    <path d="M7.12412 12.6156L11.1196 15.724L17.3431 8.69788" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round"/>
                </svg>
            {/if}
        {:else if step.type === "line"}
            <div class="flex-1 h-0.5 rounded-full relative bg-paragraph">
                <div class="absolute top-0 left-0 h-0.5 bg-heading" style:width={step.progress + "%"}></div>
            </div>
        {/if}
    {/each}
</div>
