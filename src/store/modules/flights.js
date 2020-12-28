import axios from 'axios'

const kBaseUrl = "https://unitedairlinesassociation.azurewebsites.net/";

function filterResults(payload, origin, datatype) {
    return payload.filter(f => f.origin === origin).map(e => e[datatype])
}

const state = {
    flights: [],
    originFlights: {
        jfk: [],
        ewr: [],
        lga: [],
    },
    delays: {dep: [], arr: [], origin:[]},
    airtime: [],
    topTenDestinations: [],
};

const mutations = {
    SET_FLIGHTS(state, payload) {
        state.flights = payload.map(e => e.number_of_flights);
    },
    SET_ORIGIN_FLIGHTS(state, payload) {
        state.originFlights.ewr = filterResults(payload, 'EWR', 'number_of_flights');
        state.originFlights.jfk = filterResults(payload, 'JFK', 'number_of_flights');
        state.originFlights.lga = filterResults(payload, 'LGA', 'number_of_flights');
    },
    SET_AIRTIME(state, payload) {
        state.airtime = payload;
    },
    SET_DELAYS(state, payload) {
        state.delays.dep = payload.map(e => e.dep_delay.toFixed(2));
        state.delays.arr = payload.map(e => e.arr_delay.toFixed(2));
        state.delays.origin = payload.map(e => e.origin);
    },
    SET_TOP_TEN_DESTINATIONS(state, payload) {
        // eslint-disable-next-line no-undef
        let data = _(payload)
            .groupBy(x => x.dest)
            .map((value, key) => ({dest: key, data: value}))
            .value();
        data.forEach((dest) => {
                let flightsArray = []
                dest.data.forEach(m => flightsArray.push({'origin': m.origin, 'flights': m.number_of_flights}))
                state.topTenDestinations.push({
                    'destination': dest.dest,
                    'origin': flightsArray,
                    'totalFlights': dest.data.map(e => e.number_of_flights).reduce((a, b) => a + b)
                })
            }
        );
    },
};

const actions = {
    fetchFlights({commit}) {
        axios.get(`${kBaseUrl}flights/`).then(response => {
            if (response.status === 200) {
                commit('SET_FLIGHTS', response.data);
            }
        })
    },
    fetchAirtime({commit}) {
        axios.get(`${kBaseUrl}flights/origin/airtime`).then(response => {
            if (response.status === 200) {
                commit('SET_AIRTIME', response.data);
            }
        });
    },
    fetchDelays({commit}) {
        axios.get(`${kBaseUrl}flights/origin/mean-delay`).then(response => {
            if (response.status === 200) {
                commit('SET_DELAYS', response.data);
            }
        });
    },
    fetchTopTenDestinations({commit}) {
        axios.get(`${kBaseUrl}flights/top-10-destinations`).then(response => {
            if (response.status === 200) {
                commit('SET_TOP_TEN_DESTINATIONS', response.data);
            }
        })
    },
    fetchOriginFlights({commit}) {
        axios.get(`${kBaseUrl}flights/origin`).then(response => {
            if (response.status === 200) {
                commit('SET_ORIGIN_FLIGHTS', response.data);
            }
        })
    },
};

const getters = {
    flights: (state) => state.flights,
    originFlights: (state) => state.originFlights,
    topTenDestinations: (state) => state.topTenDestinations,
    delays: (state) => state.delays,
    airtime: (state) => state.airtime,
};

export default {
    state, mutations, actions, getters
}
