package br.com.pokemon.repository;

import br.com.pokemon.entity.Post;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface PostRepository extends JpaRepository<Post, Long> {
        List<Post> findByTitle(@Param(value = "title") String title);
}
