package br.com.pokemon.controller;

import br.com.pokemon.controller.dto.PostDTO;
import br.com.pokemon.modelo.Post;
import br.com.pokemon.repository.PostRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    PostRespository postRespository;

    @PostMapping
    public ResponseEntity<List<Post>> lista() {
        List<Post> topicos = postRespository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(topicos);
    }

}
