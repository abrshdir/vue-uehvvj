<template>
    <teleport to="body">
        <div v-if="show" @click="$emit('close')" class="backdrop"></div>
        <transition name="dialog">
            <dialog open v-if="show">
                <img class="dialog-image" src="../assets/clapping.png" alt="image">
                <header>
                    <h2>Great Job!</h2>
                </header>
                <p>Your configurations have been updated successfully.</p>
            </dialog>
        </transition>
    </teleport>
</template>

<script>
    export default {
        name: "Dialog",
        props: {
            show: {
                type: Boolean,
                required: true,
            },
        },
        emits: ['close'],
    }
</script>

<style scoped>
</style>
