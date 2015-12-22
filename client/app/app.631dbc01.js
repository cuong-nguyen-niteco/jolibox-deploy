"use strict";angular.module("jolibox2App",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),a.state("main",{url:"/",views:{main:{templateUrl:"app/main/main.html",controller:"MainController"}}}).state("subscribe",{url:"/subscribe",views:{main:{templateUrl:"app/subscribe/subscribe.html",controller:"SubscribeController"}}}).state("brands",{url:"/brands",views:{main:{templateUrl:"app/brands/brands.html",controller:"BrandsController"}}}).state("brand-detail",{url:"/brand-detail",views:{main:{templateUrl:"app/brands/brand-detail.html",controller:"BrandDetailController"}}}).state("videos",{url:"/videos",views:{main:{templateUrl:"app/videos/videos.html",controller:"VideosController"}}}).state("reviews",{url:"/reviews",views:{main:{templateUrl:"app/reviews/reviews.html",controller:"ReviewsController"}}}),c.html5Mode(!0)}]).controller("AppController",["$rootScope","$scope",function(a,b){a.App=App,b.activeMenu="home",b.isActive=function(a){return b.activeMenu===a}}]),function(){angular.module("jolibox2App").controller("BrandDetailController",["$scope","$http",function(a,b){a.$parent.activeMenu="brands"}])}(),function(){angular.module("jolibox2App").controller("BrandsController",["$scope","$http",function(a,b){a.$parent.activeMenu="brands",a.activeBrands=App.brands.logos,$("#brand-search").keyup(function(b){13==b.which&&b.preventDefault(),a.filter($("#brand-search").val())}),a.filter=function(b){console.log("filter "+b),a.activeBrands=[];for(var c=0;c<App.brands.logos.length;c++)App.brands.logos[c].name.toLowerCase().indexOf(b.toLowerCase())>-1&&a.activeBrands.push(App.brands.logos[c]);a.$apply()}}])}(),function(){angular.module("jolibox2App").controller("MainController",["$scope","$http",function(a,b){var c={items:5,smartSpeed:800,margin:20,loop:!0,nav:!0,navText:['<a class="prev main__favorites__carousel__item__link" href="#"><span class="glyphicon glyphicon-chevron-left"></span></a>','<a class="next main__favorites__carousel__item__link" href="#"><span class="glyphicon glyphicon-chevron-right"></span></a>'],dots:!1};$(".main__favorites__carousel--container").owlCarousel(c);var d={items:1,smartSpeed:500,margin:20,loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayHoverPause:!0,autoplayTimeout:3e3,animateOut:"slideOutDown",animateIn:"flipInX"};$(".main__brands__carousel--container").owlCarousel(d)}])}(),function(){angular.module("jolibox2App").controller("ReviewsController",["$scope",function(a){a.$parent.activeMenu="reviews"}])}(),function(){angular.module("jolibox2App").controller("SubscribeController",["$scope","$http",function(a,b){a.$parent.activeMenu="subscribe"}])}(),function(){angular.module("jolibox2App").controller("VideosController",["$scope","$http",function(a,b){a.$parent.activeMenu="brands",a.activeVideos=App.videos.items,$("#video-search").keyup(function(b){13==b.which&&b.preventDefault(),a.filter($("#video-search").val())}),a.filter=function(b){console.log("filter "+b),a.activeVideos=[];for(var c=0;c<App.videos.items.length;c++)App.videos.items[c].name.toLowerCase().indexOf(b.toLowerCase())>-1&&a.activeVideos.push(App.videos.items[c]);a.$apply()}}])}(),angular.module("jolibox2App").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"E",link:function(a,b){b.addClass("footer")}}}),angular.module("jolibox2App").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("jolibox2App").controller("NavbarCtrl",["$scope",function(a){}]),angular.module("jolibox2App").directive("navbar",function(){return{templateUrl:"components/navbar/navbar.html",restrict:"E",controller:"NavbarCtrl",link:function(a,b){b.addClass("nav-bar").addClass("nav-bar--fixed"),$("navbar").headroom({offset:150,tolerance:{down:0,up:100},classes:{initial:"animated"}})}}}),angular.module("jolibox2App").run(["$templateCache",function(a){a.put("app/brands/brand-detail.html",'<navbar></navbar><div class=web-bg><div class=container><div class=row><div class=brand-detail><div class=brand-detail__spotlight><div class=row><div class="brand-detail__spotlight__logo col-xs-2"><img src="http://placehold.it/278x200?text=logo" alt=""></div><div class="brand-detail__spotlight__bg col-xs-10"><img src="http://placehold.it/1390x200?text=background" alt=""></div></div><div class=row><div class=brand-detail__spotlight__text></div><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at odio vulputate, vestibulum turpis non, posuere nisl. Donec vulputate ligula eget tortor lobortis, ac commodo purus maximus. Cras placerat at nibh sagittis pulvinar. Quisque feugiat quam ac turpis convallis, eget accumsan diam porta. Suspendisse quis consectetur tortor."</p></div></div><div class=row><div class=brand-detail__products><div class=product-grid><div class="row product-grid__row"><div class="product-grid__cell product-grid__cell--text col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><div class=product-grid__cell-body><h1 class=product-grid__cell-body__title>Product Title</h1><div class=product-grid__cell-body__price>$21.00</div><div class=product-grid__cell-body__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at odio vulputate, vestibulum turpis non, posuere nisl. Donec vulputate ligula eget tortor lobortis, ac commodo purus maximus. Cras placerat at nibh sagittis pulvinar. Quisque feugiat quam ac turpis convallis, eget accumsan diam porta. Suspendisse quis consectetur tortor.</div><h3 class=product-grid__cell-body__title>Product Application</h3><div class=product-grid__cell-body__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at odio vulputate, vestibulum turpis non, posuere nisl. Donec vulputate ligula eget tortor lobortis, ac commodo purus maximus.</div><h3 class=product-grid__cell-body__title>Ingredients</h3><div class=product-grid__cell-body__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at odio vulputate, vestibulum turpis non, posuere nisl.</div><div class="product-grid__cell-body__button btn">X Reviews</div></div></div><div class="product-grid__cell product-grid__cell--image col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><img alt="" src="http://placehold.it/600x600?text=image"></div></div><div class="row product-grid__row"><div class="product-grid__cell product-grid__cell--text col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><div class=product-grid__cell-body><h1 class=product-grid__cell-body__title>Product Title</h1><div class=product-grid__cell-body__price>$21.00</div><div class=product-grid__cell-body__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at odio vulputate, vestibulum turpis non, posuere nisl. Donec vulputate ligula eget tortor lobortis, ac commodo purus maximus. Cras placerat at nibh sagittis pulvinar. Quisque feugiat quam ac turpis convallis, eget accumsan diam porta. Suspendisse quis consectetur tortor.</div><h3 class=product-grid__cell-body__title>Product Application</h3><div class=product-grid__cell-body__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at odio vulputate, vestibulum turpis non, posuere nisl. Donec vulputate ligula eget tortor lobortis, ac commodo purus maximus.</div><h3 class=product-grid__cell-body__title>Ingredients</h3><div class=product-grid__cell-body__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at odio vulputate, vestibulum turpis non, posuere nisl.</div><div class="product-grid__cell-body__button btn">X Reviews</div></div></div><div class="product-grid__cell product-grid__cell--image col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><img alt="" src="http://placehold.it/600x600?text=image"></div></div></div></div></div></div></div></div></div><footer></footer>'),a.put("app/brands/brands.html",'<navbar></navbar><div class=web-bg><div class=container><div class=row><div class=brands><h1 class=brands__title>{{App.brands.title}}</h1><div class=brands__search--container><div class=form-group><input id=brand-search placeholder={{App.brands.search}} class="brands__search form-control"></div></div><div class=brands__item--container><div class=row><div ng-repeat="logo in activeBrands track by $index" class="brands__item col-xs-6 col-sm-3 col-md-2"><div class=brands__item__logo><a href=/brand-detail><img src={{logo.image}} alt=""></a></div></div></div></div></div></div></div></div><footer></footer>'),a.put("app/main/main.html",'<navbar></navbar><section style="background-image: url(/assets/images/home/spotlight.c5ce1347.jpg)" class=spotlight><div class=spotlight__content><div class=container><div class=row><div class="spotlight__content__box col-xs-offset-8 col-xs-4"><div class=spotlight__content__box--container><h1 class=spotlight__content__box__title>December JOLIBOX</h1><div class=vertical-line><div class=vertical-line__hr-90></div></div><div class=spotlight__content__box__content><ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>$200/month</li></ul></div><div class="spotlight__content__box__button btn">Buy Now</div></div></div></div></div></div></section><div class=web-bg><div class=container><div class=row><div class=main><section class=main__guide><div class=row><div class="main__guide__img col-xs-3"><img src="http://placehold.it/540x436?text=Image" alt=""></div><div class="main__guide__img col-xs-9"><img src="http://placehold.it/1200x300?text=Guide%20image" alt=""></div></div></section><section class=main__favorites><h3 class=section-devider><span>Last Beauty Favorites</span></h3><div class=main__favorites__carousel><div class="owl-carousel main__favorites__carousel--container"><div class=main__favorites__carousel__item><img src="http://placehold.it/300x300?text=Image%201" alt=""></div><div class=main__favorites__carousel__item><img src="http://placehold.it/300x300?text=Image%202" alt=""></div><div class=main__favorites__carousel__item><img src="http://placehold.it/300x300?text=Image%203" alt=""></div><div class=main__favorites__carousel__item><img src="http://placehold.it/300x300?text=Image%204" alt=""></div><div class=main__favorites__carousel__item><img src="http://placehold.it/300x300?text=Image%205" alt=""></div><div class=main__favorites__carousel__item><img src="http://placehold.it/300x300?text=Image%206" alt=""></div><div class=main__favorites__carousel__item><img src="http://placehold.it/300x300?text=Image%207" alt=""></div><div class=main__favorites__carousel__item><img src="http://placehold.it/300x300?text=Image%208" alt=""></div><div class=main__favorites__carousel__item><img src="http://placehold.it/300x300?text=Image%209" alt=""></div></div></div></section><section class=main__brands><h3 class=section-devider><span>Featured brands</span></h3><div class=main__brands__carousel><div class="owl-carousel main__brands__carousel--container"><div class=row><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%201" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%202" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%203" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%204" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%205" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%206" alt=""></div></div><div class=row><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%207" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%207" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%209" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%2010" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%2011" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%2012" alt=""></div></div><div class=row><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%2013" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%2014" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%2015" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%2016" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%2017" alt=""></div><div class="main__brands__carousel__item col-xs-2"><img src="http://placehold.it/300x300?text=Image%2018" alt=""></div></div></div></div></section></div></div></div></div><footer></footer>'),a.put("app/main/spotlight.html",'<section style="background-image: url(/assets/images/home/spotlight.c5ce1347.jpg)" class=spotlight><div class=spotlight__content><div class=container><div class=row><div class="spotlight__content__box col-xs-offset-8 col-xs-4"><div class=spotlight__content__box--container><h1 class=spotlight__content__box__title>December JOLIBOX</h1><div class=vertical-line><div class=vertical-line__hr-90></div></div><div class=spotlight__content__box__content><ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>$200/month</li></ul></div><div class="spotlight__content__box__button btn">Buy Now</div></div></div></div></div></div></section>'),a.put("app/reviews/reviews.html","<navbar></navbar><div class=web-bg><div class=container><div class=row><div class=reviews><h1 class=reviews__title>Review box</h1></div></div></div></div><footer></footer>"),a.put("app/subscribe/spotlight.html",""),a.put("app/subscribe/subscribe.html",'<navbar></navbar><div class=web-bg><div class=subscribe><div class=container><div class=row><div class=subscribe__box><div class=row><h3 class="section-devider col-sm-12"><span>{{App.subscribe.title}}</span></h3><div class="subscribe__box__img col-sm-5"><img src={{App.subscribe.image}} alt=""></div><div class="subscribe__box__description col-sm-7"><p>{{App.subscribe.description}}</p></div></div></div></div></div><div class=subscribe__tweet><div class=container><div class=row><h4 class=subscribe__tweet__title>{{App.subscribe.tweets.title}}</h4><div class=row><div ng-repeat="item in App.subscribe.tweets.items" class="subscribe__tweet__item col-xs-3"><div class=subscribe__tweet__item__callout><p>{{item.text}}</p></div><div class=subscribe__tweet__item--container><div class=row><div class="subscribe__tweet__item__avatar col-xs-3"><img src={{item.avatar}} alt=""></div><div class="subscribe__tweet__item__name col-xs-9"><p>{{item.name}}</p><p>{{item.date}}</p></div></div></div></div></div></div></div></div><div class=container><div class=row><div class=grid-container><section class=two-grid><div class=container-fluid><div class="row two-grid__row"><div class="two-grid__cell two-grid__cell--text col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><!--if item.header--><!--  h3.two-grid__cell-header=item.header--><p class=two-grid__cell-body><h4 class=two-grid__cell-body__title>Title something</h4><div class=two-grid__cell-body__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis varius sapien sed pretium. Vestibulum pharetra viverra erat tempus consectetur. Phasellus laoreet sagittis libero vel fringilla. Vestibulum bibendum mauris vitae dolor tempor euismod. Curabitur non dictum lorem, ac pharetra velit. Pellentesque ut volutpat risus.</div></p></div><div class="two-grid__cell two-grid__cell--image two-grid__cell--image-right col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><img alt="" src="http://placehold.it/600x300?text=Logo"></div></div><div class="row two-grid__row"><div class="two-grid__cell two-grid__cell--text col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><!--if item.header--><!--  h3.two-grid__cell-header=item.header--><p class=two-grid__cell-body><h4 class=two-grid__cell-body__title>Title something</h4><div class=two-grid__cell-body__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis varius sapien sed pretium. Vestibulum pharetra viverra erat tempus consectetur. Phasellus laoreet sagittis libero vel fringilla. Vestibulum bibendum mauris vitae dolor tempor euismod. Curabitur non dictum lorem, ac pharetra velit. Pellentesque ut volutpat risus.</div></p></div><div class="two-grid__cell two-grid__cell--image two-grid__cell--image-right col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><img alt="" src="http://placehold.it/600x300?text=Logo"></div></div><div class="row two-grid__row"><div class="two-grid__cell two-grid__cell--text col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><!--if item.header--><!--  h3.two-grid__cell-header=item.header--><p class=two-grid__cell-body><h4 class=two-grid__cell-body__title>Title something</h4><div class=two-grid__cell-body__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis varius sapien sed pretium. Vestibulum pharetra viverra erat tempus consectetur. Phasellus laoreet sagittis libero vel fringilla. Vestibulum bibendum mauris vitae dolor tempor euismod. Curabitur non dictum lorem, ac pharetra velit. Pellentesque ut volutpat risus.</div></p></div><div class="two-grid__cell two-grid__cell--image two-grid__cell--image-right col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><img alt="" src="http://placehold.it/600x300?text=Logo"></div></div><div class="row two-grid__row"><div class="two-grid__cell two-grid__cell--text col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><!--if item.header--><!--  h3.two-grid__cell-header=item.header--><p class=two-grid__cell-body><h4 class=two-grid__cell-body__title>Title something</h4><div class=two-grid__cell-body__text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis varius sapien sed pretium. Vestibulum pharetra viverra erat tempus consectetur. Phasellus laoreet sagittis libero vel fringilla. Vestibulum bibendum mauris vitae dolor tempor euismod. Curabitur non dictum lorem, ac pharetra velit. Pellentesque ut volutpat risus.</div></p></div><div class="two-grid__cell two-grid__cell--image two-grid__cell--image-right col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><img alt="" src="http://placehold.it/600x300?text=Logo"></div></div></div></section></div></div><div class=row><div class=subscribe__button--container><div class="subscribe__button btn"><span>Subscribe</span></div></div></div></div></div></div><footer></footer>'),a.put("app/videos/videos.html",'<navbar></navbar><div class=web-bg><div class=container><div class=row><div class=videos><h1 class=videos__title>{{App.videos.title}}</h1><div class=videos__search--container><div class=form-group><input id=video-search placeholder={{App.videos.search}} class="videos__search form-control"></div></div><div class=videos__item--container><div class=row><div ng-repeat="video in activeVideos track by $index" class="videos__item col-xs-6 col-sm-3 col-md-2"><div class=videos__item__video><a href=#><img src={{video.image}} alt=""></a></div></div></div></div></div></div></div></div><footer></footer>'),a.put("components/footer/footer.html","<div class=container><p>Jolibox | <a href=#>@Jolibox</a></p></div>"),a.put("components/mixins/common-grid/_common-grid.html",""),a.put("components/mixins/plan-package/_plan-package.html",""),a.put("components/mixins/product-grid/_product-grid.html",""),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html","<div class=container><div class=row><div class=nav-bar__first-line><div class=\"nav-bar__first-line__logo col-xs-9\"><div class=nav-bar__first-line__logo__img><a href=\"/\"><img src=\"http://placehold.it/100x100?text=People\" alt=\"\"></a></div><h2 class=nav-bar__first-line__logo__name>JoliBox</h2><div class=nav-bar__first-line__logo__menu><ul><li><a href=/subscribe><span ng-class=\"{'nav-bar--active': isActive('subscribe')}\">Subscribe</span></a></li><li><a href=/videos><span ng-class=\"{'nav-bar--active': isActive('videos')}\">Videos</span></a></li><li><a href=/brands><span ng-class=\"{'nav-bar--active': isActive('brands')}\">Brands</span></a></li><li><a href=/reviews><span ng-class=\"{'nav-bar--active': isActive('reviews')}\">Reviews</span></a></li><li><a href=#><span ng-class=\"{'nav-bar--active': isActive('aboutUs')}\">About us</span></a></li><li><a href=#><span ng-class=\"{'nav-bar--active': isActive('ContactUs')}\">Contact us</span></a></li></ul></div></div><div class=\"nav-bar__first-line__login col-xs-3\"><div class=\"nav-bar__first-line__login__button btn\"><i class=\"fa fa-user-plus icon--circle\"></i><i class=\"fa fa-user-plus icon--button\"><span>&nbsp;Join us</span></i></div><div class=\"nav-bar__first-line__login__button btn\"><i class=\"fa fa-user icon--circle\"></i><i class=\"fa fa-user icon--button\"><span>&nbsp;Login</span></i></div></div></div><div class=nav-bar__second-line><ul><li><a href=/subscribe><span ng-class=\"{'nav-bar--active': isActive('subscribe')}\">Subscribe</span></a></li><li><a href=/videos><span ng-class=\"{'nav-bar--active': isActive('videos')}\">Videos</span></a></li><li><a href=/brands><span ng-class=\"{'nav-bar--active': isActive('brands')}\">Brands</span></a></li><li><a href=/reviews><span ng-class=\"{'nav-bar--active': isActive('reviews')}\">Reviews</span></a></li><li><a href=#><span ng-class=\"{'nav-bar--active': isActive('aboutUs')}\">About us</span></a></li><li><a href=#><span ng-class=\"{'nav-bar--active': isActive('ContactUs')}\">Contact us</span></a></li></ul></div></div></div>")}]);