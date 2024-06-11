<template>
    <slot>Default Content</slot>    <!--The "default content" is the fallback slot when the parent component doesn't have any slot present. 
                                    To test this to remove the content written inside <DemoSlot>   </DemoSlot> in parent component    -->
    <div class="actions">
        <slot name="links"></slot>
    </div>
</template>

<style scoped>

    .actions{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #f1f1f1;
        padding: 10px;
    }
    .actions a{
        text-decoration: none;
        color: #000;
    }
    .actions a:hover{
        color: #03cfb4;
    }
</style>