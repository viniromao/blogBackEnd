package br.com.pokemon.controller.dto;

import br.com.pokemon.modelo.Perfil;
import lombok.Data;

@Data
public class PerfilDTO {

    private String nome;

    public Perfil toDomain(){
        return Perfil.builder()
                .nome(this.getNome())
                .build();
    }

}
