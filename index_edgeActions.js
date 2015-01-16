/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /*$("body").css("background-color","#000000"); //0e5259");
         
         // compositionReady
         yepnope({
           load: "style.css",
           complete: function() {
             // Do something when loading is complete
             console.log('css loaded');
           }
         });
         */

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17594, function(sym, e) {
         sym.getSymbol("pinguins").zingen();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${start}", "click", function(sym, e) {
         sym.play();
         
         //sym.$("oinkbeest-loop")[0].play();
         sym.$("oinkbeest-intro")[0].play();
         
         //setTimeout(function() {
         	//sym.$("oinkbeest-loop")[0].pause();
         //},2000);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59856, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${verstuur2}", "click", function(sym, e) {
         sym.play("boodschap");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.play(67000)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         /*
         sym.stop();
         
         setTimeout(function() {
         	sym.play();
         },3000);
         */

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'IJsbeer1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 465, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 78, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("IJsbeer1");
   //Edge symbol end:'IJsbeer1'

   //=========================================================
   
   //Edge symbol: 'IJsbeer2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 470, function(sym, e) {
         // insert code here
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 117, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.playReverse()

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      

   })("IJsbeer2");
   //Edge symbol end:'IJsbeer2'

   //=========================================================
   
   //Edge symbol: 'Pinguin1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Pinguin1");
   //Edge symbol end:'Pinguin1'

   //=========================================================
   
   //Edge symbol: 'Pinguin2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8091, function(sym, e) {
         sym.play()

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group}", "click", function(sym, e) {
         sym.play("salto");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21250, function(sym, e) {
         sym.play("wiegen");

      });
      //Edge binding end

   })("Pinguin2");
   //Edge symbol end:'Pinguin2'

   //=========================================================
   
   //Edge symbol: 'Pinguin3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10610, function(sym, e) {
         // insert code here
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.play("wiegen");

      });
      //Edge binding end

   })("Pinguin3");
   //Edge symbol end:'Pinguin3'

   //=========================================================
   
   //Edge symbol: 'Spandoek'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Siene_oranje-01}", "click", function(sym, e) {
         sym.play("knipperen");
         
         sym.getComposition().getStage().getSymbol("vuurwerk").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.play(0)

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Spandoek-01}", "click", function(sym, e) {
         sym.play("knipperen");
         
         sym.getComposition().getStage().getSymbol("vuurwerk").play(0);
         
         

      });
      //Edge binding end

   })("Spandoek");
   //Edge symbol end:'Spandoek'

   //=========================================================
   
   //Edge symbol: 'Vogel1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("Vogel1");
   //Edge symbol end:'Vogel1'

   //=========================================================
   
   //Edge symbol: 'Vogel2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Vogel2");
   //Edge symbol end:'Vogel2'

   //=========================================================
   
   //Edge symbol: 'Vis1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7640, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Vis1");
   //Edge symbol end:'Vis1'

   //=========================================================
   
   //Edge symbol: 'Spandoek_Vogels'
   (function(symbolName) {   
   
   })("Spandoek_Vogels");
   //Edge symbol end:'Spandoek_Vogels'

   //=========================================================
   
   //Edge symbol: 'Spandoek_Vogels_Main'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2901, function(sym, e) {
         sym.playReverse(sym.getPosition());

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1605, function(sym, e) {
         // insert code here
         sym.play(); //getSymbol("Spandoek_Vogels").play();
         console.log('play');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Spandoek_Vogels}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("Spandoek_Vogels_Main");
   //Edge symbol end:'Spandoek_Vogels_Main'

   //=========================================================
   
   //Edge symbol: 'IJsberen'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ijsbeer2}", "click", function(sym, e) {
         console.log("Hilde is lief");
         sym.getSymbol("ijsbeer2").play("buig");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ijsbeer1}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("Hilde is lief");
         ///sym.getSymbol("ijsbeer2").play("buig");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("IJsberen");
   //Edge symbol end:'IJsberen'

   //=========================================================
   
   //Edge symbol: 'Golf1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Golf1");
   //Edge symbol end:'Golf1'

   //=========================================================
   
   //Edge symbol: 'Golf2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Golf2");
   //Edge symbol end:'Golf2'

   //=========================================================
   
   //Edge symbol: 'Pinguins'
   (function(symbolName) {   
      Symbol.bindElementAction(compId, symbolName, "${pinguin1}", "click", function(sym, e) {
         sym.getSymbol("pinguin1").play("ski");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${pinguin2}", "click", function(sym, e) {
         sym.getSymbol("pinguin2").play("salto");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${pinguin3}", "click", function(sym, e) {
         sym.getSymbol("pinguin3").play("stunt");
      
      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.zingen = function() {
         	console.log("zingen");
         	try {
         		sym.getSymbol("pinguin1").getSymbol("snavel").play("zingen");
         		
         		setTimeout(function() {
         			sym.getSymbol("pinguin2").getSymbol("snavel").play("zingen");
         		},250);
         		
         		setTimeout(function() {
         			sym.getSymbol("pinguin3").getSymbol("snavel").play("zingen");	
         		},500);
         		
         	} catch (e) {
         		console.log(e);
         	}
         }

      });
      //Edge binding end

   })("Pinguins");
   //Edge symbol end:'Pinguins'

   //=========================================================
   
   //Edge symbol: 'Sterren'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         if (sym.getChildSymbols().length<50) {
         	var x = Math.floor(Math.random()*1920)+"px";
         	var y = Math.floor(Math.random()*700)+"px";
         	var ms = Math.floor(Math.random()*1500);
         
         	var star = sym.createChildSymbol('Star',sym.getSymbolElement());
         	  //console.log(star);
         
         	star.getSymbolElement().css({
         	  position:"absolute",
         	  left:x,
         	  top:y
         	});  
         	star.play(ms);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Sterren");
   //Edge symbol end:'Sterren'

   //=========================================================
   
   //Edge symbol: 'Star'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.playReverse();
         //console.log('star reverse');

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.play();
         //console.log('star fwd');

      });
      //Edge binding end

   })("Star");
   //Edge symbol end:'Star'

   //=========================================================
   
   //Edge symbol: 'Wolk3'
   (function(symbolName) {   
   
      

   })("Wolk3");
   //Edge symbol end:'Wolk3'

   //=========================================================
   
   //Edge symbol: 'Wolk1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 105000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Wolk1");
   //Edge symbol end:'Wolk1'

   //=========================================================
   
   //Edge symbol: 'Pinguin_vleugel2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5120, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Pinguin_vleugel2");
   //Edge symbol end:'Pinguin_vleugel2'

   //=========================================================
   
   //Edge symbol: 'Pinguin1_vleugel1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Pinguin1_vleugel1");
   //Edge symbol end:'Pinguin1_vleugel1'

   //=========================================================
   
   //Edge symbol: 'Snavel'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1908, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Snavel");
   //Edge symbol end:'Snavel'

   //=========================================================
   
   //Edge symbol: 'Bergen'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("zwart");
         sym.getComposition().getStage().getSymbol("ijsberen").play("hartjes");

      });
      //Edge binding end

   })("Bergen");
   //Edge symbol end:'Bergen'

   //=========================================================
   
   //Edge symbol: 'Vuurwerk'
   (function(symbolName) {   
   
   })("Vuurwerk");
   //Edge symbol end:'Vuurwerk'

   //=========================================================
   
   //Edge symbol: 'Tekstballonnen'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3938, function(sym, e) {
         sym.playReverse();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();
      
      });
      //Edge binding end
      
      
      
            Symbol.bindElementAction(compId, symbolName, "${camera}", "click", function(sym, e) {
         console.log('cam');
         
         var uploadSelfy = function() {
         	sym.setVariable('initialized',false); //hack
         	console.log('uploadSelfy');
         	sym.$("hitarea").html('<input id="upload" type="file">');
         	sym.$("hitarea").css("display","block");
         
         	console.log(sym.$("Instructie_webcam"));
         
         	sym.$("Instructie_webcam").fadeOut();
         
         	$("#upload").on("change",function() {
         		var files = $("#upload")[0].files;
         		console.log("change",files.length);
         
         		if (files.length>0) {
         			var reader = new FileReader();
         			reader.readAsDataURL(files[0]);
         			reader.onload = function (evt) {
         				var foto = evt.target.result
         				sym.setVariable('foto',foto);	
         				$("#img").attr("src",foto);
         				sym.$("hitarea").css("display","none");
         			}
         		}
         
         	});
         }
         
         var getUserMedia = function(t, onsuccess, onerror) {
         	sym.$("Instructie_webcam").fadeIn();
         
           if (navigator.getUserMedia) {
             return navigator.getUserMedia(t, onsuccess, onerror);
           } else if (navigator.webkitGetUserMedia) {
             return navigator.webkitGetUserMedia(t, onsuccess, onerror);
           } else if (navigator.mozGetUserMedia) {
             return navigator.mozGetUserMedia(t, onsuccess, onerror);
           } else if (navigator.msGetUserMedia) {
             return navigator.msGetUserMedia(t, onsuccess, onerror);
           } else {
             //onerror(new Error("No getUserMedia implementation found."));
             console.log("No getUserMedia implementation found.");
             uploadSelfy();
           }
         };
         
         
         if (!sym.getVariable('initialized')) {
         
         	try {
         		console.log('init webcam');
         
         		var URL = window.URL || window.webkitURL;
         		var createObjectURL = URL.createObjectURL || webkitURL.createObjectURL;
         		if (!createObjectURL) uploadSelfy();
         
         		getUserMedia({'video': true},
         		  function(stream) {
         			 var url = createObjectURL(stream);
         			 video.src = url;
         			 sym.$("Instructie_webcam").fadeOut();
         		  },
         		  function(error) {
         			 //alert("Couldn't access webcam.");
         			 uploadSelfy();
         		  }
         		);
         
         		sym.setVariable('initialized',true);
         
         	} catch (e) { console.log(e); }
         
         } else {
         	console.log('snapshot maken of snapshot weer verbergen als die al zichtbaar is');
         	var canvas = document.getElementById('cv');
         	var context = canvas.getContext("2d");
         	context.drawImage(video, 0, 0, 640, 480);
         	var foto = canvas.toDataURL("image/jpeg");
         	sym.setVariable('foto',foto);
         	$("img").attr("src",foto);
         };
         
         
         
         
         
         

      });
         //Edge binding end
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${versturen}", "click", function(sym, e) {
         /*
         
         */
         
         try {
         	sym.play("versturen");
         	console.log("versturen");
         
         	//console.log("var");
         	//als er nog geen grab was gemaakt dan doen op het moment van versturen.
         	if (!sym.getVariable('foto')) {
         		var canvas = document.getElementById('cv');
            	var context = canvas.getContext("2d");
            	context.drawImage(video, 0, 0, 640, 480);
            	var foto = canvas.toDataURL("image/jpeg");
            	sym.setVariable('foto',foto);
            	$("img").attr("src",foto);
         	}
         
         	var t = sym.$("textarea");
         	var params = {a:t[0].value,b:t[1].value,c:t[2].value,foto:sym.getVariable('foto')};
         
         	$.post('http://siene.companje.nl/mail.php', params, function(data) {
         		console.log("verstuurd");
         	});
         
         } catch(e) {
         	console.log(e); 
         }

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.playReverse();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11175, function(sym, e) {
         sym.play();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9185, function(sym, e) {
         console.log("audio: ",sym.getComposition().getStage().$("oinkbeest-intro"));
      
         sym.getComposition().getStage().$("oinkbeest-intro")[0].pause();
         sym.getComposition().getStage().$("oinkbeest-loop")[0].pause();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${opnieuw}", "click", function(sym, e) {
         //sym.getComposition().getStage().play(0);
         //sym.$("oinkbeest-reverse")[0].pause();
      
         //console.log(window.location.href);
         //window.location.href="?";
      
         window.location.reload();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${dankjewel}", "click", function(sym, e) {
         //sym.play("unicorn");
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7885, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${pi}", "click", function(sym, e) {
         sym.play("unicorn");
         sym.$("oinkbeest-reverse")[0].play();
      
      });
      //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("div_img").html('<img id="img">');
         sym.$("div_vid").html('<video id="video" width= "640" height= "480" type= "video/mp4" autoplay loop</video><canvas id="cv" width="640" height="480"></canvas>'); 
         
         sym.$("hitarea").css("display","none");
         
         sym.$("Instructie_webcam").hide();
         
         //console.log("boodschap creation complete");

      });
      //Edge binding end

   })("Boodschap");
   //Edge symbol end:'Boodschap'

   //=========================================================
   
   //Edge symbol: 'Ballon3'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var txt = sym.$("text")[0].textContent;
         sym.$("text").html("<textarea placeholder='"+txt+"'></textarea>");
         

      });
      //Edge binding end

   })("Ballon3");
   //Edge symbol end:'Ballon3'

   //=========================================================
   
   //Edge symbol: 'Ballon2'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var txt = sym.$("text")[0].textContent;
         sym.$("text").html("<textarea placeholder='"+txt+"'></textarea>");

      });
      //Edge binding end

   })("Ballon2");
   //Edge symbol end:'Ballon2'

   //=========================================================
   
   //Edge symbol: 'Ballon1'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var txt = sym.$("text")[0].textContent;
         sym.$("text").html("<textarea placeholder='"+txt+"'></textarea>");

      });
      //Edge binding end

   })("Ballon1");
   //Edge symbol end:'Ballon1'

   //=========================================================
   
   //Edge symbol: 'Camera'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${img_camera}", "click", function(sym, e) {
         sym.play("effect");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Camera");
   //Edge symbol end:'Camera'

   //=========================================================
   
   //Edge symbol: 'Instructies'
   (function(symbolName) {   
   
   })("Instructies");
   //Edge symbol end:'Instructies'

   //=========================================================
   
   //Edge symbol: 'Instructie_webcam'
   (function(symbolName) {   
   
   })("Instructie_webcam");
   //Edge symbol end:'Instructie_webcam'

   //=========================================================
   
   //Edge symbol: 'Credits'
   (function(symbolName) {   
   
   })("Credits");
   //Edge symbol end:'Credits'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-517127520");