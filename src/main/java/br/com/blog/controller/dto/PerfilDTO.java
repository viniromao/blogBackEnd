package br.com.blog.controller.dto;

import br.com.blog.entity.Perfil;
import lombok.Data;

@Data
public class PerfilDTO {

    private String nome;

    public Perfil toDomain() {
        return Perfil.builder()
                .nome(this.getNome())
                .build();
    }

}
