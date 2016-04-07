var statelineApp = angular.module('statelineApp');

statelineApp.controller('NutritionController', ['$scope', function($scope) {
  $scope.supplements = [
    {name: 'Adrenal 240', imgPath: 'images/commercial/supplements/adrenal_240.jpg'},
    {name: 'Anti-Inflammatory Advanced EXL9', imgPath: 'images/commercial/supplements/anti_inflammatory_exl.jpg'},
    {name: 'Body Lean 3000 Ultra Thermogenic', imgPath: 'images/commercial/supplements/body_lean.jpg'},
    {name: 'Colon Intestinal Cleanse 3-in-1 Complete', imgPath: 'images/commercial/supplements/colon_intestinal_cleanse.jpg'},
    {name: 'Co-Enzyme', imgPath: 'images/commercial/supplements/co_enzyme.jpg'},
    {name: 'GI-Digestive', imgPath: 'images/commercial/supplements/gi_digestive.jpg'},
    {name: 'Essential Blend Omega', imgPath: 'images/commercial/supplements/essential_blend_omega.jpg'},
    {name: 'Essential Step Cholesterol', imgPath: 'images/commercial/supplements/essential_step_cholesterol.jpg'},
    {name: 'Joint Relief', imgPath: 'images/commercial/supplements/joint_relief.jpg'},
    {name: 'Liver Cleanse', imgPath: 'images/commercial/supplements/liver_cleanse.jpg'},
    {name: 'Muscle Ezze', imgPath: 'images/commercial/supplements/muscle_ezze.jpg'},
    {name: 'Multivitamins', imgPath: 'images/commercial/supplements/multivitamins.jpg'},
    {name: 'Natural Greens', imgPath: 'images/commercial/supplements/natural_greens.jpg'},
    {name: 'Menopause Advanced', imgPath: 'images/commercial/supplements/menopause_advanced.jpg'},
    {name: 'Osteo Bone Complex', imgPath: 'images/commercial/supplements/osteo_bone_complex.jpg'},
    {name: 'Protein Greens', imgPath: 'images/commercial/supplements/protein_greens.jpg'},
    {name: "Men's Health - Prostate", imgPath: 'images/commercial/supplements/mens_health.jpg'},
    {name: 'Vitamin B12 Sublingual', imgPath: 'images/commercial/supplements/vitamin_b12.jpg'},
    {name: 'Ultra Pure Omega', imgPath: 'images/commercial/supplements/ultra_pure_omega.jpg'},
    {name: 'Whey Protein', imgPath: 'images/commercial/supplements/whey_protein.jpg'},
    {name: 'Probiotics', imgPath: 'images/commercial/supplements/probiotics.jpg'}
  ];

  console.log("Supplements: ", $scope.supplements);
}]);