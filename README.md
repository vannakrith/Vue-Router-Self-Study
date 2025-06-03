1. Initial setup
- install vue router: npm install vue-router
- Register the router in the main.ts
    import router from './router'

    const app = createApp(App)
    app.use(router)
    app.mount('#app')
- Create separate components in a views/ folder and views/ folder is created under src/

2. Defining routs: 
- Create router/ under src/ folder
- Then create ts file to store the routes
- Routes are defined as array of obj
- Each rout has a path and a component


## What is createWebHashHistory?
When we build website with vue3 and use vue Router, we want to let user move btw diff pages without reloading the whole website, it's called client-side routing. 

** How does it work?
Normally, when you go to a new page, the browser asks the server for that page, with vue router, we wanna change the page without asking the server each time. 

## What does createWebHashHistory do? 
- It makes URL look like this: htts://example.com/#/about
- the part after # is handled oly our vue app, not by the server
- The means that we don't need to set up anyting special on our server. It always load on our app and vue router shows the right page

In summmary, createWebHashHistory is simple way to make our vue app handle page navigation. 

3. What is <router-link to "/"></router-link> ? 
- creates navigation links
- When click, it changes the page without reloading



4. What is <router-view/> ? 
- Act as a placeholder in the template where the matched componenent for current route will be rendered

Think of <RouterLink> is like a button on our tv remote like each button (Home, About...) let us choose what we wanna watch
<router-view> is like TV Screen, whatever channel (route) we pick with the remote, the screen show content

5. Dynamic routing 
It's defined route structure in index.ts file of router/ folder
- In HomeView.vue file, handle click   `@click="router.push(`/car/${car.id}`)`", user will navigate to the specific route with the car id. 
    `router.push()` is a vue router method that navigate to a new route, it changes the URL and loads the corresponding component
- Route matching: Vue router match the URL (e.g.: `/car/3`) to the `/car/:id` rout in i`ndex.ts` file and load component `CarView.vue`
- Param extraction in CarView.vue file: 
 + In `CarView.vue`, we use `useRoute()`, to access to route params:
  `const rout = useRout();`
  `const {id} = rout.params` => Here `id` will be the value from the URL (e.g.: /car/3)
  + Data lookup: 
  In `CarView.vue`, on component mount `onBeforeMount`, we search for the car with the matching `id` in the `data.json` file

  In summary: 
  User click a car from `HomeView.vue` -> navigate to `/car/:id` -> routes load -> `CarView.vue` -> component read `id` from routes -> find car in data -> display car based on the route car id

6. Programmatic Routing: 
- We navigate to a route using code, we use `router.push('/car/${car.id}')`

7. Query param


## What is useRoute() ? 
- Defintion: It's a vue router func that give us access to info abt the current route inside our component. 
- Its job: It return a route obj with details such as: current path, route param, query strings, ...
- Why use it? : When we wanna read things like route params (E.g.: /car/3 -> id = 3), or query params
=> Summary: useRoute() helps our components know which route is active and what params or data are in the URL

## What is useRouter() ? 
- Definition: It's an obj that let us control navigation on vue app
- Its job: 
     + Navigate to another page. E.g: router.push(`/car/3`) -> It goes to the car details page for car with id: 3
     + Change url query: E.g: `router.push({query: {make: 'Audi'}})`, it updates the URL to `/?make=Audi`
     + Go back or forward. `router.back()`, `router.forward()`
- Why use it? : Use to access to the router obj, it's  how our component is programmatically change the page or URL
    