package br.com.pokemon.controller;

import br.com.pokemon.controller.dto.PostDTO;
import br.com.pokemon.modelo.Post;
import br.com.pokemon.repository.PostRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/post")
public class PostController {

    @Autowired
    PostRespository postRespository;

    @RequestMapping("/post")
    public List<PostDTO> lista() {
        List<Post> topicos = postRespository.findAll();
        return null;
    }

}
