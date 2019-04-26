define(["text!./home.html"],function(view){
	function data(){
	  return {
   	      count: 0,
   	      message:"hello world!"
   	  }
	}
	
	var methods = {
		test(){
  		  this.count++
  		  setTimeout(function(){
  			router.push("/")
  		  },1000)
  	    },
  	    second(){
  	    	router.push("m1/second")
  	    }
	}
	
	return Vue.component("m1",{
		      data: data,
		      methods: methods,
			  template:view
	})
});