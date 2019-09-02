<template>
  <div class="container">
    <h2>Discover</h2>
    <p>Batman Tv Shows</p>
    <div class="table-responsive">
      <table id="table-pagination" class="table table-hover" data-toggle="table">
        <thead class="thead-dark">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>language</th>
            <th>Days</th>
            <th>Time</th>
            <th>Channel</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(tv,index) in tvShows"
            :key="tvShows[index].id"
            v-bind:tvShows="tvShows"
            v-bind:show="tv"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <img class="table-image" :src="tv.show.image.medium" />
            </td>
            <td class="align-middle">{{ tv.show.name}}</td>
            <td class="align-middle">{{ tv.show.language}}</td>
            <td class="align-middle">{{ tv.show.schedule.days[0]}}</td>
            <td class="align-middle">{{ tv.show.schedule.time}}</td>
            <td v-if="tv.show.webChannel" class="align-middle">{{ tv.show.webChannel.name}}</td>
            <td v-else class="align-middle">-</td>

            <td class="align-middle">
              <router-link class="event-link" :to="{ name: 'detail', params: {id: tv.show.id}}">
                <a>
                  <font-awesome-icon :icon="['fas', 'info']" class="icon alt" />
                </a>
                <p>Details</p>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import customAxios from "../services/tvmazeApi";
export default {
  name: "Show",
  data() {
    return {
      tvShows: null
    };
  },
  created() {
    return customAxios.getTvShows().then(response => {
      this.tvShows = response.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
