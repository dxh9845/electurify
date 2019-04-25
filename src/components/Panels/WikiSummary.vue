<template>
  <div>
    <b-card
      v-show="wiki_extract"
      v-bind:title="wiki_extract.title"
      v-bind:img-src="wiki_extract.thumbnail ? wiki_extract.thumbnail.source : ''"
      v-bind:img-alt="img_alt"
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
      img_alt: '',
    };
  },
  sockets: {
    topicSend(topic) {
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
      const title = topic.replace(/ /g, '_');
      const url = base + title;
      try {
        const response = await axios.get(url);
        this.wiki_extract = response.data;
        this.error = '';
        if (this.wiki_extract.thumbnail) {
          this.getImageCaption(title);
        }
      } catch (err) {
        this.wiki_extract = '';
        this.error = `Could not find information about ${topic}`;
        console.error(err);
      }
    },
    async getImageCaption(title) {
      const base = 'https://en.wikipedia.org/api/rest_v1/page/media/';
      const url = base + title;
      try {
        const response = await axios.get(url);
        const image = response.data.items[0];
        if (image.caption) {
          this.img_alt = image.caption.text;
        } else if (!image.description || image.description.lang !== 'en') {
          this.img_alt = this.wiki_extract.title;
        } else {
          this.img_alt = image.description.text;
        }
      } catch (err) {
        this.img_alt = this.wiki_extract.title;
        console.error(err);
      }
    },
  },
};
</script>
