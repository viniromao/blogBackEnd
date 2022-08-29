package br.com.pokemon.service;

import br.com.pokemon.entity.Post;

import java.util.List;

public interface PostService {

    List<Post> findAll();

    Post findOne(int getId);

    void save(Post post);

    void delete(Post post);

    void save(String Title,
              String author,
              int id);


}