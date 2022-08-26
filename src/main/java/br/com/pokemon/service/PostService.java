package br.com.pokemon.service;

import br.com.pokemon.entity.Post;
import br.com.pokemon.repository.PostRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PostService {

    List<Post> findAll();

    void save(Post post);

    void delete(Post post);

    void save(String Title,
              String author,
              int id);


}