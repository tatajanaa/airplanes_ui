import axios from 'axios'

const kBaseUrl = "https://unitedairlinesassociation.azurewebsites.net/";

const state = {
    manufacturers: [],
    models: [],
    manufacturersFlights: [],
};

const mutations = {
    SET_MANUFACTURERS(state, payload) {
        state.manufacturers = payload;
    },
    SET_MODELS(state, payload) {
        state.models = payload;
    },
    SET_MANUFACTURERS_FLIGHTS(state, payload) {
        state.manufacturersFlights = payload;
    },
};

const actions = {
    fetchManufacturers({commit}) {
        axios.get(`${kBaseUrl}planes/manufactures`).then(response => {
            if (response.status === 200) {
                commit('SET_MANUFACTURERS', response.data);
            }
        })
    },
    fetchManufacturersFlights({commit}) {
        axios.get(`${kBaseUrl}planes/manufactures/res`).then(response => {
            if (response.status === 200) {
                commit('SET_MANUFACTURERS_FLIGHTS', response.data);
            }
        })
    },
    fetchModels({commit}) {
        axios.get(`${kBaseUrl}planes/manufactures/airbus`).then(response => {
            if (response.status === 200) {
                commit('SET_MODELS', response.data);
            }
        })
    },
};

const getters = {
    manufacturers: (state) => state.manufacturers,
    models: (state) => {
        let models = new Set()
        state.models.map(e => models.add(e.model));
        return Array.from(models);
    },
    groupedModels: (state) => {
        let models = new Set()
        state.models.map(e => models.add(e.model));
        let groupedModels = [];
        let airbuses = state.models.filter(e => e.manufacturer === 'AIRBUS')
        let airbusIndustries = state.models.filter(e => e.manufacturer === 'AIRBUS INDUSTRIE')
        Array.from(models).map(e => groupedModels.push({
            name: e,
            data: [airbuses.find(airbus => airbus.model === e) ?
                airbuses.find(airbus => airbus.model === e)['No of planes'] : 0,
                airbusIndustries.find(airbus => airbus.model === e) ?
                    airbusIndustries.find(airbus => airbus.model === e)['No of planes'] : 0
            ],
        }))
        return groupedModels;
    },
    manufacturersFlights: (state) => state.manufacturersFlights,
};

export default {
    state, mutations, actions, getters
}
