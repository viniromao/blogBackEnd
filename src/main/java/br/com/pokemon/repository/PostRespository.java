package br.com.pokemon.repository;

import br.com.pokemon.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRespository extends JpaRepository<Post, Integer> {

}
