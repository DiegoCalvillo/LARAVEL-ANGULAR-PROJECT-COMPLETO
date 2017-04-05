'use strict';

angular.module('apiFrontApp')
	.controller('LoginCtrl', function(authUser){
		var vm = this;
		vm.loginForm = {
			email: 'diegocalvillordz@gmail.com',
			password: '12345678'
		};
		vm.login = function () {
			authUser.loginApi(vm.loginForm);
		}
});
