<template>
    <div class="card rounded shadow pb-4">
      <PageTitle>Your Distance</PageTitle>
      <DistanceDisplay>{{this.distance}} km</DistanceDisplay>
      <DistanceDisplay>{{this.distanceInMeters}} m</DistanceDisplay>
      <div class="d-flex justify-content-around">
        <FormButton @click="this.$router.push('/coordinates')">Return to form</FormButton>
      </div>
    </div>
  </template>
  
  <script>
  import distance from 'gps-distance'
  import DistanceDisplay from '../elements/DistanceDisplay.vue'
  
  export default {
    props: ['coords'],
    components: { DistanceDisplay },
    data() {
      return {
        distance: null,
      }
    },
    methods: {
      makeCoordsArr(arr){ // npm function distance() accept array of arrays with 2 values eg. [[1,2],[3,2]]. This function makes that arr form regular flat arr
        //that way i could expand this project to calculate distance from many geo points
        const distanceArr = [];
        for(let i = 0; i < arr.length; i+=2){
          distanceArr.push([arr.at(i),arr.at(i+1)])
        }
        return distanceArr
      }
    },
    computed: {
      distanceInMeters() {
        return this.distance * 1000
      } 
    },
    beforeMount() {
      // distance is calculated using npm distance() function. Additionally prop coords is a string so i have to make it into an array that is accepted by distance function
      this.distance = distance(this.makeCoordsArr(this.coords.split(','))).toFixed(2);
    }
  }
  </script>
  
  
  <style scoped>
  .card {
  width: 30%;
  margin: 10% auto;
  background-color: rgba(255, 255, 255, 0.855);
  animation: fade-in-down 2s ease;
}
@media only screen and (max-width: 1320px) {
  .card {
    width: 50%;
  }
}
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
  </style>
  