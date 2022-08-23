package br.com.pokemon.controller.dto;

import javax.persistence.Column;
import javax.persistence.Id;
import java.time.LocalDate;

public class PostDTO {

	@Id
	@Column(name = "id", nullable = false)
	private Long id;
	private String author;
	private String Title;
	private String content;
	private LocalDate date;

	public PostDTO(String author, String title, String content, LocalDate date) {
		this.author = author;
		Title = title;
		this.content = content;
		this.date = date;
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

}
