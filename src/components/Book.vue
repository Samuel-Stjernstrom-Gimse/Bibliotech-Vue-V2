<script setup lang="ts">
import { defineProps } from 'vue'
import {BookType} from "../types/BookType.ts";

const props = defineProps< {
    book: BookType
}>()

</script>

<template>
<div>
    <h1>{{ props.book.title }}</h1>
    <h6>{{ props.book.id }}</h6>
    <h1>{{ props.book.author }}</h1>
    <h1>{{ props.book.year }}</h1>
</div>
</template>

<style scoped>

</style>