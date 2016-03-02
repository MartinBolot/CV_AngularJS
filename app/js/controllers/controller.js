var app = angular.module("controllersModule",[]);
app.controller("LayoutCtrl",function($scope,$rootScope,resumeFactory){
    //scrolls to top
    scrollTop($rootScope);

    resumeFactory.then(function(res){
        if(res){
            var frData = res.data.fr;

            $scope.sections =  {
                "skills" : frData.sections.skills,
                "portfolio" :frData.sections.portfolio,
                "about" :frData.sections.about,
                "languages" :frData.sections.languages,
                "contact" :frData.sections.contact
            };
            $scope.fullName = frData.fullName;
            $scope.role = frData.role;
            $scope.profilePic = frData.profilePic;
            $scope.copyright = frData.copyright;
        }
    });

})
.controller("MotivationCtrl",function($scope,$rootScope,resumeFactory){
    //scrolls to top
    scrollTop($rootScope);

    resumeFactory.then(function(res){
        if(res){
            var frData = res.data.fr;

            $scope.sections =  {
                "motivation":frData.sections.motivation,
                "contact" :frData.sections.contact
            };
            $scope.fullName = frData.fullName;
            $scope.role = frData.role;
            $scope.profilePic = frData.profilePic;
            $scope.copyright = frData.copyright;
        }
    });
});

function scrollTop($rootScope){
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
		$rootScope.animation = currRoute.animation;
    });
    //scrolls to top
    $('html, body').scrollTop(0);
    //cbpAnimatedHeader();
}
