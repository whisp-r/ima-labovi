let
  pkgs = import <nixpkgs> { };

in
pkgs.mkShellNoCC {
  packages = with pkgs; [
    git
    nodejs

    python311
    nixd
    nil
    # androidenv.androidPkgs.androidsdk
    # steam-run
  ];

  # ANDROID_HOME = "${pkgs.androidenv.androidPkgs.androidsdk}/libexec/android-sdk";
  # ANDROID_NDK_ROOT = "${ANDROID_HOME}/ndk-bundle";
}
