package br.com.pokemon.config.security;

import br.com.pokemon.modelo.Perfil;
import br.com.pokemon.repository.PerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PerfilService {
    @Autowired
    private PerfilRepository perfilRepository;

    public void save(Perfil perfil){
        perfilRepository.save(perfil);
    }
}
