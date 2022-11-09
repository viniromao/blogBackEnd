package br.com.pokemon.controller.dto;

import br.com.pokemon.entity.Post;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@Builder
public class PostPutDTO {

    private Long id;

    @NotNull @NotEmpty
    private String title;

    @NotNull @NotEmpty
    private String content;

    private String author;

    public Post toDomain(){
        return Post.builder()
                .title(this.getTitle())
                .content(this.getContent())
                .id(this.getId())
                .author(this.getAuthor())
                .date(LocalDate.now())
                .build();
    }

}
