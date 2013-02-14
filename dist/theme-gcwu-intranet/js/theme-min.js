/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-02-14 03:43 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-intranet",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,wmms:c("#gcwu-wmms"),menu:null,init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var v,y,H="",e,m,O=pe.dic.get("%settings"),x,r,f,M,R="",t='<a data-role="button" data-iconpos="notext"',A=' data-rel="popup" data-position-to="window"',o=t+A,B='<div data-role="popup" data-overlay-theme="a"',D='<div data-role="header"',Q=D+"><h1>",z=' data-theme="c" class="ui-corner-all">',p=D+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',N=t+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-left">'+pe.dic.get("%close")+"</a>",K=o+' data-icon="back" class="ui-btn-left"',I=">"+pe.dic.get("%back")+"</a>",P="</div></div>",n='<ul data-role="listview">',w="",F,k,s,q,E,g,d,L,u,G,C,l,J,j;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");r=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");y=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?r:b.bcrumb.children(":header")[0])).innerHTML;v=B+' id="jqm-wb-mb">'+Q+e+"</h1>"+N+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){C=b.bcrumb[0];J=C.getElementsByTagName("a")[0].href;v+='<section><div id="jqm-mb-location-text">'+C.innerHTML+"</div></section>"}else{v+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){H+="<section><div><h2>"+r.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>";C=pe.secnav[0]}if(b.menubar.length!==0){H+="<section><div><h2>"+y+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}v+='<div id="jqm-mb-menu"></div></nav></div></div></div>';R+=v;b.menu=H;w+=o+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){m=pe.dic.get("%search");f=b.search[0].innerHTML;M=B+' id="jqm-wb-search">'+Q+m+"</h1>"+N+'</div><div data-role="content"><div>'+f.substring(f.indexOf("<form"))+"</div></div></div>";R+=M;w+=o+' data-icon="search" href="#jqm-wb-search">'+m+"</a>"}j='<div data-role="header">';if(b.wmms.length!==0){C=b.wmms[0].getElementsByTagName("img")[0];l=navigator.userAgent.match(/WebKit\/53(\d)\.(\d{1,2})/i);if(l==null||parseInt(l[1])>4||(parseInt(l[1])==4&&parseInt(l[2])>=46)){j+='<div class="ui-title"><object type="image/svg+xml" width="90" height="22" data="'+C.getAttribute("src").replace(".gif","-r.svg")+'"><img src="'+C.getAttribute("src").replace(".gif","-wm.gif")+'" width="90" alt="'+C.getAttribute("alt")+'" /></object></div>'}else{j+='<div class="ui-title"><img src="'+C.getAttribute("src").replace(".gif","-wm.gif")+'" width="90" alt="'+C.getAttribute("alt")+'" /></div>'}}else{j+='<div class="ui-title"></div>'}j+='<map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof J!=="undefined"){j+=t+' href="'+J+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=t+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(w.length!==0){j+=w}j+=o+' href="#popupSettings" data-icon="gear">'+O+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(j);b.title[0].className+=" ui-bar-b";q=b.gcnb.find('li[id*="-lang"]');x=B+' id="popupSettings"'+z;x+=p+O+"</h1>"+N+"</div>";x+=h+n;if(q.length>0){x+='<li><a href="#popupLanguages"'+A+">"+pe.dic.get("%languages")+"</a></li>"}x+='<li class="ui-corner-bottom"><a href="#popupAbout"'+A+">"+pe.dic.get("%about")+"</a></li>";x+="</ul>"+P;if(q.length>0){x+=B+' id="popupLanguages"'+z;x+=p+pe.dic.get("%languages")+"</h1>"+K+' href="#popupSettings"'+I+"</div>";x+=h+n;if(q.filter('[id*="-lang-current"]').length===0){x+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+pe.dic.get("%current")+"</a></li>"}G=q.get();for(L=0,u=G.length;L!==u;L+=1){C=G[L];k=C.childNodes[0];x+="<li"+(L===(u-1)?' class="ui-corner-bottom"':"");if(C.id.indexOf("-lang-current")!==-1){x+='><a href="javascript:;" class="ui-disabled">'+C.innerHTML+pe.dic.get("%current")+"</a></li>"}else{x+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}x+="</ul>"+P}x+=B+' id="popupAbout"'+z;x+=p+pe.dic.get("%about")+"</h1>"+K+' href="#popupSettings"'+I+"</div>";x+=h+n;x+="<li>"+b.title.text()+"</li>";C=pe.main.find("#gcwu-date-mod").children();if(C.length!==0){d=C[1];if(d.getElementsByTagName("time").length===0){x+="<li>"+C[0].innerHTML+" "+d.innerHTML+"</li>"}}F=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(L=0,u=F.length;L!==u;L+=1){k=F[L];x+='<li><a href="'+k.href+'">'+k.innerHTML+"</a></li>"}F=b.sft.find(".gcwu-col-head a").get();for(L=0,u=F.length;L!==u;L+=1){k=F[L];C=k.innerHTML;d=C.toLowerCase();x+="<li"+(L===(u-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+C+"</a></li>"}x+="</ul>"+P;pe.bodydiv.append(R+x)}else{q=document.getElementById("gcwu-lang");if(q!==null){G=q.getElementsByTagName("li");E='<div data-role="navbar"><ul>';for(L=0,u=G.length;L<u;L+=1){C=G[L];k=C.getElementsByTagName("a")[0];E+='<li><a href="'+k.href+'"'+(C.hasAttribute("lang")?' lang="'+C.getAttribute("lang")+'"':"")+' data-theme="a">'+k.innerHTML+"</a></li>"}E+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=E;q=document.getElementById("gcwu-other-lang");if(q!==null){q.parentNode.removeChild(q)}}d=document.getElementById("gcwu-tc");if(d!==null){G=d.getElementsByTagName("li");s='<ul class="ui-grid-a">';for(L=0,u=G.length;L<u;L+=1){C=G[L];k=C.getElementsByTagName("a")[0];s+='<li class="ui-block-'+(L%2!==0?"b":"a")+'"><a href="'+k.href+'"'+(C.hasAttribute("lang")?' lang="'+C.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+k.innerHTML+"</a></li>"}s+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=s}if(b.wmms.length!==0){C=b.wmms[0];pe.footer[0].getElementsByTagName("footer")[0].appendChild(C.cloneNode(true));C.parentNode.removeChild(C)}}c(document).on("pagecreate",function(){if(b.menubar.length!==0){C=b.psnb[0];C.parentNode.removeChild(C)}if(b.search.length!==0){C=b.search[0];C.parentNode.removeChild(C)}if(w.length!==0){var V=b.gcnb.find("#gcwu-mnavbar"),X=pe.bodydiv.find("#jqm-mb-menu"),W,U,S,T;V.removeClass("wb-hide");if(X.length!==0){X.append(b.menu);V.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){X.trigger("create");W=X.find(".ui-controlgroup");U=W.get();u=U.length;while(u--){C=U[u];T=C.getElementsByTagName("li")[0];if(T.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&T.className.indexOf("ui-corner-top")===-1){T.className+=" ui-corner-top"}S=W.eq(u).find(".ui-btn").get();C=S[S.length-1];if(C.className.indexOf("ui-corner-bottom")===-1){C.className+=" ui-corner-bottom"}}})}}function i(Z,Y,ac,ab){var aa;c.mobile.showPageLoadingMsg();aa=c.mobile.transitionHandlers.simultaneous("pop",Y,ac,ab);aa.done(function(){c.mobile.hidePageLoadingMsg()});return aa}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));