gdjs.Rope_32ExampleCode = {};
gdjs.Rope_32ExampleCode.GDSwingBoxObjects1= [];
gdjs.Rope_32ExampleCode.GDSwingBoxObjects2= [];
gdjs.Rope_32ExampleCode.GDSwingBoxObjects3= [];
gdjs.Rope_32ExampleCode.GDMainCharObjects1= [];
gdjs.Rope_32ExampleCode.GDMainCharObjects2= [];
gdjs.Rope_32ExampleCode.GDMainCharObjects3= [];
gdjs.Rope_32ExampleCode.GDRopeObjects1= [];
gdjs.Rope_32ExampleCode.GDRopeObjects2= [];
gdjs.Rope_32ExampleCode.GDRopeObjects3= [];
gdjs.Rope_32ExampleCode.GDFollowObjects1= [];
gdjs.Rope_32ExampleCode.GDFollowObjects2= [];
gdjs.Rope_32ExampleCode.GDFollowObjects3= [];
gdjs.Rope_32ExampleCode.GDPlatformObjects1= [];
gdjs.Rope_32ExampleCode.GDPlatformObjects2= [];
gdjs.Rope_32ExampleCode.GDPlatformObjects3= [];
gdjs.Rope_32ExampleCode.GDFinishObjects1= [];
gdjs.Rope_32ExampleCode.GDFinishObjects2= [];
gdjs.Rope_32ExampleCode.GDFinishObjects3= [];
gdjs.Rope_32ExampleCode.GDBackgroundObjects1= [];
gdjs.Rope_32ExampleCode.GDBackgroundObjects2= [];
gdjs.Rope_32ExampleCode.GDBackgroundObjects3= [];
gdjs.Rope_32ExampleCode.GDMainShaowObjects1= [];
gdjs.Rope_32ExampleCode.GDMainShaowObjects2= [];
gdjs.Rope_32ExampleCode.GDMainShaowObjects3= [];
gdjs.Rope_32ExampleCode.GDBoundsLineObjects1= [];
gdjs.Rope_32ExampleCode.GDBoundsLineObjects2= [];
gdjs.Rope_32ExampleCode.GDBoundsLineObjects3= [];

gdjs.Rope_32ExampleCode.conditionTrue_0 = {val:false};
gdjs.Rope_32ExampleCode.condition0IsTrue_0 = {val:false};
gdjs.Rope_32ExampleCode.condition1IsTrue_0 = {val:false};
gdjs.Rope_32ExampleCode.condition2IsTrue_0 = {val:false};
gdjs.Rope_32ExampleCode.conditionTrue_1 = {val:false};
gdjs.Rope_32ExampleCode.condition0IsTrue_1 = {val:false};
gdjs.Rope_32ExampleCode.condition1IsTrue_1 = {val:false};
gdjs.Rope_32ExampleCode.condition2IsTrue_1 = {val:false};


gdjs.Rope_32ExampleCode.eventsList0x6b24cc = function(runtimeScene) {

{


{
/* Reuse gdjs.Rope_32ExampleCode.GDFollowObjects1 */
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDFollowObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDFollowObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Rope_32ExampleCode.GDFollowObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDFollowObjects1[0] : null), true, "", 0);
}}

}


}; //End of gdjs.Rope_32ExampleCode.eventsList0x6b24cc
gdjs.Rope_32ExampleCode.eventsList0x6f309c = function(runtimeScene) {

{


{
gdjs.Rope_32ExampleCode.GDFollowObjects1.createFrom(runtimeScene.getObjects("Follow"));
gdjs.Rope_32ExampleCode.GDMainCharObjects1.createFrom(runtimeScene.getObjects("MainChar"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.lerp((( gdjs.Rope_32ExampleCode.GDFollowObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDFollowObjects1[0].getPointX("")), (( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointX("")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.lerp((( gdjs.Rope_32ExampleCode.GDFollowObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDFollowObjects1[0].getPointY("")), (( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointY("")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
{ //Subevents
gdjs.Rope_32ExampleCode.eventsList0x6b24cc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Rope_32ExampleCode.eventsList0x6f309c
gdjs.Rope_32ExampleCode.eventsList0x6f350c = function(runtimeScene) {

}; //End of gdjs.Rope_32ExampleCode.eventsList0x6f350c
gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects2Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects2});gdjs.Rope_32ExampleCode.eventsList0x6bc3cc = function(runtimeScene) {

{

gdjs.Rope_32ExampleCode.GDMainCharObjects2.createFrom(runtimeScene.getObjects("MainChar"));
gdjs.Rope_32ExampleCode.GDSwingBoxObjects2.createFrom(runtimeScene.getObjects("SwingBox"));

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickNearestObject(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects2Objects, (( gdjs.Rope_32ExampleCode.GDMainCharObjects2.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects2[0].getPointX("")), (( gdjs.Rope_32ExampleCode.GDMainCharObjects2.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects2[0].getPointY("")), false);
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Rope_32ExampleCode.GDMainCharObjects2 */
/* Reuse gdjs.Rope_32ExampleCode.GDSwingBoxObjects2 */
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects2.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects2[i].setOpacity(250);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Rope_32ExampleCode.GDMainCharObjects2.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects2[0] : null), (gdjs.Rope_32ExampleCode.GDSwingBoxObjects2.length !== 0 ? gdjs.Rope_32ExampleCode.GDSwingBoxObjects2[0] : null));
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects2.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects2[i].getBehavior("Physics2Behavior").addDistanceJoint((gdjs.Rope_32ExampleCode.GDSwingBoxObjects2[i].getPointX("Swing")), (gdjs.Rope_32ExampleCode.GDSwingBoxObjects2[i].getPointY("Swing")), (gdjs.Rope_32ExampleCode.GDMainCharObjects2.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects2[0] : null), (( gdjs.Rope_32ExampleCode.GDMainCharObjects2.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects2[0].getPointX("")), (( gdjs.Rope_32ExampleCode.GDMainCharObjects2.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects2[0].getPointY("")), -(1), 0, 1, false, runtimeScene.getVariables().getFromIndex(5));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.Rope_32ExampleCode.eventsList0x6bc3cc
gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects1});gdjs.Rope_32ExampleCode.eventsList0x688b8c = function(runtimeScene) {

{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Rope_32ExampleCode.eventsList0x6bc3cc(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Rope_32ExampleCode.GDMainCharObjects1.createFrom(runtimeScene.getObjects("MainChar"));
gdjs.Rope_32ExampleCode.GDRopeObjects1.createFrom(runtimeScene.getObjects("Rope"));
gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.createFrom(runtimeScene.getObjects("SwingBox"));
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects, (gdjs.Rope_32ExampleCode.GDMainCharObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects1[0] : null));
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDRopeObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDRopeObjects1[i].drawLine((( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointX("")), (( gdjs.Rope_32ExampleCode.GDMainCharObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDMainCharObjects1[0].getPointY("")), (( gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[0].getPointX("Swing")), (( gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length === 0 ) ? 0 :gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[0].getPointY("Swing")), 3);
}
}}

}


}; //End of gdjs.Rope_32ExampleCode.eventsList0x688b8c
gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects = Hashtable.newFrom({"SwingBox": gdjs.Rope_32ExampleCode.GDSwingBoxObjects1});gdjs.Rope_32ExampleCode.eventsList0x6f3ddc = function(runtimeScene) {

{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
gdjs.Rope_32ExampleCode.condition1IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.Rope_32ExampleCode.condition0IsTrue_0.val ) {
{
gdjs.Rope_32ExampleCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Rope_32ExampleCode.condition1IsTrue_0.val) {
gdjs.Rope_32ExampleCode.GDMainCharObjects1.createFrom(runtimeScene.getObjects("MainChar"));
gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.createFrom(runtimeScene.getObjects("SwingBox"));
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDSwingBoxObjects1Objects, (gdjs.Rope_32ExampleCode.GDMainCharObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects1[0] : null));
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[i].getBehavior("Physics2Behavior").removeJoint(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}
}{gdjs.evtTools.linkedObjects.removeLinkBetween(runtimeScene, (gdjs.Rope_32ExampleCode.GDMainCharObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects1[0] : null), (gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDSwingBoxObjects1[0] : null));
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


}; //End of gdjs.Rope_32ExampleCode.eventsList0x6f3ddc
gdjs.Rope_32ExampleCode.eventsList0x6f445c = function(runtimeScene) {

{


{
gdjs.Rope_32ExampleCode.GDMainCharObjects1.createFrom(runtimeScene.getObjects("MainChar"));
gdjs.Rope_32ExampleCode.GDMainShaowObjects1.createFrom(runtimeScene.getObjects("MainShaow"));
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDMainShaowObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDMainShaowObjects1[i].putAroundObject((gdjs.Rope_32ExampleCode.GDMainCharObjects1.length !== 0 ? gdjs.Rope_32ExampleCode.GDMainCharObjects1[0] : null), 20, 45);
}
}}

}


}; //End of gdjs.Rope_32ExampleCode.eventsList0x6f445c
gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDMainCharObjects1Objects = Hashtable.newFrom({"MainChar": gdjs.Rope_32ExampleCode.GDMainCharObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.Rope_32ExampleCode.GDPlatformObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDMainCharObjects1Objects = Hashtable.newFrom({"MainChar": gdjs.Rope_32ExampleCode.GDMainCharObjects1});gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDFinishObjects1Objects = Hashtable.newFrom({"Finish": gdjs.Rope_32ExampleCode.GDFinishObjects1});gdjs.Rope_32ExampleCode.eventsList0x5b71c8 = function(runtimeScene) {

{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
gdjs.Rope_32ExampleCode.GDMainCharObjects1.createFrom(runtimeScene.getObjects("MainChar"));
{runtimeScene.getVariables().getFromIndex(3).setNumber(0.05);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDMainCharObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").applyImpulse(0.2, 0, (gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getPointX("")), (gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getPointY("")));
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber(0.001);
}}

}


{


gdjs.Rope_32ExampleCode.eventsList0x6f309c(runtimeScene);
}


{


gdjs.Rope_32ExampleCode.eventsList0x6f350c(runtimeScene);
}


{


gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Rope_32ExampleCode.eventsList0x688b8c(runtimeScene);} //End of subevents
}

}


{


gdjs.Rope_32ExampleCode.eventsList0x6f3ddc(runtimeScene);
}


{


gdjs.Rope_32ExampleCode.eventsList0x6f445c(runtimeScene);
}


{



}


{

gdjs.Rope_32ExampleCode.GDMainCharObjects1.createFrom(runtimeScene.getObjects("MainChar"));
gdjs.Rope_32ExampleCode.GDPlatformObjects1.createFrom(runtimeScene.getObjects("Platform"));

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
gdjs.Rope_32ExampleCode.condition1IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDMainCharObjects1Objects, "Physics2Behavior", gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDPlatformObjects1Objects, false);
}if ( gdjs.Rope_32ExampleCode.condition0IsTrue_0.val ) {
{
{gdjs.Rope_32ExampleCode.conditionTrue_1 = gdjs.Rope_32ExampleCode.condition1IsTrue_0;
gdjs.Rope_32ExampleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7292740);
}
}}
if (gdjs.Rope_32ExampleCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Rope_32ExampleCode.GDMainCharObjects1 */
{for(var i = 0, len = gdjs.Rope_32ExampleCode.GDMainCharObjects1.length ;i < len;++i) {
    gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").applyImpulse((gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").getLinearVelocityX()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)), (gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").getLinearVelocityY()) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)), (gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getPointX("")), (gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getPointY("")));
}
}}

}


{



}


{

gdjs.Rope_32ExampleCode.GDMainCharObjects1.createFrom(runtimeScene.getObjects("MainChar"));

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Rope_32ExampleCode.GDMainCharObjects1.length;i<l;++i) {
    if ( gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getBehavior("Physics2Behavior").getLinearVelocityLength() < 0.0001 ) {
        gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = true;
        gdjs.Rope_32ExampleCode.GDMainCharObjects1[k] = gdjs.Rope_32ExampleCode.GDMainCharObjects1[i];
        ++k;
    }
}
gdjs.Rope_32ExampleCode.GDMainCharObjects1.length = k;}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rope Example", false);
}}

}


{



}


{

gdjs.Rope_32ExampleCode.GDMainCharObjects1.createFrom(runtimeScene.getObjects("MainChar"));

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Rope_32ExampleCode.GDMainCharObjects1.length;i<l;++i) {
    if ( gdjs.Rope_32ExampleCode.GDMainCharObjects1[i].getY() > 2200 ) {
        gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = true;
        gdjs.Rope_32ExampleCode.GDMainCharObjects1[k] = gdjs.Rope_32ExampleCode.GDMainCharObjects1[i];
        ++k;
    }
}
gdjs.Rope_32ExampleCode.GDMainCharObjects1.length = k;}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rope Example", false);
}}

}


{



}


{

gdjs.Rope_32ExampleCode.GDFinishObjects1.createFrom(runtimeScene.getObjects("Finish"));
gdjs.Rope_32ExampleCode.GDMainCharObjects1.createFrom(runtimeScene.getObjects("MainChar"));

gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = false;
{
gdjs.Rope_32ExampleCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDMainCharObjects1Objects, gdjs.Rope_32ExampleCode.mapOfGDgdjs_46Rope_9532ExampleCode_46GDFinishObjects1Objects, false, runtimeScene, false);
}if (gdjs.Rope_32ExampleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


}; //End of gdjs.Rope_32ExampleCode.eventsList0x5b71c8


gdjs.Rope_32ExampleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Rope_32ExampleCode.GDSwingBoxObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDSwingBoxObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDSwingBoxObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDMainCharObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDMainCharObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDMainCharObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDRopeObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDRopeObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDRopeObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDFollowObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDFollowObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDFollowObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDPlatformObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDPlatformObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDPlatformObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDFinishObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDFinishObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDFinishObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDBackgroundObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDBackgroundObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDBackgroundObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDMainShaowObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDMainShaowObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDMainShaowObjects3.length = 0;
gdjs.Rope_32ExampleCode.GDBoundsLineObjects1.length = 0;
gdjs.Rope_32ExampleCode.GDBoundsLineObjects2.length = 0;
gdjs.Rope_32ExampleCode.GDBoundsLineObjects3.length = 0;

gdjs.Rope_32ExampleCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['Rope_32ExampleCode'] = gdjs.Rope_32ExampleCode;
