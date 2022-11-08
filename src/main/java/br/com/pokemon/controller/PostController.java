package br.com.pokemon.controller;

import br.com.pokemon.controller.dto.DeletePostDTO;
import br.com.pokemon.controller.dto.PostDTO;
import br.com.pokemon.controller.dto.PostPutDTO;
import br.com.pokemon.entity.Post;
import br.com.pokemon.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService postService;

    @DeleteMapping
    public void delete(@RequestBody DeletePostDTO deletePostDTO){
        Post post = postService.findOne(deletePostDTO.getId());
        postService.delete(post);
    }

    @GetMapping
    public String getAllPosts(){
        return "deu certo";
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable Long id){
        return postService.findOne(id);
    }

    @GetMapping("/{title}")
    public List<Post> findByRole(@RequestParam(value="title") String title){
        return postService.findByTitle(title);
    }

    @PostMapping
    public ResponseEntity<Post> inserirBlogPost(@RequestBody PostDTO postDTO){
        return ResponseEntity.ok(postService.save(postDTO.toDomain()));
    }

    @PutMapping
    public ResponseEntity<Post> atualizar(@RequestBody PostPutDTO postPutDTO){

        return ResponseEntity.ok(postService.update(postPutDTO.toDomain()));
    }



}
