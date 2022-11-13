<template>
    <h1>
        <slot></slot>
    </h1>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
    text-align: center;
    padding: 35px 20px 0;
    font-size: 40px; font-weight:300; color:#222; letter-spacing:1px;
    text-transform: uppercase;

    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: 27px 0;
    grid-gap: 20px;
    align-items: center;
}

h1:after, h1:before {
    content: " ";
    display: block;
    border-bottom: 1px solid #4285f4;
    border-top: 1px solid #4285f4;
    height: 5px;
  background-color:#f8f8f800;
}
</style>