package br.com.pokemon.modelo;

import br.com.pokemon.repository.BlogRespository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Post {

    @Autowired
    BlogRespository blogRespository;

    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    private String author;
    private String Title;
    private String substance;
    private LocalDate date;

    public Post() {
    }

    public Post(String author, String title, String substance) {
        this.author = author;
        Title = title;
        this.substance = substance;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getSubstance() {
        return substance;
    }

    public void setSubstance(String substance) {
        this.substance = substance;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
