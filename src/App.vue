<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--Modal is the example of how we import child component into the parent component in the vue -->
  <h1>HELLO MODAL </h1>
  <div v-if="showModal">
    <Modal :msg ="msg"  :title= "title"  theme="sale"  @close="toggleModal"/> 
  </div>

  <button @click ="toggleModal">Click here to display</button>

  <!-- <HelloWorld msg="Welcome to Your vinay.js App"/> -->
  <p>Below is the example of refs , refs are generally like how we manipulate the DOM element using query selector in vanilla JS , it is almost the same thing</p>
  <!-- <textarea v-on:keyup.s="createAlert"></textarea> -->
  <input type="text" ref="inputName">
  <button @click="handleClick">Click Me </button>

  <DemoSlot>
    <template v-slot:links>
      <a href="#">Sign up now </a>
      <a href="#">Login</a>
    </template>
    <h1>
      This is the example of how we pass data from parent component to child using slots
    </h1>
    <p>We have these two tags data from app.vue(parent commponent) to DemoSlot.vue(child component) and for link to show inside a particular class 
      we have used named slots as links and that link will be shown inside the div with class actions. Press F12 to see the output.
    </p>
  </DemoSlot>

  <div v-if="showModalTwo">
    <DemoSlot>
      <template v-slot:links>
        <a href="#">Sign up For the newsletter  </a>
        <a href="#">If already, thanks for subscripting </a>
      </template>
      <h1>
        This is the example of using same child component with different data from parent component using slots
      </h1>
    </DemoSlot>
  </div>

  <button @click="toggleModalTwo">Click here to display Another modal</button>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue' ;
import DemoSlot from './components/DemoSlot.vue' ;

export default { 
  name: 'App',
  components: {
    Modal,
    DemoSlot
  }, 
  data(){
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'This is the example of how we pass data from parent component to child using props ',
      showModal:false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      this.$refs.inputName.value = 'Hello World';
      this.$refs.inputName.classList.add('active');
      this.$refs.inputName.focus();
      console.log(this.$refs.inputName);
    }, 
    toggleModal(){
      this.showModal = !this.showModal;
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo;
    },
    createAlert(){
      alert('You pressed S');
    }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
