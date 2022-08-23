package br.com.pokemon.service;

import br.com.pokemon.entity.Post;
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

    public  void findAll(){postRespository.findAll();}

    public void delete(Post post){postRespository.delete(post);}


}