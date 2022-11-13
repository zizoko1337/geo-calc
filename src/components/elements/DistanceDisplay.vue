<template>
    <!-- eslint-disable -->
    <h2>
        <slot></slot>
    </h2>

</template>

<script>

</script>

<style scoped>
h2 {
    text-align: center;
    padding: 10px 20px;
    font-size: 20px; font-weight:300; color:#222; letter-spacing:1px;
    text-transform: uppercase;

    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: 27px 0;
    grid-gap: 20px;
    align-items: center;
}

h2:after, h2:before {
    content: " ";
    display: block;
    border-bottom: 1px solid #4285f4;
    border-top: 1px solid #4285f4;
    height: 5px;
    background-color:#f8f8f800;
}
.long {
    margin: 0 20px 0 5px;
}
.lat {
    margin: 0 5px 0 20px;
}
</style>