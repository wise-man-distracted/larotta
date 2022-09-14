<script>
import { someCards } from "../stores/someCardsStore";
console.log($someCards)
</script>

<svelte:head>
<title>Larotta - Cruz Celta</title>
</svelte:head>

<section class="flex flex-wrap gap-5">
    {#each $someCards as card}
        <div class="flex flex-col items-center">
            <p class="flex items-center">{card.name}</p>
            <img src="{card.img}" alt="" class="w-20">
        </div>
    {/each}
</section>

<style>
* {
    font-family: Roboto, "Noto Sans";
    font-weight: 200;
}
</style>