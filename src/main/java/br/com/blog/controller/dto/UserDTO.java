package br.com.blog.controller.dto;

import br.com.blog.entity.Perfil;
import br.com.blog.entity.User;
import lombok.Data;

@Data
public class UsuarioDTO {

    private String nome;
    private String email;
    private CharSequence senha;
    private Perfil perfil;

    public User toDomain() {
        return User.builder()
                .nome(this.getNome())
                .email(this.getEmail())
                .senha(this.getSenha().toString())
                .build();

    }
}
