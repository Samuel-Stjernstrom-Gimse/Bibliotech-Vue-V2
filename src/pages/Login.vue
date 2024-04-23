<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router'

const router = useRouter()
const username = ref('');
const password = ref('');
const newEmail = ref('');
const newUsername = ref('');
const newPassword = ref('');
const newUserPrompt = ref('');
const newUserError = ref('');
const error = ref('');
const showNewUserForm = ref(false);

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

const postNewUser = async () => {
    try {
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: newUsername.value,
                email: newEmail.value,
                password: newPassword.value
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('New user created:', data);
            newEmail.value = '';
            newUsername.value = '';
            newPassword.value = '';
            newUserPrompt.value = 'New user created successfully';
        } else {
            console.error('Failed to create new user:', response.statusText);
            newUserError.value = response.statusText;
        }
    } catch (err: any) {
        console.error('Error creating new user:', err.message);
        newUserError.value = err.message;
    }
};

const handleNewUser = () => {
    showNewUserForm.value = !showNewUserForm.value;
};

</script>

<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input type="text" placeholder="Username" v-model="username"/>
            <input type="password" placeholder="Password" v-model="password"/>
            <button type="submit">Login</button>
        </form>
        <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
    <div>
        <h5 id="new-user-text" @click="handleNewUser">New User</h5>
        <div v-if="showNewUserForm">
            <form @submit.prevent="postNewUser" id="new-user-form">
                <input type="email" placeholder="email" v-model="newEmail"/>
                <input type="text" placeholder="Username" v-model="newUsername"/>
                <input type="password" placeholder="Password" v-model="newPassword"/>
                <button type="submit">New User</button>
            </form>
            <p v-if="error" style="color: red;">{{ newUserError }}</p>
            <p v-if="newUserPrompt" style="color: greenyellow;">{{ newUserPrompt }} </p>
        </div>

    </div>
</template>


<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#new-user-text {
    cursor: pointer;
    text-decoration: underline;
}

</style>
