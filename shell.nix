let
  pkgs = import <nixpkgs> {};
in
pkgs.mkShellNoCC {
  packages = with pkgs; [
     git
     nodejs
   

     python311
     nixd
     nil
  ];
}
