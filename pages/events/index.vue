<script setup lang="ts">
const { data } = await useFetch('/api/events/events')
</script>
<template>
    <head>
        <title>avnce | events</title>
    </head>
    <div class="events">
    <h1>Events as of {{data?.date}}:</h1>
        <li v-for="event in data?.events">
                <h2>{{ event.name }}</h2>
                <p>{{ event.type }}</p>
                <p>{{ event.version }}</p>
                <RouterLink :to="`/events/${event.url}`">View</RouterLink>

            <!-- <h1>{{ event[0].name }}</h1>
            <p>{{ event[0].type }}</p>
            <p>{{ event[0].version }}</p>
            <RouterLink :to="`/events/${event[0].url}`">View</RouterLink> -->
        </li>
    </div>
</template>
<style scoped>
.events {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    padding: 0 20px;
    font-family: 'Courier New', Courier, monospace;
}    
</style>