<template>
  <div class="loading"></div>
</template>

<script>
export default {

}
</script>

<style>
.loading{
    background-color: #fff;
    width: 250px;
    height: 240px;
    border-radius: 50%;
    border-top: 5px solid #000;
    margin: 100px auto;
    animation: spin 1s infinite;
}
@keyframes spin{
    to{
        transform: rotate(360deg);
    }
}
</style>