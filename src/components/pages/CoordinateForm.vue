<template>
  <div class="form rounded shadow pb-4">
    <div class="d-flex justify-content-center pt-4"><img src="https://cdn-icons-png.flaticon.com/512/55/55212.png" alt="distance-icon"></div>
    <PageTitle>Geo Distance</PageTitle>
    <InputCoordinates label="Point 1" @update-coords="pt1Coords"></InputCoordinates>
    <InputCoordinates label="Point 2" @update-coords="pt2Coords"></InputCoordinates>
    <div class="d-flex justify-content-around">
      <FormButton @click="submitCoords">Calculate</FormButton>
    </div>
  </div>
</template>

<script>
import InputCoordinates from '../elements/InputCoordinates.vue'

export default {
  components: { InputCoordinates },
  data() {
    return {
      pathCoords: [null,null],
    }
  },
  methods: {
    pt1Coords(coords) {
      this.pathCoords[0] = coords;
    },
    pt2Coords(coords) {
      this.pathCoords[1] = coords;
    },
    submitCoords() {
      if(this.pathCoords.flat().includes(null) || this.pathCoords.flat().includes('')) {
        alert('Invalid coordinates. Please complete all fields.')
      }else {
        this.$router.push(`/distance/${this.pathCoords}`);
      }
    }
  }
}
</script>


<style scoped>
img {
  max-height: 100px;
}
.form {
  width: 30%;
  margin: 10% auto;
  background-color: rgba(255, 255, 255, 0.855);
  animation: fade-in-down 2s ease;
}
@media only screen and (max-width: 1320px) {
  .form {
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
