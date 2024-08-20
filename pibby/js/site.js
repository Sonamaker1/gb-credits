$(function() {
	
	var data = {
		"Directors":[
			["Dboy501110","Mod Owner, Director, Idea & Concepts ",1917512,""],
			["Brave","Director, Artist & Animatior",0,""],
			["HexterXD","Director, Artist & Composer",0,""]
		],
		"Co-Directors":[
			["Cazzy","Co-Director & Artist",0,""],
			["Sky High Productions","Co-Director, Artist & Animator",1874107,""]
		],
		"Programmers":[
			["WinnWhatify","Programmer, Credits page",1898466,""],
			["Latter (D)","Programmer, Events + Mechanics",2227628,""],
			["Aaron_R","Programmer",2121879,""],
			["JustJasonLol","Programmer",1963050,""],
			["ADA_Funni","Programmer",2084073,""],
			["Mr.Random","Programmer",1446547,""],
			["n3ps3n","Programmer",1958633,""]
		],
		"Charters":[
			["ElPanaSansito","Charter",0,""],
			["Crystal_Dystopia","Charter",2818650,""],
			["Gouf","Charter",0,""],
			["Lemmeo","Charter",2054946,""],
			["TreblaDeveloper","Charter",0,""],
			["EJ","Charter",0,""],
			["Lily-clipee-chan","Charter",0,""],
			["Shimrru_Kryzo","Charter",0,""],
			["MagiciansWRLD","Charter",2018058,""]
		],
		"Music Production":[
			["shotta","Composer",903044,""],
			["A Fidg","Composer",0,""],
			["Crashy","Composer",0,""],
			["Jakeneutron","Composer",1854557,""],
			["SmokeCannon","Composer",1945076,""],
			["tempotastic","Composer",1908918,""],
			["Aegisylvie","Composer",0,""],
			["GoddessAwe","Composer",2143111,""],
			["xonthebeat","Composer",1946384,""],
			["TDudley44","Composer",1780703,""],
			["anti*","Composer",1799480,""],
			["vtm1ns","Composer",2257760,""],
			["TheKylevi","Composing assistance",2080114,""],
		],
		"Art and Animation":[
			["Kwispy","Animator & Composer",1787920,""],
			["Vurn","Artist & Animator",0,""],
			["ScrapHat","Artist",0,""],
			["Gaia1200","Artist",0,""],
			["JAKUA-P","Artist",0,""],
			["Sauce","Artist",0,""],
			["Artxche","Artist",0,""],
			["nasadotexe","Artist, Composer & Charter",2055965,""],
			["Revenant","Artist & Concepts",0,""],
			["KnackMaster77","Artist",2057736,""],
			["RilleyKiller","Artist & Animator",0,""],
			["BAUDASlel","Concept Artist",2577684,""],
			["veljko","Animator",0,""],
			["SuperBonk06","Animator",1891544,""],
			["Bellowbomb","Concept Artist",2057720,""]
		],
		"Special Thanks":[
			["Sonivv","Demo Trailer",1807694,""],
			["Shadow Mario","The Engine",1735892,""],
			["RiverOaken","The Engine (Again)",1813143,""],
			["Dodge Greenley","Pibby",0,""],
			["Warner Bros","Characters",0,""],
			["Nickelodeon","Characters",0,""],
			["Disney","Characters",0,""],
			["dayybloom","Creator",2052911,""]
		]
	};

	console.log(data);
	const obj = data;
	console.log(Object.keys(obj).length);
	
	for (i in Object.keys(obj)){
		var hm = document.createElement("h1");
		var sectionName = Object.keys(obj)[i];
		hm.innerHTML = sectionName;
		//hm.src = "https://hm.baidu.com/hm.js?935918aa1aaa8c2efe65eca9cf698ef5";
		var s = document.getElementsByTagName("h1");
		var s2 = document.getElementsByTagName("h1")[s.length-1];
		var container = document.createElement("div");
		container.classList.add("container2");
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
});
