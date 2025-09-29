{
  pkgs ? import <nixpkgs> {},
  system ? builtins.currentSystem,
  templ,
  alejandra,
}:
pkgs.mkShell {
  name = "default";

  buildInputs = with pkgs; [
    # go stuff
    go
    gopls
    gotools
    templ
    sqlc
    (go-migrate.overrideAttrs
      (oldAttrs: {
        tags = ["postgres"];
      }))
    air
    postgresql_17

    # nix stuff
    nixd
    (alejandra.packages.${system}.default)

    # js stuff
    nodejs_22
    corepack
    pnpm
    nodePackages.typescript
    nodePackages.typescript-language-server
    prettier
    eslint
    tailwindcss
    tailwindcss-language-server

    figlet
  ];

  shellHook = ''
    echo "Let's get crackin'" | figlet -w $(tput cols) -c
    zsh
  '';
}
