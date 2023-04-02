<script lang="ts">
    import { page } from "$app/stores";
    $: error = $page.error ?? {message: "None"};
</script>

<svelte:head>
    <title>shadoe | Error</title>
    <meta name="description" content="ey b0ss i have a seizure" />
</svelte:head>

<section class="hero justify-start pl-10">
    <div class="hero-content">
        <div class="max-w-2xl">
            <div class="text-4xl mb-2 font-bold text-white">
                {$page.status}
            </div>
            <div class="text-2xl mb-8 text-gray-200">
                {error.message}
            </div>
    </div></div>
</section>
