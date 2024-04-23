<script setup lang="ts">
import { onMounted, ref } from "vue";
import Book from "../components/Book.vue";
import { BookingType } from "../types/BookingType.ts";

const booksArray = ref([])
const bookingsArray = ref<BookingType[]>([])

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

const fetchBookings = async () => {
    try {
        const result = await fetch('http://localhost:5000/booking', {
            mode: 'cors'
        })
        bookingsArray.value = await result.json()
        console.log(bookingsArray.value)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

onMounted(async () => {
    await fetchBookings()
    await fetchData()
})

</script>

<template>
    <div id="book-section" v-if="booksArray.length > 0">
        <div v-for="book in booksArray">
            <Book :book="book" :bookings="bookingsArray"/>
        </div>
    </div>

    <div v-else>
        <h1>No books available</h1>
    </div>
</template>

<style scoped>
#book-section {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 1rem;
    padding: 1rem;
}
</style>