$(function() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const id = urlParams.get("id");
	const columns = urlParams.get("columns");
	
	var defaultId = 344757;
	var defaultStyle = "container2";
	console.log(id);
	if(id !=undefined ){
		defaultId = id;
	}
	
	if(columns!=undefined && parseInt(columns)>0){
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '.container3{ display: block;	columns: '+parseInt(columns)+';	text-align: center;}';
		document.getElementsByTagName('head')[0].appendChild(style);
		defaultStyle = "container3";
		//document.getElementById('someElementId').className = 'container3';
		
	}
	
	$.ajax({
	  type: 'GET',
	  url: 'https://api.gamebanana.com/Core/Item/Data?itemtype=Mod&itemid='+defaultId+'&fields=authors',
	  success: function(data) {
		console.log(data);
		const obj = JSON.parse(data[0]);
		console.log(Object.keys(obj).length);
		
		for (i in Object.keys(obj)){
			var hm = document.createElement("h1");
			var sectionName = Object.keys(obj)[i];
			hm.innerHTML = sectionName;
			//hm.src = "https://hm.baidu.com/hm.js?935918aa1aaa8c2efe65eca9cf698ef5";
			var s = document.getElementsByTagName("h1");
			var s2 = document.getElementsByTagName("h1")[s.length-1];
			var container = document.createElement("div");
			container.classList.add(defaultStyle);
			s2.parentNode.insertBefore(hm, s2);
			s2.parentNode.insertBefore(container, s2);
			
			for(j in obj[sectionName]){
				var container3 = document.createElement("div");
				container3.classList.add("nowrap");
				if(obj[sectionName][j][2]=="0"){
					var hm = document.createElement("span");
					hm.innerHTML = obj[sectionName][j][0];
					hm.classList.add("name");
					container3.appendChild(hm);
					//s2.parentNode.insertBefore(hm, s2);
				}
				else{
					var hm = document.createElement("a");
					hm.innerHTML = obj[sectionName][j][0];
					hm.classList.add("name");
					hm.href = "https://gamebanana.com/members/"+obj[sectionName][j][2];
					container3.appendChild(hm);
					//s2.parentNode.insertBefore(hm, s2);
				}
				var job = document.createElement("span");
				job.style.color = "yellow";
				//job.style.paddingLeft = "20px"; 
				job.style.marginBottom = "20px"; 
				
				var br = document.createElement("br");
				var br2 = document.createElement("br");
				job.innerHTML = obj[sectionName][j][1];

				container.appendChild(container3);
				container3.appendChild(br);
				container3.appendChild(job);
				//container3.appendChild(br2);
				/*s2.parentNode.insertBefore(br, s2);
				s2.parentNode.insertBefore(job, s2);
				s2.parentNode.insertBefore(br2, s2);*/
			}
			
		}
	  },
	  error: function(error) {
		console.log("FAIL....=================");
	  }
	});
	
	$.ajax({
	  type: 'GET',
	  url: 'https://api.gamebanana.com/Core/Item/Data?itemtype=Mod&itemid='+defaultId+'&fields=name',
	  success: function(data) {
		console.log(data[0]);
		$("#Name").text(data[0]);
	  },
	  error: function(error) {
		console.log("FAIL....=================");
	  }
	});
});
