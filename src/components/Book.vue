<script setup lang="ts">
import {defineProps, onMounted, ref,} from 'vue'
import {BookType} from "../types/BookType.ts";
import {BookingType} from "../types/BookingType.ts";

const props = defineProps<{
    book: BookType
    bookings: BookingType[]
}>()

const isBooked = ref(false)

onMounted(()=>{
    props.bookings.forEach((booking: BookingType) => {
        if (booking.bookId === props.book.id) {
            isBooked.value = true
        }
    })
})


</script>

<template>
    <div v-if="!isBooked" id="book-wrapper" style="background-color: #545454;">
        <h3>{{ props.book.title }}</h3>
        <h6>{{ props.book.id }}</h6>
        <h3>{{ props.book.author }}</h3>
        <h3>{{ props.book.year }}</h3>
    </div>
    <div v-else id="book-wrapper" style="background-color: red;">
        <h3>{{ props.book.title }}</h3>
        <h6>{{ props.book.id }}</h6>
        <h3>{{ props.book.author }}</h3>
        <h3>{{ props.book.year }}</h3>
    </div>
</template>

<style scoped>
#book-wrapper {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    width: 500px;
    display: inline-block;
    text-align: center;
}
</style>