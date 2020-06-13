gdjs.TitleCode = {};
gdjs.TitleCode.GDInstructionsObjects1= [];
gdjs.TitleCode.GDInstructionsObjects2= [];
gdjs.TitleCode.GDLogoObjects1= [];
gdjs.TitleCode.GDLogoObjects2= [];
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];
gdjs.TitleCode.GDBackObjects1= [];
gdjs.TitleCode.GDBackObjects2= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};


gdjs.TitleCode.eventsList0x6efa3c = function(runtimeScene) {

}; //End of gdjs.TitleCode.eventsList0x6efa3c
gdjs.TitleCode.eventsList0x6efc2c = function(runtimeScene) {

}; //End of gdjs.TitleCode.eventsList0x6efc2c
gdjs.TitleCode.eventsList0x5b71c8 = function(runtimeScene) {

{


gdjs.TitleCode.eventsList0x6efa3c(runtimeScene);
}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "Back", 0);
}}

}


{


gdjs.TitleCode.eventsList0x6efc2c(runtimeScene);
}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rope Example", false);
}}

}


}; //End of gdjs.TitleCode.eventsList0x5b71c8


gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDInstructionsObjects1.length = 0;
gdjs.TitleCode.GDInstructionsObjects2.length = 0;
gdjs.TitleCode.GDLogoObjects1.length = 0;
gdjs.TitleCode.GDLogoObjects2.length = 0;
gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDBackObjects1.length = 0;
gdjs.TitleCode.GDBackObjects2.length = 0;

gdjs.TitleCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
