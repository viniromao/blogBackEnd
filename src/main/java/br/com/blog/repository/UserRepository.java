package br.com.blog.repository;

import br.com.blog.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    List<User> findByEmailOrNome(String email, String nome);

    List<User> findByNome(String nome);


    Optional<User> findByEmailAndSenha(String email, String senha);
}
