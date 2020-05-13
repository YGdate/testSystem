import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tableData: [],
        autoTableData: [],
        isAuto: true,
        paperUserId: 0,
        paperId: 0,
        questionTile: [],
        autoQuestionTile: []
    },
    mutations: {
        alertTableData(state, data) {
            state.tableData = data
        },
        alertAutoTableData(state, data) {
            state.autoTableData = data
        },
        alertIsAuto(state, data) {
            state.isAuto = data
        },
        alertPaperUserId(state, data) {
            state.paperUserId = data
        },
        alertPaperId(state, data) {
            state.paperId = data
        },
        alertQuestionTile(state, data) {
            state.questionTile = data
        },
        alertAutoQuestionTile(state, data) {
            state.autoQuestionTile = data
        }
    },
    actions: {

    }
})