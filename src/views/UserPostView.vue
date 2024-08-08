<template>
    <h1> vista de un post {{ $route.params.post }} de un determinado usuario {{ $route.params.user }}</h1>
</template>
<script>
export default{
    mounted(){
        console.log(this.$route.params);
    }
}
</script>
<style>
</style>