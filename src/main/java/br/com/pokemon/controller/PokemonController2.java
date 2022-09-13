package br.com.pokemon.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PokemonController2 {
    @GetMapping("/pokemon2")
    public ResponseEntity<String> getPokemon() {
        return ResponseEntity.ok().body("pokemon");
    }
}
