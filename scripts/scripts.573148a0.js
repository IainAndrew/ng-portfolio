"use strict";angular.module("app",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","app.directives.sidebar","app.directives.headerBlock","app.directives.dropdown","app.directives.backToTop","app.directives.tooltip"]).config(["$urlRouterProvider","$stateProvider",function(a,b){a.when("/plugmedia","/plugmedia/").when("/peter-ashmore","/peter-ashmore/").when("/trunkys","/trunkys/").when("/footerreveal","/footerreveal/").when("/simplespin","/simplespin/").otherwise("/"),b.state("about",{url:"/",templateUrl:"views/about.html",controller:"AboutCtrl"}).state("about-more",{url:"/about-more",templateUrl:"views/about-more.html",controller:"AboutCtrl"}).state("portfolio",{url:"/portfolio",templateUrl:"views/portfolio.html",controller:"PortfolioCtrl"}).state("plugmedia",{url:"/plugmedia",templateUrl:"views/plugmedia.html",controller:"ProjectCtrl"}).state("plugmedia.overview",{url:"/",templateUrl:"views/plugmedia/overview.html",controller:"ProjectCtrl"}).state("plugmedia.web-design",{url:"/web-design",templateUrl:"views/plugmedia/webdesign.html",controller:"ProjectCtrl"}).state("plugmedia.web-development",{url:"/web-development",templateUrl:"views/plugmedia/webdev.html",controller:"ProjectCtrl"}).state("plugmedia.logo-design",{url:"/logo-design",templateUrl:"views/plugmedia/logodesign.html",controller:"ProjectCtrl"}).state("peter-ashmore",{url:"/peter-ashmore",templateUrl:"views/peter-ashmore.html",controller:"ProjectCtrl"}).state("peter-ashmore.overview",{url:"/",templateUrl:"views/peter-ashmore/overview.html",controller:"ProjectCtrl"}).state("peter-ashmore.web-design",{url:"/web-design",templateUrl:"views/peter-ashmore/webdesign.html",controller:"ProjectCtrl"}).state("peter-ashmore.web-development",{url:"/web-development",templateUrl:"views/peter-ashmore/webdev.html",controller:"ProjectCtrl"}).state("peter-ashmore.graphic-design",{url:"/graphic-design",templateUrl:"views/peter-ashmore/graphicdesign.html",controller:"ProjectCtrl"}).state("peter-ashmore.logo-design",{url:"/logo-design",templateUrl:"views/peter-ashmore/logodesign.html",controller:"ProjectCtrl"}).state("trunkys",{url:"/trunkys",templateUrl:"views/trunkys.html",controller:"ProjectCtrl"}).state("trunkys.overview",{url:"/",templateUrl:"views/trunkys/overview.html",controller:"ProjectCtrl"}).state("trunkys.graphic-design",{url:"/graphic-design",templateUrl:"views/trunkys/graphicdesign.html",controller:"ProjectCtrl"}).state("trunkys.ui-design",{url:"/ui-design",templateUrl:"views/trunkys/uidesign.html",controller:"ProjectCtrl"}).state("footerreveal",{url:"/footerreveal",templateUrl:"views/footerreveal.html",controller:"ProjectCtrl"}).state("footerreveal.overview",{url:"/",templateUrl:"views/footerreveal/overview.html",controller:"ProjectCtrl"}).state("footerreveal.web-development",{url:"/web-development",templateUrl:"views/footerreveal/webdev.html",controller:"ProjectCtrl"}).state("simplespin",{url:"/simplespin",templateUrl:"views/simplespin.html",controller:"ProjectCtrl"}).state("simplespin.overview",{url:"/",templateUrl:"views/simplespin/overview.html",controller:"ProjectCtrl"}).state("simplespin.web-development",{url:"/web-development",templateUrl:"views/simplespin/webdev.html",controller:"ProjectCtrl"}).state("contact",{url:"/contact",templateUrl:"views/contact.html",controller:"ContactCtrl"})}]).run(["$rootScope","$state",function(a,b){a.$state=b}]),angular.module("app").controller("AboutCtrl",["$scope",function(a){a.technologies=["HTML5","CSS3","Javascript","jQuery","AngularJS","Sass","Bourbon","Neat","LESS","Grunt","Bower","Yeoman","Git/Github","Twitter Bootstrap","Zurb Foundation","Wordpress","Joomla","Adobe Illustrator"]}]),angular.module("app").controller("PortfolioCtrl",["$scope",function(a){a.projects=[{name:"Plugmedia",roles:["Web Design","Web Development","Logo Design"],desc:"A website and logo design for a Dublin based digital media agency.",url:"plugmedia",liveUrl:"//www.plugmedia.ie",image:"../../images/plugmedia/thumb.png"},{name:"Peter Ashmore",roles:["Web Design","Web Development","Logo Design","Graphic Design"],desc:"A single page website for a talented audio engineer & producer.",url:"peter-ashmore",liveUrl:"//peterashmore.net",image:"../../images/peter-ashmore/thumb.png"},{name:"Footer-reveal.js",roles:["Web Development"],desc:"A jQuery plugin for quick implementation of a revealing footer effect.",url:"footerreveal",liveUrl:"//iainandrew.github.io/footer-reveal",image:"../../images/landscape.png"},{name:"Trunkys",roles:["Graphic Design"],desc:"Illustrations and UI design for a mobile app concept.",url:"trunkys",liveUrl:"",image:"../../images/trunkys/thumb.png"},{name:"Simplespin.css",roles:["Web Development"],desc:"A CSS library for basic spinning animations, built with LESS.",url:"simplespin",liveUrl:"//iainandrew.github.io/simplespin.css",image:"../../images/simplespin/thumb.gif"}]}]),angular.module("app").controller("ProjectCtrl",["$scope",function(a){a.projects=[{name:"Plugmedia",items:[{label:"Overview",url:"plugmedia.overview"},{label:"Web Design",url:"plugmedia.web-design"},{label:"Web Development",url:"plugmedia.web-development"},{label:"Logo Design",url:"plugmedia.logo-design"}],prev:"",next:"#/peter-ashmore"},{name:"Peter Ashmore",items:[{label:"Overview",url:"peter-ashmore.overview"},{label:"Web Design",url:"peter-ashmore.web-design"},{label:"Web Development",url:"peter-ashmore.web-development"},{label:"Graphic Design",url:"peter-ashmore.graphic-design"},{label:"Logo Design",url:"peter-ashmore.logo-design"}],prev:"#/plugmedia",next:"#/footerreveal"},{name:"Footer-Reveal.js",items:[{label:"Overview",url:"footerreveal.overview"},{label:"Web Development",url:"footerreveal.web-development"}],prev:"#/peter-ashmore",next:"#/trunkys"},{name:"Trunkys",items:[{label:"Overview",url:"trunkys.overview"},{label:"Graphic Design",url:"trunkys.graphic-design"},{label:"UI Design",url:"trunkys.ui-design"}],prev:"#/footerreveal",next:"#/simplespin"},{name:"Simplespin.css",items:[{label:"Overview",url:"simplespin.overview"},{label:"Web Development",url:"simplespin.web-development"}],prev:"#/trunkys",next:""}]}]),angular.module("app").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("app.directives.sidebar",[]).directive("sidebar",function(){return{restrict:"E",scope:{projects:"=",filterBy:"="},link:function(){function a(){$(".container").is(".plugmedia, .plugmedia-overview, .plugmedia-web-design, .plugmedia-web-development,.plugmedia-logo-design,.peter-ashmore,.peter-ashmore-overview,.peter-ashmore-web-design,.peter-ashmore-web-development,.peter-ashmore-graphic-design,.peter-ashmore-logo-design,.trunkys,.trunkys-overview,.trunkys-graphic-design,.trunkys-ui-design,.footerreveal,.footerreveal-overview,.footerreveal-web-development,.simplespin,.simplespin-overview,.simplespin-web-development")?b.addClass("project-load"):b.removeClass("project-load")}var b=$(".view-container");setInterval(a,100)},templateUrl:"views/sidebar.html"}}),angular.module("app.directives.headerBlock",[]).directive("headerBlock",function(){return{restrict:"E",scope:{heading:"=",subhead:"="},templateUrl:"views/header-block.html"}}),angular.module("app.directives.dropdown",[]).directive("dropdown",function(){return{restrict:"A",link:function(a,b){var c=b.find("#menu-toggle"),d=b.find("ul");c.click(function(){d.toggleClass("menu-show"),c.find("i").toggleClass("icon-menu icon-close")}),d.click(function(){setTimeout(function(){d.removeClass("menu-show"),c.find("i").toggleClass("icon-menu icon-close")},500)})}}}),angular.module("app.directives.backToTop",[]).directive("backToTop",function(){return{restrict:"E",scope:{offset:"="},templateUrl:"views/back-to-top.html",link:function(a,b){var c=$(".view-container").add($(".project-main")).add($(".project-container"));b.on("click",function(b){c.animate({scrollTop:c.offset().top+a.offset},"slow"),b.preventDefault()})}}}),angular.module("app.directives.tooltip",[]).directive("tooltip",function(){return{restrict:"A",link:function(a,b){b.append('<div class="tooltip"><div class="tooltip-inner"><div class="tooltip-text">'+b.attr("tooltip")+"</div></div></div>"),Modernizr.touch?b.click(function(){b.find(".tooltip").toggleClass("tooltip-show")}):b.hover(function(){b.find(".tooltip").toggleClass("tooltip-show")})}}});