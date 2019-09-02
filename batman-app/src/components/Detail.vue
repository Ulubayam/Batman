<template>
  <div class="container">
    <div class="card">
      <img v-if="details.image" class="card-img-top" :src="details.image.original" alt="Card image" />
      <div class="card-body">
        <h4 class="card-title">Details</h4>
        <p class="card-text">
          <b>Summary:</b>
          {{ details.summary }}
        </p>
        <p class="card-text" v-show="details.rating.average">
          Rating:
          <b>{{ details.rating.average }}</b>
        </p>
        <p class="card-text" v-show="details.type">
          Type:
          <b>{{ details.type }}</b>
        </p>
        <p class="card-text" v-show="details.genres">
          Genres:
          <b v-for="(genre,i) in details.genres" :key="i">{{ details.genres[i] }}/</b>
        </p>
        <router-link :to="{ name: 'home'}" class="backward">
          <a>
            <font-awesome-icon :icon="['fas', 'backward']" class="icon alt" />
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import customAxios from "../services/tvmazeApi.js";

export default {
  name: "Detail",
  props: ["id"],
  data() {
    return {
      details: null
    };
  },

  created() {
    return customAxios.getTvShow(this.$route.params.id).then(response => {
      this.details = response.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  .card {
    .backward {
      float: left;
    }
  }
}
</style>