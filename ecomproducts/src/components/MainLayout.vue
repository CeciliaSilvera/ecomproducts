<template>
  <div class="wrapper">
    <nav class="navbar" />
    <aside class="sidebar" />
    <main class="main-content">
      <div class="container">
        <slot />
      </div>
    </main>
    <footer class="footer" />
  </div>
</template>

<script>
export default {
  name: "MainLayout"
};
</script>

<style>
  .navbar {
    grid-area: navbar;
    height: 4rem;
    min-width: 4rem;
    background: linear-gradient(to right, #6d6027, #d3cbb8);
  }
  .sidebar {
    grid-area: sidebar;
    background: linear-gradient(to right, #6d6027, #d3cbb8);
  }
  .main-content {
    grid-area: content;
  }
  .footer {
    grid-area: footer;
    min-height: 10rem;
    background: linear-gradient(to right, #6d6027, #d3cbb8);
  }
  .wrapper {
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-areas: 
      "navbar navbar navbar"
      "sidebar content content"
      "sidebar footer footer";
  }
  /*.container {*/
  /*  width: 90%;*/
  /*  height: 95%;*/
  /*  margin: auto auto;*/
  /*}*/
</style>