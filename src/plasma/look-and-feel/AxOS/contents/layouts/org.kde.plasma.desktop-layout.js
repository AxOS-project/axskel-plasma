var panel = new Panel
panel.location = "bottom"
panel.hiding = "none"
panel.height = 51
panel.alignment = "center"
panel.floating = 1
panel.lengthMode = "custom"
const width = screenGeometry(panel.screen).width
panel.maximumLength = Number(width)*(.88)
panel.minimumLength  = panel.maximumLength

panel_start = panel.addWidget("org.kde.plasma.kickoff")
panel_start.currentConfigGroup = ["General"]
panel_start.writeConfig("icon", "deepin-launcher")

panel.addWidget("zayron.simple.separator")
panel.addWidget("org.kde.plasma.panelspacer")
panel.addWidget("org.kde.plasma.icontasks")
panel.addWidget("org.kde.plasma.panelspacer")
panel.addWidget("zayron.simple.separator")

/*systemtray*/
var systraprev = panel.addWidget("org.kde.plasma.systemtray")
var SystrayContainmentId = systraprev.readConfig("SystrayContainmentId")
const systray = desktopById(SystrayContainmentId)
systray.currentConfigGroup = ["General"]
let ListTrays = systray.readConfig("extraItems")
systray.writeConfig("iconSpacing", 1)
systray.writeConfig("hiddenItems", "Notificador de Discover_org.kde.DiscoverNotifier")

panel_clock = panel.addWidget("org.kde.plasma.digitalclock")
panel_clock.currentConfigGroup = ["Appearance"]
panel_clock.writeConfig("fontSize", "12")
panel_clock.writeConfig("autoFontAndSize", "false")
panel_clock.writeConfig("showDate", "false");
panel_clock.writeConfig("showDay", "false");
panel_clock.writeConfig("displayEvents", "false");
panel_clock.writeConfig("showSeconds", "false");
panel_clock.writeConfig("timeFormat", "hh:mm");

/*Buttons of aurorae*/
Buttons = ConfigFile("kwinrc")
Buttons.group = "org.kde.kdecoration2"
Buttons.writeEntry("ButtonsOnRight", "XAI")
Buttons.writeEntry("ButtonsOnLeft", "0")

/* accent color config*/
ColorAccetFile = ConfigFile("kdeglobals")
ColorAccetFile.group = "General"
ColorAccetFile.writeEntry("accentColorFromWallpaper", "false")
ColorAccetFile.deleteEntry("AccentColor")
ColorAccetFile.deleteEntry("LastUsedCustomAccentColor")
