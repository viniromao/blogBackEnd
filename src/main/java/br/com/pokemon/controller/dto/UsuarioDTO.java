package br.com.pokemon.controller.dto;

import br.com.pokemon.modelo.Perfil;
import br.com.pokemon.modelo.Usuario;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
