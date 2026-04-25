{ pkgs, ... }:

{
  android = {
    enable = true;
    reactNative.enable = true;
    # emulator.enable = true;
    # android-studio.enable = true;
  };
}
