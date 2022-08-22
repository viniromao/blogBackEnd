package br.com.pokemon.repository;

import br.com.pokemon.modelo.Perfil;
import br.com.pokemon.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PerfilRepository extends JpaRepository<Perfil, Long>{
    Perfil findByNome(String nome);
}
