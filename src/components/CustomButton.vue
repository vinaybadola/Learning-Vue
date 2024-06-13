<!-- 

This is the example if we don't pass the data from parent component to child component using slots as we the data is getting bigger it starts to get messy and hard to read and understand the code.
That's where the usage of slots came into play.

<template>
    <div class="custom-button-with-props">
      <button
        class="button is-primary"
      >
        <span
          v-if="showIconBefore"
          class="custom-button-with-props__icon--before"
        >
          <i class="fa fa-arrow-right"></i>
        </span>
        <span
          v-if="buttonText.length"
          :style="`color:${buttonTextColor}`"
          class="custom-button-with-props__text"
        >
          {{ buttonText }}
        </span>
        <span
          v-if="showIconAfter"
          class="custom-button-with-props__icon--before"
        >
          <i class="fas fa-arrow-right"></i>
        </span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomButtonWithProps',
    props: {
      buttonText: {
        type: String,
        default: '',
      },
      buttonTextColor: {
        type: String,
        default: '#ff6',
      },
      showIconBefore: {
        type: Boolean,
        default: false,
      },
      showIconAfter: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  
  <style>
  .custom-button-with-props__text {
    padding: 0 12px;
  }
  </style>


-->
  <!-- Below is the example of how we can pass it through slots -->

  <!-- <template>
    <div class='custom-button-with-slots'>
      <button
        class="button is-primary"
      >
        <slot name="icon-before"></slot>
        <span class="custom-button-with-props__text">
          <slot name="button-text"></slot>
        </span>
        <slot name="icon-after"></slot>
      </button>
    </div>
  </template> -->

  <!--
  
    This is how we can access the fallthough attributes in the child component
-->
  <template>
    <span>{{ label }}</span>
  </template>


  <script>
  export default { 
    name: 'CustomButton', 
    props: ['label'],
    mounted() { 
      console.log(this.$attrs);
    }
    
  }
  </script>
  
  