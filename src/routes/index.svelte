<script>
import { allCards } from "../stores/allCardsStore";
console.log($allCards);
</script>

<svelte:head>
<title>Larotta - Online Tarot</title>
</svelte:head>
<section class="flex flex-wrap gap-5">
    {#each $allCards as card}
        <div class="flex flex-col items-center">
            <p class="flex items-center">{card.name}</p>
            <img src="{card.img}" alt="" class="w-20">
        </div>
    {/each}
</section>
<style>
* {
    font-family: Roboto, "Noto Sans";
}
</style>