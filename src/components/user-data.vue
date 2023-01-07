<template>
  <div>
    <Header />
    <h1>HelloWorld</h1>
    <div class="user">
      <input type="text" v-model="name" placeholder="Enter Name..." />
      <input type="email" v-model="email" placeholder="Enter Email..." />
      <input type="number" v-model="phone" placeholder="Enter Phone..." />

      <input
        class="first"
        type="number"
        name="number1"
        v-model="number1"
        placeholder="Enter number to add"
      />
      <p>{{ number1 }}</p>
      +
      <input
        class="first"
        type="number"
        name="number2"
        v-model="number2"
        placeholder="Enter 2nd number to add"
      />
      <p>{{ number2 }}</p>

      <br />
      <hr />
      <span>{{total}}</span>
      <br />
      <button @click="result()" class="btn">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./header.vue";

export default {
  name: "UserData",
  props: {
    data: String,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      sum: "",
      number1: "",
      number2: "",
    };
  },
  computed: {
    total() {

      return parseInt(this.number1) + parseInt(this.number2);
    },
  },
  components: {
    Header,
  },
  methods: {
    async result() {
      // return parseInt(this.number1) + parseInt(this.number2);
      let result = await axios.post("http://localhost:3000/user", {
        email: this.email,
        name: this.name,
        phone: this.phone,
        sum: this.sum,
      });
      console.warn("sum", this.name, this.email, this.phone, this.sum);
      if (result.status == 201) {
        alert("User Data stored!!!!");
      }
      localStorage.setItem("User-Data", JSON.stringify(result.data));
      this.$router.push({ name: "ViewUserData" });
    },
  },
};
</script>

<style >
.user input {
  padding: 10px;
  width: 300px;
  display: block;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}
.user .first {
  display: inline;
  width: 100px;
  margin: 10px;
}
.user .btn {
  background-color: aqua;
  color: black;
  padding: 10px;
}
</style>
