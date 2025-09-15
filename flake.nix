{
  description = "Rusalka nix flake and build system";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    templ.url = "github:a-h/templ";
    alejandra.url = "github:kamadorueda/alejandra/3.1.0";
    alejandra.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs @ {
    self,
    nixpkgs,
    templ,
    alejandra,
    ...
  }: let
    systems = ["x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin"];
    forAllSystems = f:
      nixpkgs.lib.genAttrs systems (
        system: let
          pkgs = import nixpkgs {inherit system;};
          templPkg = templ.packages.${system}.templ;
        in
          f {inherit system pkgs templPkg;}
      );
  in {
    # devShells must be keyed by system
    devShells = forAllSystems ({
      system,
      pkgs,
      templPkg,
    }: {
      default = import ./shell.nix {
        inherit pkgs system alejandra;
        templ = templPkg; # pass the actual package, not a function
      };
    });

    # `nix fmt` uses your pinned alejandra
    formatter = nixpkgs.lib.genAttrs systems (
      system:
        alejandra.packages.${system}.default
    );
  };
}
