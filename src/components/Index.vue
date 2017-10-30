<template>
  <div class="index">
  <h1>Weather App</h1>
  {{city}}
 
<input type="text" v-model="city">
{{pesho.main}}
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      city: '',
      pesho: [],
    }
  },
  watch:{
  	city(newCity){
  		this.parseJson(newCity) ;
  	}
  },
  created: function(){
  	 console.log(this.city);
  },
  mounted(){
  	
  },
  methods:{
  	parseJson(newCity){
  		let bulgariaId = "732800";
  		let citiName = "Plovdiv";
  	 	var test2 = fetch('http://api.openweathermap.org/data/2.5/forecast?q='+newCity+'&APPID=0ac45ec21320505d5d7bb2efcf2ae143')
		  .then(
		    function(response) {
		      if (response.status !== 200) {
		        console.log('Looks like there was a problem. Status Code: ' + response.status);
		        return;
		      }
		       return response.json();
		   })
		  .then(function(data) {
		 		return data.list;
		    })
		  .catch(function(err) {
		    console.log('Fetch Error :-S', err);
		  });
		  this.pesho = test2;
		  console.log(this.pesho);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
