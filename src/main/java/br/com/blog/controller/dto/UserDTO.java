package br.com.blog.controller.dto;

import br.com.blog.entity.Perfil;
import br.com.blog.entity.User;
import lombok.Data;
import lombok.NonNull;

@Data
public class UserDTO {

    @NonNull
    private String username;
    @NonNull
    private String email;
    @NonNull
    private CharSequence senha;
    private Perfil perfil;

    public User toDomain() {
        return User.builder()
                .nome(this.getUsername())
                .email(this.getEmail())
                .senha(this.getSenha().toString())
                .build();

    }
}
