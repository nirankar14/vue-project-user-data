<template>
  <div class="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/">ViewUserData</router-link>
    <router-link to="/userData">UserData</router-link>

    <!-- <a href="home">Home</a>
    <a href="home">ViewUserData</a>
    <a href="home">UserData</a> -->

    <!-- <h1>Header123</h1> -->
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style >
body{
	padding: 0;
	margin: 0;
}
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: aliceblue;
  text-align: center;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 20px;
}
.nav a:hover{
	background-color: #ddd;
	color: #222;
}
</style>
