package br.com.pokemon.service;

import br.com.pokemon.modelo.Post;
import br.com.pokemon.repository.PostRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    PostRespository postRespository;

    public void save(Post post){
        postRespository.save(post);
    }

}
