<template>
  <div>
    <b-form-group
      label='Enter a topic here.'
      label-for='topic-input'>
      <b-input-group>
        <b-input type='text' id='topic-input' v-model="topic"></b-input>
        <b-input-group-append>
          <b-btn size='sm' v-on:click="getSummary">Submit</b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <h4>{{ wiki_extract.title }}</h4>
    <img v-bind:src="wiki_extract.thumbnail ? wiki_extract.thumbnail.source : ''" />
    <p v-html="wiki_extract.extract_html"></p>
    <p v-if="error">Could not find information about {{ topic }}.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'wiki-summary',
  data() {
    return {
      topic: '',
      wiki_extract: '',
      error: true,
    };
  },
  methods: {
    async getSummary() {
      const base = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
      const topic = this.topic.replace(/ /g, '_');
      const url = base + topic;
      try {
        const response = await axios.get(url);
        console.log(response.data);
        this.wiki_extract = response.data;
        this.error = false;
        // console.log(response.data.originalimage.source)
      } catch (err) {
        this.wiki_extract = '';
        this.error = true;
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
