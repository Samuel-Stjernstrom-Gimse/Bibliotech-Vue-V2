<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
    <div id="header">
        <h1 style="cursor: pointer;" @click="router.push('/')">BookShelf</h1>
    </div>
</template>

<style scoped>
#header {
    display: flex;
    text-align: center;
    align-items: center;
    background-color: #2c2c2c;
    color: white;
    padding: 10px;
    position: fixed;
    top: 0;
    width: 100vw;
    left: 0;
    height: 2rem;
}
</style>