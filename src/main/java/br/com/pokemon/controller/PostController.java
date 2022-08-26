package br.com.pokemon.controller;

import br.com.pokemon.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/post")
public class PostController {


    @Autowired
    private PostService postService;


}
