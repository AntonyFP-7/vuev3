<template>
    <div v-if="userId">
        <h1>podras el detalle de un user con id {{ userId }}</h1>
    </div>
    <div v-else>
        <h1>podras ver lista de un usuario</h1>
    </div>
    <nav>
        <RouterLink :to="{ name: 'userIndex', params: { userId: userId } }">Inicio</RouterLink>
        <RouterLink :to="{ name: 'userProfile', params: { userId: userId } }">Perfil</RouterLink>
        <RouterLink :to="{ name: 'userCourses', params: { userId: userId } }">Cursos</RouterLink>
    </nav>
    <router-view />
</template>
<script>
export default {
    props: ['userId']
}
</script>
<style></style>