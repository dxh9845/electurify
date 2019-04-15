<template>
  <div>
    <b-card
      v-show="wiki_extract"
      v-bind:title="wiki_extract.title"
      v-bind:img-src="wiki_extract.thumbnail ? wiki_extract.thumbnail.source : ''"
      v-bind:img-alt="wiki_extract.title"
      img-top
      style="max-width: 20rem;"
    >
      <b-card-text v-html="wiki_extract.extract_html">
      </b-card-text>
    </b-card>
    <p v-show="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'wiki-summary',
  data() {
    return {
      wiki_extract: '',
      error: '',
    };
  },
  sockets: {
    topicSend: function (topic) {
      if (topic) {
        this.getSummary(topic);
        console.log(`Topic: ${topic}`);
      } else {
        this.error = 'Could not identify a topic.';
      }
    },
  },
  methods: {
    async getSummary(topic) {
      const base = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
      const url = base + topic.replace(/ /g, '_');
      try {
        const response = await axios.get(url);
        console.log(response.data);
        this.wiki_extract = response.data;
        this.error = '';
      } catch (err) {
        this.wiki_extract = '';
        this.error = `Could not find information about ${topic}`;
        console.error(err);
      }
    },
  },
};
</script>
<style>
img {
    max-width: 100%;
}
</style>
