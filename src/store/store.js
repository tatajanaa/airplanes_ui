import Vue from 'vue';
import Vuex from 'vuex'
import flights from "./modules/flights.js";
import planes from "./modules/planes.js";
import weather from "./modules/weather.js";

Vue.use(Vuex);

export default new Vuex.Store({modules: {flights, planes, weather}});

