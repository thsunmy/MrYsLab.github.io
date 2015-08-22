/**
 * Created by afy on 8/17/15.
 */
(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.motorControl = function() {
        // Code that gets executed when the block is run
    };

    ext.ledControl= function() {

    };

    ext.getPushButton= function() {

    };

    ext.lineFollower= function() {

    };

    ext.bump = function() {

    };

    ext.axis = function() {

    };

    ext.encoder = function() {

    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Set %m.motor motor %m.operation', 'motorControl', 'Left', 'Forward'],
            [' ', 'LED %m.ledState', 'ledCcontrol' ,'On'],
            [' ', 'Play Tone  %n Hz  %n ms', 'playTone', '1000', '500'],
            ['r', 'Push Button', 'getPushButton'],
            ['r', 'Line Follower m.lineFollower', 'lineFollower'],
            ['r', '%m.bumper Bump', 'bump'],
            ['r', 'Accelerometer Axis: %m.axis', 'accel', 'X'],
            ['r', 'Encoder Tick Count', 'encoder']
        ],
        menus: {
            motor: ['Left', 'Right'],
            operation: ['Forward', 'Reverse', 'Coast', 'Brake'],
            ledState: ['On', 'Off'],
            lineFollower: ['1', '2', '3'],
            bumper: ['Left', 'Right, Accelerometer'],
            axis: ['X', 'Y', 'Z']
        },
        url: 'http://scratchx.org/?url=http://MrYsLab.github.io/rb4s'
    };

    // Register the extension
    ScratchExtensions.register('RedBot For Scratch', descriptor, ext);
})({});
