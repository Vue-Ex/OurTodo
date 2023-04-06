<template>
  <div>
    <nav>
      <!-- <router-link to="/">SignIn</router-link> |
      <router-link to="/signup">SignUp</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  max-height: 100vh;
}
button {
  border: none;
  cursor: pointer;
  outline: none;
}
input {
  outline: none;
}
textarea {
  outline: none;
  resize: none;
  border: none;
}
a {
  text-decoration: none;
}
</style>
