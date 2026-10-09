/**
 * ==============================================================================
 * iKOREX CINEMATIC 3D CORPORATE MOTION GRAPHICS TEMPLATE BUILDER
 * Adobe After Effects ExtendScript (.jsx)
 * ==============================================================================
 * 
 * Target Application: Adobe After Effects CC 2020 through CC 2025+
 * Output: Modular, Fully Customizable 24-Second Commercial Master Project (.aep)
 * 
 * Specifications:
 * - Resolution: 1920 x 1080 (Full HD, 16:9)
 * - Frame Rate: 30 FPS
 * - Total Duration: 24.0 Seconds (720 Frames)
 * - Color Space: 32-bpc Float / Rec.709
 * 
 * Project Structure Generated:
 * ├── 00_RENDER_ME
 * │   └── _MAIN_COMP_1080p_24s
 * ├── 01_SCENES
 * │   ├── Scene_01_LogoReveal (00:00 - 04:00)
 * │   ├── Scene_02_GlobalPresence (04:00 - 08:00)
 * │   ├── Scene_03_PeopleInnovation (08:00 - 12:00)
 * │   ├── Scene_04_SmartSolutions (12:00 - 16:00)
 * │   ├── Scene_05_GrowthImpact (16:00 - 20:00)
 * │   └── Scene_06_FinalEndCard (20:00 - 24:00)
 * ├── 02_CUSTOMIZE_HERE
 * │   ├── EDIT_LOGO_HERE
 * │   ├── EDIT_TITLES_HERE
 * │   └── EDIT_COLORS_CONTROLS
 * └── 03_ASSETS_AND_AUDIO
 * ==============================================================================
 */

(function createCinematicPromoProject() {
    app.beginUndoGroup("Build iKOREX 3D Cinematic Promo Template");

    // Master Constants
    var COMP_WIDTH = 1920;
    var COMP_HEIGHT = 1080;
    var COMP_PIXEL_ASPECT = 1.0;
    var COMP_FPS = 30;
    var TOTAL_DURATION = 24.0; // 24 seconds
    var SCENE_DURATION = 4.0;  // 4 seconds per scene

    // Brand Palette in Normalized RGB (0.0 to 1.0)
    var COLOR_DEEP_BLUE      = [10/255, 61/255, 145/255];     // #0A3D91
    var COLOR_ELECTRIC_BLUE  = [0/255, 168/255, 255/255];    // #00A8FF
    var COLOR_WHITE          = [245/255, 247/255, 250/255];  // #F5F7FA
    var COLOR_CHARCOAL_BLACK = [26/255, 26/255, 26/255];     // #1A1A1A
    var COLOR_METALLIC_SILVER= [176/255, 190/255, 196/255];  // #B0BEC4
    var COLOR_CYAN_ACCENT    = [0/255, 255/255, 200/255];    // #00FFC8

    var proj = app.project;
    if (!proj) {
        proj = app.newProject();
    }

    // Helper: Create Project Folder
    function createFolder(name, parentFolder) {
        var folder = proj.items.addFolder(name);
        if (parentFolder) {
            folder.parentFolder = parentFolder;
        }
        return folder;
    }

    var folderRender   = createFolder("00_RENDER_ME");
    var folderScenes   = createFolder("01_SCENES");
    var folderCustom   = createFolder("02_CUSTOMIZE_HERE");
    var folderAssets   = createFolder("03_ASSETS_AND_AUDIO");

    // ==========================================================================
    // 1. GLOBAL CONTROLLER COMPOSITION
    // ==========================================================================
    var ctrlComp = proj.items.addComp("EDIT_COLORS_CONTROLS", 500, 500, 1.0, TOTAL_DURATION, COMP_FPS);
    ctrlComp.parentFolder = folderCustom;
    var ctrlNull = ctrlComp.layers.addNull();
    ctrlNull.name = "GLOBAL_PALETTE_CONTROLS";

    var deepBlueFx = ctrlNull.property("Effects").addProperty("ADBE Color Control");
    deepBlueFx.name = "Deep Blue (#0A3D91)";
    deepBlueFx.property("Color").setValue([10/255, 61/255, 145/255, 1]);

    var elecBlueFx = ctrlNull.property("Effects").addProperty("ADBE Color Control");
    elecBlueFx.name = "Electric Blue (#00A8FF)";
    elecBlueFx.property("Color").setValue([0, 168/255, 1, 1]);

    var silverFx = ctrlNull.property("Effects").addProperty("ADBE Color Control");
    silverFx.name = "Metallic Silver (#B0BEC4)";
    silverFx.property("Color").setValue([176/255, 190/255, 196/255, 1]);

    // ==========================================================================
    // 2. LOGO PLACEHOLDER COMPOSITION
    // ==========================================================================
    var logoComp = proj.items.addComp("EDIT_LOGO_HERE", 800, 800, 1.0, TOTAL_DURATION, COMP_FPS);
    logoComp.parentFolder = folderCustom;
    
    // Default Procedural Vector Chevron Logo
    var logoShape = logoComp.layers.addShape();
    logoShape.name = "iKOREX_Vector_Emblem";
    var logoGroup = logoShape.property("Contents").addProperty("ADBE Group");
    var logoPath = logoGroup.property("Contents").addProperty("ADBE Vector Shape - Group");
    var myShape = new Shape();
    myShape.vertices = [[-160, -180], [180, 0], [-60, 0], [-160, -80]];
    myShape.closed = true;
    logoPath.property("Path").setValue(myShape);

    var logoFill = logoGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
    logoFill.property("Color").setValue([0, 168/255, 1, 1]);

    // ==========================================================================
    // 3. INDIVIDUAL SCENE GENERATION
    // ==========================================================================

    // Helper: Add 3D Camera Rig
    function addCameraRig(comp, name, startZ, endZ) {
        var cam = comp.layers.addCamera(name + "_Cam", [COMP_WIDTH/2, COMP_HEIGHT/2]);
        cam.property("Position").setValue([COMP_WIDTH/2, COMP_HEIGHT/2, startZ]);
        cam.property("Position").setValueAtTime(0, [COMP_WIDTH/2, COMP_HEIGHT/2, startZ]);
        cam.property("Position").setValueAtTime(SCENE_DURATION, [COMP_WIDTH/2, COMP_HEIGHT/2, endZ]);
        
        var light = comp.layers.addLight(name + "_KeyLight", [COMP_WIDTH/2 - 300, COMP_HEIGHT/2 - 400]);
        light.lightType = LightType.POINT;
        light.property("Color").setValue([0, 168/255, 1]);
        light.property("Intensity").setValue(140);
        light.property("Position").setValue([COMP_WIDTH/2 - 400, COMP_HEIGHT/2 - 300, -600]);

        var fillLight = comp.layers.addLight(name + "_FillLight", [COMP_WIDTH/2 + 500, COMP_HEIGHT/2 + 400]);
        fillLight.lightType = LightType.POINT;
        fillLight.property("Color").setValue([10/255, 61/255, 145/255]);
        fillLight.property("Intensity").setValue(90);
        fillLight.property("Position").setValue([COMP_WIDTH/2 + 600, COMP_HEIGHT/2 + 400, -300]);

        return cam;
    }

    // Helper: Add Background Gradient Solid
    function addAtmosphericBackground(comp) {
        var bg = comp.layers.addSolid(COLOR_CHARCOAL_BLACK, "Atmospheric_Navy_BG", COMP_WIDTH, COMP_HEIGHT, 1.0);
        var ramp = bg.property("Effects").addProperty("ADBE Ramp");
        ramp.property("Start of Ramp").setValue([COMP_WIDTH/2, 0]);
        ramp.property("Start Color").setValue([10/255, 35/255, 80/255]);
        ramp.property("End of Ramp").setValue([COMP_WIDTH/2, COMP_HEIGHT]);
        ramp.property("End Color").setValue([5/255, 10/255, 22/255]);
        ramp.property("Ramp Shape").setValue(2); // Radial Ramp
        return bg;
    }

    // Helper: Add Cinematic Headline Text
    function addCinematicHeadline(comp, textString, subTextString) {
        var textLayer = comp.layers.addText(textString);
        textLayer.name = "Headline: " + textString;
        var textProp = textLayer.property("Source Text");
        var textDoc = textProp.value;
        textDoc.font = "Montserrat-Bold";
        textDoc.fontSize = 58;
        textDoc.applyFill = true;
        textDoc.fillColor = COLOR_WHITE;
        textDoc.tracking = 180;
        textDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
        textProp.setValue(textDoc);

        textLayer.property("Position").setValue([COMP_WIDTH/2, COMP_HEIGHT - 180]);
        textLayer.property("Opacity").setValueAtTime(0.3, 0);
        textLayer.property("Opacity").setValueAtTime(1.1, 100);
        textLayer.property("Opacity").setValueAtTime(3.4, 100);
        textLayer.property("Opacity").setValueAtTime(3.9, 0);

        if (subTextString) {
            var subLayer = comp.layers.addText(subTextString);
            subLayer.name = "Subtext: " + subTextString;
            var subDoc = subLayer.property("Source Text").value;
            subDoc.font = "Montserrat-Medium";
            subDoc.fontSize = 24;
            subDoc.fillColor = COLOR_ELECTRIC_BLUE;
            subDoc.tracking = 260;
            subDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
            subLayer.property("Source Text").setValue(subDoc);

            subLayer.property("Position").setValue([COMP_WIDTH/2, COMP_HEIGHT - 120]);
            subLayer.property("Opacity").setValueAtTime(0.6, 0);
            subLayer.property("Opacity").setValueAtTime(1.3, 100);
            subLayer.property("Opacity").setValueAtTime(3.4, 100);
            subLayer.property("Opacity").setValueAtTime(3.9, 0);
        }
        return textLayer;
    }

    // --- SCENE 1: Cinematic Logo Reveal (0–4s) ---
    var sc1 = proj.items.addComp("Scene_01_LogoReveal", COMP_WIDTH, COMP_HEIGHT, 1.0, SCENE_DURATION, COMP_FPS);
    sc1.parentFolder = folderScenes;
    addAtmosphericBackground(sc1);
    addCameraRig(sc1, "Sc1", -1800, -1100);

    var sc1Logo = sc1.layers.add(logoComp);
    sc1Logo.threeDLayer = true;
    sc1Logo.property("Position").setValue([COMP_WIDTH/2, COMP_HEIGHT/2 - 50, 0]);
    sc1Logo.property("Scale").setValueAtTime(0, [70, 70, 70]);
    sc1Logo.property("Scale").setValueAtTime(SCENE_DURATION, [92, 92, 92]);
    sc1Logo.property("Y Rotation").setValueAtTime(0, -65);
    sc1Logo.property("Y Rotation").setValueAtTime(2.8, 0);
    sc1Logo.property("Opacity").setValueAtTime(0.2, 0);
    sc1Logo.property("Opacity").setValueAtTime(1.2, 100);

    addCinematicHeadline(sc1, "INNOVATION STARTS HERE", "ENTERPRISE PROCESS AUTOMATION");

    // --- SCENE 2: Global Presence (4–8s) ---
    var sc2 = proj.items.addComp("Scene_02_GlobalPresence", COMP_WIDTH, COMP_HEIGHT, 1.0, SCENE_DURATION, COMP_FPS);
    sc2.parentFolder = folderScenes;
    addAtmosphericBackground(sc2);
    addCameraRig(sc2, "Sc2", -1600, -1250);

    // 3D Digital Globe Null & Ring
    var globeNull = sc2.layers.addNull();
    globeNull.name = "3D_Digital_Globe_Matrix";
    globeNull.threeDLayer = true;
    globeNull.property("Position").setValue([COMP_WIDTH/2, COMP_HEIGHT/2 - 40, 0]);
    globeNull.property("Y Rotation").setValueAtTime(0, 0);
    globeNull.property("Y Rotation").setValueAtTime(SCENE_DURATION, 120);

    // Orbital Ring Layer
    var ringSolid = sc2.layers.addSolid([0, 0, 0], "Orbit_Ring_Guide", 600, 600, 1.0);
    ringSolid.threeDLayer = true;
    ringSolid.parent = globeNull;
    ringSolid.property("Position").setValue([0, 0, 0]);
    ringSolid.property("X Rotation").setValue(75);
    var circleMask = ringSolid.property("Masks").addProperty("ADBE Mask Atom");
    var maskShape = new Shape();
    maskShape.vertices = [[0, 300], [300, 0], [600, 300], [300, 600]];
    maskShape.closed = true;
    circleMask.property("Mask Path").setValue(maskShape);

    addCinematicHeadline(sc2, "A WORLD OF POSSIBILITIES", "CONNECTED OPERATIONAL INTELLIGENCE");

    // --- SCENE 3: People and Innovation (8–12s) ---
    var sc3 = proj.items.addComp("Scene_03_PeopleInnovation", COMP_WIDTH, COMP_HEIGHT, 1.0, SCENE_DURATION, COMP_FPS);
    sc3.parentFolder = folderScenes;
    addAtmosphericBackground(sc3);
    addCameraRig(sc3, "Sc3", -1500, -1150);

    // Glass Architecture Plate 1
    var glassPlate1 = sc3.layers.addSolid(COLOR_DEEP_BLUE, "Glass_Plate_01", 700, 440, 1.0);
    glassPlate1.threeDLayer = true;
    glassPlate1.property("Position").setValue([COMP_WIDTH/2 - 180, COMP_HEIGHT/2 - 40, 150]);
    glassPlate1.property("Y Rotation").setValue(-18);
    glassPlate1.property("Opacity").setValue(45);

    // Glass Architecture Plate 2 (Foreground)
    var glassPlate2 = sc3.layers.addSolid(COLOR_ELECTRIC_BLUE, "Glass_Plate_02", 650, 400, 1.0);
    glassPlate2.threeDLayer = true;
    glassPlate2.property("Position").setValue([COMP_WIDTH/2 + 220, COMP_HEIGHT/2 - 10, -80]);
    glassPlate2.property("Y Rotation").setValue(15);
    glassPlate2.property("Opacity").setValue(35);

    addCinematicHeadline(sc3, "BUILT ON TRUST. DRIVEN BY INNOVATION.", "CHARTERED ACCOUNTANTS & SYSTEM ARCHITECTS");

    // --- SCENE 4: Smart Solutions (12–16s) ---
    var sc4 = proj.items.addComp("Scene_04_SmartSolutions", COMP_WIDTH, COMP_HEIGHT, 1.0, SCENE_DURATION, COMP_FPS);
    sc4.parentFolder = folderScenes;
    addAtmosphericBackground(sc4);
    addCameraRig(sc4, "Sc4", -1700, -1200);

    // 3D Isometric Pedestal
    var pedestal = sc4.layers.addSolid(COLOR_METALLIC_SILVER, "3D_Tech_Platform", 520, 520, 1.0);
    pedestal.threeDLayer = true;
    pedestal.property("Position").setValue([COMP_WIDTH/2, COMP_HEIGHT/2 + 100, 200]);
    pedestal.property("X Rotation").setValue(65);
    pedestal.property("Z Rotation").setValueAtTime(0, 0);
    pedestal.property("Z Rotation").setValueAtTime(SCENE_DURATION, 45);

    addCinematicHeadline(sc4, "SMART SOLUTIONS. REAL RESULTS.", "AI-POWERED 3-WAY MATCH & WORKFLOW AUTOMATION");

    // --- SCENE 5: Growth and Impact (16–20s) ---
    var sc5 = proj.items.addComp("Scene_05_GrowthImpact", COMP_WIDTH, COMP_HEIGHT, 1.0, SCENE_DURATION, COMP_FPS);
    sc5.parentFolder = folderScenes;
    addAtmosphericBackground(sc5);
    addCameraRig(sc5, "Sc5", -1800, -1100);

    // Volumetric Warm Horizon Blend
    var warmGlow = sc5.layers.addSolid([255/255, 140/255, 40/255], "Golden_Horizon_Warmth", COMP_WIDTH, COMP_HEIGHT, 1.0);
    warmGlow.property("Opacity").setValue(18);
    var glowRamp = warmGlow.property("Effects").addProperty("ADBE Ramp");
    glowRamp.property("Start of Ramp").setValue([COMP_WIDTH/2, COMP_HEIGHT/2 + 50]);
    glowRamp.property("Start Color").setValue([255/255, 120/255, 20/255]);
    glowRamp.property("End Color").setValue([0, 0, 0]);

    addCinematicHeadline(sc5, "BUILDING A BRIGHTER TOMORROW", "QUALITY \u2022 PERFORMANCE \u2022 RELIABILITY");

    // --- SCENE 6: Final Brand End Card (20–24s) ---
    var sc6 = proj.items.addComp("Scene_06_FinalEndCard", COMP_WIDTH, COMP_HEIGHT, 1.0, SCENE_DURATION, COMP_FPS);
    sc6.parentFolder = folderScenes;
    addAtmosphericBackground(sc6);

    // Centered Hero Logo
    var endLogo = sc6.layers.add(logoComp);
    endLogo.property("Position").setValue([COMP_WIDTH/2, COMP_HEIGHT/2 - 120]);
    endLogo.property("Scale").setValueAtTime(0, [80, 80]);
    endLogo.property("Scale").setValueAtTime(SCENE_DURATION, [95, 95]);
    endLogo.property("Opacity").setValueAtTime(0, 0);
    endLogo.property("Opacity").setValueAtTime(0.8, 100);

    // Brand Name Text
    var brandName = sc6.layers.addText("iKOREX");
    brandName.name = "Brand_Name_iKOREX";
    var bDoc = brandName.property("Source Text").value;
    bDoc.font = "Montserrat-Black";
    bDoc.fontSize = 72;
    bDoc.fillColor = COLOR_WHITE;
    bDoc.tracking = 240;
    bDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
    brandName.property("Source Text").setValue(bDoc);
    brandName.property("Position").setValue([COMP_WIDTH/2, COMP_HEIGHT/2 + 30]);

    // Tagline Text
    var tagText = sc6.layers.addText("Your Vision. Our Commitment.");
    tagText.name = "Tagline";
    var tDoc = tagText.property("Source Text").value;
    tDoc.font = "Montserrat-Medium";
    tDoc.fontSize = 24;
    tDoc.fillColor = COLOR_ELECTRIC_BLUE;
    tDoc.tracking = 160;
    tDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
    tagText.property("Source Text").setValue(tDoc);
    tagText.property("Position").setValue([COMP_WIDTH/2, COMP_HEIGHT/2 + 85]);

    // URL & Call to Action
    var urlText = sc6.layers.addText("www.ikorex.com.au  \u2022  CONTACT US TODAY");
    urlText.name = "URL_and_CTA";
    var uDoc = urlText.property("Source Text").value;
    uDoc.font = "Montserrat-SemiBold";
    uDoc.fontSize = 18;
    uDoc.fillColor = COLOR_METALLIC_SILVER;
    uDoc.tracking = 220;
    uDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
    urlText.property("Source Text").setValue(uDoc);
    urlText.property("Position").setValue([COMP_WIDTH/2, COMP_HEIGHT/2 + 140]);

    // Fade to Black at the end
    var blackOut = sc6.layers.addSolid([0, 0, 0], "Cinematic_Fade_To_Black", COMP_WIDTH, COMP_HEIGHT, 1.0);
    blackOut.property("Opacity").setValueAtTime(3.2, 0);
    blackOut.property("Opacity").setValueAtTime(3.9, 100);

    // ==========================================================================
    // 4. MASTER COMPOSITION ASSEMBLY (24.0 Seconds)
    // ==========================================================================
    var mainComp = proj.items.addComp("_MAIN_COMP_1080p_24s", COMP_WIDTH, COMP_HEIGHT, 1.0, TOTAL_DURATION, COMP_FPS);
    mainComp.parentFolder = folderRender;

    var scenes = [sc1, sc2, sc3, sc4, sc5, sc6];
    for (var i = 0; i < scenes.length; i++) {
        var sceneLayer = mainComp.layers.add(scenes[i]);
        var startTime = i * SCENE_DURATION;
        sceneLayer.startTime = startTime;
        sceneLayer.inPoint = startTime;
        sceneLayer.outPoint = startTime + SCENE_DURATION;

        // Subtle cross-dissolve opacity transition between scenes
        if (i > 0) {
            sceneLayer.property("Opacity").setValueAtTime(startTime, 0);
            sceneLayer.property("Opacity").setValueAtTime(startTime + 0.35, 100);
        }
    }

    // Audio SFX Track Placeholder
    var audioSolid = mainComp.layers.addSolid([0, 0, 0], "AUDIO_STEMS_PLACEHOLDER (Audio_Resolve_24s.wav)", 100, 100, 1.0);
    audioSolid.enabled = false;
    audioSolid.comment = "Replace with 'Corporate_Cinematic_Audio_Bed_24s.wav'";

    app.endUndoGroup();

    alert(
        "iKOREX Cinematic 3D Promo Template Generated Successfully!\n\n" +
        "• Master Comp: _MAIN_COMP_1080p_24s (24 Seconds @ 30 FPS)\n" +
        "• 6 Modular 3D Scene Precomps\n" +
        "• Fully Editable Text, Logo, and Color Palettes in '02_CUSTOMIZE_HERE'\n" +
        "• Ready for Preview & Media Encoder Export."
    );
})();
