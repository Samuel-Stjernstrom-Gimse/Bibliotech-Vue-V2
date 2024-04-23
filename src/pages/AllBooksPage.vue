<script setup lang="ts">
import {onMounted, ref} from "vue";
import Book from "../components/Book.vue";

const booksArray = ref([])

const fetchData = async () => {
    try {
        const result = await fetch('http://localhost:5000/book', {
            mode: 'cors'

        })
        booksArray.value = await result.json()
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

onMounted( async () => {
    await fetchData()
})

</script>

<template>
    <div v-if="booksArray.length > 0">
        <div v-for="book in booksArray">
            <Book :book="book" />
        </div>
    </div>

<div v-else >
    <h1>No books available</h1>
</div>
</template>

<style scoped>

</style>