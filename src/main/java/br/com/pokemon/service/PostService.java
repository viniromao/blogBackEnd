package br.com.pokemon.service;

import br.com.pokemon.entity.Post;
import br.com.pokemon.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public Post save(Post post){
        return postRepository.save(post);
    }

    public  List<Post> findAll(){
        return postRepository.findAll();
    }

    public void delete(Post post){
        postRepository.delete(post);}

    public Post update(Post post){
       return postRepository.save(post);
    }

    public Post findOne(Long id){
        return postRepository.findById(id).get();
    }


}