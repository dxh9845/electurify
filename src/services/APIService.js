import axios from 'axios';

/**
 * A wrapper class for our API.
 */
export default class APIService {
    instance;

    constructor() {
      this.instance = axios.create({
        baseURL: 'http://localhost:8081/',
        headers: {
          'Access-Controll-Allow-Origin': '*',
        },
      });

      this.getContext = this.getContext.bind(this);
      this.putContext = this.putContext.bind(this);
    }

    /**
     * Get the context from our server.
     */
    async getContext() {
      const response = await this.instance.get('/context');
      return response.data;
    }

    /**
     * Put context and update.
     */
    async putContext({ phrases }) {
      const response = await this.instance.put('/context', { phrases });
      return response.data;
    }

    async deleteContext({ index }) {
      const response = await this.instance.delete('/context', { index });
      return response.data;
    }
}
