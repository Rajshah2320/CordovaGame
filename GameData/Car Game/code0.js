gdjs.SceneCode = {};
gdjs.SceneCode.GDBtnLeftObjects1_1final = [];

gdjs.SceneCode.GDBtnRightObjects1_1final = [];

gdjs.SceneCode.GDCarObjects1= [];
gdjs.SceneCode.GDCarObjects2= [];
gdjs.SceneCode.GDCarObjects3= [];
gdjs.SceneCode.GDTireObjects1= [];
gdjs.SceneCode.GDTireObjects2= [];
gdjs.SceneCode.GDTireObjects3= [];
gdjs.SceneCode.GDGroundObjects1= [];
gdjs.SceneCode.GDGroundObjects2= [];
gdjs.SceneCode.GDGroundObjects3= [];
gdjs.SceneCode.GDDebugObjects1= [];
gdjs.SceneCode.GDDebugObjects2= [];
gdjs.SceneCode.GDDebugObjects3= [];
gdjs.SceneCode.GDBtnLeftObjects1= [];
gdjs.SceneCode.GDBtnLeftObjects2= [];
gdjs.SceneCode.GDBtnLeftObjects3= [];
gdjs.SceneCode.GDBtnRightObjects1= [];
gdjs.SceneCode.GDBtnRightObjects2= [];
gdjs.SceneCode.GDBtnRightObjects3= [];
gdjs.SceneCode.GDMessageObjects1= [];
gdjs.SceneCode.GDMessageObjects2= [];
gdjs.SceneCode.GDMessageObjects3= [];

gdjs.SceneCode.conditionTrue_0 = {val:false};
gdjs.SceneCode.condition0IsTrue_0 = {val:false};
gdjs.SceneCode.condition1IsTrue_0 = {val:false};
gdjs.SceneCode.condition2IsTrue_0 = {val:false};
gdjs.SceneCode.conditionTrue_1 = {val:false};
gdjs.SceneCode.condition0IsTrue_1 = {val:false};
gdjs.SceneCode.condition1IsTrue_1 = {val:false};
gdjs.SceneCode.condition2IsTrue_1 = {val:false};


gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDBtnRightObjects2Objects = Hashtable.newFrom({"BtnRight": gdjs.SceneCode.GDBtnRightObjects2});gdjs.SceneCode.eventsList0x6b39a4 = function(runtimeScene) {

{

gdjs.SceneCode.GDTireObjects2.createFrom(gdjs.SceneCode.GDTireObjects1);


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDTireObjects2.length;i<l;++i) {
    if ( gdjs.SceneCode.GDTireObjects2[i].getBehavior("Physics2").getAngularVelocity() == 0 ) {
        gdjs.SceneCode.condition0IsTrue_0.val = true;
        gdjs.SceneCode.GDTireObjects2[k] = gdjs.SceneCode.GDTireObjects2[i];
        ++k;
    }
}
gdjs.SceneCode.GDTireObjects2.length = k;}if (gdjs.SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SceneCode.GDTireObjects2 */
{for(var i = 0, len = gdjs.SceneCode.GDTireObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDTireObjects2[i].getBehavior("Physics2").setAngularVelocity(-(0.0001));
}
}}

}


{

/* Reuse gdjs.SceneCode.GDTireObjects1 */

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDTireObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDTireObjects1[i].getBehavior("Physics2").getAngularVelocity() < -(160) ) {
        gdjs.SceneCode.condition0IsTrue_0.val = true;
        gdjs.SceneCode.GDTireObjects1[k] = gdjs.SceneCode.GDTireObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDTireObjects1.length = k;}if (gdjs.SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SceneCode.GDTireObjects1 */
{for(var i = 0, len = gdjs.SceneCode.GDTireObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTireObjects1[i].getBehavior("Physics2").setAngularVelocity(-(160));
}
}}

}


}; //End of gdjs.SceneCode.eventsList0x6b39a4
gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDBtnLeftObjects2Objects = Hashtable.newFrom({"BtnLeft": gdjs.SceneCode.GDBtnLeftObjects2});gdjs.SceneCode.eventsList0x6b347c = function(runtimeScene) {

{

gdjs.SceneCode.GDTireObjects2.createFrom(gdjs.SceneCode.GDTireObjects1);


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDTireObjects2.length;i<l;++i) {
    if ( gdjs.SceneCode.GDTireObjects2[i].getBehavior("Physics2").getAngularVelocity() > 5500 ) {
        gdjs.SceneCode.condition0IsTrue_0.val = true;
        gdjs.SceneCode.GDTireObjects2[k] = gdjs.SceneCode.GDTireObjects2[i];
        ++k;
    }
}
gdjs.SceneCode.GDTireObjects2.length = k;}if (gdjs.SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SceneCode.GDTireObjects2 */
{for(var i = 0, len = gdjs.SceneCode.GDTireObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDTireObjects2[i].getBehavior("Physics2").setAngularVelocity(5500);
}
}}

}


{

/* Reuse gdjs.SceneCode.GDTireObjects1 */

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDTireObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDTireObjects1[i].getBehavior("Physics2").getAngularVelocity() == 0 ) {
        gdjs.SceneCode.condition0IsTrue_0.val = true;
        gdjs.SceneCode.GDTireObjects1[k] = gdjs.SceneCode.GDTireObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDTireObjects1.length = k;}if (gdjs.SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SceneCode.GDTireObjects1 */
{for(var i = 0, len = gdjs.SceneCode.GDTireObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTireObjects1[i].getBehavior("Physics2").setAngularVelocity(0.0001);
}
}}

}


}; //End of gdjs.SceneCode.eventsList0x6b347c
gdjs.SceneCode.eventsList0x5b71c8 = function(runtimeScene) {

{



}


{



}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.SceneCode.GDCarObjects1.createFrom(runtimeScene.getObjects("Car"));
gdjs.SceneCode.GDTireObjects1.createFrom(runtimeScene.getObjects("Tire"));
{for(var i = 0, len = gdjs.SceneCode.GDTireObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTireObjects1[i].getBehavior("Physics2").addRevoluteJointBetweenTwoBodies((gdjs.SceneCode.GDTireObjects1[i].getPointX("Centre")), (gdjs.SceneCode.GDTireObjects1[i].getPointY("Centre")), (gdjs.SceneCode.GDCarObjects1.length !== 0 ? gdjs.SceneCode.GDCarObjects1[0] : null), (gdjs.SceneCode.GDTireObjects1[i].getPointX("Centre")), (gdjs.SceneCode.GDTireObjects1[i].getPointY("Centre")), false, 0, 0, 0, false, 0, 0, false, gdjs.VariablesContainer.badVariable);
}
}}

}


{



}


{

gdjs.SceneCode.GDBtnRightObjects1.length = 0;


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition0IsTrue_0;
gdjs.SceneCode.GDBtnRightObjects1_1final.length = 0;gdjs.SceneCode.condition0IsTrue_1.val = false;
gdjs.SceneCode.condition1IsTrue_1.val = false;
{
gdjs.SceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.SceneCode.condition0IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.GDBtnRightObjects2.createFrom(runtimeScene.getObjects("BtnRight"));
gdjs.SceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDBtnRightObjects2Objects, runtimeScene, true, false);
if( gdjs.SceneCode.condition1IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.SceneCode.GDBtnRightObjects2.length;j<jLen;++j) {
        if ( gdjs.SceneCode.GDBtnRightObjects1_1final.indexOf(gdjs.SceneCode.GDBtnRightObjects2[j]) === -1 )
            gdjs.SceneCode.GDBtnRightObjects1_1final.push(gdjs.SceneCode.GDBtnRightObjects2[j]);
    }
}
}
{
gdjs.SceneCode.GDBtnRightObjects1.createFrom(gdjs.SceneCode.GDBtnRightObjects1_1final);
}
}
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.SceneCode.GDTireObjects1.createFrom(runtimeScene.getObjects("Tire"));
{for(var i = 0, len = gdjs.SceneCode.GDTireObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTireObjects1[i].getBehavior("Physics2").applyTorque(-(30) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{ //Subevents
gdjs.SceneCode.eventsList0x6b39a4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.SceneCode.GDBtnLeftObjects1.length = 0;


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition0IsTrue_0;
gdjs.SceneCode.GDBtnLeftObjects1_1final.length = 0;gdjs.SceneCode.condition0IsTrue_1.val = false;
gdjs.SceneCode.condition1IsTrue_1.val = false;
{
gdjs.SceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.SceneCode.condition0IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.GDBtnLeftObjects2.createFrom(runtimeScene.getObjects("BtnLeft"));
gdjs.SceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDBtnLeftObjects2Objects, runtimeScene, true, false);
if( gdjs.SceneCode.condition1IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.SceneCode.GDBtnLeftObjects2.length;j<jLen;++j) {
        if ( gdjs.SceneCode.GDBtnLeftObjects1_1final.indexOf(gdjs.SceneCode.GDBtnLeftObjects2[j]) === -1 )
            gdjs.SceneCode.GDBtnLeftObjects1_1final.push(gdjs.SceneCode.GDBtnLeftObjects2[j]);
    }
}
}
{
gdjs.SceneCode.GDBtnLeftObjects1.createFrom(gdjs.SceneCode.GDBtnLeftObjects1_1final);
}
}
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.SceneCode.GDTireObjects1.createFrom(runtimeScene.getObjects("Tire"));
{for(var i = 0, len = gdjs.SceneCode.GDTireObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTireObjects1[i].getBehavior("Physics2").applyTorque(35 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{ //Subevents
gdjs.SceneCode.eventsList0x6b347c(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.SceneCode.GDCarObjects1.createFrom(runtimeScene.getObjects("Car"));
gdjs.SceneCode.GDDebugObjects1.createFrom(runtimeScene.getObjects("Debug"));
gdjs.SceneCode.GDTireObjects1.createFrom(runtimeScene.getObjects("Tire"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.SceneCode.GDCarObjects1.length !== 0 ? gdjs.SceneCode.GDCarObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.SceneCode.GDDebugObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDDebugObjects1[i].setString(gdjs.evtTools.common.toString(Math.round((( gdjs.SceneCode.GDTireObjects1.length === 0 ) ? 0 :gdjs.SceneCode.GDTireObjects1[0].getBehavior("Physics2").getAngularVelocity()))));
}
}}

}


{



}


{

gdjs.SceneCode.GDCarObjects1.createFrom(runtimeScene.getObjects("Car"));

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDCarObjects1[i].getY() > 1200 ) {
        gdjs.SceneCode.condition0IsTrue_0.val = true;
        gdjs.SceneCode.GDCarObjects1[k] = gdjs.SceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDCarObjects1.length = k;}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", false);
}}

}


}; //End of gdjs.SceneCode.eventsList0x5b71c8


gdjs.SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SceneCode.GDCarObjects1.length = 0;
gdjs.SceneCode.GDCarObjects2.length = 0;
gdjs.SceneCode.GDCarObjects3.length = 0;
gdjs.SceneCode.GDTireObjects1.length = 0;
gdjs.SceneCode.GDTireObjects2.length = 0;
gdjs.SceneCode.GDTireObjects3.length = 0;
gdjs.SceneCode.GDGroundObjects1.length = 0;
gdjs.SceneCode.GDGroundObjects2.length = 0;
gdjs.SceneCode.GDGroundObjects3.length = 0;
gdjs.SceneCode.GDDebugObjects1.length = 0;
gdjs.SceneCode.GDDebugObjects2.length = 0;
gdjs.SceneCode.GDDebugObjects3.length = 0;
gdjs.SceneCode.GDBtnLeftObjects1.length = 0;
gdjs.SceneCode.GDBtnLeftObjects2.length = 0;
gdjs.SceneCode.GDBtnLeftObjects3.length = 0;
gdjs.SceneCode.GDBtnRightObjects1.length = 0;
gdjs.SceneCode.GDBtnRightObjects2.length = 0;
gdjs.SceneCode.GDBtnRightObjects3.length = 0;
gdjs.SceneCode.GDMessageObjects1.length = 0;
gdjs.SceneCode.GDMessageObjects2.length = 0;
gdjs.SceneCode.GDMessageObjects3.length = 0;

gdjs.SceneCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['SceneCode'] = gdjs.SceneCode;
