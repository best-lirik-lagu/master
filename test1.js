//<![CDATA[		  
var jxy,cdx;!function(e,a,l){var g={
widgetTitle:"<h4>Artikel Terkait:</h4>",
widgetStyle:3,
homePage:"https://free-thm.blogspot.com",
numPosts:8,
summaryLength:0,
titleLength:"auto",
thumbnailWidth:159,
thumbnailHeight:89,
noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
containerId:"related-post",
newTabLink:!1,
moreText:"Baca Selengkapnya",
pret:function(){}};for(var t in zcx)g[t]="undefined"==zcx[t]?g[t]:zcx[t];var r=function(e){var t=a.createElement("script");t.type="text/javascript",t.src=e,l.appendChild(t)},A=function(e){var t,a,l=e.length;if(0===l)return!1;for(;--l;)t=Math.floor(Math.random()*(l+1)),a=e[l],e[l]=e[t],e[t]=a;return e},i="object"==typeof kancrut&&0<kancrut.length?"/-/"+A(kancrut)[0]:"";jxy=function(e){var t,a,l=e.feed.openSearch$totalResults.$t-g.numPosts,n=(t=1,a=0<l?l:1,Math.floor(Math.random()*(a-t+1))+t);r(g.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&start-index="+n+"&max-results="+g.numPosts+"&callback=cdx")},cdx=function(e){var t,a,l,n,r=document.getElementById(g.containerId),i=A(e.feed.entry),s=g.widgetStyle,o=g.widgetTitle+'<ul class="related-post-style-'+s+'">',d=g.newTabLink?' target="_blank"':"",m='<span style="display:block;clear:both;"></span>';if(r){for(var h=0;h<g.numPosts&&h!=i.length;h++){a=i[h].title.$t,l="auto"!==g.titleLength&&g.titleLength<a.length?a.substring(0,g.titleLength)+"&hellip;":a,n="media$thumbnail"in i[h]&&!1!==g.thumbnailWidth?i[h].media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/\/s[0-9]+(\-c)?/,"/w"+g.thumbnailWidth+"-h"+g.thumbnailHeight+"-c"):g.noImage,"summary"in i[h]&&0<g.summaryLength&&i[h].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,g.summaryLength);for(var c=0,u=i[h].link.length;c<u;c++)t="alternate"==i[h].link[c].rel?i[h].link[c].href:"#";3==s&&(o+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" aria-label="related post" href="'+t+'"'+d+'><img alt="'+a+'" class="lazyload related-post-item-thumbnail" data-src="'+n+'" width="'+g.thumbnailWidth+'" height="'+g.thumbnailHeight+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+a+'" href="'+t+'"'+d+">"+l+"</a></div>"+m+"</li>")}r.innerHTML=o+="</ul>"+m,g.pret()}},r(g.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&max-results=0&callback=jxy")}(window,document,document.getElementsByTagName("head")[0]);
//]]>
