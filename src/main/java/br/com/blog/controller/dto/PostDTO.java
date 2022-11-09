package br.com.pokemon.controller.dto;

import br.com.pokemon.entity.Post;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PostDTO {


    private String author;
    private String title;
    private String content;

    public Post toDomain(){
        return Post.builder()
                .content(this.getContent())
                .title(this.getTitle())
                .author(this.getAuthor())
                .date(LocalDate.now())
                .build();
    }

}


