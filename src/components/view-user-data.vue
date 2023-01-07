<template>
<div>
	<Header/>
  <h1>Welcome to viewUserData</h1>
	<!-- <p>Hello {{name}} | {{email}} | {{phone}}</p> -->
	<table border="1px">
		<tr>
		<td>Id</td>
		<td>Name</td>
		<td>Email</td>
		<td>Contact</td>
		<td>Sum</td>

		</tr>
		<tr v-for="item in allData" :key="item.id">
			<td>{{item.id}}</td>
			<td>{{item.name}}</td>
			<td>{{item.email}}</td>
			<td>{{item.phone}}</td>
			<td>{{item.sum}}</td>

		</tr>
	</table>
</div>
</template>
<script>
import axios from "axios";
import Header from "./header.vue";
export default {
  name: "ViewUserData",
	data(){
		return{
			name:'',
			email:'',
			phone:'',
			sum:'',
			allData:[]
		}
	},
	components:{
		Header
	},
	async mounted()
	{
		let user = localStorage.getItem('User-Data');
		this.name = JSON.parse(user).name;
		this.email = JSON.parse(user).email;
		this.phone = JSON.parse(user).phone;
		this.sum  = JSON.parse(user).sum;
		let result = await axios.get('http://localhost:3000/user');
		console.warn(result)
		this.allData = result.data;
	}
};
</script>
<style>
td{
	width: 160px;
	height: 40px;
}
</style>
