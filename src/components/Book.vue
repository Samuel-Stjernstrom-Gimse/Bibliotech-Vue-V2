<script setup lang="ts">
import { defineProps } from 'vue'
import {BookType} from "../types/BookType.ts";

const props = defineProps< {
    book: BookType
}>()

</script>

<template>
<div id="book-wrapper">
    <h3>{{ props.book.title }}</h3>
    <h6>{{ props.book.id }}</h6>
    <h3>{{ props.book.author }}</h3>
    <h3>{{ props.book.year }}</h3>
</div>
</template>

<style scoped>
#book-wrapper{
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    width: 500px;
    display: inline-block;
    text-align: center;
    background-color: #545454;
}
</style>