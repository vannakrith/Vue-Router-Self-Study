<template>
<div class="container">
    <div class="links">
    </div>
    <h1>Our cars</h1>
    <select v-model="make" name="make" id="make">
      <option value="All">All</option>
      <option value="Audi">Audi</option>
      <option value="Chevrolet">Chevrolet</option>
      <option value="Porsche">Porsche</option>
    </select>
    <div class="cards">
        <div 
        @click="router.push(`/car/${car.id}`)"
        class="card" 
        v-for="car in cars"
        :key="car.id"
        >
            <h1> {{ car.make }}</h1>
            <p>Price: ${{ car.price }}</p>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import carsData from '../data.json'
import { onMounted, ref, watch } from 'vue'

interface ICars {
  id: number
  make: string
  body: string
  price: number
  year: number
}
const cars = ref <ICars[]>(carsData);
const router = useRouter();
const route = useRoute();
const make = ref<string>('');

//watch func is just to filter cars display based on the make selected
watch (make, ()=> {
  if(make.value === 'All') {
    cars.value = carsData
  }else {
    cars.value = carsData.filter(c => c.make === make.value)
  }

  //update route
  /* 
  Update the query param in the URL,
  It updates the URL to includes ?make=selectedMake (e.g.: ?make=Audi)
  Query is an obj representing the query params in the URL
  */
  router.push( 
  {
  query: 
  {
    make: make.value, // make: here it will become the query params in the URL. (e.g.: ?`make`=Audi),
    // body: 'sedan',
    // id: 1
  }
  })
}
)

//Make the make value in Make filter the same as the route
onMounted(() => {
  console.log('route query: ', route.query.make);
  console.log('type of querey.make', typeof route.query.make);
  
  if(typeof route.query.make === 'string') {
    make.value = route.query.make
  }else {
    make.value = 'All';
  }
})

</script>

<style scoped>
.cards {
      display: flex;
      width: 1000px;
      flex-wrap: wrap;
      margin-top: 50px;
      justify-content: center;
    }
    
    .card {
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
      padding: 15px;
      width: 150px;
      margin-right: 15px;
      cursor: pointer;
      margin-bottom: 20px;
    
    }
</style>