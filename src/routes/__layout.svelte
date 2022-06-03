<script>
  import '../style.css'
    import Header from '../components/header.svelte';
</script>


<Header/>
<div class="">
    <slot>
    </slot>
</div>

<style>
    * {
        font-family: Montserrat, "Noto Sans";
        font-weight: 200;
    }
</style>