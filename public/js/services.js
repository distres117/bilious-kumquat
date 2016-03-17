define(function(){
    angular.module('myApp.services', ['ngCookies'])
    .value('version', '0.1')
    .factory('AuthService', function($http, $cookies, $rootScope){
        return {
            set: function(username, successcb, errorcb){
                    var user = $cookies.get("appUser");
                    if (!user){
                        $http.get('/api/users/' + username).then(
                            function(user){
                                $cookies.put("appUser", user.data.name);
                                $rootScope.$emit('loggedIn', user.data.name);
                                if (successcb) successcb();
                            },function(error){
                                if (errorcb) errorcb(error);
                            });
                        }
                    else if (user)
                        $rootScope.$emit('loggedIn', user.data.name);
                        
             },
            get: function(){
                var user = $cookies.get("appUser");
                if (user) {
                    $rootScope.$emit('loggedIn', user);
                    return user;
                }
                else return false;
            },
            remove: function(callback){
                var user = $cookies.get("appUser");
                if (user){
                    $cookies.remove("appUser");
                    $rootScope.$emit('loggedOut');
                    if (callback) callback();
                }
                    
            }
        }
        
    });
});


