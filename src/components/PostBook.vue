<script setup lang="ts">
import {ref} from "vue";

const bookTitle = ref<string>('');
const bookAuthor = ref<string>('');
const bookYear = ref<number>();


const postBook = async () => {
    try {
        const result = await fetch('http://localhost:5000/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: bookTitle.value,
                author: bookAuthor.value,
                year: bookYear.value
    })
        })
        if (result.ok) {
            console.log('Book posted successfully')
            bookAuthor.value = ''
            bookTitle.value = ''
            bookYear.value = 0
        }
    } catch (error) {
        console.error('Error posting data:', error)
    }
}
</script>

<template>
<div>
<h1>Post a new book</h1>
    <form @submit.prevent="postBook">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="bookTitle">
        <label for="author">Author:</label>
        <input type="text" id="author" v-model="bookAuthor">
        <label for="year">Year:</label>
        <input type="number" id="year" v-model="bookYear">
        <button type="submit">Post book</button>
    </form>
</div>
</template>

<style scoped>

</style>