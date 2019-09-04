<template>
  <div class="container">
    <h2>Details</h2>
    <div class="card img-fluid" style="width:500px">
      <img
        v-if="details.image"
        class="card-img-top"
        :src="details.image.original"
        alt="Card image"
        style="width:100%"
      />
      <div class="card-img-overlay mb-5">
        <h4 class="card-text">{{ details.name }}</h4>
        <p class="card-text">
          <b>Summary:</b>
          {{ details.summary }}
        </p>
        <div v-if="details.rating">
          <p class="card-text" v-if="details.rating.averange != null">
            Rating:
            <b>{{ details.rating.average }}</b>
          </p>
        </div>
        <p class="card-text" v-show="details.type">
          Type:
          <b>{{ details.type }}</b>
        </p>
        <p class="card-text" v-show="details.genres">
          Genres:
          <b v-for="(genre, i) in details.genres" :key="i"
            >{{ details.genres[i] }}/</b
          >
        </p>
        <p class="card-text">
          Premiered:
          <b>{{ details.premiered }}</b>
        </p>
      </div>
      <router-link :to="{ name: 'home' }" class="backward">
        <a>
          <font-awesome-icon :icon="['fas', 'backward']" class="icon alt" />
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      details: ""
    };
  },
  created() {},
  mounted() {
    this.getTvShow(this.$route.params.id).then(response => {
      this.details = response;
      let str = "";
      str = this.details.summary
        .replace("<p>", "")
        .replace("</p>", "")
        .replace("<b>", "")
        .replace("</b>", "");
      this.details.summary = str;
    });
  },

  methods: {
    ...mapActions(["getTvShow"])
  }
};
</script>

<style lang="scss" scoped>
 @import '../assets/main.scss'

</style>
