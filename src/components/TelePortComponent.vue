<template>
    <h1> {{ buttonText }}</h1>
    <p>This component is the example of how we mount a component into '#modals'  div  using teleport</p>
</template>

<script>
export default {
    name: 'TelePortComponent',
    props: {
        buttonText: {
            type: String,
            default: '',
        },
    },
};
</script>