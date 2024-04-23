<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('');
const password = ref('');
const error = ref('');

const login = async () => {
    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login successful:', data);
            await router.push(`/books`)
        } else {
            console.error('Login failed:', response.statusText);
            error.value = response.statusText;
        }
    } catch (err: any) {
        console.error('Login error:', err.message);
        error.value = err.message;
    }
};
</script>

<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input type="text" placeholder="Username" v-model="username" />
            <input type="password" placeholder="Password" v-model="password" />
            <button type="submit">Login</button>
        </form>
        <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
</template>



<style scoped>
/* Add scoped styles if needed */
</style>
