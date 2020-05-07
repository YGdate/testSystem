const mixin = {
  data(){
    return{

    }
  },
  methods: {
     skip(index) {
       switch (index) {
         case 1:
           this.$router.push('/publisher/promulgator')
           break;
         case 2:
           this.$router.push('/publisher/testScore')
           break;
         case 3:
           this.$router.push('/publisher/testPaper')
           break;
         case 4:
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
     }
  }
}
export default mixin