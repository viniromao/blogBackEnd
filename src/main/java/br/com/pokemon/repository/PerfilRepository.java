package br.com.pokemon.repository;

import br.com.pokemon.entity.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerfilRepository extends JpaRepository<Perfil, Long>{
    Perfil findByNome(String nome);
}
