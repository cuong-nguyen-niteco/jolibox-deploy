"use strict";angular.module("jolibox2App",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),a.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),c.html5Mode(!0)}]),function(){angular.module("jolibox2App").controller("MainController",["$scope","$http",function(a,b){var c={items:5,smartSpeed:800,margin:20,loop:!0,nav:!0,navText:['<a class="prev main__favorites__carousel__item__link" href="#")><span class="glyphicon glyphicon-chevron-left"></span></a>','<a class="next main__favorites__carousel__item__link" href="#"><span class="glyphicon glyphicon-chevron-right"></span></a>'],dots:!1};$(".main__favorites__carousel--container").owlCarousel(c);var d={items:1,smartSpeed:500,margin:20,loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayHoverPause:!0,autoplayTimeout:3e3,animateOut:"slideOutDown",animateIn:"flipInX"};$(".main__brands__carousel--container").owlCarousel(d)}])}(),angular.module("jolibox2App").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"E",link:function(a,b){b.addClass("footer")}}}),angular.module("jolibox2App").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("jolibox2App").controller("NavbarCtrl",["$scope",function(a){}]),angular.module("jolibox2App").directive("navbar",function(){return{templateUrl:"components/navbar/navbar.html",restrict:"E",controller:"NavbarCtrl",link:function(a,b){b.addClass("nav-bar").addClass("nav-bar--fixed")}}}),angular.module("jolibox2App").run(["$templateCache",function(a){a.put("app/main/main.html",'<navbar></navbar><section style="background-image: url(/assets/images/home/spotlight.c5ce1347.jpg)" class=spotlight><div class=spotlight__content><div class=container><div class=row><div class="spotlight__content__box col-xs-offset-8 col-xs-4"><div class=spotlight__content__box--container><h1 class=spotlight__content__box__title>December JOLIBOX</h1><div class=vertical-line><div class=vertical-line__hr-90></div></div><div class=spotlight__content__box__content><ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>$200/month</li></ul></div><div class="spotlight__content__box__button btn">Buy Now</div></div></div></div></div></div></section><div class=web-bg><div class=container><div class=row><div class=main><section class=main__guide><div class=row><div class="main__guide__img col-xs-3"><img src="http://placehold.it/540x436?text=Image"></div><div class="main__guide__img col-xs-9"><img src="http://placehold.it/1200x300?text=Guide%20image"></div></div></section><section class=main__favorites><h3 class=section-devider><span>Last Beauty Favorites</span></h3><div class=main__favorites__carousel><div class="owl-carousel main__favorites__carousel--container"><div class=main__favorites__carousel__item><a href=#><img src="http://placehold.it/300x300?text=Image 1"></a></div><div class=main__favorites__carousel__item><a href=#><img src="http://placehold.it/300x300?text=Image 2"></a></div><div class=main__favorites__carousel__item><a href=#><img src="http://placehold.it/300x300?text=Image 3"></a></div><div class=main__favorites__carousel__item><a href=#><img src="http://placehold.it/300x300?text=Image 4"></a></div><div class=main__favorites__carousel__item><a href=#><img src="http://placehold.it/300x300?text=Image 5"></a></div><div class=main__favorites__carousel__item><a href=#><img src="http://placehold.it/300x300?text=Image 6"></a></div><div class=main__favorites__carousel__item><a href=#><img src="http://placehold.it/300x300?text=Image 7"></a></div><div class=main__favorites__carousel__item><a href=#><img src="http://placehold.it/300x300?text=Image 8"></a></div></div></div></section><section class=main__brands><h3 class=section-devider><span>Featured brands</span></h3><div class=main__brands__carousel><div class="owl-carousel main__brands__carousel--container"><div class=row><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 1"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 2"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 3"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 4"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 5"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 6"></a></div></div><div class=row><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 7"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 7"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 9"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 10"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 11"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 12"></a></div></div><div class=row><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 13"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 14"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 15"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 16"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 17"></a></div><div class="main__brands__carousel__item col-xs-2"><a href=#><img src="http://placehold.it/300x300?text=Image 18"></a></div></div></div></div></section></div></div></div></div><footer></footer>'),a.put("app/main/spotlight.html",'<section style="background-image: url(/assets/images/home/spotlight.c5ce1347.jpg)" class=spotlight><div class=spotlight__content><div class=container><div class=row><div class="spotlight__content__box col-xs-offset-8 col-xs-4"><div class=spotlight__content__box--container><h1 class=spotlight__content__box__title>December JOLIBOX</h1><div class=vertical-line><div class=vertical-line__hr-90></div></div><div class=spotlight__content__box__content><ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>$200/month</li></ul></div><div class="spotlight__content__box__button btn">Buy Now</div></div></div></div></div></div></section>'),a.put("components/footer/footer.html","<div class=container><p>Jolibox | <a href=#>@Jolibox</a></p></div>"),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div class=container><div class=row><div class=nav-bar__first-line><div class="nav-bar__first-line__logo col-xs-6"><div class=nav-bar__first-line__logo__img><img src="http://placehold.it/100x100?text=People" alt=""></div><h2 class=nav-bar__first-line__logo__name>JoliBox</h2></div><div class="nav-bar__first-line__login col-xs-6"><div class="nav-bar__first-line__login__button btn">Join us</div><div class="nav-bar__first-line__login__button btn">Login</div></div></div><div class=nav-bar__second-line><ul><li><a href=#>Subscribe</a></li><li><a href=#>Videos</a></li><li><a href=#>Brands</a></li><li><a href=#>Reviews</a></li><li><a href=#>About us</a></li><li><a href=#>Contact us</a></li></ul></div></div></div>')}]);