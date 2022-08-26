package br.com.pokemon.controller;

import br.com.pokemon.config.security.TokenService;
import br.com.pokemon.controller.dto.UsuarioDTO;
import br.com.pokemon.entity.Perfil;
import br.com.pokemon.entity.Usuario;
import br.com.pokemon.repository.PerfilRepository;
import br.com.pokemon.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private PerfilRepository perfilRepository;

    @PostMapping
    public ResponseEntity<String> autenticar(@RequestBody @Valid UsuarioDTO usuarioDTO) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Perfil perfil = perfilRepository.findByNome(usuarioDTO.getNome());
        Usuario usuario = usuarioDTO.toDomain();
        usuario.setPerfil(perfil);
        usuario.setSenha(encoder.encode(usuarioDTO.getSenha()));
        usuarioRepository.save(usuario);
        return ResponseEntity.ok().body("pokemon");
    }

    @GetMapping("/pokemon")
    public ResponseEntity<String> getPokemon() {
        return ResponseEntity.ok().body("pokemon");
    }

    @GetMapping("/usuario")
    public ResponseEntity<Usuario> getUsuario(@RequestHeader String email) {
        return ResponseEntity.ok().body(usuarioRepository.findByEmail(email).get());
    }
}
