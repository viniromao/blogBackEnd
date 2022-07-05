package br.com.pokemon.controller;

import br.com.pokemon.config.security.TokenService;
import br.com.pokemon.controller.dto.TokenDto;
import br.com.pokemon.controller.form.LoginForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private TokenService tokenService;

    @GetMapping
    public ResponseEntity<String> autenticar(@RequestBody @Valid LoginForm form) {
      return ResponseEntity.ok().body("pokemon");
    }

}