<template>

    <div id="tasks-list">

        <h2>Tasks to do</h2>

        <teleport to="#completed-tasks"  :disabled="teleport1">

             <div>

                1. Complete assignments

                <button @click="taskHandler1">{{buttonText1}}</button>

             </div>    

        </teleport>

    </div>

</template>

<script>

export default{

    data(){

        return {

            buttonText1:"Done",

            teleport1:true,

        }

    },

    name:'Tasks',

    methods:{

        taskHandler1(){

            if(this.teleport1){

                this.buttonText1="Undo"

                this.teleport1 = false

            }else{

                this.buttonText1="Done"

                 this.teleport1= true

            }

        },

    }

}

</script>

<style>

#tasks-list{

    margin:5px;

    border: 3px solid plum;

    padding:5px;

}

#tasks-list button{

    background-color: rgb(35, 231, 221);

    color:white;

    font-weight: bold;

    border:none;

    padding:10px;

    border-radius:5px;

}

</style>