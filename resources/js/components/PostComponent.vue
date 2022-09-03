<template>
       <div>
           <div>111</div>
     <SinglePostComponent></SinglePostComponent>
           <div>Name: {{name}}</div>
           <div>Job: {{vasyaJob}}</div>
           <button @click="sayHello">Hello</button>
           <button @click="sayHi">Hi</button>
    </div>
</template>

<script>
    import SinglePostComponent from "./SinglePostComponent";
    export default {
        name: "PostComponent",

        data() {
return {
    name: 'Вася',
    age: 20
}
        },
    methods: {
       sayHello(){
console.log('hello!')
       },
sayHi() {
    console.log('hi!')
}
    },

  computed: {
    vasyaJob() {
        return this.name + ' работает в булочной'
    }
  },


       components: {
            SinglePostComponent
        }
    }
</script>

<style scoped>

</style>
