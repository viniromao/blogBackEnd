package br.com.blog.config.security;

import br.com.blog.entity.Perfil;
import br.com.blog.repository.PerfilRepository;
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
