<template>
        <ul class="nav-links">
            <a data-ref="#Dashboard">
                Dashboard
            </a>
            <a class="active" data-href="#account">
                Account
            </a>
            <a data-href="#help">
                Help
            </a>
            <a data-href="#logout" v-show="logout">
                Logout
            </a>
        </ul>
</template>

<script>
    export default {
        props: ["logout"],
        name: "NavLinks"
    }
</script>

<style scoped>

</style>
