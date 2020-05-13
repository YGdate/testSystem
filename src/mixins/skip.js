const mixin = {
    data() {
        return {

        }
    },
    methods: {
        skip(index) {
            window.sessionStorage.setItem('index', index)
            this.val = index
            switch (index) {
                case 1:
                    this.$router.push('/publisher/promulgator')
                    break;
                case 2:
                    this.$router.push('/publisher/testScore')
                    break;
                case 3:
                    this.$store.commit('alertIsAuto', false)
                    this.$router.push('/publisher/testPaper')
                    break;
                case 4:
                    this.$store.commit('alertIsAuto', true)
                    this.$router.push('/publisher/autoPaper')
                    break;
                case 5:
                    this.$router.push('/publisher/paperManagement')
                    break;
                case 6:
                    this.$router.push('/publisher/examManagement')
                    break;
                case 7:
                    this.$router.push('/publisher/reportStatistics')
                    break;
                default:
                    break;
            }
        },
        changeValue() {
            console.log(this.questionId);
            let questionData = this.$store.state.questionTile
            if (this.scoreALL != '') {
                questionData.forEach(item => {
                    if (item.idIndex == this.questionId) {
                        item.score = this.scoreALL
                    }
                })
            }
            console.log(questionData);
            this.$store.commit('alertQuestionTile', questionData)
        },
    }
}
export default mixin