module.exports = class popup {

    dialog() {
        var argv = this.arguments;
        var DHATTER = document.createElement("div");
            DHATTER.setAttribute("id","DHATTER");
            DHATTER.setAttribute("onclick","javascript:Clear_DDialog();");
            DHATTER.setAttribute("style","display:block;top:0px;bottom:0px;left:0px;right:0px;position:fixed;top:0px; left:0px;z-index:1000; opacity:0.7;filter:alpha(opacity=70); background-color:#777777;");
        document.body.appendChild(DHATTER);
        var DDIALOG = document.createElement("div");
            DDIALOG.setAttribute("id","DDIALOG");
            DDIALOG.setAttribute("style","position:fixed;left:50%;top:50%;margin-left:-150px; margin-top:auto; margin-bottom:auto;width:300px;-moz-border-radius: 15px; border-radius: 15px; border:3px solid gray;padding:10px;background-color:white;color:black;font:13px Arial;display:block;text-align:center;opacity:1;filter:alpha(opacity=100);z-index:1001;");
        var TXTBOX = document.createElement("div");
            TXTBOX.setAttribute("style","display:block;text-align:left;padding:10px;opacity:1.0;filter:alpha(opacity=100);font-size:1.2em;");
            TXTBOX.innerHTML = argv[0];
        DDIALOG.appendChild(TXTBOX);	
        var BUTTONS = document.createElement("div");
                BUTTONS.setAttribute("style","margin-left:auto;margin-right:auto;display:inline-block; height:30px;text-align: center; margin-top:15px;opacity:1.0;filter:alpha(opacity=100);font-size:1.1em;");	
        for (var n=1; n<=3; n++)
        {
            if (argv[parseInt(1+2*n)]!=null) 
            {
                if (n==1 && argv[parseInt(1+2*n+1)]!=null != null) { CallBack =  function() { opt1(); Clear_DDialog(); };  }
                if (n==2 && argv[parseInt(1+2*n+1)]!=null != null) { CallBack =  function() { opt2(); Clear_DDialog(); };  }
                if (n==3 && argv[parseInt(1+2*n+1)]!=null != null) { CallBack =  function() { opt3(); Clear_DDialog(); };  }
                if (argv[parseInt(1+2*n+1)]!=null != null && argv[1]==n ) { ButtonStyle="font-size:1.2em; font-weight:bold;background-color:#85abf3;"; } else { ButtonStyle=""; }
                var BTNS = document.createElement("button");
                    BTNS.style.cssText = ButtonStyle+";margin-left:10px;margin-right:10px;padding:5px 10px;display:block;float:left;font-size:1.1em;";
                    BTNS.innerHTML = argv[parseInt(1+2*n)];
                    BTNS.addEventListener("click", CallBack);
                BUTTONS.appendChild(BTNS);
            }		
        }
        DDIALOG.appendChild(BUTTONS);
        document.body.appendChild(DDIALOG);
        document.body.addEventListener("keydown",function(evt){ if(evt.keyCode==27){Clear_DDialog();}else{if(evt.keyCode==13){ DIALOGCALLBACK;Clear_DDialog();}} evt.returnValue=false;evt.cancel=true; },false);	
    }

    

};    