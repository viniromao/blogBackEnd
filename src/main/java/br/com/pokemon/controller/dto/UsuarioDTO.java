package br.com.pokemon.controller.dto;

import br.com.pokemon.entity.Perfil;
import br.com.pokemon.entity.Usuario;
import lombok.Data;

@Data
public class UsuarioDTO {

    private String nome;
    private String email;
    private CharSequence senha;
    private Perfil perfil;

    public Usuario toDomain(){
    return Usuario.builder()
            .nome(this.getNome())
            .email(this.getEmail())
            .senha(this.getSenha().toString())
            .build();

    }
}
