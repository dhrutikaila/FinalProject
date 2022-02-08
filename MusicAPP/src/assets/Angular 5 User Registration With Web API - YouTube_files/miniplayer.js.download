(function(g){var window=this;'use strict';var J6=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.oe=!1;this.player=a;this.S(a,"minimized",this.cg);this.S(a,"onStateChange",this.zH)},K6=function(a){g.qM.call(this,a);
this.i=new J6(this.player);this.i.hide();g.cM(this.player,this.i.element,4);a.Re()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(J6,g.V);g.k=J6.prototype;
g.k.pF=function(){this.tooltip=new g.fQ(this.player,this);g.J(this,this.tooltip);g.cM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.zc=new g.jN(this.player);g.J(this,this.zc);this.Fg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.J(this,this.Fg);this.Fg.Ca(this.element);this.S(this.Fg.element,"click",this.RA);var a=new g.V({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Close"},U:[g.cK()]});g.J(this,a);a.Ca(this.Fg.element);this.S(a.element,"click",this.Mi);
a=new g.X1(this.player,this);g.J(this,a);a.Ca(this.Fg.element);this.Rp=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.J(this,this.Rp);this.Rp.Ca(this.Fg.element);this.S(this.Rp.element,"click",this.RA);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,b);b.Ca(this.Rp.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ca(this.Rp.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,c);c.Ca(this.Rp.element);this.kO=new g.IO(this.player,
this,!1);g.J(this,this.kO);this.kO.Ca(b.element);b=new g.GO(this.player,this);g.J(this,b);b.Ca(a.element);this.nextButton=new g.IO(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ca(c.element);this.Ig=new g.SP(this.player,this);g.J(this,this.Ig);this.Ig.Ca(this.Fg.element);this.Ic=new g.QO(this.player,this);g.J(this,this.Ic);g.cM(this.player,this.Ic.element,4);this.HA=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.J(this,this.HA);g.cM(this.player,this.HA.element,4);a=new g.V({D:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Close"},U:[g.cK()]});g.J(this,a);a.Ca(this.HA.element);this.S(a.element,"click",this.Mi);a=new g.V({D:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],V:{"aria-label":"Close"},U:[g.jK()]});g.J(this,a);a.Ca(this.HA.element);this.S(a.element,"click",this.VW);this.S(this.player,"presentingplayerstatechange",this.Rc);this.S(this.player,"appresize",this.yb);this.S(this.player,"fullscreentoggled",this.yb);this.yb()};
g.k.show=function(){this.Rd=new g.lq(this.Dq,null,this);this.Rd.start();this.oe||(this.pF(),this.oe=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Ic.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Rd&&(this.Rd.dispose(),this.Rd=void 0);g.V.prototype.hide.call(this);this.player.Re()||(this.oe&&this.Ic.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.Rd&&(this.Rd.dispose(),this.Rd=void 0);g.V.prototype.ra.call(this)};
g.k.Mi=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.VW=function(){this.player.playVideo()};
g.k.RA=function(a){if(a.target===this.Fg.element||a.target===this.Rp.element)this.player.T().L("kevlar_miniplayer_play_pause_on_scrim")?g.PI(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.k.cg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Re())};
g.k.Cd=function(){this.Ic.Rb();this.Ig.Rb()};
g.k.Dq=function(){this.Cd();this.Rd&&this.Rd.start()};
g.k.Rc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.yb=function(){g.dP(this.Ic,0,this.player.bb().getPlayerSize().width,!1);g.RO(this.Ic)};
g.k.zH=function(a){this.player.Re()&&(0===a?this.hide():this.show())};
g.k.hc=function(){return this.tooltip};
g.k.Xe=function(){return!1};
g.k.Af=function(){return!1};
g.k.Di=function(){return!1};
g.k.Mx=function(){};
g.k.Hn=function(){};
g.k.Is=function(){};
g.k.Wn=function(){return null};
g.k.ow=function(){return null};
g.k.Cj=function(){return new g.$m(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Kq=function(a,b,c,d,e){var f=0,h=d=0,l=g.un(a);if(b){c=g.Cq(b,"ytp-prev-button")||g.Cq(b,"ytp-next-button");var m=g.Cq(b,"ytp-play-button"),n=g.Cq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.sn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Cq(b,"ytp-miniplayer-button-top-left"),f=g.sn(b,this.element),b=g.un(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.Vg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Al=function(){};
g.k.Rk=function(){return!1};g.w(K6,g.qM);K6.prototype.create=function(){};
K6.prototype.aj=function(){return!1};
K6.prototype.load=function(){this.player.hideControls();this.i.show()};
K6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.pM("miniplayer",K6);})(_yt_player);
