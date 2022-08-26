package br.com.pokemon.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Post {

    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    @Column
    private String author;
    @Column
    private String Title;
    @Column
    private String content;
    private LocalDate date = LocalDate.now();

    //private List<String> comentaries;

    public Post() {
    }

    public Post(String author, String title, String content) {
        this.author = author;
        Title = title;
        this.content = content;
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
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
