require(["js/settings"], (settings) => {
	requirejs.config({
		...settings
	});
});

var home = {
	methods:{
	   route(name){
		   router.loadMoudle(name)
	   }
   },
   template: `<div><button v-on:click="route('m1')">loadM1</button><button v-on:click="route('m2')">loadM2</button></div>`
};

var router = new VueRouter({
	routes: [
		{ path: '/', component: home }
	]
});

router.loadMoudle = function(moudleName){
	require(["moudles/"+moudleName+"/index"],function(moudle){
		  if (moudle instanceof Array)
		  {
			  router.addRoutes(moudle);
		  }else
		  {
			  router.addRoutes([{path:"/"+moudleName,component:moudle}])
		  }
		  router.push('/'+moudleName)
	})
};

var App = new Vue({
  el: '#app',
  router
});
