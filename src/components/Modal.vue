<template>
    <div class="backdrop" @click.self="closeModal">
        <!--

        The class sale is the example of how we can pass  the props to the child component as a class and
        if the value is sale it will apply the css to the modal otherwise it will not apply the css. Props are optional 
        
        -->
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>Modal Title</h1>
            <p>Modal Content</p>
            <h3>{{ msg }}</h3>
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['msg', 'title', 'theme'],
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        border-radius: 10px;
        background: #fff;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    h1{
        color: #03cfb4;
        border: none;
        padding: 0;
    }
    /*  
        Either we can use .modal p to include the css for p tag in this component only or we can use scoped to limit the css to this component only in the style tag above 
    */
    .modal p{
        font-style: normal;
    }
    .modal.sale{
        background: #f00;
        color: white;
    }
    .modal.sale h1{
        color: #fff;
    }

</style>