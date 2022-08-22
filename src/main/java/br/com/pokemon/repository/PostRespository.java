package br.com.pokemon.repository;

import br.com.pokemon.modelo.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRespository extends JpaRepository<Post, Integer> {

}
