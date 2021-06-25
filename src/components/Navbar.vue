<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container w-75">
    <h1 class="text-primary">VueFirebase</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item h5 me-5">
          <router-link :to="{name:'Home'}" class="text-secondary">Home</router-link>
        </li>
         <li class="nav-item h5">
          <router-link :to="{name:'Create'}" class="text-secondary">Create</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>

</style>