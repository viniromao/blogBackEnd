package br.com.blog.controller;

import br.com.blog.config.security.PerfilService;
import br.com.blog.controller.dto.PerfilDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/perfil")
public class PerfilController {
    @Autowired
    private PerfilService perfilService;

    @PostMapping
    private ResponseEntity<Void> savePerfil(@RequestBody PerfilDTO perfilDTO) {
        perfilService.save(perfilDTO.toDomain());
        return ResponseEntity.ok().build();
    }
}
