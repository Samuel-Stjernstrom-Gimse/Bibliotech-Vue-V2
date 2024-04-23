<script setup lang="ts">
import {defineProps, onMounted, ref,} from 'vue'
import {BookType} from "../types/BookType.ts";
import {BookingType} from "../types/BookingType.ts";

const props = defineProps<{
    book: BookType
    bookings: BookingType[]
}>()

const isBooked = ref(false)
const wantToBook = ref(false)
const bookingIndex = ref<number>()
const startDate = ref('')
const endDate = ref('')

onMounted(()=>{
    props.bookings.forEach((booking: BookingType, index: number) => {
        if (booking.bookId === props.book.id) {
            isBooked.value = true
            bookingIndex.value = index
        }
    })
})

const handleBook = () => {
    wantToBook.value = !wantToBook.value
}

const postBooking = async () => {
    const booking = {
        userId: 3,
        bookId: props.book.id,
        bookingDate: startDate.value,
        returnDate: endDate.value
    }
    try {
        const result = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        if (result.ok) {
            const bookingResult = await result.json();
            props.bookings.push(bookingResult as BookingType)
            isBooked.value = true
            bookingIndex.value = props.bookings.length - 1
        }
    } catch (error) {
        console.error('Error posting data:', error)
    }
}

</script>

<template>
    <div v-if="!isBooked" id="book-wrapper" style="background-color: #545454;">
        <h3>{{ props.book.title }}</h3>
        <h6>{{ props.book.id }}</h6>
        <h3>{{ props.book.author }}</h3>
        <h3>{{ props.book.year }}</h3>
        <button @click="handleBook" >borrow book</button>
        <div v-if="wantToBook">
            <input type="date" v-model="startDate" />
            <input type="date" v-model="endDate" />
            <button @click="postBooking">Submit</button>
        </div>
    </div>
    <div v-else id="book-wrapper" style="background-color: red;">
        <h3>{{ props.book.title }}</h3>
        <h6>{{ props.book.id }}</h6>
        <h3>{{ props.book.author }}</h3>
        <h3>{{ props.book.year }}</h3>
        <h5>Available: {{ props.bookings[bookingIndex!].returnDate }}</h5>
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