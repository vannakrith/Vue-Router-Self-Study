<template>
    <div class="container">
        <div class="car">
            <h1>Car details page</h1>
            <p>Make: {{ car.make }}</p>
            <p>Body: {{ car.body }}</p>
            <p>Price: {{ car.price }}</p>
            <p>Year: {{ car.year }}</p>
        </div>
        <RouterLink :to="`/car/${car.id}/dealer`">Dealer</RouterLink>
        <RouterLink :to="`/car/${car.id}/manufactor`">Manufactor</RouterLink>
        <RouterView/>
    </div>
    </template>
    
    <script setup lang="ts">
    import { useRoute, RouterLink, RouterView } from 'vue-router';
    import { onBeforeMount, ref } from 'vue';
    import carsData from '../data.json';

    const route = useRoute(); //Access to current route, like id
    const routeCarId = route.params.id
    const car = ref(carsData);

    //For dynamic routing
    onBeforeMount (() => {
        car.value = carsData.find( c => c.id === Number(routeCarId))
        console.log('route param id:' , route.params.id);
        console.log('log car value: ', car.value);
    })

    </script>
