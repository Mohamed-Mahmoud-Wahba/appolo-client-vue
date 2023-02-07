<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
         <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                 <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>
                 </li>
                 <li class="nav-item">
                  <router-link to="/create-form" class="nav-link">CreateForm</router-link>
                </li>
             </ul>
         </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
<style lang="scss">

</style>
